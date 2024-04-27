import React from "react";
import { Navigate } from "react-router-dom";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { useSupabaseAuth } from "../context/SupabaseAuthContext";

const Cart = () => {
  const { user } = useSupabaseAuth();
//   if (!user) {
//     return <Navigate to={"/login"} />;
//   }
  return (
    <div>
      <div className="bg-slate-100 pt-2 md:px-10 lg:px-20 px-4">
        <div className="font-clash-medium text-custom-blue text-xl md:text-2xl lg:text-3xl  py-4">
          Your shopping cart
        </div>
        <div className="grid grid-cols-5  gap-4 font-clash-regular mt-8">
          <div className="col-span-3">Product</div>
          <div className="">Quantity</div>
          <div className="ml-2">Total</div>
        </div>
        <div className="h-[1.5px] bg-gray-400 my-2 w-[100%] md:w-[95%] lg:w-[92%]" />
        <div>
          <div className="grid grid-cols-5  md:gap-4 lg:gap-4 font-clash-regular mt-4">
            <div className="col-span-3 flex gap-2 md:gap-4 lg:gap-4">
              <img
                className="w-[87px] h-[130px] md:w-[110px] md:h-[130px]
                 lg:w-[110px] lg:h-[130px]"
                src="https://images.unsplash.com/photo-1590003689662-0773d48b6417?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGxhbXB8ZW58MHx8MHx8fDA%3D"
                alt=""
              />
              <div className="w-[190px]">
                <div className="text-[12px] md:text-[20px] lg:text-[20px]">
                  White pendent lamp
                </div>
                <div className="text-[9px] md:text-[12px] lg:text-[14px] mt-1 md:mt-2 lg:mt-3 line-clamp-3">
                  Beautiful and simple lamp, this is one for the classics.
                </div>
                <div className="text-[14px] md:text-[17px] lg:text-[19px] mt-2">
                  ₹ 1,450
                </div>
              </div>
            </div>
            <div className="ml-3 md:ml-2 lg:ml-2 text-[12px] md:text-[20px] lg:text-[20px]">
              2
            </div>
            <div className="text-[12px] md:text-[18px] lg:text-[19px]">
              ₹ 2,900
            </div>
          </div>
          <div className="grid grid-cols-5  md:gap-4 lg:gap-4 font-clash-regular mt-4">
            <div className="col-span-3 flex gap-2 md:gap-4 lg:gap-4">
              <img
                className="w-[110px] h-[130px]"
                src="https://images.unsplash.com/photo-1590251024078-8a6d9f90b02d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fHNvZmF8ZW58MHx8MHx8fDA%3D"
                alt=""
              />
              <div className="w-[190px]">
                <div className=" text-[12px] md:text-[18px] lg:text-[20px]">
                  Gray Fabric Sofa
                </div>
                <div className="text-[9px] md:text-[12px] lg:text-[14px] mt-1 md:mt-2 lg:mt-3 line-clamp-3 ">
                  Beautiful and simple this is one for the classics.
                </div>
                <div className="text-[14px] md:text-[18px] lg:text-[19px] mt-2">
                  ₹ 23,000
                </div>
              </div>
            </div>
            <div className="ml-3 md:ml-2 lg:ml-2  text-[12px] md:text-[18px] lg:text-[19px]">
              1
            </div>
            <div className="text-[12px] md:text-[18px] lg:text-[19px] ">
              ₹ 23,000
            </div>
          </div>
          <div className="h-[1.5px] bg-gray-400 my-6 w-[100%] md:w-[95%] lg:w-[93%]" />
          <div className="font-clash-regular flex justify-end px-2 md:px-10 lg:px-20 text-end">
            <div>
              <div className="text-right text-[12px] md:text-[15px] lg:text-[18px]">
                Taxes and shipping are calculated at checkout
              </div>
              <div className="mt-4">
                <span className="mx-2 opacity-70 mt-4	">SubTotal</span>25,900
              </div>
              <div>
                <Link to={"/checkout"}>
                  <Button className={"bg-custom-blue text-white my-2 "}>
                    Go to Checkout
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Cart;
