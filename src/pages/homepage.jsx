import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Users from "../components/users";

const HomePage = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

   // Access the environment variables
   const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (!userId) {
      navigate("/login");
      return;
    }
  
    fetchUsers();
  }, [navigate]);

  async function fetchUsers() {
    try {
      const response = await axios.get(`${apiUrl}/api/users`);
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  return (
    <div className="flex flex-col items-center p-4">
      <h2 className="text-2xl font-bold mb-4">User List</h2>
      <Users data={users} />
    </div>
  );
};

export default HomePage;
