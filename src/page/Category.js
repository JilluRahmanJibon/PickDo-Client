import React, { useContext, useRef, useState } from "react";
import { cetagoryContext } from "../context/cetagoryContext";
import { FaUserTie } from "react-icons/fa6";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { IoSearchSharp } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

const Category = () => {
  const cetagoryNavTittle = useRef("Pick For You")
  // Category Json
  const cetagoryJson = useContext(cetagoryContext);
  // Nasted Category
  const NastedCetagory = useRef(cetagoryJson[0].nastedCatagory);
  // Pick For You Category
  const pickForYouCetagory = useRef(
    cetagoryJson[0].nastedCatagory[0].nastedCatagory
  );
  const [onClickToToggalPickForYouC, setonClickToToggalPpickForYouC] = useState(true)

  const mainCetagoryClickEffect1 = useRef(true);
  const mainCetagoryClickEffect2 = useRef(false);
  const mainCetagoryClickEffect3 = useRef(false);
  const mainCetagoryClickEffect4 = useRef(false);
  const mainCetagoryClickEffect5 = useRef(false);
  const mainCetagoryClickEffect6 = useRef(false);
  const mainCetagoryClickEffect7 = useRef(false);
  const mainCetagoryClickEffect8 = useRef(false);
  const mainCetagoryClickEffect9 = useRef(false);
  const mainCetagoryClickEffect10 = useRef(false);
  const mainCetagoryClickEffect11 = useRef(false);
  const mainCetagoryClickEffect12 = useRef(false);
  const mainCetagoryClickEffect13 = useRef(false);
  const [mainCetagoryEffect1, setMainCetagoryEffect1] = useState(
    mainCetagoryClickEffect1.current
  );
  const [mainCetagoryEffect2, setMainCetagoryEffect2] = useState(
    mainCetagoryClickEffect2.current
  );
  const [mainCetagoryEffect3, setMainCetagoryEffect3] = useState(
    mainCetagoryClickEffect3.current
  );
  const [mainCetagoryEffect4, setMainCetagoryEffect4] = useState(
    mainCetagoryClickEffect4.current
  );
  const [mainCetagoryEffect5, setMainCetagoryEffect5] = useState(
    mainCetagoryClickEffect5.current
  );
  const [mainCetagoryEffect6, setMainCetagoryEffect6] = useState(
    mainCetagoryClickEffect6.current
  );
  const [mainCetagoryEffect7, setMainCetagoryEffect7] = useState(
    mainCetagoryClickEffect7.current
  );
  const [mainCetagoryEffect8, setMainCetagoryEffect8] = useState(
    mainCetagoryClickEffect8.current
  );
  const [mainCetagoryEffect9, setMainCetagoryEffect9] = useState(
    mainCetagoryClickEffect9.current
  );
  const [mainCetagoryEffect10, setMainCetagoryEffect10] = useState(
    mainCetagoryClickEffect10.current
  );
  const [mainCetagoryEffect11, setMainCetagoryEffect11] = useState(
    mainCetagoryClickEffect11.current
  );
  const [mainCetagoryEffect12, setMainCetagoryEffect12] = useState(
    mainCetagoryClickEffect12.current
  );
  const [mainCetagoryEffect13, setMainCetagoryEffect13] = useState(
    mainCetagoryClickEffect13.current
  );
  let setEffectMainCetagory = [
    mainCetagoryClickEffect1,
    mainCetagoryClickEffect2,
    mainCetagoryClickEffect3,
    mainCetagoryClickEffect4,
    mainCetagoryClickEffect5,
    mainCetagoryClickEffect6,
    mainCetagoryClickEffect7,
    mainCetagoryClickEffect8,
    mainCetagoryClickEffect9,
    mainCetagoryClickEffect10,
    mainCetagoryClickEffect11,
    mainCetagoryClickEffect12,
    mainCetagoryClickEffect13,
  ];
  let mainCetagoryClickEffect = [
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
    mainCetagoryEffect13,
  ];
  let mainNastedCetagoryClickEffectStoreinState = [
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
    setMainCetagoryEffect13,
  ];

  function clickToSetOneCetagoryColor(key) {
    setonClickToToggalPpickForYouC(false)
    setEffectMainCetagory[0].current = false;
    mainNastedCetagoryClickEffectStoreinState[0](
      setEffectMainCetagory[0].current
    );
    setEffectMainCetagory[1].current = false;
    mainNastedCetagoryClickEffectStoreinState[1](
      setEffectMainCetagory[1].current
    );
    setEffectMainCetagory[2].current = false;
    mainNastedCetagoryClickEffectStoreinState[2](
      setEffectMainCetagory[2].current
    );
    setEffectMainCetagory[3].current = false;
    mainNastedCetagoryClickEffectStoreinState[3](
      setEffectMainCetagory[3].current
    );
    setEffectMainCetagory[4].current = false;
    mainNastedCetagoryClickEffectStoreinState[4](
      setEffectMainCetagory[4].current
    );
    setEffectMainCetagory[5].current = false;
    mainNastedCetagoryClickEffectStoreinState[5](
      setEffectMainCetagory[5].current
    );
    setEffectMainCetagory[6].current = false;
    mainNastedCetagoryClickEffectStoreinState[6](
      setEffectMainCetagory[6].current
    );
    setEffectMainCetagory[7].current = false;
    mainNastedCetagoryClickEffectStoreinState[7](
      setEffectMainCetagory[7].current
    );
    setEffectMainCetagory[8].current = false;
    mainNastedCetagoryClickEffectStoreinState[8](
      setEffectMainCetagory[8].current
    );
    setEffectMainCetagory[9].current = false;
    mainNastedCetagoryClickEffectStoreinState[9](
      setEffectMainCetagory[9].current
    );
    setEffectMainCetagory[10].current = false;
    mainNastedCetagoryClickEffectStoreinState[10](
      setEffectMainCetagory[10].current
    );
    setEffectMainCetagory[11].current = false;
    mainNastedCetagoryClickEffectStoreinState[11](
      setEffectMainCetagory[11].current
    );
    setEffectMainCetagory[12].current = false;
    mainNastedCetagoryClickEffectStoreinState[12](
      setEffectMainCetagory[12].current
    );

    setEffectMainCetagory[key].current = true;
    mainNastedCetagoryClickEffectStoreinState[key](
      setEffectMainCetagory[key].current
    );
  }

  return (
    <div className="w-full h-full relative">
      <div className="absolute top-0 w-full h-[48px] bg-[#FBB03B] text-white z-20 flex justify-between items-center px-[5px]">
      <div className="flex items-center">
        <Link to={"/"}><MdKeyboardArrowLeft className="text-[28px] " /></Link>
        <p className="text-[16px] ">{cetagoryNavTittle.current}</p>
      </div>
      <div className="flex items-center text-[22px]">
        <IoSearchSharp className="mr-[10px]" />
        <FaShoppingCart className="mr-[10px]" />
      </div>
    </div>
      <div className="w-[92.7083px] bg-[#dadada63] border-r-[1px] border-[#00000012] grid items-center absolute top-0 left-0 h-[100vh] overflow-y-auto z-10 pt-[48px] bottomScrollbar">
        <div
          className={`w-[100%] h-[70px] text-center text-[#9e9e9e] pt-[5px] pb-[5px] grid cursor-pointer ${
            mainCetagoryClickEffect[0] ? "activeColorCategory" : ""
          }`}
          onClick={() => {
            clickToSetOneCetagoryColor(0);
            setonClickToToggalPpickForYouC(true)
            cetagoryNavTittle.current = "Pick For You"
            
          }}
        >
          <div className="flex justify-center items-center text-[22px]">
            <FaUserTie />
          </div>
          <p className="flex items-center text-[10px] px-[8px] leading-[13px] mx-auto">
            Pick For You
          </p>
        </div>
        {cetagoryJson.map((key) => {
          return (
            <div
              className={`w-[100%] h-[70px] text-center text-[#9e9e9e] pt-[5px] pb-[5px] grid cursor-pointer ${
                mainCetagoryClickEffect[key.id] ? "activeColorCategory" : ""
              }`}
              onClick={() => {
                clickToSetOneCetagoryColor(key.id);
                let setKeyid = key.id - 1;
                NastedCetagory.current = cetagoryJson[setKeyid].nastedCatagory;
                cetagoryNavTittle.current = key.tittle
              }}
            >
              <div className="flex justify-center items-center text-[22px]">
                {key.icon}
              </div>
              <p className="flex items-center text-[10px] px-[8px] leading-[13px] mx-auto">
                {key.tittle}
              </p>
            </div>
          );
        })}
      </div>
      {/* Pick For You */}
      <div className={`w-[100%] h-[100vh] bg-white ${onClickToToggalPickForYouC? "": "hidden"} absolute top-0 right-0 overflow-y-auto z-[9] pt-[48px] pl-[92.7083px]`}>
        <section className="grid grid-cols-1">
          <div className="flex flex-wrap py-[20px]">
            {pickForYouCetagory.current.map((key) => {
              return (
                <div className="text-center w-[93.75px] h-[110.417px] px-[10.4167px] mb-[15px]">
                  <img
                    src={key.image}
                    className="w-[62.5px] h-[62.5px] mx-auto mb-[6px]"
                  />
                  <p className="text-[12px] text-[#404040] w-[77.5px] leading-[15px] mx-auto">
                    {key.tittle}
                  </p>
                </div>
              );
            })}
          </div>
        </section>
      </div>
      {/* Nasted Cetagory */}
      <div className={`w-[100%] h-[100vh] ${onClickToToggalPickForYouC? "hidden": ""} bg-white absolute top-0 right-0 overflow-y-auto z-[9] pt-[48px] pl-[92.7083px]`}>
        <section className={`grid grid-cols-1 divide-y border-b-[1px] border-b-[#00000012]`}>
        {NastedCetagory.current.map((key) => {
          return(
            <NastedCategorys id={key} tittle={key.tittle} nastedCatagory={key.nastedCatagory}/>
          )
        })}
        </section>
      </div>
    </div>
  );
};
const NastedCategorys = (key) => {
  return (
    <details className="group text-lg">
      <summary className="h-[65px] flex cursor-pointer flex-row items-center justify-between py-1 px-[10px] text-gray-800 marker:[font-size:0px] border-b-[1px] border-b-[#00000012]">
        <p className="text-[16px]">{key.tittle}</p>
        <IoIosArrowDown className="h-6 w-6 rotate-0 transform text-gray-400 group-open:rotate-180" />
      </summary>
      <div className="flex flex-wrap gap-y-[15px] pt-[20px] pb-[10px] border-b-[1px] border-[#00000012]">
        {key.nastedCatagory.map((key) => {
          return (
            <div className="text-center w-[93.75px] h-[110.417px] px-[10.4167px]">
              <img
                src={key.image}
                className="w-[62.5px] h-[62.5px] mx-auto mb-[6px]"
              />
              <p className="text-[12px] text-[#404040] w-[77.5px] leading-[15px] mx-auto">
                {key.tittle}
              </p>
            </div>
          );
        })}
      </div>
    </details>
  );
};

export default Category;
