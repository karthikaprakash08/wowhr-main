import React from 'react';

const JoinCommunity = () => {
  return (
    <section
      id="join-community"
      className="flex flex-col items-center justify-center h-full p-3 mx-auto overflow-hidden bg-white cursor-default md:h-full xl:h-[60vh] xl:py-0 xl:px-20 max-w-7xl sm:pb-3 md:pb-5"
    >
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
          href="https://wowhr.in/badge/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-darkBlue font-jost text-white text-[.6rem] md:text-base xl:text-sm xl:hover:shadow-lg px-2 md:px-8 xl:px-6 min-w-24 xl:min-w-36 py-2 xl:py-3 font-medium rounded-md xl:hover:bg-[#089adec1] xl:hover:text-white transition-all duration-200 xl:hover:scale-[1.02] xl:hover:translate-y-[-.1rem]"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          Join Our Community
        </a>
        <a
          href="https://chat.whatsapp.com/Gnfxll2wN3Y5Mg8kJowpAj"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-darkBlue font-jost text-white text-[.6rem] md:text-base xl:text-sm xl:hover:shadow-lg px-2 md:px-8 xl:px-6 min-w-24 xl:min-w-36 py-2 xl:py-3 font-medium rounded-md xl:hover:bg-[#089adec1] xl:hover:text-white transition-all duration-200 xl:hover:scale-[1.02] xl:hover:translate-y-[-.1rem]"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          Join Student Community
        </a>
      </div>
    </section>
  );
};

export default JoinCommunity;
