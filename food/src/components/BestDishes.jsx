import React from 'react'
import { MdOutlineFoodBank } from "react-icons/md";
import Cardanim from '../utils/Cardanim';
import ThemeBtn from '../utils/ThemeBtn';

const BestDishes = () => {
  const posts = [
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
  return (
    <div className='bg-[#F4F1EA] py-10 sm:py-10 sm:px-10 '>
      <div className='mx-auto max-w-8xl px-6 md:px-6  overflow-x-hidden '>
        <div className="mx-auto max-w-2xl overflow-hidden lg:max-w-4xl w-full flex flex-col items-center text-center">

          <p className="mt-2 text-lg sm:text-sm md:text-sm  font-[700] uppercase text-[#FB792F]">
            <MdOutlineFoodBank className='inline-block text-sm' />
            popular Dishes
            <MdOutlineFoodBank className='inline-block text-sm' />
          </p>

          {/* Main Heading */}
          <h2 className="my-5 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
            Best selling Dishes
          </h2>
        </div>
        <div className=' grid max-w-7xl mx-auto grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {/* <div className=''></div> */}

          {posts.map((item) => (
            <div className='overflow-hidden'><Cardanim title={item.title} price={item.Price} imgUrl={item.imageUrl} /></div>
          ))}




        </div>
        <div className='w-full text-center mt-4'>
        <ThemeBtn title={'view Items'}/>
        </div>
      </div>

    </div>
  )
}

export default BestDishes
