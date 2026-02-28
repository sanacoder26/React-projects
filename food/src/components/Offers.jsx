import React from 'react';
import offerThumb1 from '../images/offerThumb1.png'
import ThemeBtn from '../utils/ThemeBtn';
import offer50 from '../images/50%.png'


function Offers(props) {
  const todayOffer = [
    {
      id: 1,
      title: 'Spicy Fried Chiken',
      name: 'btn-red',
      imageUrl:
        'https://gramentheme.com/html/fresheat/assets/img/offer/offerThumb1_1.png',

    },
    {
      id: 2,
      title: 'Today Special Food',
      name: '#FC791A',
      imageUrl:
        'https://gramentheme.com/html/fresheat/assets/img/offer/offerThumb1_2.png',

    },
    {
      id: 3,
      title: 'Special Chiken Roll',
      name: 'btn-red',
      imageUrl:
        'https://gramentheme.com/html/fresheat/assets/img/offer/offerThumb1_3.png',

    },


  ]


  return (
    <div>
      <div class="bg-[#F4F1EA] py-10 sm:py-10 sm:px-10 ">
        <div class=" mx-auto md:mx-auto max-w-7xl">

          <div class="  mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-3 gap-y-7 border-gray-200  sm:mt-16 ">
            {todayOffer.map((offer) => (
              <article key={offer.id} class="flex max-w-2xl flex-row  bg-[url('https://fresh-eat.vercel.app/static/media/offerBG1_1.be055824cf4d036ec0ef.jpg')] bg-cover bg-center">
              
                <div class="group ps-10 py-12 w-2/3 flex flex-col justify-center items-center md:items-start ">
                  <h4 class=" text-sm pb-1 uppercase font-[800] text-[#EB0029] font-[Epilogue] leading-[1]">on this week</h4>
                  <h3 class="text-xl md:text-2xl font-[800] text-white leading-[2] font-[Epilogue]">
                    {offer.title}
                  </h3>
                  <h3 class=" pb-2 text-sm font-[800] text-[#FC791A] leading-[2] ">
                    Limits Time Offer
                  </h3>
                 <div className='mt-4 mb-0'><ThemeBtn title={'Order now'} color={'black-btn'} /></div>

                </div>
                <div class="group relative z-30 top-0 px-2  w-full flex items-center justify-center ">
                  <img src={offer.imageUrl} width={150} className='object-cover'/>
                  <img src={offer50} alt="" width={80} className='absolute z-40 top-0  animate__animated animate__wobble animate__infinite animate__delay-1s animate__slow'/>
                  


                </div>

              </article>


            ))}




          </div>
        </div>
      </div>

    </div>
  );
}

export default Offers;