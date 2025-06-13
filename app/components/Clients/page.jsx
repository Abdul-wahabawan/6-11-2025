export default function Clients() {
  return (
    <section className="py-12 m-3 rounded-2xl bg-[#EFEEEB] text-gray-800">
      <div className="text-center mb-10 px-4">
        <h2 className="text-4xl font-bold mb-4">What Our Clients Are Saying</h2>
        <p className="text-lg text-[#81807F]">
          Our users love how Advisora Template simplifies their <br/> processes and streamlines operations
        </p>
      </div>

      <div className="overflow-hidden relative">
        <div
          className="flex gap-6 w-max animate-scroll"
          style={{
            animation: "scroll 30s linear infinite",
          }}
        >
          {/* Card 1 */}
          <div className="bg-white shadow-md rounded-2xl p-6 min-w-[300px] h-[300px] max-w-sm text-lg ">
            <p className="text-[#81807f] mb-4">
              Advisory has completely transformed the way I manage my finances. With its intuitive interface and powerful features, I now have better control and visibility into my expenses and investments. Highly recommend it!

            </p>
            <div className="flex items-center gap-4">
              <img className="w-10 h-10 rounded-full" src="https://cdn.prod.website-files.com/67721265f59069a5268af325/67785a398d421f0cd02666a8_testimonials%20user%201.webp" alt="James Rodriguez" />
              <div>
                <p className="font-semibold text-xl">William Parker</p>
                <p className="text-lg text-[#81807f]">CFO at BrightPath</p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-md rounded-2xl p-6 min-w-[300px] max-w-sm text-lg">
            <p className="text-[#81807f] mb-4">
            I've been using Advisora for years now, and I can't imagine managing my finances without it. From tracking expenses to creating budgets, Advisora has simplified every aspect of my financial life. Thank you for such an amazing platform!            </p>
            <div className="flex items-center gap-4">
              <img className="w-10 h-10 rounded-full" src="https://cdn.prod.website-files.com/67721265f59069a5268af325/67785a39ab3a84e8587a7acd_testimonials%20user%202.webp" alt="William Parker" />
              <div>
                <p className="font-semibold text-xl">Michael Carter</p>
                <p className="text-lg text-[#81807f]">Freelance Web Developer</p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-md rounded-2xl p-6 min-w-[300px] max-w-sm text-lg">
            <p className="text-[#81807f] mb-4">
              Advisora has been a game-changer for our business. With its comprehensive financial management tools, we've been able to streamline our processes and make more informed decisions. The customer support team is also top-notch
           </p>
            <div className="flex items-center gap-4">
              <img className="w-10 h-10 rounded-full" src="https://cdn.prod.website-files.com/67721265f59069a5268af325/67785a3937e2049e3aa1ef9a_testimonials%20user%203.webp" alt="John Spencer" />
              <div>
                <p className="font-semibold text-xl">John Spencer</p>
                <p className="text-lg text-[#81807f]">Manager at GlobeSync</p>
              </div>
            </div>
          </div>
               {/* Card 4 */}
          <div className="bg-white shadow-md rounded-2xl p-6 min-w-[300px] max-w-sm text-lg">
            <p className="text-[#81807f] mb-4">
              As someone who is new to investing, Advisory has been an invaluable resource for me. The investment management tools have helped me understand my portfolio better and optimize my investments for better returns. I couldn't be happier with the results!
            </p>
            <div className="flex items-center gap-4">
              <img className="w-10 h-10 rounded-full" src="https://cdn.prod.website-files.com/67721265f59069a5268af325/67785a39323c341c6bb44775_testimonials%20user%204.webp" alt="James Rodriguez" />
              <div>
                <p className="font-semibold text-xl">Christopher Reed</p>
                <p className="text-lg text-[#81807f]">CEO, Beta Technologies</p>
              </div>
            </div>
          </div>

          {/* Card 5 */}
          <div className="bg-white shadow-md rounded-2xl p-6 min-w-[300px] max-w-sm text-lg">
            <p className="text-[#81807f] mb-4">
              Advisory has exceeded all my expectations. Not only does it make managing finances easy and efficient, but the platform also prioritizes security, giving me peace of mind knowing that my data is safe. I'm a loyal Advisory user for life!
            </p>
            <div className="flex items-center gap-4">
              <img className="w-10 h-10 rounded-full" src="https://cdn.prod.website-files.com/67721265f59069a5268af325/67785a39323c341c6bb4477d_testimonials%20user%205.webp" alt="William Parker" />
              <div>
                <p className="font-semibold text-xl">James Rodriguez</p>
                <p className="text-lg text-[#81807f]">Founder of GreenHarves</p>
              </div>
            </div>
          </div>

        </div>
      </div>  
    </section>
  );
}
