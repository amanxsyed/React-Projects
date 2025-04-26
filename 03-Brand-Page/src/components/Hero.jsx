const Hero = () => {
    return (
      <main className="flex items-center h-[85vh] justify-center mx-auto max-w-[1280px] my-0 px-40">
        <div className="flex flex-col mb-16 gap-4 mt-20">
          <h1 className="font-extrabold text-8xl leading-[90px]">
            YOUR FEET DESERVE THE BEST
          </h1>
  
          <p className="font-semibold text-[#2e2e2e] max-w-[400px] gap-6">
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES. YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.
          </p>
  
          <div className="flex gap-10 items-center ">
            <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 h-8 font-medium flex items-center rounded transition cursor-pointer">
              Shop Now
            </button>
            <button className="text-[#2e2e2e] border border-gray-500 px-4 py-2 h-8 font-medium flex items-center rounded transition cursor-pointer">
              Category
            </button>
          </div>
  
          <div>
            <p className="text-sm">Also Available On</p>
            <div className="flex gap-4 mt-2">
              <img src="/images/daraz.svg" alt="daraz" className="w-12 h-8" />
              <img src="/images/telemart.png" alt="telemart" className="w-8 h-8" />
            </div>
          </div>
        </div>
  
        <div className="flex justify-center items-center w-full h-full mb-0">
          <img src="/images/hero-image.png" alt="Hero"    />
        </div>
      </main>
    );
  };
  
  export default Hero;
  