import React from 'react';

export default function Hero() {
  return (
    <div className='flex flex-col lg:flex-row gap-3  lg:gap-0 p-3 lg:p-0'>
      <section className="h-[500px] sm:h-[550px]  lg:h-[600px] w-full lg:w-[650px] bg-[#efeeeb] lg:m-3 lg:mr-0 rounded-2xl flex items-center justify-center px-4 sm:px-6 lg:px-20 py-8 sm:py-16 lg:py-23 relative">
        <div className="max-w-4xl mx-auto text-start w-full">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-5xl font-semibold text-gray-900 leading-tight mb-6 sm:mb-8">
            Build & growth <br />
            <span className="block">with scalable tools</span>
          </h1>
          
          <p className="text-base sm:text-lg lg:text-base text-[#80807E] max-w-3xl mb-8 sm:mb-12 leading-relaxed">
            Easily adapt to changes and scale your operations with our
            <br className="hidden sm:block"/>
            flexible infrastructure, designed to support your business growth.
          </p>
          
          <div>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-start items-start mb-6 sm:mb-8">
              <button className="relative group px-6 sm:px-12 lg:px-18 py-4 sm:py-5 lg:py-6 bg-[#f9f8f7] text-white text-base sm:text-lg rounded-3xl overflow-hidden border border-gray-300 text-gray-800 hover:bg-gray-100 transition-all duration-300 w-full sm:w-auto">
                <span className="absolute bg-[#ff4d00] inset-0 flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-full">
                  Get Started
                  <span className="group-hover:translate-x-1 transition-transform duration-300 ml-2">→ </span>
                </span>
                <span className="absolute bg-[#ff4d00] inset-0 flex items-center justify-center translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                 Get Started
                 <span className="group-hover:translate-x-1 transition-transform duration-300 ml-2"> →</span>
                </span>
              </button>
              <button className="border-2 border-[#fb4d17] text-[#fb4d17] hover:bg-[#fb4d17] hover:text-white px-4 sm:px-6 py-3 sm:py-4 lg:py-2 rounded-full font-semibold text-base sm:text-lg w-full sm:w-auto transition-all duration-300">
                Free trial
              </button>
            </div>

            <div className="max-w-md p-4 sm:p-6 rounded-lg">
              <div className="flex items-center mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden bg-gradient-to-br from-orange-200 to-orange-400 border-2 border-white flex items-center justify-center text-white font-semibold relative z-10">
                  <img
                    src="https://cdn.prod.website-files.com/67721265f59069a5268af325/67770167bf55c44a1e4f7a30_hero%20icon%20one.webp"
                    alt="Analytics"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden bg-gradient-to-br from-blue-200 to-blue-400 border-2 border-white flex items-center justify-center text-white font-semibold relative -ml-2 sm:-ml-3 z-20">
                  <img
                    src="https://cdn.prod.website-files.com/67721265f59069a5268af325/67770167a8b72934a2763cee_hero%20icon%20two.webp"
                    alt="Analytics"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden bg-gradient-to-br from-green-200 to-green-400 border-2 border-white flex items-center justify-center text-white font-semibold relative -ml-2 sm:-ml-3 z-30">
                  <img
                    src="https://cdn.prod.website-files.com/67721265f59069a5268af325/677701675adc2f93c6574cab_hero%20icon%20three.webp"
                    alt="Analytics"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden bg-gradient-to-br from-purple-200 to-purple-400 border-2 border-white flex items-center justify-center text-white font-semibold relative -ml-2 sm:-ml-3 z-40">
                  <img
                    src="https://cdn.prod.website-files.com/67721265f59069a5268af325/67770167230b7d2799966da6_hero%20icon%20four.webp"
                    alt="Analytics"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black border-2 border-white flex items-center justify-center text-white text-xs sm:text-sm font-bold relative -ml-2 sm:-ml-3 z-50">
                  10K+
                </div>
              </div>
              <p className="text-gray-500 text-xs sm:text-sm">
                10.000+ people already joined the Advisora
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <div className="relative flex-1 lg:m-3 rounded-2xl overflow-hidden h-[400px] sm:h-[500px] lg:h-[600px]">
        <img
          src="https://cdn.prod.website-files.com/67721265f59069a5268af325/678027433a006cdba1d3420d_hero%20image-p-1080.webp"
          alt="Professional workspace"
          className='w-full h-full object-cover'
        />
        
        <div className="absolute top-4 sm:top-8 lg:top-16 left-4 sm:left-6 lg:left-8 overflow-hidden bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-white/20 flex items-center gap-2 animate-pulse">
           <img
              src="https://cdn.prod.website-files.com/67721265f59069a5268af325/6776f6d1235a82d5280c5905_tag%20one.webp"
              alt="Analytics"
              className='w-28 h-7 sm:w-32 sm:h-8 lg:w-40 lg:h-10 object-cover'
            />
        </div>
        
        <div className="absolute top-16 sm:top-20 lg:top-32 right-4 sm:right-6 lg:right-8 bg-white/90 backdrop-blur-sm rounded-full overflow-hidden shadow-lg border border-white/20 flex items-center gap-2">
          <img
              src="https://cdn.prod.website-files.com/67721265f59069a5268af325/6776f6d1ad35a9719270f2a1_tag%20two.webp"
              alt="Analytics"
              className='w-36 h-7 sm:w-40 sm:h-8 lg:w-50 lg:h-10 object-cover'
            />
        </div>
        
        <div className="absolute bottom-8 sm:bottom-16 lg:bottom-32 left-4 sm:left-6 lg:left-8 bg-white/95 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl border border-white/20 w-48 sm:w-56 lg:w-64">
           <img
              src="https://cdn.prod.website-files.com/67721265f59069a5268af325/6776f6d1735d0fc608749d4f_tag%20three.webp"
              alt="Analytics"
              className='w-full object-cover'
            />
        </div>
      </div>
    </div>
  );
}