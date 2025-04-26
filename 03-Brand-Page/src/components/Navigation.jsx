const Navigation = () => {
    return (
      <nav className="container max-w-[1280px] mx-auto flex justify-around items-center h-[72px]">
        <div className="logo">
          <img src="/images/brand_logo.png" alt="logo" />
        </div>
  
        <ul className="flex gap-8 list-none text-black font-medium">
          <li><a href="#">Menu</a></li>
          <li><a href="#">Location</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
  
        <button className="bg-red-500 text-white px-4 py-1 h-8 font-medium rounded hover:bg-red-600 transition">
          Login
        </button>
      </nav>
    );
  };
  
  export default Navigation;
  