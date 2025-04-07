import { React } from "react";
import { AiFillStar } from "react-icons/ai";
import iphone15 from "../../../assist/productsBrand/iphone15.png";
import yamahaR15 from "../../../assist/productsBrand/r15.png";
import productImg from "../../../assist/productsBrand/laptop.png";
import royalEnfield from "../../../assist/productsBrand/RoyalEnfield.png";
import nokia3360 from "../../../assist/productsBrand/Nokia-3360.png";
import watch from "../../../assist/productsBrand/watch.png";
import shose from "../../../assist/productsBrand/shose.png";
import tShirt from "../../../assist/productsBrand/t-shirt.png";

function PickForYou() {
  const pickForYouData = [
    {
      key: 1,
      name: "Trsoye 6604 Stainless Steel Quartz Wrist Watch For Men - Rose Gold",
      image: watch,
      mainPrice: "1,55000",
      price: "1,65000",
      discount: "-12%",
      review: "4.8",
      pcLeft: 40,
    },
    {
      key: 2,
      name: "Royal Enfield Hunter 350",
      image: royalEnfield,
      mainPrice: "290,000",
      price: "300,000",
      discount: "-12%",
      review: "4.8",
      pcLeft: 40,
    },
    {
      key: 3,
      name: "Apple iPhone 15 Pro Max 256GB",
      image: iphone15,
      mainPrice: "174,990",
      price: "195,990",
      discount: "-11%",
      review: "4.8",
      pcLeft: 0,
    },
    {
      key: 4,
      name: "Full Sleeve Casual Shirt For Man - Shirt For Men - Shirt For Men - Shirt",
      image: tShirt,
      mainPrice: "499",
      price: "1,600",
      discount: "-11%",
      review: "4.5",
      pcLeft: 40,
    },
    {
      key: 5,
      name: "Yamaha R15 M",
      image: yamahaR15,
      mainPrice: "490,000",
      price: "500,000",
      discount: "-10%",
      review: "4.9",
      pcLeft: 40,
    },
    {
      key: 6,
      name: "Men Shoes Yez Slip on Fashion Sneakers Male Sport Running Shoes Breathable Training Walking Tennis Shoes",
      image: shose,
      mainPrice: "2,199",
      price: "2,999",
      discount: "-12%",
      review: "4.7",
      pcLeft: 40,
    },
    {
      key: 7,
      name: "MacBook Air 13 2020 M1 (8/256 GB)",
      image: productImg,
      mainPrice: "99,999",
      price: "113,999",
      discount: "-12%",
      review: "4.8",
      pcLeft: 40,
    },
    {
      key: 8,
      name: "Nokia 3360 Dual SIM Feature Phone",
      image: nokia3360,
      mainPrice: "8,999",
      price: "10,999",
      discount: "-12%",
      review: "4.8",
      pcLeft: 40,
    },
    {
      key: 9,
      name: "Men Shoes Yez Slip on Fashion Sneakers Male Sport Running Shoes Breathable Training Walking Tennis Shoes",
      image: shose,
      mainPrice: "2,199",
      price: "2,999",
      discount: "-12%",
      review: "4.7",
      pcLeft: 40,
    },
    {
      key: 10,
      name: "Apple iPhone 15 Pro Max 256GB",
      image: iphone15,
      mainPrice: "174,990",
      price: "195,990",
      discount: "-11%",
      review: "4.8",
      pcLeft: 40,
    },
    {
      key: 11,
      name: "Yamaha R15 M",
      image: yamahaR15,
      mainPrice: "490,000",
      price: "500,000",
      discount: "-10%",
      review: "4.9",
      pcLeft: 40,
    },
    {
      key: 12,
      name: "Royal Enfield Hunter 350",
      image: royalEnfield,
      mainPrice: "290,000",
      price: "300,000",
      discount: "-12%",
      review: "4.8",
      pcLeft: 40,
    },
    {
      key: 13,
      name: "Nokia 3360 Dual SIM Feature Phone",
      image: nokia3360,
      mainPrice: "8,999",
      price: "10,999",
      discount: "-12%",
      review: "4.8",
      pcLeft: 40,
    },
    {
      key: 14,
      name: "Trsoye 6604 Stainless Steel Quartz Wrist Watch For Men - Rose Gold",
      image: watch,
      mainPrice: "1,55000",
      price: "1,65000",
      discount: "-12%",
      review: "4.8",
      pcLeft: 40,
    },
    {
      key: 15,
      name: "Men Shoes Yez Slip on Fashion Sneakers Male Sport Running Shoes Breathable Training Walking Tennis Shoes",
      image: shose,
      mainPrice: "2,199",
      price: "2,999",
      discount: "-12%",
      review: "4.7",
      pcLeft: 40,
    },
    {
      key: 16,
      name: "MacBook Air 13 2020 M1 (8/256 GB)",
      image: productImg,
      mainPrice: "99,999",
      price: "113,999",
      discount: "-12%",
      review: "4.8",
      pcLeft: 40,
    },
    {
      key: 17,
      name: "Trsoye 6604 Stainless Steel Quartz Wrist Watch For Men - Rose Gold",
      image: watch,
      mainPrice: "1,55000",
      price: "1,65000",
      discount: "-12%",
      review: "4.8",
      pcLeft: 40,
    },
    {
      key: 18,
      name: "Royal Enfield Hunter 350",
      image: royalEnfield,
      mainPrice: "290,000",
      price: "300,000",
      discount: "-12%",
      review: "4.8",
      pcLeft: 40,
    },
    {
      key: 19,
      name: "Apple iPhone 15 Pro Max 256GB",
      image: iphone15,
      mainPrice: "174,990",
      price: "195,990",
      discount: "-11%",
      review: "4.8",
      pcLeft: 0,
    },
    {
      key: 20,
      name: "Full Sleeve Casual Shirt For Man - Shirt For Men - Shirt For Men - Shirt",
      image: tShirt,
      mainPrice: "499",
      price: "1,600",
      discount: "-11%",
      review: "4.5",
      pcLeft: 40,
    },
    {
      key: 21,
      name: "Yamaha R15 M",
      image: yamahaR15,
      mainPrice: "490,000",
      price: "500,000",
      discount: "-10%",
      review: "4.9",
      pcLeft: 40,
    },
    {
      key: 22,
      name: "Men Shoes Yez Slip on Fashion Sneakers Male Sport Running Shoes Breathable Training Walking Tennis Shoes",
      image: shose,
      mainPrice: "2,199",
      price: "2,999",
      discount: "-12%",
      review: "4.7",
      pcLeft: 40,
    },
    {
      key: 23,
      name: "MacBook Air 13 2020 M1 (8/256 GB)",
      image: productImg,
      mainPrice: "99,999",
      price: "113,999",
      discount: "-12%",
      review: "4.8",
      pcLeft: 40,
    },
    {
      key: 24,
      name: "Nokia 3360 Dual SIM Feature Phone",
      image: nokia3360,
      mainPrice: "8,999",
      price: "10,999",
      discount: "-12%",
      review: "4.8",
      pcLeft: 40,
    },
    {
      key: 25,
      name: "Men Shoes Yez Slip on Fashion Sneakers Male Sport Running Shoes Breathable Training Walking Tennis Shoes",
      image: shose,
      mainPrice: "2,199",
      price: "2,999",
      discount: "-12%",
      review: "4.7",
      pcLeft: 40,
    },
    {
      key: 26,
      name: "Apple iPhone 15 Pro Max 256GB",
      image: iphone15,
      mainPrice: "174,990",
      price: "195,990",
      discount: "-11%",
      review: "4.8",
      pcLeft: 40,
    },
    {
      key: 27,
      name: "Yamaha R15 M",
      image: yamahaR15,
      mainPrice: "490,000",
      price: "500,000",
      discount: "-10%",
      review: "4.9",
      pcLeft: 40,
    },
    {
      key: 28,
      name: "Royal Enfield Hunter 350",
      image: royalEnfield,
      mainPrice: "290,000",
      price: "300,000",
      discount: "-12%",
      review: "4.8",
      pcLeft: 40,
    },
    {
      key: 29,
      name: "Nokia 3360 Dual SIM Feature Phone",
      image: nokia3360,
      mainPrice: "8,999",
      price: "10,999",
      discount: "-12%",
      review: "4.8",
      pcLeft: 40,
    },
    {
      key: 30,
      name: "Trsoye 6604 Stainless Steel Quartz Wrist Watch For Men - Rose Gold",
      image: watch,
      mainPrice: "1,55000",
      price: "1,65000",
      discount: "-12%",
      review: "4.8",
      pcLeft: 40,
    },
    {
      key: 31,
      name: "Men Shoes Yez Slip on Fashion Sneakers Male Sport Running Shoes Breathable Training Walking Tennis Shoes",
      image: shose,
      mainPrice: "2,199",
      price: "2,999",
      discount: "-12%",
      review: "4.7",
      pcLeft: 40,
    },
    {
      key: 32,
      name: "MacBook Air 13 2020 M1 (8/256 GB)",
      image: productImg,
      mainPrice: "99,999",
      price: "113,999",
      discount: "-12%",
      review: "4.8",
      pcLeft: 40,
    },
    {
      key: 33,
      name: "Trsoye 6604 Stainless Steel Quartz Wrist Watch For Men - Rose Gold",
      image: watch,
      mainPrice: "1,55000",
      price: "1,65000",
      discount: "-12%",
      review: "4.8",
      pcLeft: 40,
    },
    {
      key: 34,
      name: "Royal Enfield Hunter 350",
      image: royalEnfield,
      mainPrice: "290,000",
      price: "300,000",
      discount: "-12%",
      review: "4.8",
      pcLeft: 40,
    },
    {
      key: 35,
      name: "Apple iPhone 15 Pro Max 256GB",
      image: iphone15,
      mainPrice: "174,990",
      price: "195,990",
      discount: "-11%",
      review: "4.8",
      pcLeft: 0,
    },
  ];
  return (
    <div className="mb-[20px] tablet:w-[1300px] w-[94%] mx-auto flex">
      <div className="tablet:w-[99%] w-[100%] flex items-center rounded-[5px] bg-[#fff] mx-auto  pt-[30px] pb-[20px] shadow-[0_0_2px_0_#00000040]">
        <div className="w-full tablet5:px-[20px] px-[10px]">
          {/* title */}
          <div className="flex justify-between items-center pb-[20px] px-[10px]">
            <h1 className="tablet4:text-[25px] text-[20px] font-[600]">
              Pick For You
            </h1>
            <button className="bg-[#FBB03B] text-white tablet4:text-[16px] text-[14px] px-[13px] py-[4px] rounded-[5px]">
              See All
            </button>
          </div>
          <div className="w-full tablet:w-[1250px] grid lg:grid-cols-4 tablet:grid-cols-5 sbrand2:grid-cols-3 sm:grid-cols-2 grid-cols-2 mx-auto">
            {pickForYouData.map((key) => {
              return (
                <Product
                  key={key.key}
                  name={key.name}
                  image={key.image}
                  mainPrice={key.mainPrice}
                  price={key.price}
                  discount={key.discount}
                  review={key.review}
                  pcLeft={key.pcLeft}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

function Product(props) {
  return (
    <div
      className="msm:w-[226px] tablet5:w-[160px] tablet6:w-[150px] w-[130px] msm:h-[370px] tablet5:h-[275px] tablet6:h-[255px] h-[235px] rounded-[7px] overflow-hidden bg-white relative my-[3px] cursor-pointer mx-auto msm:mb-[20px] mb-[10px]"
      style={{ boxShadow: "0 0 2px 0 #00000040" }}
    >
      <div className="w-full msm:mb-[10px] mb-[4px]">
        <img src={props.image} className="w-full" alt="" />
      </div>
      <div className="text-black msm:px-[12px] px-[10px]">
        <p className="msm:text-[16px] text-[12px] font-[500] ProductCardName">
          {props.name}
        </p>
        <h1 className="msm:text-[20px] text-[15px] font-[600] text-[#000000] ml-[-2px] msm:pt-[4px] pt-0">
          <span className="pr-[3px]">৳</span>
          {props.mainPrice}
        </h1>
        <div className="flex items-center msm:text-[14px] text-[12px] msm:pt-[4px] pt-0">
          <s className="text-[#9f9f9f]">
            <span className="pr-[0]">৳</span>
            {props.price}
          </s>
          <span className="text-[#000] pl-[5px]">{props.discount}</span>
        </div>
      </div>
      <div className="flex items-center absolute tablet5:bottom-[8px] bottom-[6px] right-[10px] leading-[14px]">
        <AiFillStar className="text-[#FBB03B] msm:text-[17px] text-[15px] mr-[5px]" />
        <p className="text-black msm:text-[14px] text-[13px] font-[500]">
          {props.review}
        </p>
      </div>
      <div className="flex items-center absolute tablet5:bottom-[8px] bottom-[4px] tablet5:left-[10px] left-[10px]">
        <p className="text-black msm:text-[14px] text-[13px] font-[500] cursor-default">
          {props.pcLeft === 0 ? "Soldout" : props.pcLeft + "pc left"}
        </p>
      </div>
    </div>
  );
}

export default PickForYou;
