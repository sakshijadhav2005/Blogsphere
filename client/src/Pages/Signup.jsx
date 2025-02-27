
import React, { useState } from "react";
import { signup } from "../services/api"; // ✅ Import API function
import { useNavigate } from "react-router-dom";
import Login from "../Pages/Login";
const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const { data } = await signup({ name, email, password }); // ✅ Call API
      localStorage.setItem("token", data.token); // ✅ Save JWT token
      navigate("/Login"); // ✅ Redirect to Profile page
    } catch (error) {
      setError(error.response?.data?.message || "Signup failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-[#0b1a2b] to-[#0e2a3a] p-8">
      <div className="w-full max-w-md p-8 bg-opacity-40 backdrop-blur-md bg-gray-900 rounded-3xl shadow-lg border border-gray-700 transition-all duration-300 hover:shadow-blue-500/50 hover:scale-105">
        
        {/* ✅ Animated Title */}
        <h2 className="text-4xl font-extrabold text-center text-white mb-6 tracking-widest bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 text-transparent bg-clip-text">
          Sign Up ✨
        </h2>

        <form onSubmit={handleSignup} className="space-y-6">
          {/* ✅ Name Input with Zoom & Glow Effect */}
          <div className="relative group">
            <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 bg-gray-800 text-white border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300 transform group-hover:scale-105 group-hover:border-green-500 group-hover:shadow-lg group-hover:shadow-green-500/50"
              placeholder="Enter your name"
            />
          </div>

          {/* ✅ Email Input */}
          <div className="relative group">
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-gray-800 text-white border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 transform group-hover:scale-105 group-hover:border-blue-500 group-hover:shadow-lg group-hover:shadow-blue-500/50"
              placeholder="Enter your email"
            />
          </div>

          {/* ✅ Password Input */}
          <div className="relative group">
            <label htmlFor="password" className="block text-sm font-medium text-gray-300">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 bg-gray-800 text-white border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 transform group-hover:scale-105 group-hover:border-purple-500 group-hover:shadow-lg group-hover:shadow-purple-500/50"
              placeholder="Enter your password"
            />
          </div>

          {/* ✅ Error Message */}
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          {/* ✅ Animated Signup Button */}
          <button
            type="submit"
            className={`w-full py-3 font-semibold rounded-xl focus:outline-none transition-all duration-300 transform hover:scale-110 ${
              loading
                ? "bg-gray-600 cursor-not-allowed"
                : "bg-gradient-to-r from-green-500 to-blue-500 hover:from-blue-500 hover:to-green-500 text-white shadow-lg hover:shadow-green-500/50"
            }`}
            disabled={loading}
          >
            {loading ? (
              <span className="flex items-center justify-center space-x-2">
                <svg className="w-5 h-5 animate-spin text-white" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                </svg>
                <span>Signing Up...</span>
              </span>
            ) : (
              "Sign Up 🚀"
            )}
          </button>
        </form>

        {/* ✅ Login Link */}
        <p className="text-center text-gray-400 mt-4">
          Already have an account?{" "}
          <a href="/Login" className="text-blue-400 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
