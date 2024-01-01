import React from 'react'
import Image from 'next/image'

const Gallery = () => {
  return (
    <div>
        <div className='container mx-auto mb-11'>
        <div className="grid grid-cols-3 gap-0 ">
        <div className="...">01
        <Image src="/pexels-christina-morillo-1181438.jpg" alt='gallery img 1' height={800} width={600} />
        </div>
        <div className="...">02
        <Image src="/pexels-christina-morillo-1181438.jpg" alt='gallery img 1' height={800} width={600} />
        </div>
        <div className="...">03
        <Image src="/pexels-christina-morillo-1181438.jpg" alt='gallery img 1' height={800} width={600} /></div>
        <div className="col-span-2">04
        <Image src="/pexels-christina-morillo-1181438.jpg" alt='gallery img 1' height={800} width={1200} /></div>
        <div className="col-span-1 ">05
        <Image src="/pexels-christina-morillo-1181438.jpg" alt='gallery img 1' height={800} width={800} />

        <Image src="/pexels-christina-morillo-1181438.jpg" alt='gallery img 1' height={800} width={800} />
        </div>

        </div>

        </div>

    </div>
    
  )
}

export default Gallery