import { useState } from "react";
import { forgotPassword } from "../services/api";

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await forgotPassword(email);
            setMessage(response.data.message);
        } catch (error) {
            setMessage(error.response?.data?.message || "Something went wrong");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-8 bg-gray-900">
            <div className="max-w-md p-8 bg-gray-800 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-white mb-4">Forgot Password?</h2>
                <p className="text-gray-400 mb-4">Enter your email to receive a password reset link.</p>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full px-4 py-2 border border-gray-700 bg-gray-900 text-white rounded-md focus:ring focus:ring-blue-500"
                    />
                    <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
                        Send Reset Link
                    </button>
                </form>
                {message && <p className="text-green-400 mt-4">{message}</p>}
            </div>
        </div>
    );
};

export default ForgotPassword;
