
export default function About() {
  return (
 <>
  <section className="bg-[#EFEEEB] h-[380px] rounded-[32px] px-6 py-16 md:py-12 text-center max-w-6xl mx-auto">
      <h1 className="text-3xl md:text-5xl font-medium leading-tight">
        <span className="font-semibold text-black">
          We are passionate about empowering individuals
        </span>
        <span className="text-black">and </span>
        <span className="text-[#80807e]">businesses to take control of their finances</span>
        <span className="text-[#80807e]">and achieve their financial goals.</span>
      </h1>

      <div className="mt-10">
        <button className="bg-[#fb4d17] text-white text-lg font-semibold px-6 py-3 rounded-full hover:bg-[#e24300] transition duration-200 inline-flex items-center gap-2">
          See More →
        </button>
      </div>
    </section>
</>
  );
}
