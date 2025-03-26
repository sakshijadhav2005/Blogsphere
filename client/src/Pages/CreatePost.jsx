
import Navbar from "../Components/Navbar";
import React, { useState, useEffect } from "react";
import { fetchUserPosts, updatePost, deletePost , createPost} from "../services/api"; // ✅ Import API functions}; // Import new functions

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [fetching, setFetching] = useState(false);
  const [editMode, setEditMode] = useState(null); // Track post being edited

  // Fetch posts when component mounts
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      fetchAllPosts();
    }
  }, []);

  const fetchAllPosts = async () => {
    setFetching(true);
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      if (!user || !user.id) {
        console.error("User not found in localStorage!");
        return;
      }

      console.log("Fetching posts for user ID:", user.id);
      const { data } = await fetchUserPosts(user.id);
      setPosts(data);
    } catch (error) {
      console.error("Error fetching user posts:", error.response?.data || error.message);
    } finally {
      setFetching(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const token = localStorage.getItem("token");
    if (!token) {
      setError("⚠️ You must be logged in to create a post.");
      return;
    }

    if (!title || !content) {
      setError("⚠️ Please fill in all fields.");
      return;
    }

    try {
      setLoading(true);
      if (editMode) {
        // Update existing post
        await updatePost(editMode, { title, content });
        setEditMode(null);
      } else {
        // Create new post
        await createPost({ title, content });
      }

      setTitle("");
      setContent("");
      fetchAllPosts();
    } catch (error) {
      console.error("Error creating/updating post:", error.response?.data || error.message);
      setError(error.response?.data?.message || "❌ Failed to create/update post.");
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (post) => {
    setTitle(post.title);
    setContent(post.content);
    setEditMode(post._id);
  };

  const handleDelete = async (postId) => {
    if (!window.confirm("Are you sure you want to delete this post?")) return;

    try {
      await deletePost(postId);
      console.log("Post deleted successfully!", postId);
       fetchAllPosts();
    } catch (error) {
      console.error("Error deleting post:", error.response?.data || error.message);
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-black via-[#0b1a2b] to-[#0e2a3a] flex flex-col items-center p-8 overflow-hidden relative">
        <div className="w-full max-w-lg p-8 bg-opacity-40 backdrop-blur-xl bg-gray-900 rounded-3xl shadow-2xl border border-gray-700 transition-all duration-300 hover:shadow-blue-500/50 hover:scale-105">
          <h2 className="text-4xl font-extrabold text-center text-white mb-6 tracking-widest bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            <b>{editMode ? "Edit Post ✏️" : "Create a Post ✨"}</b>
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {error && <p className="text-red-500 text-center">{error}</p>}

            <div className="relative group">
              <label htmlFor="title" className="block text-sm font-semibold text-gray-300">
                Title
              </label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-4 py-3 bg-gray-800 text-white border border-gray-700 rounded-xl"
                placeholder="Enter your post title"
              />
            </div>

            <div className="relative group">
              <label htmlFor="content" className="block text-sm font-semibold text-gray-300">
                Content
              </label>
              <textarea
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows="5"
                className="w-full px-4 py-3 bg-gray-800 text-white border border-gray-700 rounded-xl"
                placeholder="Write your post content..."
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 font-semibold rounded-xl focus:outline-none transition-all duration-300 transform hover:scale-110 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 text-white shadow-lg hover:shadow-blue-500/50"
              disabled={loading}
            >
              {loading ? "Submitting..." : editMode ? "Update Post 🔄" : "Submit Post 🚀"}
            </button>
          </form>
        </div>

        <button
          onClick={fetchAllPosts}
          className="mt-8 px-8 py-4 font-semibold rounded-xl focus:outline-none transition-all duration-300 transform hover:scale-110 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 text-white shadow-lg hover:shadow-blue-500/50"
        >
          Refresh Posts 🔄
        </button>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-10 w-full max-w-5xl">
          {fetching ? (
            <div className="flex justify-center items-center w-full">
              <div className="w-16 h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
            </div>
          ) : posts.length > 0 ? (
            posts.map((post) => (
              <div
                key={post._id}
                className="bg-gray-900 bg-opacity-40 backdrop-blur-xl p-6 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-blue-500/50 hover:scale-105 border border-gray-700"
              >
                <h3 className="text-xl font-semibold text-white"><b>Title: </b>{post.title}</h3>
                <p className="text-gray-300 mt-2"><b>Content: </b> {post.content}</p>
                <div className="mt-4 flex justify-between">
                  <button
                    onClick={() => handleEdit(post)}
                    className="px-4 py-2 bg-green-500 rounded-xl text-white hover:bg-green-600"
                  >
                    Edit 📝
                  </button>
                  <button
                    onClick={() => handleDelete(post._id)}
                    className="px-4 py-2 bg-red-500 rounded-xl text-white hover:bg-red-600"
                  >
                    Delete 🗑️
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-400 text-center w-full">No posts available.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default CreatePost;
