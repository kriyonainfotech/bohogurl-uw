// import React, { useState, useEffect } from 'react';
// import "../Style/login.css";
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [successMessage, setSuccessMessage] = useState('');

//   const navigate = useNavigate();

//   // Check if the user is authenticated on page load
//   useEffect(() => {
//     const token = localStorage.getItem('userToken');
//     if (token) {
//       // You can optionally verify the token with the backend here
//       setIsAuthenticated(true);
//     } else {
//       setIsAuthenticated(false);
//     }
//   }, []);

//   // Handle login
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post("https://bohogurl.org/login", { email, password });

//       console.log(response.data); // Check if token is present in response
//       const { userId } = response.data;
//       console.log(userId);


//       if (response.data.token) {
//         // Store token in localStorage
//         localStorage.setItem("userToken", response.data.token);
//         localStorage.setItem("userId", userId); 
//        // localStorage.setItem("userId",response.data.user_id)
//         setIsAuthenticated(true);
//         setSuccessMessage("Login successful!");
//         navigate("/product"); // Redirect to the product page or wherever you want
//       }
//     } catch (error) {
//       console.error("Login failed:", error);
//       setErrorMessage("Login failed. Please try again.");
//     }
//   };

//   // Handle input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     if (name === 'email') {
//       setEmail(value);
//     } else if (name === 'password') {
//       setPassword(value);
//     }
//   };

//   // Handle logout
//   const handleLogout = () => {
//     localStorage.removeItem('userToken');
//     setIsAuthenticated(false);
//     navigate("/login"); // Redirect to login page after logout
//   };

//   return (
//     <>
//     <div className="flex flex-col items-center justify-center min-h-screen bg-white ">
//       {isAuthenticated ? (
//         <div>
//           <h1>Welcome,You are logged in!</h1>
//           <button onClick={handleLogout}>Logout</button>
//         </div>
//       ) : (
//         <>
//           <h1 className="text-3xl font-bold mb-2">LOG IN</h1>
//           <h3 className="text-lg text-gray-500 mb-6">WELCOME TO BOHO GURL</h3>
//           <form className="w-full max-w-sm" onSubmit={handleSubmit}>
//             <input
//               type="email"
//               name="email"
//               placeholder="Email address"
//               value={email}
//               onChange={handleChange}
//               required
//                className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-gray-400"
//             />
//             <input
//               type="password"
//               name="password"
//               placeholder="Password"
//               value={password}
//               onChange={handleChange}
//               required
//                className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-gray-400"
//             />
//            <Link
//           to="/forgot-password"
//           className="text-sm text-gray-600 hover:underline block mb-6 text-right"
//         >
//           Forgot your password?
//         </Link>

//         <button
//           type="submit"
//           className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition duration-300"
//         >
//           Login
//         </button>

//           </form>
//           {/* Create Account Link */}
//       <Link
//         to="/Profile"
//         className="text-sm text-gray-600 hover:underline"
//       >
//         Create New Account
//       </Link>
//         </>
//       )}
//     </div>
//     </>
//   );
// };

// export default Login;

import React, { useState, useEffect } from 'react';
import "../Style/login.css";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const navigate = useNavigate();

  // Check if the user is authenticated on page load
  useEffect(() => {
    const token = localStorage.getItem('userToken');
    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  // Handle login
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://bohogurl.org/login", { email, password });

      console.log(response.data); // Check if token is present in response
      const { userId } = response.data;
      console.log(userId);

      if (response.data.token) {
        // Store token in localStorage
        localStorage.setItem("userToken", response.data.token);
        localStorage.setItem("userId", userId);

        setIsAuthenticated(true);
        setSuccessMessage("Login successful!");
        navigate("/product"); // Redirect to the product page or wherever you want
        setSuccessMessage("login Successful")
      }
    } catch (error) {
      console.error("Login failed:", error);
      setErrorMessage("Login failed. Please try again.");
    }
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem('userToken');
    setIsAuthenticated(false);
    navigate("/login"); // Redirect to login page after logout
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      {isAuthenticated ? (
        <div>
          <h1>Welcome, You are logged in!</h1>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <>
          <h1 className="text-3xl font-bold mb-2">LOG IN</h1>
          <h3 className="text-lg text-gray-500 mb-6">WELCOME TO BOHO GURL</h3>
          {successMessage && <p className="text-green-500 mb-4">{successMessage}</p>}
          {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
          <form className="w-full max-w-sm" onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Email address"
              value={email}
              onChange={handleChange}
              required
              className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-gray-400"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={handleChange}
              required
              className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-gray-400"
            />
            <Link
              to="/forgot-password"
              className="text-sm text-gray-600 hover:underline block mb-6 text-right"
            >
              Forgot your password?
            </Link>

            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition duration-300"
            >
              Login
            </button>
          </form>

          {/* Create Account Link */}
          <Link
            to="/Profile"
            className="text-sm text-gray-600 hover:underline mt-4"
          >
            Create New Account
          </Link>

          {/* Admin Login Link */}
          <Link
            to="/admin-login"
            className="text-sm text-gray-600 hover:underline mt-4"
          >
            Admin Login
          </Link>
        </>
      )}
    </div>
  );
};

export default Login;
