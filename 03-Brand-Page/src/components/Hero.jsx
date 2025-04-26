const Hero = () => {
    return (
      <main className="flex items-center h-[calc(100vh-72px)] justify-center mx-auto my-0 max-w-[1280px] px-32">
        <div className="flex flex-col gap-9">
          <h1 className="font-extrabold text-8xl leading-[102px]">
            YOUR FEET DESERVE THE BEST
          </h1>
  
          <p className="font-semibold text-[#2e2e2e] max-w-[400px]">
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES. YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.
          </p>
  
          <div className="flex gap-10">
            <button className="bg-[#d01c28] text-white px-4 py-2 h-8 font-medium">
              Shop Now
            </button>
            <button className="text-[#2e2e2e] border border-gray-500 px-4 py-2 h-8 font-medium">
              Category
            </button>
          </div>
  
          <div className="mt-6">
            <p className="text-sm mb-2">Also Available On</p>
            <div className="flex gap-4">
              <img src="/images/daraz.svg" alt="daraz" className="w-12 h-8" />
              <img src="/images/telemart.png" alt="telemart" className="w-8 h-8" />
            </div>
          </div>
        </div>
  
        <div className="flex justify-center items-center w-[100%]">
          <img src="/images/hero-image.png" alt="Hero" className="w-full" />
        </div>
      </main>
    );
  };
  
  export default Hero;
  