
export default function Features() {
  return (
 <>
<div className="bg-[#083630] m-3 rounded-2xl">
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Core Features</title>
  <section className="max-w-7xl mx-auto px-4 py-16 pl-13">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-5xl font-smibold mb-4 text-white">
        Core features that set us <br className="hidden md:block" />
        apart from the competition
      </h2>
      <p className="text-gray-300 max-w-2xl text-lg mx-auto">
        Explore our standout features designed to deliver exceptional<br/>
        performance and value, distinguishing us from the competition.
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-0 items-center justify-center">
      <div className="flex flex-col gap-6">
        {/* Box 1 */}
        <div className="bg-[#1F514A] rounded-2xl p-6 h-[245px] w-[355px]">
          <div className="bg-white rounded-md p-2 inline-block mb-4">
            <img
              src="https://img.icons8.com/ios-filled/24/fa314a/combo-chart--v1.png"
              alt="Analytics"
            />
            
          </div>
        
          <div className="text-[#8FA8A5] text-xl">
              <span className="text-white mr-1 ">Real-time analytics</span>
            Gain actionable insights with our real-time analytics feature
          </div>
        </div>
        {/* Box 2 */}
        <div className="bg-[#1F514A] rounded-2xl p-6 h-[245px] w-[355px]">
          <div className="bg-white rounded-md p-2 inline-block mb-4">
            <img
              src="https://img.icons8.com/ios-filled/24/fa314a/combo-chart--v1.png"
              alt="Reports"
            />
          </div>
         
          <p className="text-[#8FA8A5] text-xl">
                <span className="text-white mr-1 ">
            Customizable reports
          </span>
            Streamline your financial processes with automated workflows
          </p>
        </div>
      </div>
      <div className="w-full">
        <img
          src="https://cdn.prod.website-files.com/67721265f59069a5268af325/677810b4186dbf1f9240a1b5_features%20image.webp"
          alt="Woman with Laptop"
          className="rounded-2xl w-[355px] h-[506px] object-cover"
        />
      </div>
      <div className="flex flex-col gap-6">
        {/* Box 3 */}
        <div className="bg-[#1F514A]  rounded-2xl p-6 h-[245px] w-[355px]">
          <div className="bg-white rounded-md p-2 inline-block mb-4">
            <img
              src="https://img.icons8.com/ios-filled/24/fa314a/smartphone-tablet.png"
              alt="Mobile"
            />
          </div>
     
          <p className="text-[#8FA8A5] text-xl">
               <span className="text-white mr-1 ">  
                    Mobile accessibility
          </span>
            Manage your finances on the go with our mobile-friendly platform
          </p>
        </div>
        {/* Box 4 */}
        <div className="bg-[#1F514A]  rounded-2xl p-6 h-[245px] w-[355px]">
          <div className="bg-white rounded-md p-2 inline-block mb-4">
            <img
              src="https://img.icons8.com/ios-filled/24/fa314a/lock--v1.png"
              alt="Security"
            />
          </div>
          <p className="text-[#8FA8A5] text-xl"> 
            <span className="text-white mr-1 ">Enhanced security</span>
            Protect your sensitive financial data with our state-of-the-art
            security measures
          </p>
        </div>
      </div>
    </div>
  </section>
</div>

 
</>
  );
}
