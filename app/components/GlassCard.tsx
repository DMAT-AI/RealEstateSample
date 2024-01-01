import React from 'react'
import Image from 'next/image'

interface CardProps {
    imageUrl: string;
    text: string;
  }

const GlassCard: React.FC<CardProps> = ({imageUrl, text}) => {
  return (
    <div className='mx-auto m-5 ml-5'>
        <div className="card w-96 glass text-black rounded-none shadow-xl">
        <figure>
            <Image src={imageUrl}
                  width={500}
                  height={500} alt='good image'          
                   />
        </figure>
        <div className="card-body">
            <h2 className="card-title">Residential property</h2>
            <p>{text}</p>
            <div className="card-actions justify-end">
            <button className="btn btn-outline rounded-none">Book Tour!</button>
        </div>
        </div>
    </div>

    </div>
  )
}

export default GlassCard