import { useEffect, useState } from "react";
import axios from "axios";

const useAutoLogin = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const { data } = await axios.get("http://localhost:5000/api/auto-login", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(data.user);
      } catch (error) {
        console.error("Auto-login failed:", error);
        localStorage.removeItem("token");
        localStorage.removeItem("user");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  return { user, loading };
};

export default useAutoLogin;
