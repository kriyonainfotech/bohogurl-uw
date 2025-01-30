import React from "react";

import nec1 from '../Images/nec1.png';
import nec2 from '../Images/nec2.png';
import nec3 from '../Images/nec3.png';
import nec4 from '../Images/nec4.png';
import nec5 from '../Images/nec5.png';
import nec6 from '../Images/nec6.png';
import nec7 from '../Images/nec7.png';

const Collections = () => {
  const col = [
    { name: 'Necklaces', imageUrl: nec1 },
    { name: 'Earrings', imageUrl: nec2 },
    { name: 'Rings', imageUrl: nec3 },
    { name: 'Afghan Jewellery', imageUrl: nec4 },
    { name: 'Glass Jewellery', imageUrl: nec5 },
  ];

  return (
    <>
      <div>
        <section className="text-center font-serif mt-10">
          <h2 className="text-3xl font-bold text-black">Our Collection</h2>
          <p className="text-lg text-gray-600 mt-2">OUR HOMEMADE PRODUCTS</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-8">
            {col.map((category, index) => (
              <div key={index} className="group">
                <img
                  src={category.imageUrl}
                  alt={category.name}
                  className="h-[350px] w-[350px] mx-auto object-cover rounded-lg cursor-pointer transition-transform duration-300 group-hover:scale-110 shadow-md"
                />
                <p className="mt-4 text-lg font-medium text-gray-800">{category.name}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="mt-10">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
          <div className="text-center">
            <img
              src={nec6}
              alt="Bracelet-kada"
              className="h-[350px] w-[350px] object-cover rounded-lg cursor-pointer transition-transform duration-300 hover:scale-110 shadow-md"
            />
            <p className="mt-4 text-lg font-garamond not-italic">Bracelet-kada</p>
          </div>
          <div className="text-center">
            <img
              src={nec7}
              alt="Patches"
              className="h-[350px] w-[350px] object-cover rounded-lg cursor-pointer transition-transform duration-300 hover:scale-110 shadow-md"
            />
            <p className="mt-4 text-lg font-garamond not-italic ">Patches</p>
          </div>
        </div>
        <br></br>
      </div>
    </>
  );
};

export default Collections;
