import React, { useRef, useState } from "react";
import img1 from "../../assist/product/t_shirt_c1.jpg";
import img2 from "../../assist/product/t_shirt_c2.jpg";
import img3 from "../../assist/product/t_shirt_c3.jpg";
import img4 from "../../assist/product/t_shirt_c4.jpg";
import img5 from "../../assist/product/t_shirt_c5.jpg";
import img6 from "../../assist/product/t_shirt_c6.jpg";
import img7 from "../../assist/product/t_shirt_c7.jpg";

import daysReturns from "../../assist/productIcon/7DaysReturns.png";
import warranty from "../../assist/productIcon/Warranty.png";

import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { PiShareFatBold } from "react-icons/pi";

import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";

import { FiYoutube } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { RiFacebookBoxLine } from "react-icons/ri";
import { RiRocketLine } from "react-icons/ri";
import ReactImageMagnify from "react-image-magnify";

function ProductMain() {
  const productImages = {
    id: 1,
    Tittle: "New tshirt For men",
    reviews: 5,
    price: 86,
    priceMain: 100,
    images: [
      {
        id: 1,
        image: img1,
      },
      {
        id: 2,
        image: img2,
      },
      {
        id: 3,
        image: img3,
      },
      {
        id: 4,
        image: img4,
      },
      {
        id: 5,
        image: img5,
      },
      {
        id: 6,
        image: img6,
      },
      {
        id: 7,
        image: img7,
      },
    ],
  };

  const [mainImage, setMainImage] = useState(productImages.images[0].image);
  const [mainImageID, setMainImageID] = useState(0);
  const ProductAllImages = productImages.images;
  const [firstImageBorder, setfirstImageBorder] = useState(1);

  // product QTY
  const setQTY = useRef(1);
  const [qty, setqty] = useState(setQTY.current);

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseHover = (e) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    setPosition({ x, y });

    setCursorPosition({ x: e.pageX - left, y: e.pageY - top });
  };

  return (
    <div className="w-full h-[100%] pt-[90px] pb-[30px] overflow-hidden">
      <div className="xl:w-[1188px] w-[96%] flex justify-between mx-auto h-full">
        {/* <div className="w-[462px] hidden">
          <div className="w-[462px] h-[462px] overflow-hidden">
            <img src={mainImage} className="w-full" />
          </div>
          <div className="w-[100%] h-[87px] flex justify-between">
            <Slider
              {...settings}
              className="w-[425px] mt-[10px] relative mx-auto"
            >
              {ProductAllImages.map((key) => {
                return (
                  <div
                    className="w-[70px] cursor-pointer py-[7px]"
                    onClick={() => {
                      setMainImage(key.image);
                    }}
                  >
                    <img
                      src={key.image}
                      className="w-[70px] mx-auto focus:border-[1px] focus:border-[#eb4444]"
                      onClick={() => {}}
                    />
                  </div>
                );
              })}
            </Slider>
          </div>
        </div> */}
        <div className="w-[562px] flex z-[1]">
          <div className="w-[100px] h-[100%] flex justify-between">
            <div className="w-[425px] h-[462px] relative mx-auto overflow-y-auto bottomScrollbar">
              {ProductAllImages.map((key) => {
                return (
                  <div
                    className={`w-[85px] flex justify-center items-center cursor-pointer py-[7px] border-[2px] border-transparent ${
                      key.id === firstImageBorder ? "!border-[#FBB03B]" : ""
                    } ${mainImageID === key.id ? "!border-[#FBB03B]" : ""}`}
                    onClick={() => {
                      setMainImage(key.image);
                      setMainImageID(key.id);
                      setfirstImageBorder(0);
                    }}
                  >
                    <div className="w-[70px] h-[70px] overflow-hidden">
                      <img src={key.image} className={`w-[100%] mx-auto`} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="w-[462px] h-[462px] relative">
            {/* <img src={mainImage} className="w-full" /> */}

            <div
              className=""
              onMouseEnter={() => setShowMagnifier(true)}
              onMouseLeave={() => setShowMagnifier(false)}
              onMouseMove={handleMouseHover}
            >
              <img
                className="w-[100%] h-[100%] boder-[2px] border-[#fff]"
                src={mainImage}
                alt=""
              />

              {showMagnifier && (
                <div
                  style={{
                    position: "absolute",
                    left: `${cursorPosition.x - 75}px`,
                    top: `${cursorPosition.y - 75}px`,
                    pointerEvents: "none",
                  }}
                >
                  <div
                    className="w-[150px] h-[150px] boder-[2px] border-[#fff]"
                    style={{
                      backgroundImage: `url(${mainImage})`,
                      backgroundPosition: `${position.x}% ${position.y}%`,
                    }}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
        <div
          className="h-[462px] ml-[25px] GeologicaFont relative"
          style={{ width: "-webkit-fill-available" }}
        >
          <div className="h-[20px] flex items-center">
            <div className="w-[85px] flex items-center justify-between text-[15px] text-[#FBB03B]">
              <FaStar className="" />
              <FaStar
                className={`${productImages.reviews < 2 ? "hidden" : ""}`}
              />
              <FaStar
                className={`${productImages.reviews < 3 ? "hidden" : ""}`}
              />
              <FaStar
                className={`${productImages.reviews < 4 ? "hidden" : ""}`}
              />
              <FaStar
                className={`${productImages.reviews < 5 ? "hidden" : ""}`}
              />
              <FaStarHalfAlt
                className={`${productImages.reviews === 5 ? "hidden" : ""} ${
                  productImages.reviews === 4 ? "hidden" : ""
                } ${productImages.reviews === 3 ? "hidden" : ""} ${
                  productImages.reviews === 2 ? "hidden" : ""
                } ${productImages.reviews === 1 ? "hidden" : ""}`}
              />
              <FaRegStar
                className={`${productImages.reviews === 4 ? "" : "hidden"}`}
              />
              <FaRegStar
                className={`${productImages.reviews < 4 ? "" : "hidden"}`}
              />
              <FaRegStar
                className={`${productImages.reviews < 4 ? "" : "hidden"} ${
                  productImages.reviews === 3 ? "" : "hidden"
                }`}
              />
              <FaRegStar
                className={`${productImages.reviews < 3 ? "" : "hidden"}`}
              />
              <FaRegStar
                className={`${productImages.reviews === 2 ? "" : "hidden"}`}
              />
              <FaRegStar
                className={`${productImages.reviews < 2 ? "" : "hidden"}`}
              />
              <FaRegStar
                className={`${productImages.reviews === 1 ? "" : "hidden"}`}
              />
            </div>
            <p className="flex items-center pl-[8px] text-[#545859]">
              <span className="pr-[5px]">{productImages.reviews}</span>
              <span className="pr-[5px]">Rating</span>
              <span className="pr-[5px] select-none">|</span>
              <span className="">Review</span>
            </p>
          </div>
          <div className="w-[320px] h-[120px] pt-[8px]">
            <h1 className="text-[20px] text-[#2A2E30] font-medium ml-[-1.5px] leading-[25px]">
              2024 New Excellent T-shirts Of Good Quality Men's half-sleeved
              T-shirts
              {/* {productImages.Tittle} */}
            </h1>
            {/* <h1 className="text-[27px] text-[#2A2E30] font-medium ml-[-1.5px] leading-[35px]">
            {productImages.Tittle}
          </h1> */}
            <p className="text-[#76797B] text-[18px] pt-[4px]">
              <span className="text-[#2A2E30]">In stock</span>. ships in 24
              hours
            </p>
          </div>
          <h1 className="text-[24px] text-[#2A2E30] font-medium ml-[-1.5px] pt-[5px]">
            <span>BD</span> <span className="text-[22px] ml-[-5px]">৳</span>{" "}
            {productImages.price}
          </h1>
          <s className="text-[18px] font-light text-[#868A8B]  leading-[0]">
            <span>BD</span> <span className="ml-[-5px]">৳</span>{" "}
            {productImages.priceMain}
          </s>
          <div className="flex items-center pt-[8px]">
            <p className="text-[20px] font-light leading-[30px] pr-[15px]">
              QTY:
            </p>

            <div className="flex justify-between text-[16px] w-[120px]">
              <div
                className={`w-[35px] h-[30px] ${
                  qty <= 1 ? "hidden" : "flex"
                } justify-center items-center cursor-pointer`}
                style={{ boxShadow: "0 0 2px 0 #00000040" }}
                onClick={() => {
                  if (setQTY.current <= 1) {
                    setQTY.current = 1;
                  } else {
                    setQTY.current = setQTY.current - 1;
                  }
                  setqty(setQTY.current);
                }}
              >
                <FaMinus className="text-[13px]" />
              </div>
              {/* desebled Minus Button */}
              <div
                className={`w-[35px] h-[30px] ${
                  qty <= 1 ? "flex" : "hidden"
                } text-[#00000054] justify-center items-center cursor-not-allowed`}
                style={{ boxShadow: "0 0 2px 0 #00000040" }}
              >
                <FaMinus className="text-[13px]" />
              </div>
              {/* QTY Of Product */}
              <p className=" text-[22px] flex cursor-default select-none">
                <span className={`${qty >= 10 ? "hidden" : ""}`}>0</span> {qty}
              </p>
              <div
                className={`w-[35px] h-[30px] ${
                  qty >= 5 ? "hidden" : "flex"
                } justify-center items-center cursor-pointer`}
                style={{ boxShadow: "0 0 2px 0 #00000040" }}
                onClick={() => {
                  setQTY.current = setQTY.current + 1;
                  setqty(setQTY.current);
                }}
              >
                <FaPlus className="text-[13px]" />
              </div>
              {/* desebled Plus Button */}
              <div
                className={`w-[35px] h-[30px] ${
                  qty >= 5 ? "flex" : "hidden"
                } text-[#00000054] justify-center items-center cursor-not-allowed`}
                style={{ boxShadow: "0 0 2px 0 #00000040" }}
              >
                <FaPlus className="text-[13px]" />
              </div>
            </div>
          </div>

          <div className="pt-[10px] flex justify-between items-center">
            <button className="text-[19px] rounded-[5px] font-medium bg-[#2A2E30] text-white py-[10px] px-[45px] mr-[10px] cursor-pointer">
              <span className="select-none">Buy Now</span>
            </button>
            <button className="text-[19px] rounded-[5px] font-medium bg-transparent border-[2px] border-[#2A2E30] text-[#2A2E30] py-[9px] px-[45px] mr-[10px] cursor-pointer">
              <span className="select-none">Add Cart</span>
            </button>
            <button className="text-[19px] rounded-[5px] flex items-center font-normal bg-transparent border-[2px] border-[#FBB03B] text-[#FBB03B] py-[9px] px-[20px] mr-[10px] cursor-pointer">
              <FaRegHeart className="pr-[5px] text-[25px]" />{" "}
              <span className="select-none">35</span>
            </button>
            <button className="text-[19px] rounded-[5px] flex items-center font-normal bg-transparent border-[2px] border-[#FBB03B] text-[#FBB03B] py-[9px] px-[20px] cursor-pointer">
              <PiShareFatBold className="pr-[5px] text-[25px]" />
              <span className="select-none">Share</span>
            </button>
          </div>
          <div className="flex justify-between w-full pt-[20px] GeologicaFont">
            <div className="w-[50%]">
              <p className="text-[20px] pb-[10px]">Service</p>
              <div className="flex items-center">
                <img
                  src={daysReturns}
                  className="w-[24px] h-[24px] mr-[10px] select-none"
                />
                <p className="text-[18px]">7 Days Returns</p>
              </div>
              <p className="text-[#868A8B] ml-[30px]">
                Change of mind is not applicable
              </p>

              <div className="flex items-center mt-[12px]">
                <img
                  src={warranty}
                  className="w-[24px] h-[24px] mr-[10px] select-none"
                />
                <p className="text-[18px]">Warranty not available</p>
              </div>
            </div>
            <div className="w-[50%]">
              <p className="text-[20px] pb-[5px]">Secure Payment</p>
              <p className="text-[#868A8B]">Multiple payment options</p>

              <p className="text-[20px] pt-[5px] pb-[5px]">Share To:</p>
              <div className="flex">
                <div className="bg-[#2A2E30] w-[32px] h-[28px] flex justify-center items-center rounded-[5px] mr-[10px] cursor-pointer">
                  <FiYoutube className="text-white text-[19px]" />
                </div>
                <div className="bg-[#2A2E30] w-[32px] h-[28px] flex justify-center items-center rounded-[5px] mr-[10px] cursor-pointer">
                  <FaWhatsapp className="text-white text-[19px]" />
                </div>
                <div className="bg-[#2A2E30] w-[32px] h-[28px] flex justify-center items-center rounded-[5px] mr-[10px] cursor-pointer">
                  <FaInstagram className="text-white text-[19px]" />
                </div>
                <div className="bg-[#2A2E30] w-[32px] h-[28px] flex justify-center items-center rounded-[5px] cursor-pointer">
                  <RiFacebookBoxLine className="text-white text-[20px]" />
                </div>
              </div>
            </div>
          </div>

          <div className="absolute top-0 right-0 w-[280px] h-[240px] px-[10px] pt-[10px] bg-[#F5F7F7] rounded-[8px]">
            <div className="flex items-center justify-between text-[#2A2E30] border-b-[2px] border-[#00000036] pb-[10px] px-[3px]">
              <div className="font-light leading-[24px]">
                <p className="text-[#8F9393] text-[16px]">Store</p>
                <p className="text-[20px]">Next Day</p>
              </div>
              <div className="flex items-center">
                <RiRocketLine className="rotate-45 text-[23px] mr-[5px]" />
                <p className="font-medium text-[20px] pt-[5px]">Chat</p>
              </div>
            </div>
            <div className="flex justify-between px-[3px] pt-[15px]">
              <div
                className="w-[79px] h-[90px] relative bg-white text-center"
                style={{ boxShadow: "0px 0px 2px 0px #0000001f" }}
              >
                <p className="text-[#8F9393] font-light leading-[17px] pt-[10px]">
                  Seller Rating
                </p>
                <h1 className="bottom-[6px] absolute left-0 right-0 font-medium text-[22px]">
                  20%
                </h1>
              </div>
              <div
                className="w-[79px] h-[90px] relative bg-white text-center"
                style={{ boxShadow: "0px 0px 2px 0px #0000001f" }}
              >
                <p className="text-[#8F9393] font-light leading-[17px] pt-[10px]">
                  Ship on time
                </p>
                <h1 className="bottom-[6px] absolute left-0 right-0 font-medium text-[22px]">
                  25%
                </h1>
              </div>
              <div
                className="w-[79px] h-[90px] relative bg-white text-center"
                style={{ boxShadow: "0px 0px 2px 0px #0000001f" }}
              >
                <p className="text-[#8F9393] font-light leading-[17px] pt-[10px]">
                  Chat
                </p>
                <h1 className="bottom-[6px] absolute left-0 right-0 font-medium text-[22px]">
                  27%
                </h1>
              </div>
            </div>
            <div className="w-[100%] px-[3px] mt-[10px]">
              <button className="w-[100%] mx-auto text-[18px] font-normal bg-white rounded-[5px] py-[7px]">
                Store Visit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function NextButton(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute right-[-25px] top-[-3px] flex items-center justify-center bg-[#F5F5F5] w-[25px] h-[87px] z-[5] cursor-pointer"
      onClick={onClick}
    >
      <MdKeyboardArrowRight className="text-[25px] text-black" />
    </div>
  );
}
function PrevButton(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute left-[-25px] top-[-3px] flex items-center justify-center bg-[#F5F5F5] w-[25px] h-[87px] z-[5] cursor-pointer"
      onClick={onClick}
    >
      <MdKeyboardArrowLeft className="text-[25px] text-black" />
    </div>
  );
}

export default ProductMain;
