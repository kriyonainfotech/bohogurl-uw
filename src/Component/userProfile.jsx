import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const userProfile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Fetch user info on page load
  useEffect(() => {
    const token = localStorage.getItem("userToken");
    if (!token) {
      navigate("/login"); // Redirect to login if not authenticated
    } else {
      // Fetch user profile data from server
      axios
        .get("https://bohogurl.org/profile", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          setUser(response.data);
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
          alert("Could not fetch user data.");
        });
    }
  }, [navigate]);

  // Logout user
  const handleLogout = () => {
    localStorage.removeItem("userToken");
    navigate("/login");
  };

  return (
    <div className="profile-container">
      {user ? (
        <div>
          <h1>Your Profile</h1>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
          <p><strong>Address:</strong> {user.address}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <h2>Loading profile...</h2>
      )}
    </div>
  );
};

export default userProfile;
