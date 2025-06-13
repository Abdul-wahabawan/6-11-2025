'use client';

import React, { useRef } from 'react';

export default function Simplify() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 350;
      scrollRef.current.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <section className="bg-[#083630] text-white py-8 sm:py-12 lg:py-16 m-2 sm:m-3 rounded-2xl sm:rounded-3xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4 text-center leading-tight">
            Make payment easy,<br />
            simplify your finance
          </h2>
          <p className="text-[#CED7D6] text-base sm:text-lg max-w-2xl mx-auto mb-8 sm:mb-12 text-center px-4">
            Our platform managing personal finances or growing your investment portfolio, our system
            integrates the latest technology to help you make smarter financial decisions with ease
          </p>

          <div className="relative">
            <div
              ref={scrollRef}
              className="flex overflow-x-auto gap-4 sm:gap-6 no-scrollbar scroll-smooth pb-4"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {/* Card 1 */}
              <div className="w-[300px] sm:w-[350px] lg:w-[380px] h-[350px] sm:h-[380px] lg:h-[400px] bg-[#1f514a] rounded-2xl py-4 sm:py-6 px-3 sm:px-4 shrink-0 flex flex-col justify-between items-start">
                <span className="bg-[#36635C] text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-3 inline-block">
                  Finance
                </span>
            
                <p className="text-gray-300 text-lg sm:text-xl lg:text-2xl">
                  <span className="text-lg sm:text-xl lg:text-2xl mb-2 mr-1 text-white block sm:inline">
                    Budgeting and expense tracking
                  </span>
                  Take control of your finances with our intuitive budgeting and expense-tracking solution. Easily manage your income.
                </p>
              </div>

              {/* Card 2 */}
              <div className="w-[300px] sm:w-[350px] lg:w-[380px] h-[350px] sm:h-[380px] lg:h-[400px] bg-[#1f514a] rounded-2xl py-4 sm:py-6 px-3 sm:px-4 shrink-0 flex flex-col justify-between items-start">
                <span className="bg-[#36635C] text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-3 inline-block">
                  Investment
                </span>
                     
                <p className="text-gray-300 text-lg sm:text-xl lg:text-2xl">
                  <span className="text-lg sm:text-xl lg:text-2xl mb-2 mr-1 text-white block sm:inline">
                    Investment management
                  </span>
                  Refers to the professional handling of various securities and assets, such as stocks, bonds, real estate, and other investment instruments.
                </p>
              </div>

              {/* Card 3 */}
              <div className="w-[300px] sm:w-[350px] lg:w-[380px] h-[350px] sm:h-[380px] lg:h-[400px] bg-[#1f514a] rounded-2xl py-4 sm:py-6 px-3 sm:px-4 shrink-0 flex flex-col justify-between items-start">
                <span className="bg-[#36635C] text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-3 inline-block">
                  Digital Transformation
                </span>
                    
                <p className="text-gray-300 text-lg sm:text-xl lg:text-2xl">
                  <span className="text-lg sm:text-xl lg:text-2xl mb-2 mr-1 text-white block sm:inline">
                    The digital transformation journey
                  </span>
                  Involves integrating digital technologies into all areas of a business, fundamentally changing how it operates.
                </p>
              </div>

              {/* Card 4 */}
              <div className="w-[300px] sm:w-[350px] lg:w-[380px] h-[350px] sm:h-[380px] lg:h-[400px] bg-[#1f514a] rounded-2xl py-4 sm:py-6 px-3 sm:px-4 shrink-0 flex flex-col justify-between items-start">
                <span className="bg-[#36635C] text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-3 inline-block">
                  strategy
                </span>
            
                <p className="text-gray-300 text-lg sm:text-xl lg:text-2xl">
                  <span className="text-lg sm:text-xl lg:text-2xl mb-2 mr-1 text-white block sm:inline">
                    Market expansion strategy
                  </span>
                  A market expansion strategy involves identifying and entering new markets to increase a company's customer base and revenue
                </p>
              </div>

              {/* Card 5 */}
              <div className="w-[300px] sm:w-[350px] lg:w-[380px] h-[350px] sm:h-[380px] lg:h-[400px] bg-[#1f514a] rounded-2xl py-4 sm:py-6 px-3 sm:px-4 shrink-0 flex flex-col justify-between items-start">
                <span className="bg-[#36635C] text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-3 inline-block">
                  Investment
                </span>
                   
                <p className="text-gray-300 text-lg sm:text-xl lg:text-2xl">
                  <span className="text-lg sm:text-xl lg:text-2xl mb-2 mr-1 text-white block sm:inline">
                    Investment management
                  </span>
                  Refers to the professional handling of various securities and assets, such as stocks, bonds, real estate, and other investment instruments.
                </p>
              </div>
            </div>

            <div className="flex justify-center gap-3 sm:gap-4 mt-4 sm:mt-6">
              <button
                onClick={() => scroll(-1)}
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white text-[#1F514A] hover:bg-[#1F514A] hover:text-white transition-colors duration-200 flex items-center justify-center text-sm sm:text-base"
              >
                &#8592;
              </button>
              <button
                onClick={() => scroll(1)}
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white text-[#1F514A] hover:bg-[#1F514A] hover:text-white transition-colors duration-200 flex items-center justify-center text-sm sm:text-base"
              >
                &#8594;
              </button>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </>
  );
}