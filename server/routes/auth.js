
const express = require("express");
const { signup, login, forgotPassword, resetPassword,getAllUsers,deleteUser} = require("../Controller/authController");
const adminMiddleware = require("../middleware/adminMiddleware");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();
router.post("/signup", signup);
router.post("/login", login);

router.get("/getallusers",authMiddleware,adminMiddleware, getAllUsers); // Get all users
router.delete("/deleteuser/:id",authMiddleware,adminMiddleware, deleteUser); // Delete user by ID
router.post("/forgot-password", forgotPassword);
router.post("/reset-password/:token", resetPassword);

module.exports = router;
