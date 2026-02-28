
import React from 'react';
import { FaCircleArrowDown } from "react-icons/fa6";
import { useState, useEffect } from 'react';
import ThemeBtn from '../utils/ThemeBtn';
import '../App.css'
import Abouthero from '../images/AboutHero.jpg'



function AboutHero(props) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const data = [
        { text: 'Spicy Fried Chicken', image: 'https://gramentheme.com/html/fresheat/assets/img/banner/bannerThumb1_1.png' },
        { text: 'Chicago Deep Pizza King', image: 'https://gramentheme.com/html/fresheat/assets/img/banner/bannerThumb1_2.png' },
        { text: 'Chicago Deep burger King', image: 'https://gramentheme.com/html/fresheat/assets/img/banner/bannerThumb1_3.png' }
        // Add more items if needed
    ];


    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length); // Cycle through both texts and images
        }, 5000); // 6 seconds interval

        return () => clearInterval(interval); // Clean up interval on unmount
    }, [data.length]);

    return (
        // 
        <div className={`  flex justify-center items-center  2xl:container 2xl:mx-auto w-full  h-screen overflow-hidden text-white pt-2 bg-no-repeat bg-top bg-cover bg-[#000]  bg-blend-difference`} style={{ backgroundImage: `url(${Abouthero})` }}>
            <div className="w-full md:w-full  justify-center text-center  textstrcuture flex flex-col lg:mt-20 md:mt-20 sm:mt-20 px-16 ">
                <h1 className=' lg:text-[1.4rem] md:text-[1.3rem] text-center  text-[1.3rem] sm:text-[0.75rem] text-[#FB7911] lg:leading-[6vw] md:leading-[5vw] sm:leading-15 tracking-tight uppercase font-[Epilogue] cursor-hover font-bold'>About Us</h1>
                <h1 className='cursor-hover text-[3vw] lg:text-[5vw] md:text-[6vw] sm:text-[2.8rem] lg:leading-[5vw] md:leading-[5vw] sm:leading-20 tracking-tight uppercase font-[Epilogue] font-[900]'>Spicy Fried Chiken</h1>


            </div>





        </div>
    );
}

export default AboutHero;
