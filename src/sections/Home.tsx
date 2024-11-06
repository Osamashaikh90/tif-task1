import pizzaImg from "../assets/images/pizza.jpeg";
import vector from "../assets/images/vector.png";
import logo from "../assets/images/logo.png";

const Home = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 h-screen md:h-[100vh]">
      <div className="flex flex-col order-2 gap-10 px-8 py-6 md:gap-28 md:px-36 md:py-0 md:order-none text-center md:text-left">
        <img src={logo} alt="logo" className="hidden w-16 h-16 mt-4 md:block md:w-24 md:h-20 md:mt-10" />
        <div className="flex flex-col gap-6 md:gap-10 mt-[75px] md:mt-0">
          <h1 className="text-4xl font-bold md:text-6xl flex flex-col gap-2  text-[#0e2368]">
            <span className="block ">Discover the</span>
            <span className="block">
              <span className="text-red-500">Best</span> Food
            </span>
            <span className="block">and Drinks</span>
          </h1>
          <p className="text-sm md:text-base  text-[#444957]" >
            Naturally made Healthcare Products for the <br className="hidden md:block" /> better care & support of your body.
          </p>
          <span>
          <button className="px-5 md:px-9 py-2.5 md:py-3.5 text-white bg-red-500 rounded-full">
            Explore Now
          </button></span>
        </div>
      </div>

      <div className="relative flex items-center justify-center order-1 md:justify-end md:mt-0 md:order-none">
        <img src={pizzaImg} className="w-full md:w-[97%] rounded-bl-[20%] md:rounded-bl-[30%]" alt="pizza pic" />
        <img src={vector} className="absolute top-0 md:-top-1 w-[100%] md:h-[105%] h-[110%]" />
        <button className="absolute top-4 right-4 md:top-10 md:right-10 px-2.5 py-1 md:px-3 md:py-1 text-xs md:text-sm text-white bg-transparent border border-white rounded-full">
          Get in touch
        </button>
      </div>
    </section>
  );
};

export default Home;
