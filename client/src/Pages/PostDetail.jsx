import React, { useState, useEffect } from "react";
import { fetchUserPosts, updatePost, deletePost } from "../services/api"; // ✅ Import API functions

const PostDetail = () => {
  const [posts, setPosts] = useState([]);
  const [fetching, setFetching] = useState(false);
  const [editingPostId, setEditingPostId] = useState(null);
  const [formData, setFormData] = useState({ title: "", content: "" });

  // ✅ Fetch posts when component mounts
  useEffect(() => {
    fetchAllPosts();
  }, []);

  const fetchAllPosts = async () => {
    setFetching(true);
    try {
      const data = await fetchUserPosts();
      setPosts(data);
    } catch (error) {
      console.error("❌ Error fetching posts:", error.response?.data || error.message);
    } finally {
      setFetching(false);
    }
  };

  // ✅ Handle Post Update
  const handleUpdate = async () => {
    if (!editingPostId) return;

    console.log("🔄 Updating Post ID:", editingPostId);
    console.log("📝 Updated Data:", formData);

    try {
      await updatePost(editingPostId, formData);
      setEditingPostId(null);
      setFormData({ title: "", content: "" }); // ✅ Clear form after update
      fetchAllPosts(); // Refresh list
    } catch (error) {
      console.error("❌ Error updating post:", error.response?.data || error.message);
    }
  };

  // ✅ Handle Post Deletion
  const handleDelete = async (postId) => {
    console.log("🗑️ Attempting to delete Post ID:", postId);
  
    try {
      const response = await deletePost(postId);
      console.log("✅ Post deleted successfully:", response.data);
      fetchAllPosts();
    } catch (error) {
      console.error("❌ Error deleting post:", error.response?.data || error.message);
      
      if (error.response?.status === 404) {
        console.warn("⚠️ Post not found! It may have already been deleted.");
      }
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-[#0b1a2b] to-[#0e2a3a] flex flex-col items-center p-8 relative">
      
      {/* ✅ Refresh Button */}
      <button
        onClick={fetchAllPosts}
        className="mt-6 px-6 py-3 font-semibold rounded-xl focus:outline-none transition-all duration-300 transform hover:scale-110 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 text-white shadow-lg hover:shadow-blue-500/50"
      >
        Refresh Posts 🔄
      </button>

      {/* ✅ Display Posts */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-10 w-full max-w-5xl">
        {fetching ? (
          <div className="flex justify-center items-center w-full">
            <div className="w-16 h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
          </div>
        ) : posts.length > 0 ? (
          posts.map((post) => (
            <div
              key={post._id}
              className={`bg-gray-900 bg-opacity-40 backdrop-blur-xl p-6 rounded-2xl shadow-lg transition-all duration-300 ${
                editingPostId === post._id ? "border border-yellow-500" : "hover:shadow-blue-500/50 hover:scale-105 border border-gray-700"
              }`}
            >
              {editingPostId === post._id ? (
                // ✅ Edit Mode: Show Input Fields
                <div className="space-y-3">
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-xl"
                    placeholder="Update Title"
                  />
                  <textarea
                    value={formData.content}
                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                    className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-xl"
                    placeholder="Update Content"
                  />
                  <div className="flex justify-between">
                    <button
                      onClick={handleUpdate}
                      className="px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600"
                    >
                      Save ✅
                    </button>
                    <button
                      onClick={() => setEditingPostId(null)}
                      className="px-4 py-2 bg-gray-500 text-white rounded-lg shadow-md hover:bg-gray-600"
                    >
                      Cancel ❌
                    </button>
                  </div>
                </div>
              ) : (
                // ✅ Normal Mode: Show Post
                <>
                  <h3 className="text-xl font-semibold text-white">{post.title}</h3>
                  <p className="text-gray-300 mt-2">{post.content.slice(0, 100)}...</p>
                  <div className="flex justify-between mt-4">
                    {/* ✅ Edit Button */}
                    <button
                      onClick={() => {
                        setEditingPostId(post._id);
                        setFormData({ title: post.title, content: post.content });
                      }}
                      className="px-4 py-2 bg-yellow-500 text-white rounded-lg shadow-md hover:bg-yellow-600"
                    >
                      Edit 📝
                    </button>
                    {/* ✅ Delete Button */}
                    <button
                      onClick={() => handleDelete(post._id)}
                      className="px-4 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600"
                    >
                      Delete ❌
                    </button>
                  </div>
                </>
              )}
            </div>
          ))
        ) : (
          <p className="text-gray-400 text-center w-full">No posts available.</p>
        )}
      </div>
    </div>
  );
};

export default PostDetail;
