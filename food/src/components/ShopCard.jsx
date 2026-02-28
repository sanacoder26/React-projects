import React from "react";
import { FaSearch, FaHeart, FaStar, FaArrowUp } from "react-icons/fa";
import { motion } from "framer-motion";

 const products = [
    {
      id: 1,
      title: 'Chiken Pizza',
      Price: '$20.89',
      imageUrl:
        'https://gramentheme.com/html/fresheat/assets/img/food-items/item1_1.png',

    },
    {
      id: 2,
      title: 'Chinese Pasta',
      Price: '$20.89',
      imageUrl:
        'https://gramentheme.com/html/fresheat/assets/img/dishes/dishes1_2.png',

    },
    {
      id: 3,
      title: 'Egg & Cucumber',
      Price: '$20.89',
      imageUrl:
        'https://gramentheme.com/html/fresheat/assets/img/food-items/item1_2.png',

    },
    {
      id: 4,
      title: 'Chiken Fried Rice',
      Price: '$10.99',
      imageUrl:
        'https://gramentheme.com/html/fresheat/assets/img/food-items/item1_3.png',

    },
    {
      id: 5,
      title: 'Chiken Noodles',
      Price: '$20.89',
      imageUrl:
        'https://gramentheme.com/html/fresheat/assets/img/dishes/dishes1_4.png',

    }

  ]

const ShopCard = () => {
  return (
    <section className="bg-[#f9f6f1] py-14 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">

        {/* LEFT SIDEBAR */}
        <aside className="space-y-8">
          {/* Search Box */}
          <div className="bg-white rounded-2xl p-6">
            <h3 className="font-bold text-lg border-b-2 border-red-500 inline-block mb-4">
              Search
            </h3>
            <div className="flex items-center bg-[#f9f6f1] rounded-lg px-4 py-3 mt-4">
              <input
                type="text"
                placeholder="Search here"
                className="bg-transparent outline-none w-full"
              />
              <FaSearch />
            </div>
          </div>

          {/* Categories */}
          <div className="bg-white rounded-2xl p-6">
            <h3 className="font-bold text-lg border-b-2 border-red-500 inline-block mb-4">
              Search
            </h3>
            <div className="flex flex-wrap gap-3 mt-4">
              {[
                "Cheese",
                "Cocktail",
                "Drink",
                "Uncategorized",
                "Pizza",
                "Non Veg",
              ].map((cat) => (
                <span
                  key={cat}
                  className="bg-[#f9f6f1] px-4 py-2 rounded-md text-sm cursor-pointer hover:bg-red-100"
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>
        </aside>

        {/* RIGHT CONTENT */}
        <div className="lg:col-span-3 space-y-8">
          {products.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-6 md:p-10 flex flex-col md:flex-row gap-8 items-center relative"
            >
              {/* Heart */}
              <button className="absolute top-6 right-6 cursor-hover bg-orange-500 hover:bg-red-500 text-white p-3 rounded-full">
                <FaHeart />
              </button>

              {/* Image */}
              <div className="relative flex items-center justify-center">
                <motion.div 
                   animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                 className="absolute w-40 h-40 rounded-full border-2 border-dashed border-red-400 flex items-center justify-center">
                  </motion.div>
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-36 h-36 rounded-full object-cover"
                  />
                
              </div>

              {/* Content */}
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-2">{item.title}</h2>

                {/* Rating */}
                <div className="flex text-orange-400  mb-4">
                  {[...Array(4)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                  <FaStar className="text-gray-300" />
                </div>

                <p className="text-gray-600 max-w-2xl mb-4">
                  Neque porro est qui dolorem ipsum quia quaed inventor veritatis
                  et quasi architecto beatae vitae dicta sunt explicabo.
                </p>

                <p className="text-red-600 font-bold text-xl mb-6">
                  {item.price}
                </p>

                <button className="bg-red-100 text-red-600 px-8 py-3 rounded-full font-semibold hover:bg-red-200 transition">
                  ORDER NOW 🛒
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

    
    </section>
  );
};

export default ShopCard;
