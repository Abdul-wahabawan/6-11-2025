export default function Main() {
  return (
    <>
      <div className="bg-[#efeeeb] m-5 rounded-2xl">
  <title>Responsive Blog Section</title>
  <section className="px-6 py-12 max-w-7xl mx-auto">
    <div className="flex flex-col md:flex-row justify-between px-16 items-start md:items-center mb-10">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Discover the <br/>latest blogs
        </h2>
      </div>
      <p className="text-gray-500 max-w-md mt-4 md:mt-0 md:ml-6">
        Stay informed with the latest health and wellness insights from our
        experts.
      </p>
    </div>
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {/* Card 1 */}
      <div className=" rounded-2xl overflow-hidden">
        <img
          src="https://cdn.prod.website-files.com/67721265f59069a5268af347/6778668556a2e86e20b6112b_blog%20thumbnail.webp"
          alt="Budgeting"
          className="w-full h-60 object-cover rounded-2xl"
        />
        <div className="p-6">
          <h3 className="text-lg font-semibold mb-2">
            The Ultimate Guide to Budgeting in 2024
          </h3>
          <p className="text-gray-600 text-sm">
            Master the art of budgeting with our comprehensive guide. Learn how
            to create a budget that works for you, optimize your spending, and
            achieve your financial goals this year.
          </p>
        </div>
      </div>
      {/* Card 2 */}
      <div className=" rounded-2xl overflow-hidden">
        <img
          src="https://cdn.prod.website-files.com/67721265f59069a5268af347/6778693054f080d2a033ad01_blog%20thumbnail.webp"
          alt="Investment Strategies"
          className="w-full h-60 object-cover rounded-2xl"
        />
        <div className="p-6">
          <h3 className="text-lg font-semibold mb-2">
            Top Investment Strategies for Long-Term Growth
          </h3>
          <p className="text-gray-600 text-sm">
            Discover the best investment strategies to build and sustain your
            wealth over time. From stocks to bonds.
          </p>
        </div>
      </div>
      {/* Card 3 */}
      <div className=" rounded-2xl  overflow-hidden">
        <img
          src="https://cdn.prod.website-files.com/67721265f59069a5268af347/677869f58437826b2f3372d6_blog%20thumbnail.webp"
          alt="Cryptocurrency"
          className="w-full h-60  object-cover rounded-2xl"
        />
        <div className="p-6">
          <h3 className="text-lg font-semibold mb-2">
            Understanding Cryptocurrency: What You Need to Know
          </h3>
          <p className="text-gray-600 text-sm">
            Cryptocurrency continues to make headlines, but what does it mean
            for your finances? Get a clear understanding of the risks.
          </p>
        </div>
      </div>
    </div>
    <div className="flex justify-center">
      <button className="bg-[#FB4D17] text-white font-semibold px-6 py-3 rounded-full hover:bg-orange-600 transition">
        See More →
      </button>
    </div>
  </section>
</div>

    </>
  );
}
