import React from "react";
import backgroundf  from '../Images/backgrounf.png';
import nec1 from '../Images/nec1.png';
import nec2 from '../Images/nec2.png';
import nec3 from '../Images/nec3.png';
import nec4 from '../Images/nec4.png';
import nec5 from '../Images/nec5.png';
import stone from '../Images/stone.png';
import alp from '../Images/alp.png';

const Home = () => {
  const categories = [
    { name: 'Necklaces', imageUrl: nec1 },
    { name: 'Earrings', imageUrl: nec2 },
    { name: 'Rings', imageUrl: nec3 },
    { name: 'Afghan Jewellery', imageUrl: nec4 },
    { name: 'Glass Jewellery', imageUrl: nec5 },
  ];

  const reviews = [
    {
      text: "Great variety of cuts and amazing customer service. Helped to find the perfect ring and helped me to personalize it a little more.",
      author: "Nico Jones",
    },
    {
      text: "What an amazing shopping experience! I tried other jewelers and didn’t find anything I liked. Thank you so much.",
      author: "Tracy Willis",
    },
    {
      text: "Great quality, and showed they can work through a problem and maintain excellent customer service!!",
      author: "Susana Santos",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero bg-cover bg-center h-[750px] flex justify-center items-center relative" style={{ backgroundImage: `url(${backgroundf})` }}>
        <div className="hero-content absolute text-center">
          <h1 className="text-white font-cormorant text-6xl mb-6">The Beauty Of Women</h1>
          <p className="text-white text-lg mb-4">Shop for our new releases starting today.</p>
          <button className="bg-[#705B4F] text-white px-6 py-2 hover:bg-gray-700">BUY NOW</button>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories text-center py-10">
        <h2 className="font-cormorant text-4xl mb-4">Shop by category</h2>
        <p className="italic font-cormorant mb-8">Indulge in what we offer.</p>
        <div className="category-list flex flex-wrap justify-center gap-8">
          {categories.map((category, index) => (
            <div key={index} className="category-item">
              <img src={category.imageUrl} alt={category.name} className="h-[350px] w-[350px] transition-transform transform hover:scale-110 shadow-md" />
              <p className="mt-2 text-xl">{category.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Handcrafted Section */}
      <section className="handcrafted-container bg-[#705B4F] text-white py-10 px-5 flex flex-col md:flex-row items-center justify-between">
        <div className="handcrafted-content md:w-1/2 mb-6 md:mb-0">
          <h1 className="text-3xl font-bold mb-4">HAND CRAFTED FINE PIECES.</h1>
          <p className="font-karla text-lg mb-6">
            We also firmly believed that our customers deserved more choices, straightforward information, and legendary service.
          </p>
          <button className="shop-now-button bg-white text-[#705B4F] px-6 py-2 hover:bg-gray-300">SHOP NOW</button>
        </div>
        <div className="handcrafted-image md:w-1/2">
          <img src={stone} alt="Crafting process" className="max-w-full h-auto" />
        </div>
      </section>

      {/* Latest Jewelry Section */}
      <section className="categories text-center py-10">
        <h2 className="font-cormorant text-4xl mb-8">Our Latest Jewelry</h2>
        <div className="category-list flex flex-wrap justify-center gap-8">
          {categories.map((category, index) => (
            <div key={index} className="category-item">
              <img src={category.imageUrl} alt={category.name} className="h-[350px] w-[350px] transition-transform transform hover:scale-110 shadow-md" />
              <p className="mt-2 text-xl">{category.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="reviews-container bg-white py-10 px-5">
        <h2 className="text-center text-[#5a4634] text-3xl mb-8">CUSTOMER REVIEWS</h2>
        <div className="reviews-grid flex flex-wrap justify-center gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="review-card bg-white border border-gray-300 p-6 shadow-md transition-shadow hover:shadow-lg w-[300px]">
              <img src={alp} alt={`Review ${index}`} />
              <blockquote className="italic mt-4">“{review.text}”</blockquote>
              <p className="font-bold mt-4">- {review.author}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
