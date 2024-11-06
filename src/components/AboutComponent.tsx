import aboutImg from "../assets/images/image.png";

const AboutComponent = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:mt-60 mt-20 px-8 md:px-52 bg-custom-gradient">
      <img src={aboutImg} alt="About us image" className="h-[468px] hidden md:block " />

      <div className="flex flex-col items-center md:items-start justify-center gap-5 mx-auto text-center py-20 md:py-0 md:text-left ">
        <h1 className="text-[#0e2368] text-4xl md:text-5xl font-semibold">About Us</h1>
        <p className="text-[#444957]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur et culpa provident maxime vitae, totam fugit
          reiciendis nobis repellendus excepturi quia ipsam autem, veniam explicabo in officiis quod ex accusamus!
        </p>
        <button className="text-white bg-red-500 py-1.5 px-6 rounded-full">Read More</button>
      </div>
    </div>
  );
};

export default AboutComponent;
