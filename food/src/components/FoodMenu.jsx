import React from 'react'
import { MdOutlineFoodBank } from "react-icons/md";

const FoodMenu = () => {


    const posts = [
        {
            id:1,
            title: 'Fast Food ',
            imgUrl: 'https://gramentheme.com/html/fresheat/assets/img/menu/menuIcon1_1.png'
        }, {
             id:2,
            title: 'Drink & Juices',
            imgUrl: 'https://gramentheme.com/html/fresheat/assets/img/menu/menuIcon1_2.png'
        },
        {
             id:3,
            title: 'Chiken Pizza',
            imgUrl: 'https://gramentheme.com/html/fresheat/assets/img/menu/menuIcon1_3.png'
        },
        {
             id:4,
            title: 'Fresh Pasta',
            imgUrl: 'https://gramentheme.com/html/fresheat/assets/img/menu/menuIcon1_4.png'
        }
    ]


    const Menu = [
        {
           id:1,
            imageUrl: 'https://gramentheme.com/html/fresheat/assets/img/menu/menuThumb1_1.png',
            title: 'Chinese Pasta ',
            Price: '554$'
        },
        {
             id:2,
            imageUrl: 'https://gramentheme.com/html/fresheat/assets/img/menu/menuThumb1_6.png',
            title: 'Egg and Cucumber',
            Price: '54$'
        },
        {
             id:3,
            imageUrl: 'https://gramentheme.com/html/fresheat/assets/img/menu/menuThumb2_7.png',
            title: 'Chicken Whit Rice',
            Price: '85.9$'
        },
        {
             id:4,
            imageUrl: 'https://gramentheme.com/html/fresheat/assets/img/menu/menuThumb2_8.png',
            title: 'Special Barger',
            Price: '34.87$'
        },
        {
             id:5,
            imageUrl: 'https://gramentheme.com/html/fresheat/assets/img/menu/menuThumb2_9.png',
            title: 'Vegetables Burger',
            Price: '24.45$'
        },
        {
             id:6,
            imageUrl: 'https://gramentheme.com/html/fresheat/assets/img/menu/menuThumb2_10.png',
            title: 'Brief Chicken',
            Price: '27.4$'
        },
        {
             id:7,
            imageUrl: 'https://gramentheme.com/html/fresheat/assets/img/menu/menuThumb2_4.png',
            title: 'Chicken Noodles',
            Price: '54.43$'
        },
        {
             id:8,
            imageUrl: 'https://gramentheme.com/html/fresheat/assets/img/menu/menuThumb1_6.png',
            title: 'Egg and Cucumber',
            Price: '54$'
        },

    ]
    return (
        <div className='bg-[#F4F1EA] py-10 sm:py-10 h-auto px-1 md:px-10 '>
            <div className='mx-auto max-w-8xl px-6 md:px-6  overflow-x-hidden '>
                <div className='bg-white'>
                    <div className="mx-auto  max-w-2xl border-b-[#d2d2d1] border-b-[1px] overflow-hidden lg:max-w-4xl w-full flex flex-col items-center text-center">

                        <p className="mt-2 text-lg sm:text-sm md:text-sm  font-[700] uppercase text-[#FB792F] ">
                            <MdOutlineFoodBank className='inline-block text-sm' />
                            FOOD MENU
                            <MdOutlineFoodBank className='inline-block text-sm' />
                        </p>

                        {/* Main Heading */}
                        <h2 className="my-5 cursor-hover text-3xl  sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
                           Fresheat Foods Menu
                        </h2>
                        <div className="my-5  md:w-[50%]  flex gap-x-3 gap-y-2 flex-wrap justify-center text-xl sm:text-lg md:text-xl tracking-tight text-gray-900">
                            {posts.map((item) => (
                                <h2 key={item.id} className='flex items-center gap-1 '>
                                    <img src={item.imgUrl} alt="" />
                                    <span> {item.title}</span>

                                </h2>
                            ))}


                        </div>

                    </div>
                    <div className=' mt-2 mb-2 '>
                        <div className='mx-auto   grid grid-cols-1 gap-x-3 gap-y-1 md:grid-cols-2 max-w-2xl overflow-hidden lg:max-w-4xl w-full  '>
                            {Menu.map((item) => (
                                <div key={item.id} className=' pt-1 pb-1 flex justify-between md:justify-between items-center'>
                                    <div className=' pt-1  flex gap-2 items-center'>
                                        <div><img src={item.imageUrl} alt="" /></div>
                                        <div className='flex flex-col '>
                                            <p className='text-[1rem]  md:text-[1.4rem] font-semibold text-black '>{item.title}</p>
                                            <p className='text-[0.85rem] md:text-[1rem] font-semibold text-gray-700 '>Its a testaman to our</p>
                                        </div>
                                    </div>
                                    <div className='text-[1.2rem]  font-semibold text-black'>
                                        <p>{item.Price}</p>
                                    </div>

                                </div>
                            ))}


                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default FoodMenu
