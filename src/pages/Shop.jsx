import React from "react";
import { useSupabaseProducts } from "../context/SupabaseDatabaseProvider";
import { useSupabaseAuth } from "../context/SupabaseAuthContext";
import { Navigate } from "react-router-dom";
import CollectionCard from "../components/CollectionCard";

const Shop = () => {
    const { products } = useSupabaseProducts();

    return (
        <div>
            <header className="w-full h-auto bg-center bg-no-repeat bg-cover bg-[url('src/assets/shop-banner.avif')] py-20 px-10">
                <div className="">
                    <p className="text-4xl text-white font-bold font-clash-medium tracking-wide">
                        All Products
                    </p>
                </div>
            </header>

            <div className="w-full flex min-h-screen">
                <div className="w-[25%] bg-white">
                    <div className="flex flex-col px-16 py-10 gap-3">
                        <p className="text-xl">Product Type</p>
                        <div className="flex gap-2">
                            <input type="checkbox" name="" id="" />
                            <label>Furniture</label>
                        </div>
                        <div className="flex gap-2">
                            <input type="checkbox" name="" id="" />
                            <label>Homeware</label>
                        </div>
                        <div className="flex gap-2">
                            <input type="checkbox" name="" id="" />
                            <label>Sofas</label>
                        </div>
                        <div className="flex gap-2">
                            <input type="checkbox" name="" id="" />
                            <label>Homeware</label>
                        </div>
                        <div className="flex gap-2">
                            <input type="checkbox" name="" id="" />
                            <label>Light Fittings</label>
                        </div>
                        <div className="flex gap-2">
                            <input type="checkbox" name="" id="" />
                            <label>Accessories</label>
                        </div>
                    </div>

                    <div className="flex flex-col px-16 gap-3">
                        <p className="text-xl">Price</p>
                        <div className="flex gap-2">
                            <input type="checkbox" name="" id="" />
                            <label>0-100</label>
                        </div>
                        <div className="flex gap-2">
                            <input type="checkbox" name="" id="" />
                            <label>101-250</label>
                        </div>
                        <div className="flex gap-2">
                            <input type="checkbox" name="" id="" />
                            <label>250+</label>
                        </div>
                    </div>

                    <div className="flex flex-col px-16 py-10 gap-3">
                        <p className="text-xl">Designer</p>
                        <div className="flex gap-2">
                            <input type="checkbox" name="" id="" />
                            <label>Robert Smith</label>
                        </div>
                        <div className="flex gap-2">
                            <input type="checkbox" name="" id="" />
                            <label>Liam Gallagher</label>
                        </div>
                        <div className="flex gap-2">
                            <input type="checkbox" name="" id="" />
                            <label>Biggie Smalls</label>
                        </div>
                        <div className="flex gap-2">
                            <input type="checkbox" name="" id="" />
                            <label>Thome Work</label>
                        </div>
                    </div>
                </div>

                <div className="flex-1 bg-white p-10">
                    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                        {products &&
                            products.map((product) => {
                                return (
                                    <CollectionCard
                                        key={product.id}
                                        id={product.id}
                                        image={product.image}
                                        name={product.name}
                                        price={product.price}
                                    />
                                );
                            })}
                    </div>

                    <div className="text-center mt-[40px]">
                        <button className="p-3 bg-[#2A254B] text-white ">
                            {" "}
                            Load More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;