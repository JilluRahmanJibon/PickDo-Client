import { React } from "react";
import foodDrink from "../../../assist/serviceCetagory/food-drink.png";
import grocery from "../../../assist/serviceCetagory/Grocery.png";
import pharmacy from "../../../assist/serviceCetagory/Pharmacy.png";
import giftCard from "../../../assist/serviceCetagory/GiftCard.png";
import parcel from "../../../assist/serviceCetagory/Parcel.png";
import shopping from "../../../assist/serviceCetagory/Shopping.png";

function ServiceCetagory() {
  const serviceObj = [
    {
      id: 1,
      img: foodDrink,
      name: "Food",
    },
    {
      id: 2,
      img: grocery,
      name: "Grocery",
    },
    {
      id: 3,
      img: pharmacy,
      name: "Pharmacy",
    },
    {
      id: 4,
      img: giftCard,
      name: "Gift Card",
    },
    {
      id: 5,
      img: parcel,
      name: "Parcel",
    },
    {
      id: 6,
      img: shopping,
      name: "Shopping",
    },
    {
      id: 7,
      img: shopping,
      name: "Shopping",
    },
    {
      id: 8,
      img: shopping,
      name: "Shopping",
    },
  ];
  return (
    <div className="w-[100%] h-[100%] story4:mt-[30px] mt-[0px] mb-[30px]">
      <div className="grid xl:grid-cols-8 lg:grid-cols-6 md:grid-cols-5  min-[400px]:grid-cols-4 min-[360px]:grid-cols-4 min-[300px]:grid-cols-3 grid-cols-2 lg:w-[1000px] w-[100%] mx-auto md:px-[20px] sm:px-[10px] min-[450px]:px-[30px] px-[7px] justify-around  leading-[50px]">
        {serviceObj.map((key) => {
          return (
            <div key={key.id} className="px-[5px]">
              <div className="min-[360px]:w-[65px] sm:w-[85px] w-[75px] min-[360px]:h-[65px]  sm:h-[85px] h-[75px] bg-white border-[1px] border-[#FBB03B] rounded-[50px] grid justify-center items-center mx-auto cursor-pointer">
                <img src={key.img} className="w-[75%] mx-auto" />
              </div>
              <p className="text-center mt-[-10px] min-[360px]:text-[15px] sm:text-[17px]">
                {key.name}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ServiceCetagory;
