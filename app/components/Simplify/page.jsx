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
      <section className="bg-[#083630] text-white py-16  m-3 rounded-3xl">
        <div className="max-w-7xl mx-auto  ">
          <h2 className="text-5xl md:text-5xl font-smibold mb-4 text-center">
            Make payment easy,<br />
            simplify your finance
          </h2>
          <p className="text-[#CED7D6] text-lg  max-w-2xl mx-auto mb-12">
            Our platform managing personal finances or growing your investment portfolio, our system
            integrates the latest technology to help you make smarter financial decisions with ease
          </p>

          <div className="relative">
            <div
              ref={scrollRef}
              className="flex overflow-x-auto gap-6 no-scrollbar scroll-smooth pb-4"
            >
              {/* Card 1 */}
              <div className="w-[380px] h-[400px] bg-[#1f514a] rounded-2xl py-6 px-4 shrink-0 flex flex-col justify-between  items-start">
                <span className="bg-[#36635C] text-sm px-4 py-2 rounded-full mb-3 inline-block">
                  Finance
                </span>
            
                <p className="text-gray-300 text-2xl">
                      <span className="text-2xl mb-2 mr-1  text-white">
                  Budgeting and expense tracking
                </span>
                  Take control of your finances with our intuitive budgeting and expense-tracking solution. Easily manage your income.
                </p>
              </div>

              {/* Card 2 */}
              <div className="w-[380px] h-[400px] bg-[#1f514a] rounded-2xl py-6 px-4 shrink-0 flex flex-col justify-between  items-start">
                <span className="bg-[#36635C] text-sm px-4 py-2  rounded-full mb-3 inline-block">
                  Investment
                </span>
                     
                <p className="text-gray-300 text-2xl">
                   <span className="text-2xl mb-2 mr-1  text-white">
                  Investment management
                </span>
                  Refers to the professional handling of various securities and assets, such as stocks, bonds, real estate, and other investment instruments.
                </p>
              </div>

              {/* Card 3 */}
              <div className="w-[380px] h-[400px] bg-[#1f514a] rounded-2xl py-6 px-4 shrink-0 flex flex-col justify-between  items-start">
                <span className="bg-[#36635C] text-sm px-4 py-2 rounded-full mb-3 inline-block">
                  Digital Transformation
                </span>
                    
                <p className="text-gray-300 text-2xl">
                    <span className="text-2xl mb-2 mr-1  text-white">
                  The digital transformation journey
                </span>
                  Involves integrating digital technologies into all areas of a business, fundamentally changing how it operates.
                </p>
              </div>

              {/* Card 4 */}
              <div className="w-[380px] h-[400px] bg-[#1f514a] rounded-2xl py-6 px-4 shrink-0 flex flex-col justify-between  items-start">
                <span className="bg-[#36635C] text-sm px-4 py-2  rounded-full mb-3 inline-block">
                  strategy
                </span>
            
                <p className="text-gray-300 text-2xl">
                       <span className="text-2xl mb-2 mr-1  text-white">
                  Market expansion strategy
                </span>
                  A market expansion strategy involves identifying and entering new markets to increase a company's customer base and revenue                </p>
              </div>

              {/* Card 5 */}
              <div className="w-[380px] h-[400px] bg-[#1f514a] rounded-2xl py-6 px-4 shrink-0 flex flex-col justify-between  items-start">
                <span className="bg-[#36635C] text-sm px-4 py-2  rounded-full mb-3 inline-block">
                  Investment
                </span>
                   
                <p className="text-gray-300 text-2xl">
                     <span className="text-2xl mb-2 mr-1  text-white">
                  Investment management
                </span>
                  Refers to the professional handling of various securities and assets, such as stocks, bonds, real estate, and other investment instruments.
                </p>
              </div>
         
            </div>

            <div className="flex justify-center gap-4 mt-6">
              <button
                onClick={() => scroll(-1)}
                className="w-10 h-10 rounded-full  bg-white  text-[#1F514A] hover:bg-[#1F514A] hover:text-white"
              >
                &#8592;
              </button>
              <button
                onClick={() => scroll(1)}
                className="w-10 h-10 rounded-full  bg-white  text-[#1F514A] hover:bg-[#1F514A]  hover:text-white"
              >
                &#8594;
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
