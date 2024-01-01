import React from 'react'

const Stats = () => {
  return (
    <div className='container mx-auto mt-11'>

    <div className="stats stats-vertical lg:stats-horizontal text-center shadow rounded-none">
    
    <div className="stat">
        <div className="stat-title">Property sales</div>
        <div className="stat-value text-9xl" >3134</div>
        <div className="stat-desc">Jan 1st - Feb 1st</div>
    </div>
    <div className="stat">
        <div className="stat-title">New property listings</div>
        <div className="stat-value text-9xl" >301</div>
        <div className="stat-desc">Jan 1st - Feb 1st</div>
    </div>
    
    <div className="stat">
        <div className="stat-title">New property User registrations</div>
        <div className="stat-value text-9xl">3,200</div>
        <div className="stat-desc">↗︎ 400 (22%)</div>
    </div>

    <div className="stat">
        <div className="stat-title">Individual serviced</div>
        <div className="stat-value text-9xl">4,200</div>
        <div className="stat-desc">↗︎ 400 (22%)</div>
    </div>

    </div>

  
    </div>
  )
}

export default Stats