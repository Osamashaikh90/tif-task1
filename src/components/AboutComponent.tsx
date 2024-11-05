import aboutImg from "../assets/images/image.png"
const AboutComponent = () => {
  return (
    <div className="grid grid-cols-2 gap-5 px-52 bg-custom-gradient">
      <img src={aboutImg} alt=""  className="h-[468px]"/>
      <div className="flex flex-col items-start justify-center gap-5 mr-5">
        <h1>Discover the </h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur et culpa provident maxime vitae, totam fugit reiciendis nobis repellendus excepturi quia ipsam autem, veniam explicabo in officiis quod ex accusamus!</p>
        <button className="text-white bg-red-500 w-[30%] py-1.5 px-3 rounded-full" >Explore Now</button>
        </div>
    </div>
  )
}

export default AboutComponent