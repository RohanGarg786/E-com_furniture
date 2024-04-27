import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { CiCircleCheck } from "react-icons/ci";

const Features = () => {
    return (
        <div className="h-auto p-10 flex justify-center mb-[40px]overflow-hidden">
            <div className=" h-full w-full">
                <h3 className="text-center text-2xl text-[#2A254B] font-clash-medium">
                    What makes Our Brand 'Different'?
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  mt-[50px] h-full gap-10 md:gap-6 lg:gap-5">
                    <div className="h-full">
                        {/* <TbTruckDelivery size={30} /> */}
                        <img src="./src/images/Delivery.png" alt="" />
                        <h5 className="font-clash-regular text-[22px] mt-2">
                            Next day as standard
                        </h5>
                        <p className="font-satoshi-regular text-[15px] mt-2">
                            Order before 3pm and get your order <br /> as
                            standard.
                        </p>
                    </div>
                    <div className="h-full">
                        {/* <CiCircleCheck size={30} /> */}
                        <img src="./src/images/Checkmark.png" alt="" />
                        <h5 className="font-clash-regular text-[22px] mt-2">
                            Made by true artisans
                        </h5>
                        <p className="font-satoshi-regular text-[15px] mt-2">
                            Handmade crafted goods made with real passion and
                            craftmanship
                        </p>
                    </div>
                    <div className="h-full">
                        <img src="./src/images/Purchase.png" alt="" />
                        <h5 className="font-clash-regular text-[22px] mt-2">
                            Unbeatable prices
                        </h5>
                        <p className="font-satoshi-regular text-[15px] mt-2">
                            For our materials and quality you won’t find better
                            prices anywhere
                        </p>
                    </div>
                    <div className="h-full">
                        <img src="./src/images/Sprout.png" alt="" />
                        <h5 className="font-clash-regular text-[22px] mt-2">
                            Recycled packaging
                        </h5>
                        <p className="font-satoshi-regular text-[15px] mt-2">
                            We use 100% recycled packaging to ensure our
                            footprint is manageable
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;