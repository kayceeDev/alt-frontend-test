import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

   // Access the environment variables
   const apiUrl = import.meta.env.VITE_API_URL;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // const response = {
  //   "data": [
  //     {
  //       _id: "6683d07e6d19f883638e923c",
  //       name: "Ekene Nwobodo",
  //       email: "ekene@hotels.ng",
  //       password: "123456",
  //       __v: 0,
  //     },
  //     {
  //       _id: "6683d0a56d19f883638e923e",
  //       name: "Ekene Nwobodo",
  //       email: "ekene@hotels.ng",
  //       password: "123456",
  //       __v: 0,
  //     },
  //     {
  //       _id: "6683d62ea12ffb9609f7e82c",
  //       name: "Ekene Nwobodo",
  //       email: "ekene@hotels.ng",
  //       password: "123456",
  //       __v: 0,
  //     },
  //   ],
  // };

  // response.data[0]._id


  const handleSubmit = async (e) => {
    e.preventDefault();

    // get form data
    // validate form data
    // post form data to get a response
    // save token or id to localstorage
    if (!(formData.email && formData.password)) {
      alert("Please fill all the fields");
      return;
    }
    try {
      const response = await axios.post(
        `${apiUrl}/api/users/login`,
        formData
      );

      if (response.data.length > 0 && response.data[0]._id) {
        const userId = response.data[0]._id;
        localStorage.setItem("userId", userId);
        alert("Logged in successfully");
        navigate("/homepage");
        return;
      }

    } catch (error) {
      console.error("Login error:", error);
      alert("Login failed. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your password"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
