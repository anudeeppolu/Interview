// src/UserDisplay.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserDisplay = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
  });

  const fetchUser = async () => {
    try {
      const response = await axios.get('https://randomuser.me/api');
      const userData = response.data.results[0];
      const fullName = `${userData.name.first} ${userData.name.last}`;
      const email = userData.email;

      setUser({ name: fullName, email });
    } catch (error) {
      console.error('Error fetching user data', error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div>
      <h2>User Information</h2>
      <p>
        <strong>Name:</strong> {user.name}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <button onClick={fetchUser}>Refresh</button>
    </div>
  );
};

export default UserDisplay;
