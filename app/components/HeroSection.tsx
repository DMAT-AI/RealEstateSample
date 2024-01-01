import React from 'react';

const HeroSection = () => {
  return (
    <div>
    <section className="relative bg-cover bg-center h-screen flex items-center" style={{ backgroundImage: 'url("/pexels-expect-best-323772.jpg")' }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="container mx-auto text-white relative z-10">
        <h1 className="text-9xl font-bold mb-5">Discover Your <br /> Dream Home</h1>
        <p className="text-lg mb-8 mt-5">Explore a wide range of properties tailored to your needs.</p>
        {/* Add your search bar and filters here */}
        <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition duration-300 mb-5 mr-5"
          >
            sell
        </button>
        <div className="join mr-5">
        <button className="btn join-item">Rent</button>
        <button className="btn join-item">Buy</button>

        </div>

     
        <form className="flex items-center space-x-4">
            <div className="join">
                <div>
                    <div>
                    <input className="input input-bordered join-item  text-black" placeholder="Search property "/>
                    </div>
                </div>
                <select className="select select-bordered join-item text-black">
                    <option disabled selected>Type</option>
                    <option>Condo</option>
                    <option>Apartment</option>
                    <option>Town House</option>
                </select>
                <div className="indicator">
                    <span className="indicator-item badge badge-secondary">new listings</span> 
                    <button
                            type="submit"
                            className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition duration-300"
                        >
                            Search
                        </button>
                    
                </div>
            </div>


        </form>
      </div>
    </section>
    </div>
  )
}

export default HeroSection;