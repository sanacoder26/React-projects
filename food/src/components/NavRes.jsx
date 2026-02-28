import React from 'react';

import logofresh from '../images/logofresh.svg'
import { NavLink } from 'react-router-dom'
import { MdClose } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoTimeOutline } from "react-icons/io5";
import { CiPhone } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa6";

function NavRes({ open, setOpen }) {
  return (

    <div className='w-full lg:hidden '>
      <div
        className={`fixed top-0 right-0 w-[50vw] h-full sm:w-[60vw] md:w-[40vw]   bg-white shadow-lg transition-transform transform ${open ? 'translate-x-0' : 'translate-x-full'
          } z-50 sm:overflow-y-scroll overflow-x-hidden`}>

        {/* navbar work */}
        <div className='w-full py-10'>
          <div className='logo px-5 sm:pt-2 sm:flex sm:justify-between '>
            <img src={logofresh} alt="" className='sm:w-[100px] md:w-[150px]' />
            <button onClick={() => setOpen(!open)} className='bg-[#EB0029] w-[40px] h-[40px] p-2 rounded-full text-white font-[900] text-[1.4rem]'><MdClose /></button>
          </div>
          <div className='items mt-4 pt-3 '>
            <ul className='flex flex-col gap-5'>
              <li className='text-black mx-2 px-5 py-2 border-b-[1px]  border-b-black font-[700] font-[roboto] text-[1.1rem]' >  <NavLink to={'/'} >Home </NavLink> </li>
              <li className='text-black mx-2 px-5 py-2 border-b-[1px]  border-b-black font-[700] font-[roboto] text-[1.1rem]' > <NavLink to={'/about'}>About Us  </NavLink> </li>
              <li className='text-black mx-2 px-5 py-2 border-b-[1px]  border-b-black font-[700] font-[roboto] text-[1.1rem]' > <NavLink to={'/shop'}>Shop </NavLink> </li>
              <li className='text-black mx-2 px-5 py-2 border-b-[1px]  border-b-black font-[700] font-[roboto] text-[1.1rem]' > <NavLink to={'/chefs'}>Chefs  </NavLink> </li>
              <li className='text-black mx-2 px-5 py-2 border-b-[1px]  border-b-black font-[700] font-[roboto] text-[1.1rem]' > <NavLink to={'/contact'}>Contact Us  </NavLink> </li>

            </ul>
          </div>
          <div className="details  w-full px-5 my-4 py-2 ">
            <div className="contact flex flex-col gap-4">
              <h1 className='text-black text-[1.4rem] md:text-[1.3rem] sm:text-[1rem] font-[Epilogue] font-[800]'>Contact info</h1>
              <div className='flex gap-3'><CiLocationOn className='inline-block text-[#EB0029] text-[1.1rem] font-[600]' /><p className='text-[1rem] font-[roboto] font-[600] text-[#766574]'>Main street, Karachi, Pakistan</p></div>
              <div className='flex gap-3'><MdOutlineMailOutline className='inline-block text-[#EB0029] text-[1.1rem] font-[600]' /><p className='text-[1rem] font-[roboto] font-[600] text-[#766574]'>Info@fresheat.com</p></div>
              <div className='flex gap-3'><IoTimeOutline className='inline-block text-[#EB0029] text-[1.1rem] font-[600]' /><p className='text-[1rem] font-[roboto] font-[600] text-[#766574]'>Mon - Fri 9:00 to 6:00</p></div>
              <div className='flex gap-3'><CiPhone className='inline-block text-[#EB0029] text-[1.1rem] font-[600]' /><p className='text-[1rem] font-[roboto] font-[600] text-[#766574]'>0219287489</p></div>

              <div className='flex gap-3 sm:gap-1 bg-[#EB0029] sm:w-[40vw] md:w-[35vw] h-12 justify-center items-center'><IoCartOutline className='inline-block text-white text-[1rem]' /> <button className='text-white text-[0.90rem] font-[400] uppercase font-[roboto]'>Order Now</button> </div>
            </div>
          </div>
          <div className="socials w-full px-5 sm:px-2 pt-2">
            <ul className='flex gap-2 items-center'>
              <li className='px-3 py-1 border-[1px] border-[#766574] rounded-full w-10 h-10  text-[#766574] ' ><FaFacebookF className='inline-block  text-center'/></li>
              <li className='px-3 py-1 border-[1px] border-[#766574] rounded-full w-10 h-10  text-[#766574] ' ><IoLogoTwitter className='inline-block text-center' /></li>
              <li className='px-3 py-1 border-[1px] border-[#766574] rounded-full w-10 h-10  text-[#766574] ' ><FaYoutube className='inline-block text-center' /></li>
              <li className='px-3 py-1 border-[1px] border-[#766574] rounded-full w-10 h-10  text-[#766574] ' ><FaLinkedinIn className='inline-block text-center' /></li>
            </ul>
          </div>
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 z-40"
          onClick={() => setOpen(!open)}
        ></div>
      )}
    </div>

  );
}

export default NavRes;