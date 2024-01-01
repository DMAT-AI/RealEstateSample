import React from 'react'
import CardListing from './CardListing';


interface Listing {
    rooms: number;
    size: number;
    location: string;
    price: number;
    imageUrl: string;
  }
  

const Listings:React.FC = () => {
    const listings: Listing[] = [
        {
          rooms: 3,
          size: 1500,
          location: 'Downtown',
          price: 300000,
          imageUrl: '/pexels-max-rahubovskiy-7031593.jpg', // Replace with the actual image URL
        },
        {
          rooms: 4,
          size: 2000,
          location: 'Suburb',
          price: 400000,
          imageUrl: '/pexels-max-rahubovskiy-7031593.jpg', // Replace with the actual image URL
        },
        {
          rooms: 1,
          size: 2000,
          location: 'Suburb',
          price: 400000,
          imageUrl: '/pexels-max-rahubovskiy-7031593.jpg', // Replace with the actual image URL
        },
        {
          rooms: 2,
          size: 2000,
          location: 'Suburb',
          price: 400000,
          imageUrl: '/pexels-max-rahubovskiy-7031593.jpg', // Replace with the actual image URL
        },
        {
          rooms: 4,
          size: 2000,
          location: 'Suburb',
          price: 200000,
          imageUrl: '/pexels-max-rahubovskiy-7031593.jpg', // Replace with the actual image URL
        },
        {
          rooms: 5,
          size: 2000,
          location: 'Suburb',
          price: 405000,
          imageUrl: '/pexels-max-rahubovskiy-7031593.jpg', // Replace with the actual image URL
        },
        {
          rooms: 4,
          size: 2000,
          location: 'Suburb',
          price: 450000,
          imageUrl: '/pexels-max-rahubovskiy-7031593.jpg', // Replace with the actual image URL
        },
        {
          rooms: 6,
          size: 2000,
          location: 'Suburb',
          price: 400000,
          imageUrl: '/pexels-christina-morillo-1181438.jpg', // Replace with the actual image URL
        },
        {
          rooms: 8,
          size: 2000,
          location: 'Suburb',
          price: 400000,
          imageUrl: '/pexels-yurii-hlei-2098782.jpg', // Replace with the actual image URL
        },
        {
            rooms: 8,
            size: 2000,
            location: 'Suburb',
            price: 400000,
            imageUrl: '/pexels-yurii-hlei-2098782.jpg', // Replace with the actual image URL
          },
          {
            rooms: 8,
            size: 2000,
            location: 'Suburb',
            price: 400000,
            imageUrl: '/pexels-yurii-hlei-2098782.jpg', // Replace with the actual image URL
          },
          {
            rooms: 8,
            size: 2000,
            location: 'Suburb',
            price: 400000,
            imageUrl: '/pexels-yurii-hlei-2098782.jpg', // Replace with the actual image URL
          },
       
      ];
  return (
    <div className='container mx-auto'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-9'>
        {listings.map((listing, index)=> (
            <CardListing rooms={listing.rooms} key = {index} size ={listing.rooms} location = {listing.location} price = {listing.price} imageUrl ={listing.imageUrl} />
        ))}
    </div>
        
    </div>

  )
}

export default Listings