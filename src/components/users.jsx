import React from "react";

const Users = ({ data }) => {
  return (
    <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-4">
      <h2 className="text-2xl font-bold mb-4">User List</h2>
      <ul className="divide-y divide-gray-200">
        {data.map((user) => (
          <li key={user.id} className="py-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-medium">{user.name}</h3>
                <p className="text-sm text-gray-500">{user.email}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
