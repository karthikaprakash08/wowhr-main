import React, { useState } from 'react';

const JoinCommunity = () => {
  const [openPopup, setOpenPopup] = useState(false)

  const openNewWindow = (link) => {
    window.open(link, "_blank")
    openPopup && setOpenPopup(false)
  }
  return (
    <section
      id="join-community"
      className="flex flex-col items-center justify-center h-full p-3 mx-auto overflow-hidden bg-white cursor-default md:h-full xl:h-[60vh] xl:py-0 xl:px-20 max-w-7xl sm:pb-3 md:pb-5"
    >
      {
  openPopup && (
    <div className='absolute w-[25rem] h-[18rem] bg-white z-20 rounded-lg shadow-lg p-6'>
      <p className='text-gray-600 text-[1rem]'>
        Join the student community only after receiving your community badge.
      </p>
      <p className='text-[#1850A8] text-[1.4rem] font-semibold mt-6'>
        Have you received your community badge?
      </p>

      <div className='w-full flex items-center justify-between mt-10'>
        <div
          onClick={() => openNewWindow('https://chat.whatsapp.com/Gnfxll2wN3Y5Mg8kJowpAj')}
          className='w-[5.5rem] h-[2.5rem] rounded-full bg-[#1850A8] text-white hover:bg-[#f26d26] flex items-center justify-center cursor-pointer transition-all duration-300 ease-in-out shadow-md'>
          <p className='font-medium'>YES</p>
        </div>
        <div
          onClick={() => openNewWindow('https://wowhr.in/badge/')}
          className='w-[5.5rem] h-[2.5rem] rounded-full bg-gray-200 hover:bg-[#f26d26] hover:text-white flex items-center justify-center cursor-pointer transition-all duration-300 ease-in-out shadow-md'>
          <p className='font-medium'>NO</p>
        </div>
      </div>
    </div>
  )
}


      <div
        className="mb-3 text-xl font-semibold xl:mt-0 md:mt-10 xl:mb-8 md:text-4xl xl:text-3xl font-jost"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        WOW HR COMMUNITY
      </div>
      <div
        className="text-xs xl:text-lg font-semibold text-center md:text-xl tracking-wider xl:leading-[1.9] md:leading-[2] mb-4 md:mb-7 xl:mb-12 mx-3"
        data-aos="fade-left"
        data-aos-duration="1000"
      >
        All HR / Management students can be part of WOW HR Community. Follow the below instructions:
        You can fill your LinkedIn details by clicking on the "Join Our Community" button below and generate your complimentary WOW HR membership badge.
        Post your badge on LinkedIn and tag WOW HR. Also join our whatsapp group.
      </div>

      <div className="flex space-x-4">
        <a
          // href="https://wowhr.in/badge/"
          // target="_blank"
          rel="noopener noreferrer"
          className="bg-darkBlue font-jost text-white bg-[#089ade99] text-[.6rem] md:text-base xl:text-sm xl:hover:shadow-lg px-2 md:px-8 xl:px-6 min-w-24 xl:min-w-36 py-2 xl:py-3 font-medium rounded-md xl:hover:bg-[#089adec1] xl:hover:text-white transition-all duration-200 xl:hover:scale-[1.02] xl:hover:translate-y-[-.1rem]"
          data-aos="zoom-in"
          data-aos-duration="1000"
          onClick={() => openNewWindow('https://wowhr.in/badge/')}
        >
          Join Our Community
        </a>
        <a
          // href="https://chat.whatsapp.com/Gnfxll2wN3Y5Mg8kJowpAj"
          // target="_blank"
          rel="noopener noreferrer"
          className="bg-darkBlue font-jost text-white bg-[#089ade99] text-[.6rem] md:text-base xl:text-sm xl:hover:shadow-lg px-2 md:px-8 xl:px-6 min-w-24 xl:min-w-36 py-2 xl:py-3 font-medium rounded-md xl:hover:bg-[#089adec1] xl:hover:text-white transition-all duration-200 xl:hover:scale-[1.02] xl:hover:translate-y-[-.1rem]"
          data-aos="zoom-in"
          data-aos-duration="1000"
          onClick={() => setOpenPopup(true)}
        >
          Join Student Community
        </a>
      </div>
    </section>
  );
};

export default JoinCommunity;
