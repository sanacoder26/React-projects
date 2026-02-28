import { motion } from 'framer-motion';
import React from 'react'
import { MdOutlineFoodBank } from "react-icons/md";
import ThemeBtn from '../utils/ThemeBtn';
import shape from '../images/aboutShape1_2.png'

const About = () => {
    return (

        <div className='bg-[#F4F1EA] py-10 sm:py-10  h-screen'>
            <div className='mx-auto max-w-8xl px-6 md:px-6 overflow-x-hidden h-4/5'>

                <div className='bg-white h-full overflow-y-hidden grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-7 md:gap-3  border-gray-200 '>
                    <div className='bg-gray-400 col-span-2 relative hidden lg:flex md:items-center rounded-r-full bg-[url("https://gramentheme.com/html/fresheat/assets/img/shape/aboutShape1_1.png")] bg-cover bg-center object-cover '>

                        <motion.img animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 20, ease: "linear" }} src="https://gramentheme.com/html/fresheat/assets/img/shape/aboutShape1_3.png" className='absolute top-10 left-1/4 z-30    ' width={320} alt="" />

    <img src={shape} className='absolute left-64 -top-2 z-20'  alt="" />
                    </div>
                    
                    <div className=' col-span-1 md:col-span-3 flex items-center justify-center'>
                        <div className="px-0 lg:px-12 flex flex-col items-center justify-center text-center">

                            <p className="mt-2 text-md sm:text-xl md:text-md leading-8 font-[700] uppercase text-[#FB792F]">
                                <MdOutlineFoodBank className='inline-block text-sm' />
                                About Us
                                <MdOutlineFoodBank className='inline-block text-sm' />
                            </p>


                            <h2 className="text-3xl  sm:text-xl md:text-4xl font-bold tracking-tight text-gray-900">
                                Variety of flavours from american cuisine
                            </h2>
                            <p className='pt-2 text-sm md:text-md font-normal  text-gray-400'>
                                It is a long established fact that a reader will be distracted the readable content of a page when looking at layout the point established fact that
                            </p>
                            <div className='pt-2'><ThemeBtn title={'Order Now'}/></div>
                        </div>
                    </div>
                    <div className=' bg-gray-400 col-span-2 hidden lg:flex md:items-start relative rounded-l-full bg-[url("https://gramentheme.com/html/fresheat/assets/img/shape/aboutShape1_4.png")] bg-cover bg-center object-cover '>
                        <motion.img animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 20, ease: "linear" }} src="https://gramentheme.com/html/fresheat/assets/img/shape/aboutShape1_6.png" className='absolute top-10 right-1/4 z-30' alt="" width={320} />
                        <img src={shape} className='absolute right-60 -bottom-2 z-20'  alt="" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About
