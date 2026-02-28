import React from 'react';
import { FaCircleArrowDown } from "react-icons/fa6";
import { useState, useEffect } from 'react';
import ThemeBtn from '../utils/ThemeBtn';
import '../App.css'



function Hero(props) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const data = [
        { text: 'Spicy Fried Chicken', image: 'https://gramentheme.com/html/fresheat/assets/img/banner/bannerThumb1_1.png' },
        { text: 'Chicago Deep Pizza King', image: 'https://gramentheme.com/html/fresheat/assets/img/banner/bannerThumb1_2.png' },
        {text:'Chicago Deep burger King',image:'https://gramentheme.com/html/fresheat/assets/img/banner/bannerThumb1_3.png'}
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
        <div className=' bg-red-800 flex justify-center items-center  2xl:container 2xl:mx-auto w-full  h-screen overflow-hidden text-white pt-2 bg-no-repeat bg-cover bg-[#522c168f] bg-blend-darken' style={{ backgroundImage: "url('https://fresh-eat.vercel.app/static/media/bannerBG1_1.d0299277f22685822c5d.jpg')" }}>
            <div className="w-full md:w-3/5 animate-slide textstrcuture flex flex-col lg:mt-20 md:mt-20 sm:mt-20 px-16 ">
                <h1 className='animate-slide lg:text-[1.4rem] md:text-[1.3rem] text-[1.3rem] sm:text-[0.75rem] text-[#FB7911] lg:leading-[6vw] md:leading-[5vw] sm:leading-15 tracking-tight uppercase font-[Epilogue] cursor-hover font-bold'>welcome fresheat</h1>

                <div className="masker">
                    <div className=' w-fit flex items-center ' >

                        <h1 className='cursor-hover text-[7vw] lg:text-[6vw] md:text-[6vw] sm:text-[2.8rem] lg:leading-[7vw] md:leading-[5vw] sm:leading-20 tracking-tight uppercase font-[Epilogue] font-[900]'>{data[currentIndex].text}</h1>
                    </div>

                </div>

                <div className='animate-slide flex justify-start items-center '>
                    {/* <button className='uppercase font-[roboto] text-[0.90rem]'> Order Now </button> */}
                    <ThemeBtn title= {'ORDER NOW'}/>
                     
                    
                </div>

            </div>
            <div className=' md:w-2/5 sm:hidden md:block  animate-slide'>
            <div className='2xl:flex xl:flex lg:hidden '>
                <img className=''  src={data[currentIndex].image} alt="" />
            </div>
            
            </div>


           

        </div>
    );
}

export default Hero;