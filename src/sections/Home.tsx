import pizzaImg from "../assets/images/pizza.jpeg"
import vector from "../assets/images/vector.png"
import logo from "../assets/images/logo.png"
const Home = () => {
  return (
    <section className="grid h-screen grid-cols-2">
      <div className="flex flex-col gap-40 px-32">
        <img src={logo} alt="logo" className="w-20 h-16 mt-10"/>
        <div className="flex flex-col gap-20">
        <h1>Discover the <br/> 
        <span className="text-red-500 ">Best</span> Food <br/> and Drinks</h1>
        <p>Naturally made Healthcare Products for the <br/> better care & support of your body.</p>
        <button className="text-white bg-red-500 w-[30%] py-1.5 px-3 rounded-full" >Explore Now</button>
        </div>
      </div>
      <div className="relative flex items-start justify-end ">
      <img src={pizzaImg} className="w-[85%] h-screen rounded-bl-[30%]" alt="pizza pic"/>
      <img src={vector} className="absolute -top-1  h-[105%]" />
      <button className="absolute px-3 py-1 text-white bg-transparent border rounded-full right-10 top-10">Get in touch</button>
      </div>
      
    </section>
  )
}

export default Home