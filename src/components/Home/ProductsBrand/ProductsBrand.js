import { React } from "react";
import Products from "./Products";
import Brand from "./Brand";


function ProductsBrand() {
  return (
    <div className="my-[20px] tablet:w-[1300px] tablet5:w-[94%] w-[100%] mx-auto tablet:flex block justify-between">

        <Products/>
        <Brand/>

    </div>
  );
}

export default ProductsBrand;
