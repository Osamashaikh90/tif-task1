import logo from "../assets/images/logo.png";
import { SlSocialInstagram } from "react-icons/sl";
import { TiSocialTwitter, TiSocialFacebook } from "react-icons/ti";

const Footer = () => {
  const data = [
    {
      id: 1,
      title: "Contact Us",
      childrens: [
        "Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market, XYZ-343434",
        "example2002@gmail.com",
        "(904) 443-0304",
      ],
    },
    {
      id: 2,
      title: "More",
      childrens: ["About Us", "Products", "Career", "Contact Us"],
    },
  ];

  return (
    <footer className="grid grid-cols-1 md:grid-cols-3 py-16 px-8 md:px-32 md:py-20 bg-custom-gradient gap-10 text-center md:text-left">
      {/* Logo Section */}
      <div className="flex items-center justify-center md:justify-start">
        <img src={logo} alt="Logo" className="w-24 h-20 md:w-40 md:h-32" />
      </div>

      {/* Contact & More Sections */}
      <div className="grid grid-cols-1 md:grid-cols-3 md:col-span-2 gap-5 md:gap-28 text-left ">
        {data.map((item) => (
          <div
            key={item.id}
            className={`flex flex-col gap-4 ${
              item.id === 2 ? "md:ml-10" : ""
            }`}
          >
            <h3 className="text-[#0e2368] font-bold">{item.title}</h3>
            <div className="flex flex-col gap-3 text-[#646874] text-sm">
              {item.childrens.map((elem, i) => (
                <span key={i}>{elem}</span>
              ))}
            </div>
          </div>
        ))}

        {/* Social Links Section */}
        <div className="flex flex-col items-center gap-4 ">
          <h3 className="text-[#0e2368] font-bold hidden md:block">
            Social Links
          </h3>
          <div className="flex flex-col md:justify-between md:h-full items-center">
            <span className="flex items-center gap-5 text-[#0e2368] order-2 md:order-1">
              <SlSocialInstagram size={22} />
              <TiSocialTwitter size={25} />
              <TiSocialFacebook size={25} />
            </span>
            <span className="text-[#828b9c] text-sm mt-4 md:mt-2 md:order-2 order-1 mb-3 md:mb-0">
              © 2024 Food Truck Example
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
