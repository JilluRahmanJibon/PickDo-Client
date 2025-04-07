import { React, useRef, useState } from "react";
import iphone15 from "../../../assist/productsBrand/iphone15.png";
import yamahaR15 from "../../../assist/productsBrand/r15.png";
import productImg from "../../../assist/productsBrand/laptop.png";
import royalEnfield from "../../../assist/productsBrand/RoyalEnfield.png";
import nokia3360 from "../../../assist/productsBrand/Nokia-3360.png";
import watch from "../../../assist/productsBrand/watch.png";
import avater from "../../../assist/Story/avatar.jpg";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Story() {
  // Json File
  const storyInf = [
    {
      key: 1,
      prodactBrand: avater,
      prodactName: "item No: 1",
      prodactImg: iphone15,
    },
    {
      key: 2,
      prodactBrand: avater,
      prodactName: "item No: 2",
      prodactImg: yamahaR15,
    },
    {
      key: 3,
      prodactBrand: avater,
      prodactName: "item No: 3",
      prodactImg: royalEnfield,
    },
    {
      key: 4,
      prodactBrand: avater,
      prodactName: "item No: 4",
      prodactImg: productImg,
    },
    {
      key: 5,
      prodactBrand: avater,
      prodactName: "item No: 5",
      prodactImg: nokia3360,
    },
    {
      key: 6,
      prodactBrand: avater,
      prodactName: "item No: 6",
      prodactImg: watch,
    },
    {
      key: 7,
      prodactBrand: avater,
      prodactName: "item No: 7",
      prodactImg: watch,
    },
    {
      key: 8,
      prodactBrand: avater,
      prodactName: "item No: 8",
      prodactImg: watch,
    },
    {
      key: 9,
      prodactBrand: avater,
      prodactName: "item No: 9",
      prodactImg: watch,
    },
    {
      key: 10,
      prodactBrand: avater,
      prodactName: "item No: 10",
      prodactImg: iphone15,
    },
    {
      key: 11,
      prodactBrand: avater,
      prodactName: "item No: 11",
      prodactImg: watch,
    },
    {
      key: 12,
      prodactBrand: avater,
      prodactName: "item No: 12",
      prodactImg: royalEnfield,
    },
    {
      key: 13,
      prodactBrand: avater,
      prodactName: "item No: 13",
      prodactImg: nokia3360,
    },
    {
      key: 14,
      prodactBrand: avater,
      prodactName: "item No: 14",
      prodactImg: nokia3360,
    },
    {
      key: 15,
      prodactBrand: avater,
      prodactName: "item No: 15",
      prodactImg: nokia3360,
    },
    {
      key: 16,
      prodactBrand: avater,
      prodactName: "item No: 16",
      prodactImg: nokia3360,
    },
    {
      key: 17,
      prodactBrand: avater,
      prodactName: "item No: 17",
      prodactImg: nokia3360,
    },
    {
      key: 18,
      prodactBrand: avater,
      prodactName: "item No: 18",
      prodactImg: nokia3360,
    },
    {
      key: 19,
      prodactBrand: avater,
      prodactName: "item No: 19",
      prodactImg: nokia3360,
    },
    {
      key: 20,
      prodactBrand: avater,
      prodactName: "item No: 20",
      prodactImg: nokia3360,
    },
    {
      key: 21,
      prodactBrand: avater,
      prodactName: "item No: 21",
      prodactImg: nokia3360,
    },
    {
      key: 22,
      prodactBrand: avater,
      prodactName: "item No: 22",
      prodactImg: nokia3360,
    },
    {
      key: 23,
      prodactBrand: avater,
      prodactName: "item No: 23",
      prodactImg: nokia3360,
    },
  ];

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 7,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1190,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 6,
          infinite: false,
          dots: true
        }
      },
      {
        breakpoint: 1061,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 5,
          infinite: false,
          dots: true
        }
      },
      {
        breakpoint: 846,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 7,
          infinite: false,
          dots: true
        }
      },
      {
        breakpoint: 790,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 6,
          infinite: false,
          dots: true
        }
      },
      {
        breakpoint: 675,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 5,
          infinite: false,
          dots: true
        }
      },
      {
        breakpoint: 585,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 4,
          infinite: false,
          dots: true
        }
      },
      {
        breakpoint: 495,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: false,
          dots: true
        }
      }
    ]
  };
  return (
    <div className="relative ">
      <div className="w-[100%] md2:h-[155px] h-[170px] overflow-hidden md2:px-0 px-[10px] banner2:mt-[-7px] banner3:mt-[-20px] md2:mt-[-30px] mt-[0px] ml-[-1px]">
        <div className="overflow-hidden md2:py-[2px] py-[10px] mx-auto flex items-center w-[100%] relative">
        <Slider {...settings}
            className={`w-[100%] h-[100%] story4:!block !hidden  items-center`}
          >
            {storyInf?.map((key) => {
              return (
                <StoryCard
                  key={key.key}
                  prodactBrand={key.prodactBrand}
                  prodactImg={key.prodactImg}
                  prodactName={key.prodactName}
                />
              );
            })}
          </Slider>
          {/* *********mobile view*********** */}
          <div
            className={`max-h-[100%] story4:hidden flex items-center overflow-x-auto bottomScrollbar`}
          >
            {storyInf?.map((key) => {
              return (
                <StoryCard
                  key={key.key}
                  prodactBrand={key.prodactBrand}
                  prodactImg={key.prodactImg}
                  prodactName={key.prodactName}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div
        className={`bg-white my-atuo w-[40px] h-[40px] absolute top-[45%] left-[-15px] hidden items-center justify-center rounded-[50px] cursor-pointer z-10 `}
        style={{ boxShadow: "0 0 2px 0 #00000040" }}
      >
        <MdKeyboardArrowLeft className="text-[black] text-[30px]" />
      </div>
      <div
        className={`bg-white w-[35px] h-[35px] absolute top-[45%] right-[-15px] hidden items-center justify-center rounded-[50px] cursor-pointer z-10`}
        style={{ boxShadow: "0 0 2px 0 #00000040" }}
      >
        <MdKeyboardArrowRight className="text-[black] text-[25px]" />
      </div>
    </div>
  );
}

function StoryCard(props) {
  return (
    <li
      className="relative  banner3:min-w-[100px] banner4:min-w-[85px] min-w-[90px] banner3:w-[100px] md2:w-[85px] banner4:w-[95px] w-[90px] md2:h-[130px] story4:h-[140px] h-[125px] rounded-[8px] overflow-hidden bg-[white] cursor-pointer my-[10px] mx-[5px]"
      style={{ boxShadow: "0 0 2px 0 #00000040" }}
    >
      <div className="absolute top-[5px] left-[5px] w-[25px] h-[25px] rounded-[50px] bg-[white] flex justify-center items-center bg-gradient-to-r from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] z-10 overflow-hidden">
        <div className="rounded-[50px] overflow-hidden">
          <img src={props.prodactBrand} className="w-[22px]" />
        </div>
      </div>
      <div className="absolute top-[0px] left-[0px] w-[35px] h-[35px] overflow-hidden bg-[white]"></div>

      <div className="w-[100%] h-[100%] overflow-hidden absolute top-0 flex justify-center items-center bg-white">
        <img src={props.prodactImg} className="w-[125px]" />
      </div>
      <div className="absolute bottom-0 left-0 bg-gradient-to-t from-[#00000073] to-transparent to-90% w-[100%] h-[70px] flex items-end">
        <p className="text-[13px] font-medium text-white pb-[3px] pl-[6px]">
          {props.prodactName}
        </p>
      </div>
    </li>
  );
}

export default Story;
