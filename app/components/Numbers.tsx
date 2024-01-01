'use client'
import React, { useEffect } from 'react';
import { useState } from 'react';
import Stats from './Stats';

const Numbers = () => {

    const [countNumber, setCountNumber] = useState(99);
    
    useEffect(()=>{
        const interval = setInterval(() => {
            setCountNumber((prevValue) => (prevValue > 0? prevValue -1 : prevValue + 98))
        }, 1000);

        return () => clearInterval(interval)
    },[])


  return (
    <main>
        <div className='container text-black py-10 content-center'>
        <div className='flex flex-row'>

        <div className="grid grid-flow-col gap-5 text-center auto-cols-max ">
        
        <div >
            <span className="countdown  text-9xl">
            <span style={{"--value":15} as any}></span>
            </span>
            days
        </div> 
        <div >
            <span className="countdown  text-9xl">
            <span style={{"--value":10} as any}></span>
            </span>
            hours
        </div> 
        <div >
            <span className="countdown text-9xl">
            <span style={{"--value":24} as any}></span>
            </span>
            min
        </div> 
        <div >
            <span className="countdown  text-9xl">
            <span style={{"--value": countNumber} as any}></span>
            </span>
            sec
        </div>
       
        </div>
        
    </div>
    <div className='text-5xl text-center'>
        Till our Mira Oasis launch🏘
        <br></br>
        <br></br>
        <br></br>
     
    </div> 

    <hr></hr>

    </div>
</main>
  )
}

export default Numbers;