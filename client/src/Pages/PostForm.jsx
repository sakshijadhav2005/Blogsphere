


import React, { useState} from "react";
import { createPost } from "../services/api";

const PostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
// ✅ Loading state for fetching posts

  // ✅ Handle form submission to create a post
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!title || !content) {
      setError("⚠️ Please fill in all fields");
      return;
    }

    try {
      setLoading(true);
      await createPost("/posts", { title, content });

      setTitle("");
      setContent("");
    } catch (error) {
      console.error("Error creating post:", error.response?.data || error.message);
      setError("❌ Failed to create post. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // ✅ Fetch all posts from backend when button is clicked

  return (
    <>
      {/* ✅ Page Layout */}
      <div className="min-h-screen bg-gradient-to-br from-black via-[#0b1a2b] to-[#0e2a3a] flex flex-col items-center p-8 overflow-hidden relative">
        
        {/* ✅ Create Post Section */}
        <div className="w-full max-w-lg p-8 bg-opacity-40 backdrop-blur-xl bg-gray-900 rounded-3xl shadow-2xl border border-gray-700 transition-all duration-300 hover:shadow-blue-500/50 hover:scale-105">
          <h2 className="text-4xl font-extrabold text-center text-white mb-6 tracking-widest bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            <b>Create a Post ✨</b>
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* ✅ Error Message */}
            {error && <p className="text-red-500 text-center">{error}</p>}

            {/* ✅ Title Input with Animated Hover Effects */}
            <div className="relative group">
              <label htmlFor="title" className="block text-sm font-semibold text-gray-300">Title</label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-4 py-3 bg-gray-800 text-white border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 transform group-hover:scale-105 group-hover:border-blue-500 group-hover:shadow-lg group-hover:shadow-blue-500/50"
                placeholder="Enter your post title"
              />
            </div>

            {/* ✅ Content Textarea with Animated Hover Effects */}
            <div className="relative group">
              <label htmlFor="content" className="block text-sm font-semibold text-gray-300">Content</label>
              <textarea
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows="5"
                className="w-full px-4 py-3 bg-gray-800 text-white border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 transform group-hover:scale-105 group-hover:border-blue-500 group-hover:shadow-lg group-hover:shadow-blue-500/50"
                placeholder="Write your post content..."
              />
            </div>

            {/* ✅ Submit Button with Glowing Pulse Animation on Hover */}
            <button
              type="submit"
              className={`w-full py-3 font-semibold rounded-xl focus:outline-none transition-all duration-300 transform hover:scale-110 ${
                loading
                  ? "bg-gray-600 cursor-not-allowed"
                  : "bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 text-white shadow-lg animate-pulse hover:shadow-blue-500/50"
              }`}
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit Post 🚀"}
            </button>
          </form>
        </div>

        {/* ✅ Fetch All Posts Button */}
        <button
        
          className="mt-8 px-8 py-4 font-semibold rounded-xl focus:outline-none transition-all duration-300 transform hover:scale-110 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 text-white shadow-lg hover:shadow-blue-500/50"
          disabled={fetching}
        >
          {fetching ? "Fetching Posts..." : "Get All Posts 🚀"}
        </button>

        {/* ✅ Display All Posts Section */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-10 w-full max-w-5xl">
          {fetching ? (
            <div className="flex justify-center items-center w-full">
              <div className="w-16 h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
            </div>
          ) : (
            posts.length > 0 ? (
              posts.map((post) => (
                <div
                  key={post._id}
                  className="bg-gray-900 bg-opacity-40 backdrop-blur-xl p-6 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-blue-500/50 hover:scale-105 border border-gray-700"
                >
                  <h3 className="text-xl font-semibold text-white">{post.title}</h3>
                  <p className="text-gray-300 mt-2">{post.content.slice(0, 100)}...</p>
                  
                </div>
              ))
            ) : (
              <p className="text-gray-400 text-center w-full">No posts available.</p>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default PostForm;
