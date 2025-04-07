import { React, useContext } from "react";
import { trandingContext } from "../../context/trandingContext";
// import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
import Slider from "react-slick";

function YouMayAlsoLike() {
  const trendingData = useContext(trandingContext);

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
    <div className="mb-[20px] tablet:w-[1300px] w-[94%] mx-auto flex">
      <div className="tablet:w-[99%] w-[100%] tablet4:h-[500px] h-[] flex items-center rounded-[5px] bg-[#fff] mx-auto shadow-[0_0_2px_0_#00000025] pt-[15px]">
        <div className="w-full">
          {/* title */}
          <div className="flex justify-between items-center pb-[20px] tablet5:px-[20px] px-[10px]">
            <div className="text-[black]">
              <h1 className="tablet4:text-[25px] text-[20px] font-[600]">
              You May Also Like
              </h1>
            </div>
            <button className="bg-[#FBB03B] text-white tablet4:text-[16px] text-[14px] px-[13px] py-[4px] rounded-[5px]">
              See All
            </button>
          </div>
          {/* product */}
          <div className="w-full flex overflow-hidden tablet5:px-[20px] px-[10px]">
            <Slider
              {...settings1}
              className="w-[1218px] tablet2:!block !hidden"
            >
              {trendingData.map((key) => {
                return (
                  <SalesProduct
                    key={key.key}
                    name={key.name}
                    image={key.images[0].image}
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
              className="w-[965px] tablet2:!hidden tablet3:!block !hidden"
            >
              {trendingData.map((key) => {
                return (
                  <SalesProduct
                    key={key.key}
                    name={key.name}
                    image={key.images[0].image}
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
              className="w-[720px] tablet3:!hidden tablet4:!block !hidden "
            >
              {trendingData.map((key) => {
                return (
                  <SalesProduct
                    key={key.key}
                    name={key.name}
                    image={key.images[0].image}
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
              {trendingData.map((key) => {
                return (
                  <SalesProduct
                    key={key.key}
                    name={key.name}
                    image={key.images[0].image}
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
              {trendingData.map((key) => {
                return (
                  <SalesProduct
                    key={key.key}
                    name={key.name}
                    image={key.images[0].image}
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
    </div>
  );
}

function SalesProduct(props) {
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
      <div className="flex items-center absolute tablet5:bottom-[8px] bottom-[6px] right-[10px] leading-[14px]">
        <AiFillStar className="text-[#FBB03B] tablet4:text-[17px] text-[15px] mr-[5px]" />
        <p className="text-black tablet4:text-[14px] text-[13px] font-[500]">
          {props.review}
        </p>
      </div>
      <div className="flex items-center absolute tablet5:bottom-[8px] bottom-[4px] tablet5:left-[10px] left-[10px]">
        <p className="text-black tablet4:text-[14px] text-[13px] font-[500] cursor-default">
          {props.pcLeft === 0 ? "Soldout" : props.pcLeft + "pc left"}
        </p>
      </div>
    </div>
  );
}
// function NextButton(props) {
//   const { onClick } = props;
//   return (
//     <div
//       className="absolute right-[-25px] top-[45%] flex items-center justify-center bg-[#fff] rounded-[50%] w-[45px] h-[45px] z-[5] cursor-pointer"
//       style={{ boxShadow: "0 0 4px 0 #00000040" }}
//       onClick={onClick}
//     >
//       <MdKeyboardArrowRight className="text-[25px] text-black" />
//     </div>
//   );
// }
// function PrevButton(props) {
//   const { onClick } = props;
//   return (
//     <div
//       className="absolute left-[-25px] top-[45%] flex items-center justify-center bg-[#fff] rounded-[50%] w-[45px] h-[45px] z-[5] cursor-pointer"
//       style={{ boxShadow: "0 0 4px 0 #00000040" }}
//       onClick={onClick}
//     >
//       <MdKeyboardArrowLeft className="text-[25px] text-black" />
//     </div>
//   );
// }
function NextButton() {
  return <div className="overflow-hidden"></div>;
}
function PrevButton() {
  return <div className="overflow-hidden"></div>;
}

export default YouMayAlsoLike;
