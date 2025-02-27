



import React from "react";
import { useNavigate  } from "react-router-dom";
const Home = () => {
  
  const navigate = useNavigate();
  const gotologin = () => {
    navigate("/Login");
  };
  const gotosignup = () => {
    navigate("/Signup");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-[#0b1a2b] to-[#0e2a3a] flex flex-col items-center p-8 overflow-hidden relative">
      {/* Starry Background */}
      <div className="absolute inset-0 z-0 stars"></div>

      {/* Header Section */}
      <header className="text-center mb-16 z-10 relative">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-wide drop-shadow-2xl hover:text-blue-300 transition-all duration-300">
          Welcome to <span className="text-blue-400 ">BlogSphere</span>
        </h1>
        <p className="text-gray-300 mt-4 text-lg max-w-2xl mx-auto opacity-80 hover:opacity-100 transition-opacity duration-300">
          Share your stories, ideas, and inspirations with the world in a beautifully designed space for creators.
        </p>
        
      </header>

      {/* Blog Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl w-full mb-24 z-10 relative">
        {/* Blog Post Card */}
        <div className="bg-gray-900 p-8 rounded-2xl shadow-lg transform transition-transform duration-300 hover:scale-105 hover:bg-gradient-to-br hover:from-blue-800/50  hover:to-black/20 hover:border-blue-400/40 hover:shadow-[0_0_20px_#0c0c0c] neomorphic shadow-purple-300">
          <h2 className="text-xl font-bold text-white mb-3">
            Exploring the Universe of Coding
          </h2>
          <p className="text-gray-300 text-sm mb-6 opacity-70 hover:opacity-100 transition-opacity duration-300">
            Dive into the latest trends in programming, frameworks, and technologies shaping our digital future.
          </p>
          
        </div>

        {/* Another Blog Post Card */}
        <div className="bg-gray-900 p-8  rounded-2xl shadow-lg transform transition-transform duration-300 hover:scale-105 hover:bg-gradient-to-br hover:from-blue-800/50 hover:to-black/20 hover:border-blue-400/40 hover:shadow-[0_0_20px_#0c0c0c]   neomorphic shadow-purple-300">
          <h2 className="text-xl font-bold text-white mb-3">
            Designing with Glassmorphism
          </h2>
          <p className="text-gray-300 text-sm mb-6 opacity-70 hover:opacity-100 transition-opacity duration-300">
            Learn how to create stunning glassmorphic designs with modern CSS techniques.
          </p>
          
        </div>

        {/* Another Blog Post Card */}
        <div className="bg-gray-900 p-8 rounded-2xl shadow-lg transform transition-transform duration-300 hover:scale-105 hover:bg-gradient-to-br hover:from-blue-800/50  hover:to-black/20 hover:border-blue-400/40 hover:shadow-[0_0_20px_#0c0c0c] neomorphic shadow-purple-300">
          <h2 className="text-xl font-bold text-white mb-3" placeholder="write title">
            
          </h2>
          <p className="text-gray-300 text-sm mb-6 opacity-70 hover:opacity-100 transition-opacity duration-300"  placeholder="write here">
                        </p>
          
        </div>
      </div>
      
      {/* Footer Section */}
      <footer className="mt-16 text-center text-gray-400 opacity-80 hover:opacity-100 transition-opacity duration-300">
        <p>© 2025 BlogSphere. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;


