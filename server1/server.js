require('dotenv').config()
const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const axios = require('axios');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });
const token=process.env.APPLICATION_TOKEN;
app.use(cors());
app.use(express.json());

const connections = new Map();

wss.on('connection', (ws) => {
  const requestId = Math.random().toString(36).substring(7);
  connections.set(requestId, ws);
  
  // Send the requestId to the client immediately after connection
  ws.send(JSON.stringify({ type: 'requestId', requestId }));
  
  // Handle incoming messages from the client
  ws.on('message', async (message) => {
    try {
      const parsedMessage = JSON.parse(message);
      
      if (parsedMessage.type === 'message') {
        // Make the API call directly from the WebSocket connection
        const response = await axios.post(
          'https://api.langflow.astra.datastax.com/lf/5a1fda99-a124-4f01-bcc6-aed69fee92b3/api/v1/run/6e9923e6-b97c-4bc1-9d53-97294114af21?stream=false',
          {
            input_value: parsedMessage.message,
            output_type: 'chat',
            input_type: 'chat',
            tweaks: {
              "ParseData-bU2Lk": {},
              "SplitText-s45X9": {},
              "OpenAIModel-Bunci": {},
              "ChatOutput-8sI0F": {},
              "AstraDB-66x6b": {},
              "File-j3YRd": {},
              "ChatInput-iAwEu": {},
              "CombineText-1kBZ6": {},
              "TextInput-upHmt": {}
            }
          },
          {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token} `
            }
          }
        );

        // Send the response back through WebSocket
        const responseMessage = response.data.outputs[0].outputs[0].results.message.text;
        ws.send(JSON.stringify({ type: 'response', message: responseMessage }));
      }
    } catch (error) {
      ws.send(JSON.stringify({ type: 'error', message: error.message }));
    }
  });

  ws.on('close', () => {
    connections.delete(requestId);
  });
});

// Simple health check endpoint
app.get('/', (req, res) => {
  res.send('WebSocket server is running');
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});