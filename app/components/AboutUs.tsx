import React from 'react';
import NumbersCombine from './NumbersCombine';
import Image from 'next/image';

const AboutUs = () => {
  return (
    <div className="bg-transparent text-black py-16">
      <div className="container mx-auto flex items-center">
      <div className="w-1/2">
          {/* Replace 'your-image-url' with the actual image URL */}
          <Image src='/pexels-christina-morillo-1181438.jpg' alt ="team picture" height={800}  width={600}/>
        </div>
        <div className="w-1/2">
          <p className="text-2xl leading-relaxed">
            Welcome to Tom X & Co, your trusted partner in real estate. At Tom X & Co, we are committed to providing exceptional service and delivering real estate solutions tailored to your needs. With years of experience in the industry, our team of dedicated professionals is here to guide you through every step of your real estate journey.
          </p>
          <p className="text-2xl leading-relaxed mt-4">
            Our mission is to help you find the perfect property that feels like home. Whether youre buying, selling, or investing, Tom X & Co is your key to unlocking the door to your dream property. Explore our listings, and let us turn your real estate dreams into reality.
          </p>
        </div>

      </div>
      <NumbersCombine />
    </div>
  );
};

export default AboutUs;
