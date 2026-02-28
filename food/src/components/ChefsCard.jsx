import React from "react";
import { FaShareAlt } from "react-icons/fa";
import chef1 from '../images/chefeThumb1_1.png'
import chef2 from '../images/chefeThumb1_2.png'
import chef3 from '../images/chefeThumb1_3.png'
import chef4 from '../images/chefeThumb1_4.png'
import chef5 from '../images/chefeThumb1_5.png'
import chef6 from '../images/chefeThumb1_6.png'
import tomato from '../images/chefeShape1_1.png'
const chefs = [
  {
    id: 1,
    name: "Jenny Wilson",
    role: "Medical Assistant",
    img: `${chef1}`,
  },
  {
    id: 2,
    name: "Guy Hawkins",
    role: "Chef Assistant",
     img: `${chef2}`
  },
  {
    id: 3,
    name: "Robert Fox",
    role: "Chef Assistant",
     img: `${chef3}`
  },
   {
    id: 4,
    name: "Robert Fox",
    role: "Chef Assistant",
     img: `${chef4}`
  },
   {
    id: 5,
    name: "Robert Fox",
    role: "Chef Assistant",
     img: `${chef5}`
  },
   {
    id: 6,
    name: "Robert Fox",
    role: "Chef Assistant",
     img: `${chef6}`
  },
];

const ChefsCard = () => {
  return (
    <section className="bg-[#f9f6f1] py-20 px-4 relative">
        <div className="absolute z-20 top-0 animate-pulse">
            <img src={tomato} alt="" />
        </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

        {chefs.map((chef) => (
          <div
            key={chef.id}
            className="bg-white rounded-[60px] pt-8 text-center relative"
          >
            {/* IMAGE */}
            <div className="w-56 h-56 mx-auto rounded-full overflow-hidden">
              <img
                src={chef.img}
                alt={chef.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* SHARE ICON */}
            <div className="absolute left-1/2 -translate-x-1/2 top-[240px]">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white shadow-lg cursor-pointer hover:bg-orange-600 transition">
                <FaShareAlt />
              </div>
            </div>

            {/* CONTENT */}
            <div className="pt-16 pb-10">
              <h3 className="text-xl font-bold text-gray-900">
                {chef.name}
              </h3>
              <p className="text-gray-500 mt-1">{chef.role}</p>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default ChefsCard;
