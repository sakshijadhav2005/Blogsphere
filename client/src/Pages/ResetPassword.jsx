import { useState } from "react";
import { useParams } from "react-router-dom";
import { resetPassword } from "../services/api";

const ResetPassword = () => {
    const { token } = useParams();
    const [newPassword, setNewPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await resetPassword(token, newPassword);
            setMessage(response.data.message);
        } catch (error) {
            setMessage(error.response?.data?.message || "Something went wrong");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-8 bg-gray-900">
            <div className="max-w-md p-8 bg-gray-800 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-white mb-4">Reset Password</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="password"
                        placeholder="Enter new password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        required
                        className="w-full px-4 py-2 border border-gray-700 bg-gray-900 text-white rounded-md focus:ring focus:ring-blue-500"
                    />
                    <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
                        Reset Password
                    </button>
                </form>
                {message && <p className="text-green-400 mt-4">{message}</p>}
            </div>
        </div>
    );
};

export default ResetPassword;
