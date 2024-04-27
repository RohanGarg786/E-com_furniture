import React from "react";
import bannerimage from "../images/Right_Image.png";
import Button from "./Button";

const HeroSection = () => {
    return (
        <div className=" h-[350px] md:h-[450px] flex flex-col md:flex-row px-10 py-6">
            <div className="bg-custom-blue text-custom-white h-full p-4 flex-1">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-clash-regular lg:pr-[80px]">
                    The furniture brand for the future with timeless designs
                </h2>
                <Button className={"bg-custom-white/15 text-white mt-5"}>
                    View Collections
                </Button>
                <p className="text-base font-normal mt-6 text-white/70 font-satoshi-regular ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repudiandae sunt eaque atque. Distinctio, totam tempore!
                </p>
            </div>
            <div className="hidden md:flex flex-1">
                <img
                    src={bannerimage}
                    alt="Banner image"
                    className="h-full w-full"
                />
            </div>
        </div>

        // <div className="flex flex-col md:flex-row items-center justify-center h-[500px] mx-auto py-6">
        //     <div className="bg-[#2A254B] h-full p-7 w-[600px] flex flex-col justify-between">
        //         <div>
        //             <h2 className="text-[35px] text-white">
        //                 The furniture brand for the future
        //                 <br /> with timeless designs
        //             </h2>
        //             <button className="p-3 bg-[#494565] text-white mt-5">
        //                 View Collections
        //             </button>
        //         </div>
        //         <p className="text-[20px] font-light text-white">
        //             Lorem ipsum dolor sit amet consectetur adipisicing elit.
        //             Odio iure exercitationem omnis?
        //         </p>
        //     </div>
        //     <div className="w-[600px] h-full">
        //         <img
        //             className="h-full"
        //             src={bannerimage}
        //             alt=""
        //         />
        //     </div>
        // </div>
    );
};

export default HeroSection;