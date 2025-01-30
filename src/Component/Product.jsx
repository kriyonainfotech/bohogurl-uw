// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import "../Style/Product.css";

// const Product = () => {
//   const [products, setProducts] = useState([]);
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Fetch data from backend API
//     axios.get('https://bohogurl.org/product')
//       .then(response => {
//         if (Array.isArray(response.data)) {
//           setProducts(response.data);  // Direct array response
//         } else if (response.data && Array.isArray(response.data.products)) {
//           setProducts(response.data.products); // Nested array under 'products'
//         } else {
//           console.error("Products data is not in the expected format");
//         }
//       })
//       .catch(error => {
//         console.error('Error fetching products:', error);
//       });

//     // Check for authentication
//     const token = localStorage.getItem("userToken");
//     if (token) {
//       setIsAuthenticated(true); // Only set authenticated status here
//     }
//   }, []); // Empty dependency array to run this effect only once

//   const addToCart = async (product) => {
//     if (!isAuthenticated) {
//       navigate("/login");
//       return;
//     }

//     const token = localStorage.getItem("userToken");
//     if (!token) {
//       console.error("Token is missing");
//       return;
//     }

//     try {
//       const decodedToken = JSON.parse(atob(token.split('.')[1]));
//       const user_id = decodedToken.id;

//       if (!user_id) {
//         console.error("User ID is missing in token");
//         return;
//       }

//       await axios.post("https://bohogurl.org/cart/add", {
//         user_id, 
//         product_id: product.id,
//         quantity: 1,
//         price: product.price,
//         name: product.name,
//         description: product.description
//       }, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       alert("Product added to cart!");
//     } catch (error) {
//       console.error("Error adding item to cart:", error);
//     }
//   };

//   const viewProductDetails = (product) => {
//     navigate('/product-details', { state: { product } });
//   };

//   return (
//     <div className='main-div'>
//       <center>
//         <p className='main-head'>Necklaces</p>
//         <p className='main-head1'>Lorem ipsum dolor sit amet.</p>
//       </center>

//       <div className='Sort-List'>
//         <ul className='ul-list'>
//           <li id='sort'>SORT BY.</li>
//           <li className='sort-bar1'><a href="#">Popularity</a></li>
//           <li className='sort-bar1'><a href="#">Type</a></li>
//           <li className='sort-bar1'><a href="#">Gemstone</a></li>
//           <li className='sort-bar1'><a href="#">Price</a></li>
//         </ul>
//       </div>
//       <hr />

//       <section>
//         <div className="container-image">
//           {Array.isArray(products) && products.length > 0 ? (
//             products.map((product) => (
//               <div key={product._id} className="poster">
//                 <img
//                   src={`https://bohogurl.org/${product.image_url || 'default-image.jpg'}`} // Fallback image
//                   alt={product.name}
//                   className='img-poster'
//                   onClick={() => viewProductDetails(product)}
//                 />
//                 <p>{product.name}</p>
//                 <p className='pprice'>₹{product.price}</p>
//                 <p className="description">{product.description}</p>
//                 <div className="button-group">
//                   <button
//                     className="add-to-cart-btn"
//                     onClick={() => addToCart(product)}
//                   >
//                     Add to Cart
//                   </button>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <p>No products available</p>
//           )}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Product;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import "../Style/Product.css";

// const Product = () => {
//   const [products, setProducts] = useState([]);
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Fetch data from backend API
//     axios.get('https://bohogurl.org/product')
//       .then(response => {
//         if (Array.isArray(response.data)) {
//           setProducts(response.data);  // Direct array response
//         } else if (response.data && Array.isArray(response.data.products)) {
//           setProducts(response.data.products); // Nested array under 'products'
//         } else {
//           console.error("Products data is not in the expected format");
//         }
//       })
//       .catch(error => {
//         console.error('Error fetching products:', error);
//       });

//     // Check for authentication
//     const token = localStorage.getItem("userToken");
//     if (token) {
//       setIsAuthenticated(true); // Only set authenticated status here
//     }
//   }, []); // Empty dependency array to run this effect only once

//   const addToCart = async (product) => {
//     if (!isAuthenticated) {
//       navigate("/login");
//       return;
//     }

//     const token = localStorage.getItem("userToken");
//     if (!token) {
//       console.error("Token is missing");
//       return;
//     }

//     try {
//       const decodedToken = JSON.parse(atob(token.split('.')[1]));
//       const user_id = decodedToken.id;

//       if (!user_id) {
//         console.error("User ID is missing in token");
//         return;
//       }

//       await axios.post("https://bohogurl.org/cart/add", {
//         user_id, 
//         product_id: product.id,
//         quantity: 1,
//         price: product.price,
//         name: product.name,
//         description: product.description
//       }, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       alert("Product added to cart!");
//     } catch (error) {
//       console.error("Error adding item to cart:", error);
//     }
//   };

//   const viewProductDetails = (product) => {
//     navigate('/product-details', { state: { product } });
//   };

//   return (
//     <>
//    <div className="p-6">
//       {/* Header Section */}
//       <center>
//         <p className="text-4xl font-serif font-bold">Necklaces</p>
//         <p className="text-lg font-serif text-gray-500 mt-2">Lorem ipsum dolor sit amet.</p>
//       </center>

