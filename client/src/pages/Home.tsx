import React, { useState } from 'react';
import { BarChart2, Users, Zap, MessageCircle, Lightbulb, Github, Linkedin, Mail, ArrowRight, Star, Award } from 'lucide-react';
import { HeroSection } from '../components/home/HeroSection';
import { ChartsSection } from '../components/charts/ChartsSection';

// Team members and features arrays remain the same
const teamMembers = [
  {
    name: "Shashank Singh",
    role: "Full Stack Developer",
    description: "Specializes in building scalable web applications using React, Node.js, and cloud technologies. Expert in system architecture and performance optimization.",
    icon: <Users className="w-6 h-6 text-blue-600" />,
    social: {
      github: "https://github.com",
      linkedin: "https://www.linkedin.com/in/shashank-singh-584860280/",
      email: "shashanksgh3@gmail.com"
    }
  },
  {
    name: "Sushant Tiwari",
    role: "Langflow Engineer",
    description: "Expert in natural language processing and LangFlow implementation. Focuses on building intelligent conversation systems and AI integrations.",
    icon: <Users className="w-6 h-6 text-purple-600" />,
    social: {
      github: "https://github.com",
      linkedin: "https://www.linkedin.com/in/sushant-tiwari-b9619128a/",
      email: "mailto:sushant@example.com"
    }
  },
  {
    name: "Vaibhav Sharma",
    role: "Data Analyst",
    description: "Skilled in data visualization, statistical analysis, and business intelligence. Transforms complex data into actionable insights.",
    icon: <Users className="w-6 h-6 text-emerald-600" />,
    social: {
      github: "https://github.com",
      linkedin: "https://www.linkedin.com/in/vaibhav-sharma-b658a728a/",
      email: "mailto:vaibhav@example.com"
    }
  },
  {
    name: "Nishant Raj",
    role: "UI/UX Designer",
    description: "Creative designer focused on user-centered design principles. Expertise in creating intuitive and engaging digital experiences.",
    icon: <Users className="w-6 h-6 text-indigo-600" />,
    social: {
      github: "https://github.com",
      linkedin: "https://www.linkedin.com/in/nishant-raj-742105295/",
      email: "mailto:nishant@example.com"
    }
  }
];
const features = [
  {
    icon: <BarChart2 className="w-8 h-8" />,
    title: "Advanced Analytics",
    description: "Get detailed insights into your social media performance with comprehensive analytics and real-time monitoring.",
    gradient: "from-blue-500 to-blue-600",
    lightGradient: "from-blue-50 to-blue-100"
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Audience Insights",
    description: "Understand your audience better with in-depth demographic analysis and behavioral patterns tracking.",
    gradient: "from-green-500 to-green-600",
    lightGradient: "from-green-50 to-green-100"
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "AI-Powered Insights",
    description: "Leverage advanced AI algorithms to receive intelligent recommendations for your content strategy optimization.",
    gradient: "from-purple-500 to-purple-600",
    lightGradient: "from-purple-50 to-purple-100"
  },
  {
    icon: <MessageCircle className="w-8 h-8" />,
    title: "GPT Integration",
    description: "Enhance user engagement with state-of-the-art GPT-powered conversational AI for intelligent interactions.",
    gradient: "from-indigo-500 to-indigo-600",
    lightGradient: "from-indigo-50 to-indigo-100"
  },
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: "AI Suggestions",
    description: "Receive smart, contextual suggestions to optimize your workflows and improve productivity seamlessly.",
    gradient: "from-yellow-500 to-yellow-600",
    lightGradient: "from-yellow-50 to-yellow-100"
  }
];

export function Home() {
  const [activeFeature, setActiveFeature] = useState(0);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">      
      <div id="hero">
        <HeroSection />
      </div>
      
      <ChartsSection />

      {/* Features Section with Animation */}
      <section id="features" className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white opacity-70" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Star className="w-6 h-6 text-yellow-400" />
              <span className="text-sm font-semibold text-gray-600 uppercase tracking-wider">Innovation at its finest</span>
            </div>
            <h2 className="text-5xl font-extrabold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our comprehensive suite of tools designed to revolutionize your social media analytics experience
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() => setActiveFeature(index)}
              >
                <div className="relative bg-white rounded-3xl shadow-lg overflow-hidden transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-500"/>
                  <div className="p-6">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${feature.lightGradient} flex items-center justify-center mb-4 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                      <div className={`text-gradient bg-gradient-to-r ${feature.gradient}`}>
                        {feature.icon}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {feature.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed mb-4">
                      {feature.description}
                    </p>

                    <div className="flex items-center text-sm text-blue-600 font-semibold">
                      <span className="mr-2">{feature.stats}</span>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section with Modern Cards */}
      <section id="team" className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Award className="w-6 h-6 text-purple-600" />
              <span className="text-sm font-semibold text-gray-600 uppercase tracking-wider">The Dream Team</span>
            </div>
            <h2 className="text-5xl font-extrabold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A talented group of innovators working together to push the boundaries of what's possible
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-3xl shadow-lg overflow-hidden transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>
                <div className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center mb-4 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                      {member.icon}
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {member.name}
                    </h3>
                    
                    <p className="text-blue-600 font-semibold mb-3">
                      {member.role}
                    </p>
                    
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                      {member.description}
                    </p>

                    {member.skills && (
                      <div className="flex flex-wrap gap-2 mb-4 justify-center">
                        {member.skills.map((skill, i) => (
                          <span key={i} className="px-3 py-1 text-xs font-medium text-blue-600 bg-blue-50 rounded-full">
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="flex space-x-4">
                      <a 
                        href={member.social.github}
                        className="text-gray-600 hover:text-blue-600 transition-colors p-2 hover:bg-blue-50 rounded-full"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                      <a 
                        href={member.social.linkedin}
                        className="text-gray-600 hover:text-blue-600 transition-colors p-2 hover:bg-blue-50 rounded-full"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                      <a 
                        href={`mailto:${member.social.email}`}
                        className="text-gray-600 hover:text-blue-600 transition-colors p-2 hover:bg-blue-50 rounded-full"
                      >
                        <Mail className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}