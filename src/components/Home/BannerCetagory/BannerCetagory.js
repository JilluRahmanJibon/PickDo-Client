import { React, useRef, useState,useContext } from "react";
import { cetagoryContext } from '../../../context/cetagoryContext'
import Story from "../Story/Story";

// ````````````````````````````````````````Slider````````````````````````````````````````
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// ````````````````````````````````````````Banner````````````````````````````````````````
import banner from "../../../assist/banner.jpg";
import banner1 from "../../../assist/banner1.jpg";
import Navber from "../../Navber/Navber";
import { GoDotFill } from "react-icons/go";


import { MdOutlineCategory } from "react-icons/md";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

function BannerCetagory() {
  // ````````````````````````````````````````Banner````````````````````````````````````````
  const bannertData = [
    {
      key: 1,
      image: banner,
      image1: banner1,
    },
    {
      key: 2,
      image: banner,
      image1: banner1,
    },
    {
      key: 3,
      image: banner,
      image1: banner1,
    },
    {
      key: 4,
      image: banner,
      image1: banner1,
    },
  ];
  let settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnHover: true,
    appendDots: (dots) => (
      <div style={{ bottom: "0px" }}>
        <ul className="m-0" id="bannerDotId">
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div className="bannerDotliId w-[17px] bottom-0">
        <GoDotFill className="cursor-pointer text-[17px]" />
      </div>
    ),
    nextArrow: <NextButton />,
    prevArrow: <PrevButton />,
  };
  // ````````````````````````````````````````Cetagory````````````````````````````````````````
  const cetagoryJson = useContext(cetagoryContext)

  //  `````````````````````````Main Cetagory Hover Effect`````````````````````````````
  const MainCetagory1 = useRef(false);
  const MainCetagory2 = useRef(false);
  const MainCetagory3 = useRef(false);
  const MainCetagory4 = useRef(false);
  const MainCetagory5 = useRef(false);
  const MainCetagory6 = useRef(false);
  const MainCetagory7 = useRef(false);
  const MainCetagory8 = useRef(false);
  const MainCetagory9 = useRef(false);
  const MainCetagory10 = useRef(false);
  const MainCetagory11 = useRef(false);
  const MainCetagory12 = useRef(false);
  const [mainCetagoryEffect1, setMainCetagoryEffect1] = useState(
    MainCetagory1.current
  );
  const [mainCetagoryEffect2, setMainCetagoryEffect2] = useState(
    MainCetagory2.current
  );
  const [mainCetagoryEffect3, setMainCetagoryEffect3] = useState(
    MainCetagory3.current
  );
  const [mainCetagoryEffect4, setMainCetagoryEffect4] = useState(
    MainCetagory4.current
  );
  const [mainCetagoryEffect5, setMainCetagoryEffect5] = useState(
    MainCetagory5.current
  );
  const [mainCetagoryEffect6, setMainCetagoryEffect6] = useState(
    MainCetagory6.current
  );
  const [mainCetagoryEffect7, setMainCetagoryEffect7] = useState(
    MainCetagory7.current
  );
  const [mainCetagoryEffect8, setMainCetagoryEffect8] = useState(
    MainCetagory8.current
  );
  const [mainCetagoryEffect9, setMainCetagoryEffect9] = useState(
    MainCetagory9.current
  );
  const [mainCetagoryEffect10, setMainCetagoryEffect10] = useState(
    MainCetagory10.current
  );
  const [mainCetagoryEffect11, setMainCetagoryEffect11] = useState(
    MainCetagory11.current
  );
  const [mainCetagoryEffect12, setMainCetagoryEffect12] = useState(
    MainCetagory12.current
  );
  let mainCetagoryHoverEffectStore = [
    "",
    MainCetagory1,
    MainCetagory2,
    MainCetagory3,
    MainCetagory4,
    MainCetagory5,
    MainCetagory6,
    MainCetagory7,
    MainCetagory8,
    MainCetagory9,
    MainCetagory10,
    MainCetagory11,
    MainCetagory12,
  ];
  let mainCetagoryHoverEffectStoreinState = [
    "",
    setMainCetagoryEffect1,
    setMainCetagoryEffect2,
    setMainCetagoryEffect3,
    setMainCetagoryEffect4,
    setMainCetagoryEffect5,
    setMainCetagoryEffect6,
    setMainCetagoryEffect7,
    setMainCetagoryEffect8,
    setMainCetagoryEffect9,
    setMainCetagoryEffect10,
    setMainCetagoryEffect11,
    setMainCetagoryEffect12,
  ];
  let mainCetagoryHoverEffect = [
    "",
    mainCetagoryEffect1,
    mainCetagoryEffect2,
    mainCetagoryEffect3,
    mainCetagoryEffect4,
    mainCetagoryEffect5,
    mainCetagoryEffect6,
    mainCetagoryEffect7,
    mainCetagoryEffect8,
    mainCetagoryEffect9,
    mainCetagoryEffect10,
    mainCetagoryEffect11,
    mainCetagoryEffect12,
  ];

  //  `````````````````````````Main Nasted Cetagory Hover Effect`````````````````````````````
  const MainNastedCetagory1 = useRef(false);
  const MainNastedCetagory2 = useRef(false);
  const MainNastedCetagory3 = useRef(false);
  const MainNastedCetagory4 = useRef(false);
  const MainNastedCetagory5 = useRef(false);
  const MainNastedCetagory6 = useRef(false);
  const MainNastedCetagory7 = useRef(false);
  const MainNastedCetagory8 = useRef(false);
  const MainNastedCetagory9 = useRef(false);
  const MainNastedCetagory10 = useRef(false);
  const MainNastedCetagory11 = useRef(false);
  const MainNastedCetagory12 = useRef(false);
  const MainNastedCetagory13 = useRef(false);
  const MainNastedCetagory14 = useRef(false);
  const MainNastedCetagory15 = useRef(false);
  const [mainNastedCetagoryEffect1, setMainNastedCetagoryEffect1] = useState(
    MainNastedCetagory1.current
  );
  const [mainNastedCetagoryEffect2, setMainNastedCetagoryEffect2] = useState(
    MainNastedCetagory2.current
  );
  const [mainNastedCetagoryEffect3, setMainNastedCetagoryEffect3] = useState(
    MainNastedCetagory3.current
  );
  const [mainNastedCetagoryEffect4, setMainNastedCetagoryEffect4] = useState(
    MainNastedCetagory4.current
  );
  const [mainNastedCetagoryEffect5, setMainNastedCetagoryEffect5] = useState(
    MainNastedCetagory5.current
  );
  const [mainNastedCetagoryEffect6, setMainNastedCetagoryEffect6] = useState(
    MainNastedCetagory6.current
  );
  const [mainNastedCetagoryEffect7, setMainNastedCetagoryEffect7] = useState(
    MainNastedCetagory7.current
  );
  const [mainNastedCetagoryEffect8, setMainNastedCetagoryEffect8] = useState(
    MainNastedCetagory8.current
  );
  const [mainNastedCetagoryEffect9, setMainNastedCetagoryEffect9] = useState(
    MainNastedCetagory9.current
  );
  const [mainNastedCetagoryEffect10, setMainNastedCetagoryEffect10] = useState(
    MainNastedCetagory10.current
  );
  const [mainNastedCetagoryEffect11, setMainNastedCetagoryEffect11] = useState(
    MainNastedCetagory11.current
  );
  const [mainNastedCetagoryEffect12, setMainNastedCetagoryEffect12] = useState(
    MainNastedCetagory12.current
  );
  const [mainNastedCetagoryEffect13, setMainNastedCetagoryEffect13] = useState(
    MainNastedCetagory13.current
  );
  const [mainNastedCetagoryEffect14, setMainNastedCetagoryEffect14] = useState(
    MainNastedCetagory14.current
  );
  const [mainNastedCetagoryEffect15, setMainNastedCetagoryEffect15] = useState(
    MainNastedCetagory15.current
  );
  let mainNastedCetagoryHoverEffectStore = [
    "",
    MainNastedCetagory1,
    MainNastedCetagory2,
    MainNastedCetagory3,
    MainNastedCetagory4,
    MainNastedCetagory5,
    MainNastedCetagory6,
    MainNastedCetagory7,
    MainNastedCetagory8,
    MainNastedCetagory9,
    MainNastedCetagory10,
    MainNastedCetagory11,
    MainNastedCetagory12,
    MainNastedCetagory13,
    MainNastedCetagory14,
    MainNastedCetagory15,
  ];
  let mainNastedCetagoryHoverEffectStoreinState = [
    "",
    setMainNastedCetagoryEffect1,
    setMainNastedCetagoryEffect2,
    setMainNastedCetagoryEffect3,
    setMainNastedCetagoryEffect4,
    setMainNastedCetagoryEffect5,
    setMainNastedCetagoryEffect6,
    setMainNastedCetagoryEffect7,
    setMainNastedCetagoryEffect8,
    setMainNastedCetagoryEffect9,
    setMainNastedCetagoryEffect10,
    setMainNastedCetagoryEffect11,
    setMainNastedCetagoryEffect12,
    setMainNastedCetagoryEffect13,
    setMainNastedCetagoryEffect14,
    setMainNastedCetagoryEffect15,
  ];
  let mainNastedCetagoryHoverEffect = [
    "",
    mainNastedCetagoryEffect1,
    mainNastedCetagoryEffect2,
    mainNastedCetagoryEffect3,
    mainNastedCetagoryEffect4,
    mainNastedCetagoryEffect5,
    mainNastedCetagoryEffect6,
    mainNastedCetagoryEffect7,
    mainNastedCetagoryEffect8,
    mainNastedCetagoryEffect9,
    mainNastedCetagoryEffect10,
    mainNastedCetagoryEffect11,
    mainNastedCetagoryEffect12,
    mainNastedCetagoryEffect13,
    mainNastedCetagoryEffect14,
    mainNastedCetagoryEffect15,
  ];

  // main cetagory space
  const [mCSpace, setMCSpace] = useState(false);

  // set display main Nasted catagory
  const [onHoverMainCToDisplayN, setonHoverMainCToDisplayN] = useState(false);
  // set display main Nasted Nasted catagory
  const [onHoverMainCToDisplayNNC, setonHoverMainCToDisplayNNC] =
    useState(false);

  //  `````````````````````````Main Cetagory to Nasted Cetagory`````````````````````````````
  //  Main Nasted Catagory
  let NastedC = useRef(cetagoryJson[0].nastedCatagory);
  const [nastedCDeta, setNastedCDeta] = useState(NastedC.current);
  let nastedCDetaPrint = nastedCDeta;

  // main catagory number
  const mainCetagory = useRef(1);
  const [mainCetagoryNum, setMainCetagoryNum] = useState(mainCetagory.current);

  function onMouseEnterInMainCetagory(key) {
    let nCObject = [
      "",
      cetagoryJson[0].nastedCatagory,
      cetagoryJson[1].nastedCatagory,
      cetagoryJson[2].nastedCatagory,
      cetagoryJson[3].nastedCatagory,
      cetagoryJson[4].nastedCatagory,
      cetagoryJson[5].nastedCatagory,
      cetagoryJson[6].nastedCatagory,
      cetagoryJson[7].nastedCatagory,
      cetagoryJson[8].nastedCatagory,
      cetagoryJson[9].nastedCatagory,
      cetagoryJson[10].nastedCatagory,
      cetagoryJson[11].nastedCatagory,
    ];
    //  Main Nasted Catagory
    let nastedCatagoryObject = nCObject[key];
    setNastedCDeta(nastedCatagoryObject);

    // set main catagory number
    mainCetagory.current = key;
    setMainCetagoryNum(mainCetagory.current);

    setMCSpace(true);
    setonHoverMainCToDisplayN(true);
  }

  //  `````````````````````````Main Nasted Cetagory to Nasted Cetagory`````````````````````````````
  let NNastedC = useRef(cetagoryJson[1].nastedCatagory[1].nastedCatagory);
  const [mNNastedCDeta, setMNNastedCDeta] = useState(NNastedC.current);
  let mNNastedCDetaPrint = mNNastedCDeta;
  function onEnableDesibleMainCetagoryColor(key) {
    let setEffectMainC = (mainCetagoryHoverEffectStore[
      mainCetagoryNum
    ].current = key);
    mainCetagoryHoverEffectStoreinState[mainCetagoryNum](setEffectMainC);
  }

  // main Nasted catagory number
  const mainNastedCetagory = useRef(1);
  const [mainNastedCetagoryNum, setMainNastedCetagoryNum] = useState(
    mainNastedCetagory.current
  );
  function onMouseEnterInMainNastedCetagory(key) {
    //  Main Nasted Catagory
    let setMainNestedNestadCetagory = nastedCDetaPrint[key - 1].nastedCatagory;
    let nastedCatagoryObject2 = setMainNestedNestadCetagory;
    setMNNastedCDeta(nastedCatagoryObject2);

    // set main Nasted catagory number
    setMainNastedCetagoryNum.current = key;
    setMainNastedCetagoryNum(setMainNastedCetagoryNum.current);
  }

  // On Hover To Color Fixed in Main Nasted Cetagory
  function onEnableDasibleMainNestedCetagoryColor(key) {
    let setEffectMainNC = (mainNastedCetagoryHoverEffectStore[
      mainNastedCetagoryNum
    ].current) = key;
    mainNastedCetagoryHoverEffectStoreinState[mainNastedCetagoryNum](
      setEffectMainNC
    );
  }
  // set Tittle In The Last Nestad Cetagory
  const [tittleInMNNestedCetagory, setTittleInMNNestedCetagory] =
    useState("Cameras");
  function setTittleInMainNNestedCetagory(params) {
    setTittleInMNNestedCetagory(params);
  }
  return (
    <div className="tablet:w-[1188px] w-[100%] banner3:h-[480px] md2:h-[400px] h-[100%] flex md2:mt-[80px] mt-0 mx-auto banner1:px-0 banner6:px-[30px] md2:px-[10px] px-0 justify-center">
      {/*  ````````````````````````````````````````Cetagory```````````````````````````````````````` */}
      <div
        className="banner1:w-[400px] banner4:w-[280px] w-[250px] banner3:h-[480px] banner4:h-[414px] h-[377px] md2:flex hidden"
        onMouseLeave={() => {
          setonHoverMainCToDisplayN(false);
          setonHoverMainCToDisplayNNC(false);
        }}
      >
        <div
          className="bg-white rounded-[8px] w-[100%] h-[100%] banner4:pt-0 pt-[10px] banner3:pb-[12px] pb-[5px] overflow-hidden"
          style={{ boxShadow: "0 0 2px 0 #00000040" }}
        >
          <div
            className={`banner4:flex hidden items-center justify-between h-[45px] leading-[27px] banner3:mb-[8px] mb-[5px] px-[15px] bg-[#FBB03B]`} onMouseEnter={() => {
              setonHoverMainCToDisplayN(false);
              setonHoverMainCToDisplayNNC(false);
            }}
          >
            <div className="flex items-center">
              <div className={`flex justify-center text-[#fff] `}>
                <MdOutlineCategory className="text-[22.6px]" />
                <p className={`text-[16.5px] ml-[8px] text-[#fff] `}>
                  Category
                </p>
              </div>
            </div>
            <div className="flex items-center cursor-pointer">
              <p className={`text-[12.8px] ml-[8px] text-[#fff] `}>See All</p>
              <MdKeyboardArrowRight
                className={`text-[20px] text-[#fff] flex`}
              />
            </div>
          </div>
          {cetagoryJson.map((key) => {
            return (
              <div
                key={key.id}
                className={`flex items-center justify-between banner3:h-[35px] h-[30px] py-[10px] pl-[15px] cursor-pointer hover:bg-[#f5f5f5] main-cetagory  ${
                  mainCetagoryHoverEffect[key.id] ? "bg-[#f5f5f5]" : ""
                }`}
                onMouseEnter={() => {
                  let keyIdSet = key.id;
                  onMouseEnterInMainCetagory(keyIdSet);
                  onEnableDasibleMainNestedCetagoryColor(false);
                }}
              >
                <div className="flex items-center">
                  <div
                    className={`banner3:text-[17px] text-[16px] bg-[#f5f5f5]  banner3:w-[25px] w-[22px] banner3:h-[25px] h-[22px] rounded-[50%] flex justify-center items-center leading-[27px] text-[#757575]  ${
                      mainCetagoryHoverEffect[key.id] ? "text-[#FBB03B]" : ""
                    }`}
                  >
                    {key.icon}
                  </div>
                  <p
                    className={`banner3:text-[13.99px] text-[13px] ml-[8px] text-[#757575]  ${
                      mainCetagoryHoverEffect[key.id] ? "text-[#FBB03B]" : ""
                    }`}
                  >
                    {key.tittle}
                  </p>
                </div>
                <MdKeyboardArrowRight
                  className={`text-[20px] text-[#FBB03B]  ${
                    mainCetagoryHoverEffect[key.id] ? "flex" : "hidden"
                  }`}
                />
              </div>
            );
          })}
        </div>
      </div>
      {/*  ````````````````````````````````````````Cetagory Space Banner```````````````````````````````````````` */}
      <div
        className={`banner4:w-[24px] w-[20px] banner4:h-[480px] h-[377px] z-[12] ${mCSpace ? "" : "hidden"}`}
        onMouseEnter={() => {
          onEnableDesibleMainCetagoryColor(true);
          setonHoverMainCToDisplayN(true);
          onEnableDasibleMainNestedCetagoryColor(false);
        }}
        onMouseLeave={() => {
          onEnableDesibleMainCetagoryColor(false);
          setonHoverMainCToDisplayN(false);
          setonHoverMainCToDisplayNNC(false);
        }}
      ></div>
      <div
        className={`banner4:w-[24px] w-[20px] banner4:h-[480px] h-[377px] z-10 ${mCSpace ? "hidden" : ""}`}
      ></div>
      {/*  ````````````````````````````````````````Banner```````````````````````````````````````` */}
      <div className="banner1:w-[900px] banner2:w-[850px] banner3:w-[880px] banner4:w-[700px] md2:w-[600px] w-[100%] banner3:h-[344px] banner4:h-[290px] md2:h-[255px] h-full relative">
        <div className="md2:hidden flex">
          <Navber />
        </div>
        <div className="w-[100%] banner3:h-[344px] banner4:h-[290px] md2:h-[255px] h-full relative">
          <div className="relative flex items-center text-[#fff]  md2:rounded-[8px] rounded-none">
            <Slider {...settings} className="w-[100%] overflow-hidden mx-auto md2:rounded-[8px] rounded-none">
              {bannertData.map((key) => {
                return (
                  <>
                    <img
                      src={key.image}
                      className="w-[100%] sbrand4:mt-[-50px] mt-[-15px] md2:mt-0 !block md2:!hidden"
                    />
                    <img
                      src={key.image1}
                      className="w-[100%] mt-[-50px] md2:mt-0 md2:!block rounded-[8px] !hidden"
                    />
                  </>
                );
              })}
            </Slider>
            {/* ``````````````````````````5``````````Main Nasted Cetagory``````````````````````````5`````````` */}
            <div
              className={`${onHoverMainCToDisplayN ? "md2:block hidden" : "hidden"}
                 absolute top-0 left-0 banner3:w-[240px] w-[205px] banner3:h-[480px] banner4:h-[414px] h-[377px] bg-white rounded-[8px] pt-[7px] pb-[12px] border-[1px] border-[#0000001d] z-10`}
              onMouseLeave={() => {
                onEnableDesibleMainCetagoryColor(false);
                setMCSpace(false);
                setonHoverMainCToDisplayN(false);
                setonHoverMainCToDisplayNNC(false);
              }}
              onMouseEnter={() => {
                setonHoverMainCToDisplayN(true);
                onEnableDasibleMainNestedCetagoryColor(false);
                onEnableDesibleMainCetagoryColor(true);
              }}
            >
              {nastedCDetaPrint.map((key) => {
                return (
                  <div
                    className={`${
                      mainNastedCetagoryHoverEffect[key.id]
                        ? "bg-[#f5f5f5]"
                        : ""
                    } flex items-center justify-between banner3:h-[31px] banner4:h-[26px] h-[24px] banner3:py-[10px] py-0 pl-[8px] cursor-pointer hover:bg-[#f5f5f5] relative main-cetagory`}
                    onMouseEnter={() => {
                      let keyIdSetN = key.id;
                      onMouseEnterInMainNastedCetagory(keyIdSetN);
                      setonHoverMainCToDisplayNNC(true);
                      setTittleInMainNNestedCetagory(key.tittle);
                    }}
                    onMouseLeave={() => {
                      setonHoverMainCToDisplayNNC(false);
                    }}
                  >
                    <p
                      className={`banner3:text-[13.99px] text-[13px] ml-[8px] text-[#757575] ${
                        mainNastedCetagoryHoverEffect[key.id]
                          ? "text-[#FBB03B]"
                          : ""
                      }`}
                    >
                      {key.tittle}
                    </p>
                    <MdKeyboardArrowRight
                      className={`absolute text-[20px] text-[#FBB03B] ${
                        mainNastedCetagoryHoverEffect[key.id] ? "" : "hidden"
                      } right-[13px]`}
                    />
                  </div>
                );
              })}
            </div>
            {/* `````````````````````````````````````Main Nasted Nasted Cetagory````````````````````````````````````` */}
            <div
              className={`${
                onHoverMainCToDisplayNNC ? "md2:flex hidden" : "hidden"
              } top-0 right-0 banner1:w-[668px] banner2:w-[618px] banner3:w-[643px] banner4:w-[498px] w-[403px] h-[50px] px-[15px] absolute items-center rounded-tr-[8px] bg-[#fff] mb-[20px] z-[11]`}
            >
              <p className="text-black px-[5px]">{tittleInMNNestedCetagory}</p>
            </div>
            <div
              className={`${onHoverMainCToDisplayNNC ? "md2:block hidden" : "hidden"}
              border-l-[2px]
               absolute top-0 right-0 banner1:w-[670px] banner2:w-[620px] banner3:w-[645px] banner4:w-[500px] w-[405px] banner3:h-[480px] banner4:h-[414px] h-[377px] rounded-tr-[8px] rounded-br-[8px] bg-white px-[15px] pb-[12px] overflow-y-auto z-10 border-[1px] border-[#0000001d] bottomScrollbar`}
              onMouseEnter={() => {
                onEnableDesibleMainCetagoryColor(true);
                setonHoverMainCToDisplayN(true);
                setonHoverMainCToDisplayNNC(true);
                onEnableDasibleMainNestedCetagoryColor(true);
              }}
              onMouseLeave={() => {
                onEnableDesibleMainCetagoryColor(false);
                setonHoverMainCToDisplayN(false);
                setonHoverMainCToDisplayNNC(false);
              }}
            >
              <div className="relative w-[100%] grid banner4:grid-cols-4 grid-cols-3 pt-[60px]">
                {mNNastedCDetaPrint.map((key) => {
                  return (
                    <div className="banner4:w-[138px] w-[125px] h-[115px] my-[10px] text-center items-center cursor-pointer px-[4px] main-nastedN-cetagory">
                      <div
                        className="banner4:w-[65px] w-[55px] banner4:h-[65px] h-[55px] mx-auto overflow-hidden rounded-[50%] border-[1px] border-[#3c383808]"
                        style={{ boxShadow: "0 0 2px 0 #00000040" }}
                      >
                        <img src={key.image} className="w-full h-full" />
                      </div>
                      <p className="text-[#757575] text-[13px] banner4:w-[138px] w-[] h-[40px] leading-[20px] mt-[8px] px-[10px]">
                        {key.tittle}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
          <Story />
      </div>
    </div>
  );
}

function NextButton(props) {
  const { onClick } = props;
  return (
    <div
      className={`bg-white w-[20px] h-[50px] absolute top-[45%] right-0 md2:flex hidden items-center justify-center cursor-pointer z-10`}
      onClick={onClick}
    >
      <MdKeyboardArrowRight className="text-[black] text-[27px]" />
    </div>
  );
}
function PrevButton(props) {
  const { onClick } = props;
  return (
    <div
      className={`bg-white w-[20px] h-[50px] absolute top-[45%] left-0 md2:flex hidden items-center justify-center cursor-pointer z-10`}
      onClick={onClick}
    >
      <MdKeyboardArrowLeft className="text-[black] text-[27px]" />
    </div>
  );
}

export default BannerCetagory;