//       {/* Sort List */}
//       <div className="flex justify-center mt-8">
//         <ul className="flex flex-wrap justify-center space-x-4 sm:space-x-8 text-lg font-serif">
//           <li className="text-gray-500">SORT BY.</li>
//           <li className="text-black hover:text-gray-700 cursor-pointer">
//             <a href="#">Popularity</a>
//           </li>
//           <li className="text-black hover:text-gray-700 cursor-pointer">
//             <a href="#">Type</a>
//           </li>
//           <li className="text-black hover:text-gray-700 cursor-pointer">
//             <a href="#">Gemstone</a>
//           </li>
//           <li className="text-black hover:text-gray-700 cursor-pointer">
//             <a href="#">Price</a>
//           </li>
//         </ul>
//       </div>

//       <hr className="my-6 border-gray-300" />

//       <section>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
//           {Array.isArray(products) && products.length > 0 ? (
//             products.map((product) => (
//               <div
//                 key={product._id}
//                 className="bg-white shadow-md rounded-md overflow-hidden w-[300px]
//                 px]"
//               >
//                 <img
//                   src={`https://bohogurl.org/${product.image_url || 'default-image.jpg'}`} // Fallback image
//                   alt={product.name}
//                    className="w-[300px] h-[300px] object-cover rounded-md cursor-pointer transition-transform duration-300 hover:scale-105"
//                   onClick={() => viewProductDetails(product)}
//                 />
//                 <div className="mt-4 ml-5">
//                   <p className="text-lg font-medium">{product.name}</p>
//                   <p className="text-gray-600 text-base font-semibold">₹{product.price}</p>
//                   <p className="text-sm text-gray-500 mt-2 line-clamp-2">{product.description}</p>
//                 </div>

//                {/* Button Group */}
//                 <div className="mt-4 flex justify-start space-x-4">
//                   <button
//                     className="bg-black text-white py-2 px-4 rounded-md text-sm hover:bg-gray-800 transition-colors ml-5"
//                     onClick={() => addToCart(product)}
//                   >
//                     Add to Cart
//                   </button>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <p className="text-center text-gray-600 col-span-full">No products available</p>
//           )}
//         </div>
//       </section>
//     </div>
//     </>
//   );
// };

// export default Product;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../Style/Product.css";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://bohogurl.org/product")
      .then((response) => {
        if (Array.isArray(response.data)) {
          setProducts(response.data);
        } else if (response.data && Array.isArray(response.data.products)) {
          setProducts(response.data.products);
        } else {
          console.error("Products data is not in the expected format");
        }
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });

    const token = localStorage.getItem("userToken");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const addToCart = async (product) => {
    if (!isAuthenticated) {
      navigate("/login");
      return;
    }

    const token = localStorage.getItem("userToken");
    if (!token) {
      console.error("Token is missing");
      return;
    }

    try {
      const decodedToken = JSON.parse(atob(token.split(".")[1]));
      const user_id = decodedToken.id;

      if (!user_id) {
        console.error("User ID is missing in token");
        return;
      }

      await axios.post(
        "https://bohogurl.org/cart/add",
        {
          user_id,
          product_id: product.id,
          quantity: 1,
          price: product.price,
          name: product.name,
          description: product.description,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Product added to cart!");
    } catch (error) {
      console.error("Error adding item to cart:", error);
    }
  };

  const viewProductDetails = (product) => {
    navigate("/product-details", { state: { product } });
  };

  return (
    <>
      <div className="p-4 sm:p-6">
        {/* Header Section */}
        <center>
          <p className="text-3xl sm:text-4xl font-serif font-bold">Necklaces</p>
          <p className="text-sm sm:text-lg font-serif text-gray-500 mt-2">
            Lorem ipsum dolor sit amet.
          </p>
        </center>

        {/* Sort List */}
        <div className="flex justify-center mt-6 sm:mt-8">
          <ul className="flex flex-wrap justify-center space-x-4 sm:space-x-8 text-base sm:text-lg font-serif">
            <li className="text-gray-500">SORT BY.</li>
            <li className="text-black hover:text-gray-700 cursor-pointer">
              <a href="#">Popularity</a>
            </li>
            <li className="text-black hover:text-gray-700 cursor-pointer">
              <a href="#">Type</a>
            </li>
            <li className="text-black hover:text-gray-700 cursor-pointer">
              <a href="#">Gemstone</a>
            </li>
            <li className="text-black hover:text-gray-700 cursor-pointer">
              <a href="#">Price</a>
            </li>
          </ul>
        </div>

        <hr className="my-4 sm:my-6 border-gray-300" />

        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
            {Array.isArray(products) && products.length > 0 ? (
              products.map((product) => (
                <div
                  key={product._id}
                  className="bg-white shadow-md rounded-md overflow-hidden w-full"
                >
                  <img
                    src={`https://bohogurl.org/${product.image_url || "default-image.jpg"
                      }`}
                    alt={product.name}
                    className="w-full h-48 sm:h-56 lg:h-64 object-contain sm:object-cover rounded-md cursor-pointer transition-transform duration-300 hover:scale-105"
                    onClick={() => viewProductDetails(product)}
                  />
                  <div className="mt-4 px-4">
                    <p className="text-base sm:text-lg font-medium">
                      {product.name}
                    </p>
                    <p className="text-gray-600 text-sm sm:text-base font-semibold">
                      ₹{product.price}
                    </p>
                    <p className="text-sm text-gray-500 mt-2 line-clamp-2">
                      {product.description}
                    </p>
                  </div>

                  {/* Button Group */}
                  <div className="mt-4 px-4 pb-4 flex justify-between">
                    <button
                      className="bg-black text-white py-2 px-3 sm:px-4 rounded-md text-xs sm:text-sm hover:bg-gray-800 transition-colors"
                      onClick={() => addToCart(product)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-600 col-span-full">
                No products available
              </p>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default Product;
