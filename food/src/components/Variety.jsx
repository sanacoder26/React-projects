import React from "react";
import { FaPlay, FaArrowUp } from "react-icons/fa";
import { GiCook, GiFoodTruck } from "react-icons/gi";
import sideImage from '../images/cusineside.png'
import { MdOutlineFoodBank } from "react-icons/md";
const Variety = () => {
    return (
        <section className="bg-[#F4F1EA] py-10 px-5 sm:px-2 md:px-0 sm:py-10 h-full ">
            <div className=" overflow-x-hidden">
                <div className=" h-auto md:h-[80vh] grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

                    {/* LEFT IMAGE */}
                    <div className="relative">
                        <div className="rounded-r-full overflow-hidden w-full max-w-[520px]">
                            <img
                                src={sideImage}
                                alt="Food"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* PLAY BUTTON */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div style={{animationDuration:'20s'}} className="w-20 md:w-40 h-20 md:h-40 rounded-full  flex items-center justify-center  cursor-pointer  animate-spin">
                                <img src="https://gramentheme.com/html/fresheat/assets/img/shape/player.svg" alt="" />
                                <FaPlay className="ml-1" />
                            </div>
                        </div>
                    </div>

                    {/* RIGHT CONTENT */}
                    <div>
                        {/* SMALL TITLE */}
                        <div className="flex justify-center md:justify-start items-center gap-2 text-orange-500 font-semibold mb-4">
                           <MdOutlineFoodBank className='inline-block text-md' />
                            <span className="uppercase tracking-wide text-[1.3rem]  font-[700]">About Us</span>
                            <MdOutlineFoodBank className='inline-block text-md' />
                        </div>

                        {/* MAIN HEADING */}
                        <h2 className="text-2xl text-center md:text-start md:text-[3vw] font-extrabold text-gray-900 leading-tight mb-6">
                            Variety Of Flavours From <br />
                            American Cuisine
                        </h2>

                        {/* DESCRIPTION */}
                        <p className="text-gray-600 mb-8 max-w-xl text-center">
                            Every dish is not just prepared it's a crafted with a savor the
                            utmost precision and a deep understanding sdf of flavor harmony.
                            The experienced hands of our chefs
                        </p>

                        <hr className="mb-8" />

                        {/* FEATURES */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {/* FEATURE 1 */}
                            <div className="flex gap-4">
                                <GiFoodTruck className="text-orange-500 text-4xl" />
                                <div>
                                    <h4 className="font-bold text-lg">Super Quality Food</h4>
                                    <p className="text-gray-600 text-sm">
                                        Served our Testy Food & good food by friendly
                                    </p>
                                </div>
                            </div>

                            {/* FEATURE 2 */}
                            <div className="flex gap-4">
                                <GiCook className="text-orange-500 text-4xl" />
                                <div>
                                    <h4 className="font-bold text-lg">Qualified Chef</h4>
                                    <p className="text-gray-600 text-sm">
                                        Served our Testy Food & good food by friendly
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                
            </div>
        </section>
    );
};

export default Variety;

