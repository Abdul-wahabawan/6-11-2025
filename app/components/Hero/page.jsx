import React from 'react';

export default function Hero() {
  return (
    <div className='flex flex-row '>
      <section className="h-[600px] w-[650px]  bg-[#efeeeb] m-3 rounded-2xl flex items-center justify-center px-4 sm:px-6 lg:px-20 py-23 relative">
        <div className="max-w-4xl mx-auto text-start">
          <h1 className="text-5xl sm:text-5xl lg:text-5xl xl:text-5xl font-semibold text-gray-900 leading-tight mb-8">
            Build & growth
            <br />
            <span className="block">with scalable tools</span>
          </h1>
          
          <p className="text-lg sm:text-xl lg:text-base text-[#80807E] max-w-3xl mx-auto mb-12 leading-relaxed">
            Easily adapt to changes and scale your operations with our<br/>
            flexible infrastructure, designed to support your business growth.
          </p>
          
          <div>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-start items-start mb-8">
              <button className="bg-[#fb4d17] text-white px-5 py-2 rounded-full font-semibold text-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-500/25 inline-flex items-center gap-3 group w-full sm:w-auto justify-center">
                Get Started
                <span className="group-hover:translate-x-1 transition-transform duration-300">
                  →
                </span>
              </button>
              
              <button className="border-2 border-[#fb4d17] text-[#fb4d17] hover:bg-[#fb4d17] hover:text-white px-4 py-2 rounded-full font-semibold text-lg  w-full sm:w-auto">
                Free trial
              </button>
            </div>

            <div className="max-w-md mx-auto p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-orange-200 to-orange-400 border-2 border-white flex items-center justify-center text-white font-semibold relative z-10">
                  <img
                    src="https://cdn.prod.website-files.com/67721265f59069a5268af325/67770167bf55c44a1e4f7a30_hero%20icon%20one.webp"
                    alt="Analytics"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-blue-200 to-blue-400 border-2 border-white flex items-center justify-center text-white font-semibold relative -ml-3 z-20">
                  <img
                    src="https://cdn.prod.website-files.com/67721265f59069a5268af325/67770167a8b72934a2763cee_hero%20icon%20two.webp"
                    alt="Analytics"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-green-200 to-green-400 border-2 border-white flex items-center justify-center text-white font-semibold relative -ml-3 z-30">
                  <img
                    src="https://cdn.prod.website-files.com/67721265f59069a5268af325/677701675adc2f93c6574cab_hero%20icon%20three.webp"
                    alt="Analytics"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-purple-200 to-purple-400 border-2 border-white flex items-center justify-center text-white font-semibold relative -ml-3 z-40">
                  <img
                    src="https://cdn.prod.website-files.com/67721265f59069a5268af325/67770167230b7d2799966da6_hero%20icon%20four.webp"
                    alt="Analytics"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-12 h-12 rounded-full bg-black border-2 border-white flex items-center justify-center text-white text-sm font-bold relative -ml-3 z-50">
                  10K+
                </div>
              </div>
              <p className="text-gray-500 text-sm">
                10.000+ people already joined the Advisora
              </p>
            </div>
          </div>
          
        
        </div>
      </section>
      
      <div className="relative flex-1 m-3 rounded-2xl overflow-hidden h-[600px] ">
        <img
          src="https://cdn.prod.website-files.com/67721265f59069a5268af325/678027433a006cdba1d3420d_hero%20image-p-1080.webp"
          alt="Professional workspace"
          className='w-full h-full object-cover'
        />
        
        <div className="absolute top-16 left-8 overflow-hidden bg-white/90 backdrop-blur-sm rounded-full  shadow-lg border border-white/20 flex items-center gap-2 animate-pulse ">
           <img
              src="https://cdn.prod.website-files.com/67721265f59069a5268af325/6776f6d1235a82d5280c5905_tag%20one.webp"
              alt="Analytics"
              className='w-40 h-10 object-cover'
            />
            
        </div>
        
        <div className="absolute top-32 right-8 bg-white/90 backdrop-blur-sm rounded-full overflow-hidden shadow-lg border border-white/20 flex items-center gap-2">
          <img
              src="https://cdn.prod.website-files.com/67721265f59069a5268af325/6776f6d1ad35a9719270f2a1_tag%20two.webp"
              alt="Analytics"
              className='w-50 h-10 object-cover'
            />
        </div>
        
        <div className="absolute bottom-32 left-8 bg-white/95 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl border border-white/20 w-64">
           <img
              src="https://cdn.prod.website-files.com/67721265f59069a5268af325/6776f6d1735d0fc608749d4f_tag%20three.webp"
              alt="Analytics"
              className=' object-cover'
            />
        </div>
        
      </div>
    </div>
  );
}