import { React } from "react";
import Navber from "../components/Navber/Navber";
import NavberBottom from "../components/Navber/NavberBottom";
import BannerCetagory from "../components/Home/BannerCetagory/BannerCetagory";
import ServiceCetagory from "../components/Home/Service's/ServiceCetagory";
import ProductsBrand from "../components/Home/ProductsBrand/ProductsBrand";
import Trending from "../components/Home/Trending/Trending";
import PickForYou from "../components/Home/PickForYou/PickForYou";

function Home() {
  return (
    <div className="mb-[70px] w-full">
      <div className="hidden md:flex">
        <Navber />
      </div>
      <BannerCetagory />
     
      <ServiceCetagory />

      <Trending />
      <ProductsBrand />
      <PickForYou />

      <NavberBottom />
    </div>
  );
}

export default Home;
