
import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  
  const gotologin = () => {
    navigate("/Login");
  };

  const gotosignup = () => {
    navigate("/Signup");
  };
  const gotoadminsignup = () => {
    navigate("/AdminLogin");
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-[#0b1a2b] to-[#0e2a3a] flex flex-col items-center p-8 overflow-hidden relative">
      {/* Starry Background */}
      <div className="absolute inset-0 z-0 stars"></div>

      {/* Header Section */}
      <header className="text-center mb-16 z-10 relative">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-wide drop-shadow-2xl hover:text-blue-300 transition-all duration-300">
          Welcome to <span className="text-blue-400">BlogSphere</span>
        </h1>
        <p className="text-gray-300 mt-4 text-lg max-w-2xl mx-auto opacity-80 hover:opacity-100 transition-opacity duration-300">
          Share your stories, ideas, and inspirations with the world in a beautifully designed space for creators.
        </p>
      </header>

      {/* Blog Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl w-full mb-12 z-10 relative">
        <div className="bg-gray-900 p-8 rounded-2xl shadow-lg transform transition-transform duration-300 hover:scale-105 hover:bg-gradient-to-br hover:from-blue-800/50  hover:to-black/20 hover:border-blue-400/40 hover:shadow-[0_0_20px_#0c0c0c] neomorphic shadow-purple-300">
          <h2 className="text-xl font-bold text-white mb-3">The Rise of AI: Transforming the Future</h2>
          <p className="text-gray-300 text-sm mb-6 opacity-70 hover:opacity-100 transition-opacity duration-300">
            🚀 Healthcare: AI assists in diagnosing diseases, drug discovery, and robotic surgeries.
            💡 Education: Personalized learning through AI-powered tutors helps students grasp concepts better.
            🛒 E-commerce: AI-driven recommendations enhance shopping experiences.
            🤖 Automation: AI replaces repetitive tasks, boosting efficiency in workplaces.
          </p>
        </div>
        <div className="bg-gray-900 p-8 rounded-2xl shadow-lg transform transition-transform duration-300 hover:scale-105 hover:bg-gradient-to-br hover:from-blue-800/50 hover:to-black/20 hover:border-blue-400/40 hover:shadow-[0_0_20px_#0c0c0c] neomorphic shadow-purple-300">
          <h2 className="text-xl font-bold text-white mb-3">Nature: The Heartbeat of Our Planet</h2>
          <p className="text-gray-300 text-sm mb-6 opacity-70 hover:opacity-100 transition-opacity duration-300">
            🌿 Oxygen & Clean Air: Trees absorb carbon dioxide and provide the oxygen we need to survive.
            💧 Water Cycle: Forests and wetlands help maintain fresh water sources.
            🐾 Biodiversity: Every species, from tiny insects to large predators, plays a role in balancing ecosystems.
            🌎 Climate Regulation: Oceans, forests, and glaciers help control Earth's temperature.
          </p>
        </div>
        <div className="bg-gray-900 p-8 rounded-2xl shadow-lg transform transition-transform duration-300 hover:scale-105 hover:bg-gradient-to-br hover:from-blue-800/50  hover:to-black/20 hover:border-blue-400/40 hover:shadow-[0_0_20px_#0c0c0c] neomorphic shadow-purple-300">
          <h2 className="text-xl font-bold text-white mb-3">Thriving as a Student: A Quick Guide to Success</h2>
          <p className="text-gray-300 text-sm mb-6 opacity-70 hover:opacity-100 transition-opacity duration-300">
            📌 Time Management: Plan your tasks, set deadlines, and avoid procrastination.
            📌 Smart Studying: Use active learning techniques like note-taking, mind maps, and group discussions.
            📌 Networking Matters: Connect with peers, professors, and professionals on LinkedIn.
          </p>
        </div>
      </div>

      {/* Buttons Section */}
      <div className="flex gap-6 z-10 relative">
       
        <button className="px-12 py-4 bg-gradient-to-r from-teal-700 to-purple-500 text-white font-bold rounded-xl shadow-xl transform hover:scale-110 transition duration-500" 
           onClick={gotologin} >
              Login
            </button>
        
         

            
      </div>
      <br></br>
      <div className="flex flex-col md:flex-row items-center bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-blue-400 transition-all duration-300 transform hover:scale-105 max-w-4xl w-full mb-12 neomorphism shadow-purple-300">
        
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold text-white">SAKSHI JADHAV 💕</h3>
          <p className="text-gray-300 text-sm mt-2">
            Passionate about web development, problem-solving, and creating meaningful applications to impact lives positively.
          </p>
        </div>
      </div>
      {/* Footer Section */}
      <footer className="mt-16 text-center text-gray-400 opacity-80 hover:opacity-100 transition-opacity duration-300">
  <p>© 2025 BlogSphere. All rights reserved.</p>
  <p className="mt-2">Developed by <span className="text-white font-semibold">SAKSHI JADHAV</span> | JSPM's Rajarshi Shahu College of Engineering</p>
  <div className="flex justify-center space-x-6 mt-3">
    <a href="https://www.linkedin.com/in/sakshi-jadhav-3b5408337/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-white transition duration-300">
      LinkedIn
    </a>
    <a href="https://github.com/sakshijadhav2005" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition duration-300">
      GitHub
    </a>
  </div>
</footer>
    </div>
  );
};

export default Home;
