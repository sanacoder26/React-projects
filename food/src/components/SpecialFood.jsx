import React from 'react'
import ThemeBtn from '../utils/ThemeBtn'

const SpecialFood = () => {
    return (
        <div className='bg-green-700 py-10 bg-no-repeat bg-cover ' style={{backgroundImage: "url('https://gramentheme.com/html/fresheat/assets/img/bg/ctaBG1_1.jpg')" }}>
            <div className='   flex sm:flex-col-reverse sm:md-4 md:flex-row justify-center items-center 2xl:container 2xl:mx-auto w-full md:h-auto overflow-hidden text-white pt-2 '>
                <div className="w-full  sm:w-full md:w-3/5 textstrcuture flex align-middle text-center md:text-start flex-col lg:mt-20 md:mt-20 sm:mt-20 px-10 sm:px-10 md:px-12">
                    <h1 className=' lg:text-[1.4rem] md:text-[1.3rem] text-[1.1rem] sm:text-[0.75rem] text-[#EB0029] lg:leading-[5vw] md:leading-[5vw] sm:leading-15 tracking-tight uppercase font-[Epilogue] font-bold'>welcome fresheat</h1>

                  
                     

                            <h1 className='text-[1vw] lg:text-[4vw] md:text-[4vw] sm:text-[2rem] lg:leading-[7vw] md:leading-[5vw] sm:leading-20 tracking-tight uppercase font-[Epilogue] font-[900]'>TODAY SPECIAL FOOD</h1>
                       
                         <h1 className='text-[1vw] lg:text-[2vw] md:text-[2vw] text-[#FC791A] sm:text-[1rem] lg:leading-[7vw] md:leading-[5vw] sm:leading-20 tracking-tight uppercase font-[Epilogue] font-[900]'>TODAY SPECIAL FOOD</h1>

                  

                    <div className=' flex justify-center md:justify-start items-center '>
                        {/* <button className='uppercase font-[roboto] text-[0.90rem]'> Order Now </button> */}
                        <ThemeBtn title={'ORDER NOW'} />


                    </div>

                </div>
                <div className='sm-w-full md:w-2/5  flex md:flex  animate__animated animate__pulse animate__infinite  animate__slow'>
                    <div className='2xl:flex  w-[90%]'>
                        <img className='w-full' src={'https://gramentheme.com/html/fresheat/assets/img/cta/ctaThumb1_1.png'} alt="" />
                    </div>

                </div>




            </div>
        </div>
    )
}

export default SpecialFood
