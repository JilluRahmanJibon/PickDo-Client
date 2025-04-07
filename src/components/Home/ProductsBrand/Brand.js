import { React } from "react";
import brand1 from "../../../assist/productsBrand/brand1.png";
import brandApple from "../../../assist/productsBrand/brandApple.png";
import brandAdidas from "../../../assist/productsBrand/brandAdidas.png";
import brandR15 from "../../../assist/productsBrand/brandR15.png";
import brandVuitton from "../../../assist/productsBrand/brandVuitton.png";
import brandNewYork from "../../../assist/productsBrand/brandNewYork.png";
import brandNike from "../../../assist/productsBrand/brandNike.png";
import brandPama from "../../../assist/productsBrand/brandPama.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Brand() {
  const BrandData = [
    {
      key: 1,
      image: brand1,
    },
    {
      key: 2,
      image: brandApple,
    },
    {
      key: 3,
      image: brandAdidas,
    },
    {
      key: 4,
      image: brandR15,
    },
    {
      key: 5,
      image: brandVuitton,
    },
    {
      key: 6,
      image: brandNewYork,
    },
    {
      key: 7,
      image: brandNike,
    },
    {
      key: 8,
      image: brandPama,
    },
    {
      key: 9,
      image: brand1,
    },
    {
      key: 10,
      image: brandApple,
    },
    {
      key: 11,
      image: brandAdidas,
    },
    {
      key: 12,
      image: brandR15,
    },
    {
      key: 13,
      image: brandVuitton,
    },
    {
      key: 14,
      image: brandNewYork,
    },
    {
      key: 15,
      image: brandNike,
    },
    {
      key: 16,
      image: brandPama,
    },
  ];
  let settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToScroll: 2,
    slidesToShow: 2,
    rows: 2,
    nextArrow: <NextButton />,
    prevArrow: <PrevButton />,
  };
  let settings1 = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 5,
    rows: 2,
    nextArrow: <NextButton />,
    prevArrow: <PrevButton />,
  };
  let settings2 = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 4,
    rows: 2,
    nextArrow: <NextButton />,
    prevArrow: <PrevButton />,
  };
  let settings3 = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 3,
    rows: 2,
    nextArrow: <NextButton />,
    prevArrow: <PrevButton />,
  };
  let settings4 = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 2,
    rows: 2,
    nextArrow: <NextButton />,
    prevArrow: <PrevButton />,
  };
  let settings5 = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 1,
    rows: 2,
    nextArrow: <NextButton />,
    prevArrow: <PrevButton />,
  };

  return (
    <div
      className="tablet:w-[39%] w-[92%] h-[500px] tablet:flex hidden items-center rounded-[5px] bg-white mx-auto tablet:mt-[0px] mt-[30px]"
      style={{ boxShadow: "0 0 2px 0 #00000040" }}
    >
      <div className="w-full px-[20px]">
        {/* title */}
        <div className="flex justify-between items-center pb-[40px]">
          <h1 className="sbrand3:text-[25px] text-[20px] font-[600] text-[black]">
            Top Brand
          </h1>
          <button className="bg-[#FBB03B] text-white sbrand3:text-[16px] text-[14px] px-[13px] py-[4px] rounded-[5px]">
            See All
          </button>
        </div>
        {/* product */}
        <div className="w-full flex justify-around mt-[-20px] overflow-hidden">
          <Slider {...settings} className="w-full tablet:!block !hidden">
            {BrandData.map((key) => {
              return <Product key={key.key} image={key.image} />;
            })}
          </Slider>
          <Slider
            {...settings1}
            className="w-[1170px] tablet:!hidden sbrand:!block !hidden"
          >
            {BrandData.map((key) => {
              return <Product key={key.key} image={key.image} />;
            })}
          </Slider>
          <Slider
            {...settings2}
            className="w-[935px] sbrand:!hidden sbrand2:!block !hidden"
          >
            {BrandData.map((key) => {
              return <Product key={key.key} image={key.image} />;
            })}
          </Slider>
          <Slider
            {...settings3}
            className="w-[705px] sbrand2:!hidden sbrand3:!block !hidden"
          >
            {BrandData.map((key) => {
              return <Product key={key.key} image={key.image} />;
            })}
          </Slider>
          <Slider
            {...settings4}
            className="w-[470px] sbrand3:!hidden sbrand4:!block !hidden"
          >
            {BrandData.map((key) => {
              return <Product key={key.key} image={key.image} />;
            })}
          </Slider>
          <Slider {...settings5} className="w-[100%] sbrand4:!hidden !block">
            {BrandData.map((key) => {
              return <Product key={key.key} image={key.image} />;
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
}

function Product(props) {
  return (
    <div
      key={props.key}
      className="w-[220px] h-[175px] rounded-[7px] overflow-hidden bg-white relative cursor-pointer mt-[15px] mb-[5px] mx-auto flex justify-center items-center"
      style={{ boxShadow: "0 0 2px 0 #00000040" }}
    >
      <img src={props.image} className="w-[80%]" />
    </div>
  );
}
function NextButton() {
  return <div className="hidden"></div>;
}
function PrevButton() {
  return <div className="hidden"></div>;
}

export default Brand;
