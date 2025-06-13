export default function Features() {
  return (
    <div className="bg-[#083630] m-3 rounded-2xl">
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-semibold mb-4 text-white">
            Core features that set us <br className="hidden md:block" />
            apart from the competition
          </h2>
          <p className="text-gray-300 max-w-2xl text-lg mx-auto">
            Explore our standout features designed to deliver exceptional<br />
            performance and value, distinguishing us from the competition.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row flex-wrap justify-center items-start gap-4">
          <div className="flex flex-col gap-6">
            {/* Box 1 */}
            <div className="bg-[#1F514A] lg:h-[250px]  rounded-2xl p-6 w-full max-w-sm flex flex-col items-start justify-between">
              <div className="bg-white rounded-md p-2 inline-block mb-4">
                <img src="/images/svgexport-8.png" alt="Analytics" />
              </div>
              <p className="text-[#8FA8A5] text-xl">
                <span className="text-white mr-1">Real-time analytics</span>
                Gain actionable insights with our real-time analytics feature
              </p>
            </div>

            {/* Box 2 */}
            <div className="bg-[#1F514A] lg:h-[250px] rounded-2xl p-6 w-full max-w-sm flex flex-col items-start justify-between">
              <div className="bg-white rounded-md p-2 inline-block mb-4">
                <img src="/images/svgexport-10.png" alt="Reports" />
              </div>
              <p className="text-[#8FA8A5] text-xl">
                <span className="text-white mr-1">Customizable reports</span>
                Streamline your financial processes with automated workflows
              </p>
            </div>
          </div>

          <div className="w-full lg:w-auto flex justify-center">
            <img
              src="https://cdn.prod.website-files.com/67721265f59069a5268af325/677810b4186dbf1f9240a1b5_features%20image.webp"
              alt="Woman with Laptop"
              className="rounded-2xl w-full max-w-sm h-auto object-cover"
            />
          </div>

          <div className="flex flex-col gap-6">
            {/* Box 3 */}
            <div className="bg-[#1F514A] lg:h-[250px] rounded-2xl p-6 w-full max-w-sm flex flex-col items-start justify-between">
              <div className="bg-white rounded-md p-2 inline-block mb-4">
                <img src="/images/svgexport-9.png" alt="Mobile" />
              </div>
              <p className="text-[#8FA8A5] text-xl">
                <span className="text-white mr-1">Mobile accessibility</span>
                Manage your finances on the go with our mobile-friendly platform
              </p>
            </div>

            {/* Box 4 */}
            <div className="bg-[#1F514A] lg:h-[250px] rounded-2xl p-6 w-full max-w-sm flex flex-col items-start justify-between">
              <div className="bg-white rounded-md p-2 inline-block mb-4">
                <img src="/images/svgexport-11.png" alt="Security" />
              </div>
              <p className="text-[#8FA8A5] text-xl">
                <span className="text-white mr-1">Enhanced security</span>
                Protect your sensitive financial data with our state-of-the-art
                security measures
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
