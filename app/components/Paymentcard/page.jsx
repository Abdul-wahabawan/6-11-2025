'use client';

import React from 'react';
import Image from 'next/image';

const Paymentcard = () => {
  return (
    <div className="py-8 sm:py-12 bg-[#EFEEEB] m-2 sm:m-3 rounded-2xl">
       <section className="py-8 sm:py-12 lg:py-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
          Simple, Transparent Pricing
        </h2>
        <p className="text-base sm:text-lg lg:text-xl text-black max-w-4xl mx-auto px-4">
          Choose a plan that fits your business needs and budget. No hidden fees, no 
          <span className="hidden sm:inline"><br/></span>
          <span className="sm:hidden"> </span>
          surprises—just straightforward pricing for powerful financial management.
        </p>
      </div>
    </section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:gap-0 sm:gap-8 grid-cols-1 lg:grid-cols-3 justify-items-center">
          
          <div className="bg-[#DAD6C9] w-full max-w-[350px] sm:w-[350px] rounded-2xl p-4 sm:p-6 flex flex-col justify-between shadow-sm">
            <div>
              <h3 className="text-lg sm:text-xl text-[#2c2626] font-semibold mb-2">Starter Plan</h3>
              <p className="text-4xl sm:text-5xl font-bold mb-1">$50<span className="text-base sm:text-lg font-medium">/month</span></p>
              <p className="text-sm text-[#2C2626] mb-4">Perfect for Small Teams, Startups, and Growing Businesses</p>
            <div className="mt-6 sm:mt-10">
                <button className="relative group w-full py-4 sm:py-5 rounded-md bg-[#f9f8f7] text-white text-sm sm:text-base font-semibold overflow-hidden transition-all duration-100">
                  <span className="absolute bg-[#ff4d00] inset-0 flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-full">
                  Try for free
                  </span>
                  <span className="absolute bg-[#ff4d00] inset-0 flex items-center justify-center translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                    Try for free
                  </span>
                </button>
            </div>
              <div>
                <h4 className="font-semibold text-base sm:text-lg mb-2 my-4 sm:my-5">Features:</h4>
                <ul className="space-y-2 text-base text-gray-700 ">
                  <li className='flex items-start mt-3 sm:mt-4'>
                    <Image className="mr-2 mt-0.5 flex-shrink-0" src="/images/svgexport-12.png" alt="Logo" width={16} height={16} /> 
                    <span className='text-base'>Basic financial analytics tools</span>
                  </li>
                   <li className='flex items-start mt-3 sm:mt-4'>
                    <Image className="mr-2 mt-0.5 flex-shrink-0" src="/images/svgexport-12.png" alt="Logo" width={16} height={16} />
                    <span>Up to 3 user accounts</span>
                  </li>
                   <li className='flex items-start mt-3 sm:mt-4'>
                    <Image className="mr-2 mt-0.5 flex-shrink-0" src="/images/svgexport-12.png" alt="Logo" width={16} height={16} />
                    <span>Real-time exchange rate monitoring</span>
                  </li>
                  <li className='flex items-start mt-3 sm:mt-4'>
                    <Image className="mr-2 mt-0.5 flex-shrink-0" src="/images/svgexport-12.png" alt="Logo" width={16} height={16} />
                    <span>Monthly financial reports</span>
                  </li>
                   <li className='flex items-start mt-3 sm:mt-4 mb-6 sm:mb-10'>
                    <Image className="mr-2 mt-0.5 flex-shrink-0" src="/images/svgexport-12.png" alt="Logo" width={16} height={16} />
                    <span>Email support</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden pt-0 border-2 border-[#083630] shadow-lg flex flex-col justify-between w-full max-w-[350px] sm:w-[350px]">
            <div className=''>
              <div className="text-center w-full text-white bg-[#083630] py-2 mb-4 text-sm sm:text-base">
                Most Popular
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 px-4 sm:px-6">Professional Plan</h3>
              <p className="text-3xl sm:text-4xl font-bold mb-1 px-4 sm:px-6">$80,00<span className="text-base sm:text-lg font-medium">/month</span></p>
              <p className="text-sm text-gray-600 mb-4 px-4 sm:px-6">Perfect for Growing Businesses Ready to Scale Their Operations</p>
        <div className="mt-6 sm:mt-10 px-4 sm:px-6">
                <button className="relative group w-full py-4 sm:py-5 rounded-md bg-[#f9f8f7] text-white text-sm sm:text-base font-semibold overflow-hidden transition-all duration-100">
                  <span className="absolute bg-[#ff4d00] inset-0 flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-full">
                  Try for free
                  </span>
                  <span className="absolute bg-[#ff4d00] inset-0 flex items-center justify-center translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                    Try for free
                  </span>
                </button>
         </div>

              <div>
                <h4 className="font-semibold text-base sm:text-lg mb-2 px-4 sm:px-6 my-4 sm:my-5">Features:</h4>
                <ul className="space-y-2 text-base text-gray-700 px-4 sm:px-6">
                   <li className='flex items-start mt-3 sm:mt-4'>
                    <Image className="mr-2 mt-0.5 flex-shrink-0" src="/images/svgexport-17.png" alt="Logo" width={16} height={16} />
                    <span>All features from Starter</span>
                  </li>
                  <li className='flex items-start mt-3 sm:mt-4'>
                    <Image className="mr-2 mt-0.5 flex-shrink-0" src="/images/svgexport-17.png" alt="Logo" width={16} height={16} />
                    <span>Advanced financial analytics and forecasting</span>
                  </li>
                   <li className='flex items-start mt-3 sm:mt-4'>
                    <Image className="mr-2 mt-0.5 flex-shrink-0" src="/images/svgexport-17.png" alt="Logo" width={16} height={16} />
                    <span>Unlimited user accounts</span>
                  </li>
                   <li className='flex items-start mt-3 sm:mt-4'>
                    <Image className="mr-2 mt-0.5 flex-shrink-0" src="/images/svgexport-17.png" alt="Logo" width={16} height={16} />
                    <span>Multi-currency support</span>
                  </li>
                  <li className='flex items-start mt-3 sm:mt-4'>
                    <Image className="mr-2 mt-0.5 flex-shrink-0" src="/images/svgexport-17.png" alt="Logo" width={16} height={16} />
                    <span>Weekly financial reports</span>
                  </li>
                  <li className='flex items-start mt-3 sm:mt-4 mb-6 sm:mb-10'>
                    <Image className="mr-2 mt-0.5 flex-shrink-0" src="/images/svgexport-17.png" alt="Logo" width={16} height={16} />
                    <span>Priority email and chat support</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-[#fafafa] rounded-2xl p-4 sm:p-6 flex flex-col justify-between w-full max-w-[350px] sm:w-[350px]">
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Enterprise Plan</h3>
              <p className="text-3xl sm:text-4xl font-bold mb-1">$150<span className="text-base sm:text-lg font-medium">/month</span></p>
              <p className="text-sm text-gray-600 mb-4">Comprehensive and Scalable Solutions for Growing Large Organizations</p>
             <div className="mt-6 sm:mt-10">
                <button className="relative group w-full py-4 sm:py-5 rounded-md bg-[#f9f8f7] text-white text-sm sm:text-base font-semibold overflow-hidden transition-all duration-100">
                  <span className="absolute bg-[#ff4d00] inset-0 flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-full">
                  Try for free
                  </span>
                  <span className="absolute bg-[#ff4d00] inset-0 flex items-center justify-center translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                    Try for free
                  </span>
                </button>
            </div>
              <div>
                <h4 className="font-semibold text-base sm:text-lg mb-2 my-4 sm:my-5">Features:</h4>
                <ul className="space-y-2 text-base text-gray-700">
                   <li className='flex items-start mt-3 sm:mt-4'>
                    <Image className="mr-2 mt-0.5 flex-shrink-0" src="/images/svgexport-17.png" alt="Logo" width={16} height={16} />
                    <span>All features from Professional</span>
                  </li>
                   <li className='flex items-start mt-3 sm:mt-4'>
                    <Image className="mr-2 mt-0.5 flex-shrink-0" src="/images/svgexport-17.png" alt="Logo" width={16} height={16}/>
                    <span>Tailored analytics and dashboards</span>
                  </li>
                  <li className='flex items-start mt-3 sm:mt-4'>
                    <Image className="mr-2 mt-0.5 flex-shrink-0" src="/images/svgexport-17.png" alt="Logo" width={16} height={16} />
                    <span>API integration for custom workflows</span>
                  </li>
                  <li className='flex items-start mt-3 sm:mt-4'>
                    <Image className="mr-2 mt-0.5 flex-shrink-0" src="/images/svgexport-17.png" alt="Logo" width={16} height={16} />
                    <span>Dedicated account manager</span>
                  </li>
                   <li className='flex items-start mt-3 sm:mt-4'>
                    <Image className="mr-2 mt-0.5 flex-shrink-0" src="/images/svgexport-17.png" alt="Logo" width={16} height={16} />
                    <span>Daily financial insights and alerts</span>
                  </li>
                   <li className='flex items-start mt-3 sm:mt-4'>
                    <Image className="mr-2 mt-0.5 flex-shrink-0" src="/images/svgexport-17.png" alt="Logo" width={16} height={16}/>
                    <span>24/7 premium support</span>
                  </li>
                   <li className='flex items-start mt-3 sm:mt-4 mb-6 sm:mb-10'>
                    <Image className="mr-2 mt-0.5 flex-shrink-0" src="/images/svgexport-17.png" alt="Logo" width={16} height={16} />
                    <span>Priority support</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Paymentcard;