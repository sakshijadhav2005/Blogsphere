import React, { useState } from "react";

const Comment = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [editedComment, setEditedComment] = useState("");

  // ✅ Handle adding a new comment
  const handleAddComment = () => {
    if (!newComment.trim()) return;
    setComments([...comments, newComment]);
    setNewComment("");
  };

  // ✅ Handle deleting a comment
  const handleDeleteComment = (index) => {
    setComments(comments.filter((_, i) => i !== index));
  };

  // ✅ Handle editing a comment
  const handleEditComment = (index) => {
    setEditingIndex(index);
    setEditedComment(comments[index]);
  };

  // ✅ Handle saving an edited comment
  const handleSaveEdit = () => {
    if (!editedComment.trim()) return;
    const updatedComments = [...comments];
    updatedComments[editingIndex] = editedComment;
    setComments(updatedComments);
    setEditingIndex(null);
    setEditedComment("");
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-gray-900 text-white rounded-xl shadow-lg border border-gray-700">
      <h2 className="text-2xl font-bold mb-4 text-center bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
        Comments 💬
      </h2>

      {/* ✅ Add New Comment */}
      <div className="flex items-center space-x-2">
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="flex-1 p-3 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Write a comment..."
        />
        <button
          onClick={handleAddComment}
          className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 text-white rounded-lg transition-all duration-300 shadow-lg hover:shadow-blue-500/50"
        >
          Add
        </button>
      </div>

      {/* ✅ Display Comments */}
      <ul className="mt-4 space-y-3">
        {comments.map((comment, index) => (
          <li
            key={index}
            className="p-3 bg-gray-800 border border-gray-700 rounded-lg flex justify-between items-center"
          >
            {editingIndex === index ? (
              <input
                type="text"
                value={editedComment}
                onChange={(e) => setEditedComment(e.target.value)}
                className="flex-1 p-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            ) : (
              <span className="flex-1">{comment}</span>
            )}

            <div className="flex space-x-2">
              {editingIndex === index ? (
                <button
                  onClick={handleSaveEdit}
                  className="p-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all"
                >
                  Save
                </button>
              ) : (
                <>
                  <button
                    onClick={() => handleEditComment(index)}
                    className="p-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-all"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteComment(index)}
                    className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all"
                  >
                    Delete
                  </button>
                </>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Comment;
