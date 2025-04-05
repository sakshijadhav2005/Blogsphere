import axios from "axios";

const API = axios.create({
  baseURL: "https://blogspherebackendsakshi/api",
});

// Attach token to requests
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
    
  }                                                   
  return req;
});

export const getPostsByEmail = async (email) => {
  return await API.get(`/posts/${email}`);
};

export const forgotPassword = (email) => API.post("/auth/forgot-password", { email });
export const resetPassword = (token, newPassword) => API.post(`/auth/reset-password/${token}`, { newPassword });


//fetch all users
export const fetchAllUsers = async () => {
  return await API.get("auth/getallusers"); // ✅ Correct route
};
export const updatePost = async (postId, updatedData) => {
  return await API.put(`/posts/${postId}`, updatedData);
};


// No need to repeat /api again here
export const deleteUser = async (userId) => {
  try {
    return await API.delete(`/auth/deleteuser/${userId}`);
  } catch (error) {
    throw error;
  }
};


export const deletePost = async (postId) => {
  return await API.delete(`/posts/${postId}`);
};

//✅ Fetch user posts (only their own posts)
export const fetchUserPosts = async (userId) => {
  return await API.get(`/posts/user/${userId}`); // ✅ Correct route
};


/**
 * Create a new post
 * @param {Object} postData Post data to create: {title, content, email}
 * @returns {Promise<Object>} The created post object
 */
export const createPost = async (postData) => {
  return await API.post("/posts", postData);
};

export const likePost = (id) => API.post(`/posts/${id}/like`);
export const getPostById = (id) => API.get(`/posts/${id}`);
export const addComment = (postId, commentData) => API.post(`/posts/${postId}/comments`, commentData);
export const signup = (userData) => API.post("auth/signup", userData);
export const login = async (userData) => {
  try {
    console.log("userData", userData);
    const response = await API.post("auth/login", userData);
    return response; // ✅ Return the full response
  } catch (error) {
    console.error("Login API error:", error.response?.data || error.message);
    throw error; // ✅ Rethrow error so Login.jsx can handle it
  }
};

