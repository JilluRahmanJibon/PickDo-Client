import { React } from "react";
import iphone15 from "../../../assist/productsBrand/iphone15.png";
import yamahaR15 from "../../../assist/productsBrand/r15.png";
import productImg from "../../../assist/productsBrand/laptop.png";
import royalEnfield from "../../../assist/productsBrand/RoyalEnfield.png";
import nokia3360 from "../../../assist/productsBrand/Nokia-3360.png";
import watch from "../../../assist/productsBrand/watch.png";
import shose from "../../../assist/productsBrand/shose.png";
import tShirt from "../../../assist/productsBrand/t-shirt.png";
import { AiFillStar } from "react-icons/ai";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Products() {
  const productData = [
    {
      key: 1,
      name: "Apple iPhone 15 Pro Max 256GB",
      image: iphone15,
      mainPrice: "174,990",
      price: "195,990",
      discount: "-11%",
      review: "4.8",
      pcLeft: 40,
    },
    {
      key: 2,
      name: "Yamaha R15 M",
      image: yamahaR15,
      mainPrice: "490,000",
      price: "500,000",
      discount: "-10%",
      review: "4.9",
      pcLeft: 40,
    },
    {
      key: 3,
      name: "Royal Enfield Hunter 350",
      image: royalEnfield,
      mainPrice: "290,000",
      price: "300,000",
      discount: "-12%",
      review: "4.8",
      pcLeft: 40,
    },
    {
      key: 4,
      name: "Nokia 3360 Dual SIM Feature Phone",
      image: nokia3360,
      mainPrice: "8,999",
      price: "10,999",
      discount: "-12%",
      review: "4.8",
      pcLeft: "40",
      pcLeft: 40,
    },
    {
      key: 5,
      name: "Trsoye 6604 Stainless Steel Quartz Wrist Watch For Men - Rose Gold",
      image: watch,
      mainPrice: "1,55000",
      price: "1,65000",
      discount: "-12%",
      review: "4.8",
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
      name: "Full Sleeve Casual Shirt For Man - Shirt For Men - Shirt For Men - Shirt",
      image: tShirt,
      mainPrice: "499",
      price: "1,600",
      discount: "-11%",
      review: "4.5",
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
      pcLeft: "40",
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
  ];
  let settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToScroll: 3,
    slidesToShow: 3,
    nextArrow: <NextButton />,
    prevArrow: <PrevButton />,
  };
  let settings1 = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToScroll: 4,
    slidesToShow: 5,
    nextArrow: <NextButton />,
    prevArrow: <PrevButton />,
  };
  let settings2 = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToScroll: 4,
    slidesToShow: 4,
    nextArrow: <NextButton />,
    prevArrow: <PrevButton />,
  };
  let settings3 = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToScroll: 2,
    slidesToShow: 3,
    nextArrow: <NextButton />,
    prevArrow: <PrevButton />,
  };
  let settings4 = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToScroll: 2,
    slidesToShow: 3,
    nextArrow: <NextButton />,
    prevArrow: <PrevButton />,
  };

  return (
    <div className="tablet:w-[59%] sbrand4:w-[100%] w-[94%] tablet4:h-[500px] h-[] flex items-center rounded-[5px] bg-[#fff] mx-auto shadow-[0_0_2px_0_#00000040] py-[20px]">
      <div className="w-full tablet5:px-[20px] px-[10px]">
        {/* title */}
        <div className="flex justify-between items-center pb-[20px] px-[10px]">
          <h1 className="tablet4:text-[25px] text-[20px] font-[600]">
            New Product
          </h1>
          <button className="bg-[#FBB03B] text-white tablet4:text-[16px] text-[14px] px-[13px] py-[4px] rounded-[5px]">
            See All
          </button>
        </div>
        {/* product */}
        <div className="w-full flex overflow-hidden">
          <Slider
            {...settings}
            className="w-[100%] tablet:!block !hidden mx-auto"
          >
            {productData.map((key) => {
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
          </Slider>
          <Slider
            {...settings1}
            className="w-[1218px] tablet:!hidden tablet2:!block !hidden mx-auto"
          >
            {productData.map((key) => {
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
          </Slider>
          <Slider
            {...settings2}
            className="w-[965px] tablet2:!hidden tablet3:!block !hidden mx-auto"
          >
            {productData.map((key) => {
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
          </Slider>
          <Slider
            {...settings3}
            className="w-[720px] tablet3:!hidden tablet4:!block !hidden mx-auto"
          >
            {productData.map((key) => {
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
          </Slider>
          <Slider
            {...settings4}
            className="w-[505px] tablet4:!hidden tablet5:!block !hidden mx-auto"
          >
            {productData.map((key) => {
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
          </Slider>
          <div className="max-h-[100%] tablet5:hidden flex overflow-x-auto bottomScrollbar">
            {productData.map((key) => {
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
      className="tablet4:w-[226px] tablet5:w-[160px] min-w-[130px] tablet4:h-[370px] tablet5:h-[265px] h-[235px] rounded-[7px] overflow-hidden bg-white relative my-[3px] cursor-pointer tablet5:leading-[1.4] leading-[19px] tablet5:mx-auto mx-[3px]"
      style={{ boxShadow: "0 0 2px 0 #00000040" }}
    >
      {/* <div className=" bg-[#FBB03B] absolute top-0 left-0 w-[100px] h-[30px] flex justify-center items-center rounded-br-[15px]">
      <p className="text-[17px] text-white">{props.discount} off</p>
    </div> */}

      <div className="w-full tablet4:mb-[10px] mb-[4px]">
        <img src={props.image} className="w-full" alt="" />
      </div>
      <div className="text-black tablet4:px-[12px] px-[10px]">
        <p className="tablet4:text-[16px] text-[12px] font-[500] ProductCardName">
          {props.name}
        </p>
        <h1 className="tablet4:text-[20px] text-[15px] font-[600] text-[#000000] ml-[-2px] tablet4:pt-[4px] pt-0">
          <span className="pr-[3px]">৳</span>
          {props.mainPrice}
        </h1>
        <div className="flex items-center tablet4:text-[14px] text-[12px] tablet4:pt-[4px] pt-0">
          <s className="text-[#9f9f9f]">
            <span className="pr-[0]">৳</span>
            {props.price}
          </s>
          <span className="text-[#000] pl-[5px]">{props.discount}</span>
        </div>
      </div>
      <div className="flex items-center absolute bottom-[8px] right-[10px] leading-[14px]">
        <AiFillStar className="text-[#FBB03B] tablet4:text-[17px] text-[15px] mr-[5px]" />
        <p className="text-black tablet4:text-[14px] text-[13px] font-[500]">
          {props.review}
        </p>
      </div>
      {/* <div className="flex items-center absolute tablet5:bottom-[8px] bottom-[4px] tablet5:left-[10px] left-[10px]">
        <p className="text-black tablet4:text-[14px] text-[13px] font-[500] cursor-default">
          {props.pcLeft === 0 ? "Soldout" : props.pcLeft + "pc left"}
        </p>
      </div> */}
    </div>
  );
}
function NextButton() {
  return <div className="hidden"></div>;
}
function PrevButton() {
  return <div className="hidden"></div>;
}
export default Products;
