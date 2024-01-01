import React from 'react'
import Image from 'next/image';

interface Props {
    location: string;
    rooms: number;
    size: number;
    price: number;
    imageUrl: string;

}

const CardListing: React.FC<Props>  = ({location, rooms, size, price, imageUrl}) => {
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl m-3">
      <Image
        src={imageUrl} // Image URL from the listing object
        alt={`Listing in ${location}`}
        className="w-full h-40 object-cover"
        height={800}
        width = {600}
      />
      <div className="card-body p-4 bg-[#ffffff] ">
      <h2 className="card-title">Residential Building</h2>
        <h2 className="text-xl font-semibold mb-2">{location}</h2>
        <p className="text-gray-600 mb-2">Rooms: {rooms}</p>
        <p className="text-gray-600 mb-2">Size: {size} sq ft</p>
        <p className="text-gray-600 mb-2">Price: ${price}</p>
        <button className="btn btn-outline rounded-none">Buy Now</button>

      </div>
    </div>
  )
}

export default CardListing