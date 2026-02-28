import React from 'react';
import '../App.css'
import logofresh from '../images/logofresh.svg'
import { FaFacebookF } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa6";
import { LuClock } from "react-icons/lu";
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { IoSearchOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaPlus } from "react-icons/fa6";
import cart1 from '../images/cart1.png'
import cart2 from '../images/cart2.png'
import cart3 from '../images/cart3.png'
import NavRes from './NavRes';



function Navsection(props) {
    // toggle navbar 

    const [open, setOpen] = useState(false)

    // useEffect(() => {
    //     const cursorDot = document.querySelector("[data-cursor-dot]");
    //     const cursorOutline = document.querySelector("[data-cursor-outline]");
    //     const hoverTargets = document.querySelectorAll(".cursor-hover"); 

    //     let mouseX = 0;
    //     let mouseY = 0;
    //     let outlineX = 0;
    //     let outlineY = 0;
    //     const delay = 0.4;


    //     window.addEventListener("mousemove", (e) => {
    //       mouseX = e.clientX;
    //       mouseY = e.clientY;

    //       cursorDot.style.left = `${mouseX}px`;
    //       cursorDot.style.top = `${mouseY}px`;
    //     });

    //     const animateOutline = () => {
    //       outlineX += (mouseX - outlineX) * delay;
    //       outlineY += (mouseY - outlineY) * delay;

    //       cursorOutline.style.left = `${outlineX}px`;
    //       cursorOutline.style.top = `${outlineY}px`;

    //       requestAnimationFrame(animateOutline);
    //     };
    //     animateOutline();


    //     hoverTargets.forEach((target) => {
    //       target.addEventListener("mouseenter", () => {
    //         cursorDot.classList.add("hoveres");
    //         cursorOutline.classList.add("hovered");
    //       });

    //       target.addEventListener("mouseleave", () => {
    //         cursorDot.classList.remove("hoveres");
    //         cursorOutline.classList.remove("hovered");
    //       });
    //     });


    //     return () => {
    //       hoverTargets.forEach((target) => {
    //         target.removeEventListener("mouseenter", () => {});
    //         target.removeEventListener("mouseleave", () => {});
    //       });
    //       window.removeEventListener("mousemove", () => {});
    //     };
    //   }, []);

    return (
        // navbar
        <>
            {/* <div className="cursor-dot" data-cursor-dot></div>
            <div className="cursor-outline" data-cursor-outline></div> */}
            <div className=' w-full h-fll 2xl:container 2xl:mx-auto 2xl:bg-red-800'>
                <div className='width-full flex font-[roboto] font-[300] '>
                    <div className="lg:w-1/6 h-[20vh] bg-[#FFFFFF] sm:w-[40vw]">
                        <img className='bg-center bg-cover py-6 px-5 cursor-hover' src={logofresh} alt="" />


                    </div>
                    <div className="w-5/6 h-[20vh] bg-green-800 flex flex-col">
                        {/* upper section red line */}
                        <div className='w-full h-[7vh] lg:flex justify-between items-center bg-[#EB0029] px-10 sm:hidden'>
                            <ul className='flex '>
                                <li className=' px-1 text-white '><LuClock className='inline-block text-[1.1rem] font-semibold' /></li>
                                <li className='text-[1rem] px-1 text-white  inline-block'> 09:00 am - 06:00 pm</li>

                            </ul>
                            <ul className='flex justify-end w-1/2 text-center'>
                                <li className='px-5 text-[1rem] text-white font-regular' >Follow Us: </li>
                                <li className='px-2 text-[white] cursor-hover ' ><FaFacebookF className='inline-block' /></li>
                                <li className='px-2  text-[white] cursor-hover ' ><IoLogoTwitter className='inline-block' /></li>
                                <li className='px-2  text-[white] cursor-hover' ><FaYoutube className='inline-block' /></li>
                                <li className='px-2  text-[white] cursor-hover' ><FaLinkedinIn className='inline-block' /></li>

                            </ul>

                        </div>
                        <div className='lg:w-full lg:h-[14vh] md:bg-white  lg:bg-[rgb(1,15,28)] flex items-center justify-between  sm:bg-white sm:h-[40vh]'>
                            <div className=''>
                                <ul className='lg:flex lg:gap-2 lg:px-12 font-[roboto] text-[1.1rem] font-[400] md:hidden sm:hidden'>
                                    <li className='text-white lg:px-3 whitespace-nowrap  cursor-hover hover:text-[#EB0029]' >  <NavLink to={'/'} >Home  <FaPlus className='inline-block' /></NavLink> </li>
                                    <li className='text-white lg:px-3 whitespace-nowrap cursor-hover hover:text-[#EB0029]' > <NavLink to={'/about'}>About Us  <FaPlus className='inline-block' /></NavLink> </li>

                                    <li className='text-white lg:px-3 whitespace-nowrap z-[40]  group cursor-hover  hover:text-[#EB0029] transition duration-200 ease-in-out'  > shop  <FaPlus className='inline' />

                                        <ul className="absolute hidden md:group-hover:block mt-5 top-[12%] w-[19%] bg-white shadow-lg">
                                            <li className='border-b-[1px]'>
                                               <NavLink to={'/shop'} className="block px-5 py-3 text-black hover:text-white hover:bg-[#EE2044]">Shop  </NavLink>
                                            </li>
                                            <li className='border-b-[1px]'>
                                                <a href="/" className="block px-5 py-3 text-black hover:text-white hover:bg-[#EE2044]">Shop Right sidebar</a>
                                            </li >
                                            <li className='border-b-[1px]'>
                                                <a href="/" className="block px-5 py-3 text-black hover:text-white hover:bg-[#EE2044]">Shop List</a>
                                            </li>
                                            <li className='border-b-[1px]'>
                                                <a href="/" className="block px-5 py-3 text-black hover:text-white hover:bg-[#EE2044]">Shop List Right Sidebar</a>
                                            </li>
                                            <li className='border-b-[1px]'>
                                                <a href="/" className="block px-5 py-3 text-black hover:text-white hover:bg-[#EE2044]">Cart List</a>
                                            </li>
                                            <li className='border-b-[1px]'>
                                                <a href="/" className="block px-5 py-3 text-black hover:text-white hover:bg-[#EE2044]">Shop Details</a>
                                            </li>
                                            <li className='border-b-[1px]'>
                                                <a href="/" className="block px-5 py-3 text-black hover:text-white hover:bg-[#EE2044]">Checkout</a>
                                            </li>
                                            <li className='border-b-[1px]'>
                                                <a href="/" className="block px-5 py-3 text-black hover:text-white hover:bg-[#EE2044]">Wishlist</a>
                                            </li>
                                        </ul>

                                    </li>
                                    {/* toggle dropdown shopsetion end */}
                                    <li className='text-white lg:px-3 whitespace-nowrap z-40 group cursor-hover  hover:text-[#EB0029] transition duration-200 ease-in-out'  > Pages  <FaPlus className='inline' />

                                        <ul className="absolute hidden md:group-hover:block mt-5 top-[12%] w-[19%] bg-white shadow-lg">
                                            <li className='border-b-[1px]'>
                                               
                                                <NavLink to={"/chefs"} className="block px-5 py-3 text-black hover:text-white hover:bg-[#EE2044]">Chefs</NavLink>
                                            </li>
                                            <li className='border-b-[1px]'>
                                                <a href="/" className="block px-5 py-3 text-black hover:text-white hover:bg-[#EE2044]">Food Menu</a>
                                            </li >
                                            <li className='border-b-[1px]'>
                                                <a href="/" className="block px-5 py-3 text-black hover:text-white hover:bg-[#EE2044]">Gallery</a>
                                            </li>
                                            <li className='border-b-[1px]'>
                                                <a href="/" className="block px-5 py-3 text-black hover:text-white hover:bg-[#EE2044]">Services</a>
                                            </li>
                                            <li className='border-b-[1px]'>
                                                <a href="/" className="block px-5 py-3 text-black hover:text-white hover:bg-[#EE2044]">Testimonials</a>
                                            </li>
                                            <li className='border-b-[1px]'>
                                                <a href="/" className="block px-5 py-3 text-black hover:text-white hover:bg-[#EE2044]">Reservations</a>
                                            </li>
                                            <li className='border-b-[1px]'>
                                                <a href="/" className="block px-5 py-3 text-black hover:text-white hover:bg-[#EE2044]">FAQ's</a>
                                            </li>
                                            <li className='border-b-[1px]'>
                                                <a href="/" className="block px-5 py-3 text-black hover:text-white hover:bg-[#EE2044]">My Acount</a>
                                            </li>
                                            <li className='border-b-[1px]'>
                                                <a href="/" className="block px-5 py-3 text-black hover:text-white hover:bg-[#EE2044]">404 Page</a>
                                            </li>
                                            <li className='border-b-[1px]'>
                                                <a href="/" className="block px-5 py-3 text-black hover:text-white hover:bg-[#EE2044]">Wishlist</a>
                                            </li>
                                        </ul>

                                    </li>



                                    <li className='text-white lg:px-3 whitespace-nowrap cursor-hover hover:text-[#EE2044]'> <NavLink to={'/Contact'}>Contact Us <FaPlus className='inline' /></NavLink> </li>
                                </ul>
                            </div>
                            <div className=' sm:w-[60vw] md:w-[75vw] '>
                                <ul className='flex lg:gap-5 lg:px-10 text-[1.2rem] font-[900] sm:flex sm:justify-end sm:px-2 '>
                                    <li className='text-[#505C6C] text-[1.5rem] cursor-hover'><IoSearchOutline /></li>
                                    <li className='text-[#505C6C] px-5 text-[1.5rem] z-[40] cursor-hover relative group transition duration-200 ease-in-out'><IoCartOutline />
                                        <ul className='absolute hidden cursor-hover md:group-hover:block mt-5 px-5 top-[10%] right-[5%]  w-[22vw]  bg-white shadow-lg'>
                                            <li>
                                                <div className='carts  px-5 py-3 text-black  flex gap-2 text-[1rem]'>
                                                    <img src={cart1} alt="" className="" />
                                                    <div className='self-center'><p>Fried chiken</p>
                                                        <p className='text-[#FC791A] text-[14px]'>1 x $80.00 </p></div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className='carts  px-5 py-3 text-black  flex gap-2 text-[1rem]'>
                                                    <img src={cart2} alt="" className="" />
                                                    <div className='self-center'><p>Fried Noddles</p>
                                                        <p className='text-[#FC791A] text-[14px]'>1 x $60.00 </p></div>
                                                </div>
                                            </li>
                                            <li className='border-b-[1px] p-b-4'>
                                                <div className='carts  px-5 py-3 text-black  flex gap-2 text-[1rem]'>
                                                    <img src={cart3} alt="" className="" />
                                                    <div className='self-center'><p>Spicy Pasta</p>
                                                        <p className='text-[#FC791A] text-[14px]'>1 x $80.00 </p></div>
                                                </div>
                                            </li>
                                            <li className='border-b-[1px] p-b-4'>
                                                <div className='carts  px-2 py-3 text-white font-[roboto] font-[500]  flex flex-col gap-2 text-[0.75rem] '>
                                                    <p className='text-black text-[1rem]'>Total :</p>
                                                    <button className='w-[100%] h-10 bg-[#EB0029] '>View Cart</button>
                                                    <button className='w-[100%] h-10 bg-[#FC791A]'>Checkout</button>

                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className='text-[#505C6C] text-[1.5rem]' onClick={() => setOpen(!open)}><GiHamburgerMenu /></li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* mobile and tab section */}
            <NavRes open={open} setOpen={setOpen} />

        </>
    );
}

export default Navsection;