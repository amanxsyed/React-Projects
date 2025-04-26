const Hero = () => {
    return (
      <main className="container max-w-[1280px] mx-auto flex items-center h-[calc(100vh-72px)]">
        <div className="flex flex-col gap-9">
          <h1 className="font-extrabold leading-[102px] text-[108px]">
            YOUR FEET DESERVE THE BEST
          </h1>
  
          <p className="font-semibold text-gray-500 max-w-[400px]">
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES. YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.
          </p>
  
          <div className="flex gap-10">
            <button className="bg-red-500 text-white px-8 py-2 h-12 font-medium text-2xl rounded hover:bg-red-600 transition">
              Shop Now
            </button>
            <button className="border border-gray-500 text-gray-500 px-8 py-2 h-12 font-medium text-2xl rounded hover:bg-gray-100 transition">
              Category
            </button>
          </div>
  
          <div className="mt-6">
            <p className="text-sm mb-2">Also Available On</p>
            <div className="flex gap-4">
              <img src="/images/amazon.png" alt="amazon-logo" className="w-24" />
              <img src="/images/flipkart.png" alt="flipkart-logo" className="w-24" />
            </div>
          </div>
        </div>
  
        <div className="flex-1">
          <img src="/images/hero-image.png" alt="hero-image" className="w-full" />
        </div>
      </main>
    );
  };
  
  export default Hero;
  