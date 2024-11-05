import logo from "../assets/images/logo.png";
import { SlSocialInstagram} from "react-icons/sl";
import { TiSocialTwitter,TiSocialFacebook} from "react-icons/ti";
const Footer = () => {
  const data = [
    {
      id:1,
    title:"Contact Us",
    childrens:[
      "Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market, XYZ-343434",
      "example2002@gmail.com",
      "(904) 443-0304"
    ]},
    {
      id:2,
    title:"More",
    childrens:[
      "About Us",
      "Products",
      "Career",
      "Contact Us"
    ]},
    // {
    //   id:3,
    // title:"Social Links",
    // childrens:[
    //   "About Us",
    //   "Products",
      
    // ]},
  ];
  return (
    <footer className="grid grid-cols-3 p-20 bg-custom-gradient">
      <div className="flex items-center col-span-1 px-10">
      <img src={logo} alt="" className="w-40 h-32"/>
      </div>
      <div className="grid grid-cols-3 col-span-2 gap-28">
     {data?.map((item)=>{
      return(
        <div key={item.id} className={`flex h-full flex-col gap-4 ${item.id === 2 ?"ml-10 ":""}`}>
          <h3 className="text-[#0e2368]">{item.title}</h3>
          <div className="flex flex-col justify-between gap-3 text-[#646874] text-sm">
          {item.childrens.map((elem,i)=>{
            return(
              <span key={i}>{elem}</span>
            )
          })}
          </div>
        </div>
      )
     }) 
     }
      <div className="flex flex-col gap-4">
  <h3 className="text-[#0e2368]">Social Links</h3>
  <div className="flex flex-col justify-between h-full ;
]">
    <span className="flex items-center justify-start gap-5 text-[#0e2368]">
      <SlSocialInstagram  size={22}/>
      <TiSocialTwitter  size={25}/>
      <TiSocialFacebook  size={25}/>
    </span>
    <span className="text-[#828b9c] text-sm">© 2024 Food Truck Example</span>
  </div>
</div>
     </div>
    </footer>
  )
}

export default Footer