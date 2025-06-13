export default function About() {
  return (
    <>
      <section className="bg-[#EFEEEB] rounded-[32px] m-3 mt-0 px-4 py-10 sm:px-6 sm:py-12 md:px-12 md:py-16 lg:px-20 text-center">
        <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-medium leading-relaxed sm:leading-snug md:leading-tight max-w-5xl mx-auto">
          <span className="font-semibold text-black mr-2">
            We are passionate about empowering individuals
          </span>
          <span className="text-black">and </span>
          <span className="text-[#80807e] mr-2">
            businesses to take control of their finances
          </span>
          <span className="text-[#80807e]">
            and achieve their financial goals.
          </span>
        </h1>

        <div className="mt-10">
          <button className="relative group px-19 py-6 bg-[#f9f8f7] text-white text-lg rounded-3xl overflow-hidden border border-gray-300 hover:bg-gray-100 transition-all duration-300">
            <span className="absolute bg-[#ff4d00] inset-0 flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-full">
              See More →
            </span>
            <span className="absolute bg-[#ff4d00] inset-0 flex items-center justify-center translate-y-full transition-transform duration-300 group-hover:translate-y-0">
              See More →
            </span>
          </button>
         </div>
         
      </section>
    </>
  );
}
