import { React } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineCategory } from "react-icons/md";
import { BiMessageDetail } from "react-icons/bi";
import { MdOutlineAccountCircle } from "react-icons/md";
import { CgShoppingCart } from "react-icons/cg";
import { Link } from "react-router-dom";

function NavberBottom() {
  return (
    <div>
      <nav className="bg-[#FBB03B]  text-[#fff] w-full fixed bottom-0 left-0 right-0 flex md2:hidden z-50" style={{boxShadow: "0 0 2px 0 #00000040"}}>
        <div className="mx-auto px-2 w-[100%]">
          <div className="items-center h-16 flex justify-around w-full relative">
            <div className="absolute w-[50px] h-[50px] top-[-24px] bg-white border-[#FBB03B] rounded-[50px] p-[6px] border-[1px] flex justify-center items-center text-center">
              <CgShoppingCart className="min-[500px]:text-[32px] text-[25px] cursor-pointer text-[#FBB03B]" />
              <div className="px-[3px] absolute top-0 bg-[#FBB03B] right-[-7px] flex justify-center items-center rounded-[10px]">
                <span className="text-[12px] cursor-default text-white">20</span>
              </div>
            </div>

            <div className="text-center">
              <AiOutlineHome className="min-[500px]:text-[32px] text-[25px] cursor-pointer" />
            </div>
            <div className="text-center">
              <Link to={"/category"}><MdOutlineCategory className="min-[500px]:text-[32px] text-[25px] cursor-pointer" /></Link>
              
            </div>
            <div className="text-center relative">
              <BiMessageDetail className="min-[500px]:text-[32px] text-[25px] cursor-pointer" />
              <div className="px-[3px] absolute min-[500px]:top-[-6px] top-[-9px] bg-[#FBB03B] right-[-6px] flex justify-center items-center rounded-[10px] border-[white] border-[1px]">
                <span className="text-[12px] cursor-default text-white">20</span>
              </div>

            </div>
            <div className="text-center">
              <MdOutlineAccountCircle className="min-[500px]:text-[32px] text-[25px] cursor-pointer" />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavberBottom;
