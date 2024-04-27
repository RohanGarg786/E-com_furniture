import React, { useEffect } from "react";
import { Link, Route, Routes,useLocation } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Toaster } from "react-hot-toast";
import axios from "axios";
import Navbar from "./components/Navbar";
import Shop from "./pages/Shop";
import ProductDetail from "./pages/ProductDetail";
import Footer from "./components/Footer";
import Cart from "./pages/Cart";


axios.defaults.baseURL = import.meta.env.VITE_BACKEND_API_URL || "";

const App = () => {
  const {pathname} =useLocation();

  useEffect(()=>{
    window.scrollTo({
      top: 0,
      left: 0,
      behavior:"smooth"
    })
  },[pathname]);
    return (
        <div>
            <Toaster position="top-right" />
            {/* <Navbar /> */}
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/product/:id" element={<ProductDetail/>}/>
                <Route path="/*" element={<div>Not Found</div>} />
            </Routes>
            <Footer/>

            {/* <div className="footer">
              <footer>
                <div className=" bg-black px-0 py-[30px] font-['Play' ,'sans-serif'] text-center">
                  <div className="row w-full my-[1%] mx-[1%] py-[0.6%] px-[0%] text-[gray] text-[0.8em] ">
                    <Link to="#" className="decoration-[none] text-[gray] transition-[0.5s]"><i className="fa fa-facebook text-[2em] mx-[1%]"></i></Link>
                    <Link to="#" className="decoration-[none] text-[gray] transition-[0.5s]"><i className="fa fa-instagram text-[2em] mx-[1%]"></i></Link>
                    <Link to="#" className="decoration-[none] text-[gray] transition-[0.5s]"><i className="fa fa-youtube text-[2em] mx-[1%]"></i></Link>
                    <Link to="#" className="decoration-[none] text-[gray] transition-[0.5s]"><i className="fa fa-twitter text-[2em] mx-[1%]"></i></Link>
                  </div>

                <div className="row w-full my-[1%] mx-[1%] py-[0.6%] px-[0%] text-[gray] text-[0.8em]">
                    <ul className="w-full">
                    <li className="inline-block mx-[30px]"><Link to="#" className="decoration-[none] text-[gray] transition-[0.5s]">Contact us</Link></li>
                    <li className="inline-block mx-[30px]"><Link to="#" className="decoration-[none] text-[gray] transition-[0.5s]">Our Services</Link></li>
                    <li className="inline-block mx-[30px]"><Link to="#" className="decoration-[none] text-[gray] transition-[0.5s]">Privacy Policy</Link></li>
                    <li className="inline-block mx-[30px]"><Link to="#" className="decoration-[none] text-[gray] transition-[0.5s]">Terms & Conditions</Link></li>
                    <li className="inline-block mx-[30px]"><Link to="#" className="decoration-[none] text-[gray] transition-[0.5s]">Career</Link></li>
                    </ul>
                </div>

                <div className="row w-full my-[1%] mx-[1%] py-[0.6%] px-[0%] text-[gray] text-[0.8em]">
                E-Com Copyright © 2024 Inferno - All rights reserved || Designed By: E-Com 
                </div>
                </div>
              </footer>
            </div> */}
         </div>
    );
};

export default App;

// reactr-router-dom
