import React from 'react';
import Image from 'next/image';
import GlassCard from './GlassCard';

const WhatOffer = () => {
  const cardsData = [
    { imgurl: '/pexels-binyamin-mellish-106399.jpg', text: 'Luxurious modern family homes at affordable prices' },
    { imgurl: '/pexels-max-rahubovskiy-7031593.jpg', text: 'Dream houses in open Area, with big yard and out...' },
    { imgurl: '/pexels-binyamin-mellish-106399.jpg', text: 'Luxurious modern family homes at affordable prices' },
    { imgurl: '/pexels-mark-2724749.jpg', text: 'Exquisite interiors, fully furnished with premium furniture..' },
    { imgurl: '/pexels-binyamin-mellish-106399.jpg', text: 'Luxurious modern family homes at affordable prices' },
    { imgurl: '/pexels-quang-nguyen-vinh-2155202.jpg', text: 'Holiday houses for, family vacation Air BnB' },
  ];

  return (
    <div className="relative bg-cover bg-center mt-10">
      <div
        className="absolute inset-0 bg-black opacity-50"
        style={{ backgroundImage: 'url("/pexels-max-rahubovskiy-7031593.jpg")' }}
      ></div>
      <div className="container mx-auto relative z-10">
        <div className="flex flex-wrap justify-center lg:justify-between m-5">
          {cardsData.map((card, index) => (
            <GlassCard key={index} imageUrl={card.imgurl} text={card.text} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatOffer;

