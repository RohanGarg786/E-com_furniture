import React from 'react'
import { Facebook, Linkedin, Twitter } from 'lucide-react';
import { UserContext } from '../context/UserContext';
import { FaInstagram ,FaTwitter,FaFacebookF,FaLinkedinIn } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { IoMenu } from "react-icons/io5";

const Footer = () => {
  return (
    
      <div className="footer w-[98.9vw] h-[400px] bg-[#2A254B] relative text-white font-[400]">
        <div className='flex'>
          <div >
            <ul className='w-[109px] h-[175px] absolute top-[58px] left-[82px] flex flex-col gap-[12px] text-[14px] leading-[18.9px] '>
            <li className='text-[16px] leading-[19.68px] font-[400] h-[20px] w-[43px] '>Menu</li>
            <li className='w-[85px] h-[19px]'>New arrivals</li>
            <li className='w-[69px] h-[19px]'>Best sellers</li>
            <li>Recently viewed</li>
            <li className='w-[109px] h-[19px]'>Popular this week</li>
            <li>All products</li>
            </ul>
          </div>
          <div >
            <ul className='w-[84px] h-[206px] absolute top-[58px] left-[299px] flex flex-col gap-3 text-[14px] leading-[18.9px]'>
              <li className='text-[16px] leading-[19.68px] h-[20px] '>Categories</li>
              <li className='h-[19px] w-[56px] '>Crockery</li>
              <li>Furniture</li>
              <li>Homeware</li>
              <li>Plant pots</li>
              <li>Chairs</li>
              <li>Crockery</li>
            </ul>
          </div>
          <div>
            <ul className='w-[105px] h-[175px] absolute top-[58px] left-[516px] flex flex-col gap-3 text-[14px] leading-[18.9px]'>
              <li className='text-[16px] leading-[19.68px] h-[20px] w-[105px]'>Our company</li>
              <li>About us</li>
              <li>Vacancies</li>
              <li>Contact us</li>
              <li>Privacy</li>
              <li>Returns policy</li>
            </ul>
          </div>
          <div>
            <h1 className='w-[142px] h-[20px] absolute top-[58px] left-[730px] font-[400] text-[16px] leading-[19.68px] '>Join our mailing list</h1>
            <div className='h-[56px] w-[627px] absolute top-[94px] left-[730px] '> 
              <input type="text" placeholder='your@email.com' className='w-[509px] h-[56px] 
              bg-[#FFFFFF26] placeholder:pl-[32px] placeholder:pt-[17px]'/>
              <button className='w-[118px] h-[56px] bg-[#FFFFFF] text-[#2A254B] '>Sign up</button>
            </div>
          </div>
        </div>
        <div className='w-[1277px] absolute top-[312px] left-[80px] border border-[#4E4D93]'></div>
        <div>
          <p className='w-[164px] h-[19px] absolute top-[342px] left-[80px] font-[400] text-[14px] leading-[18.9px] '>Copyright 2022 Avion LTD</p>
          <div className='w-[264px] h-[24px] absolute top-[342px] left-[1093px] flex gap-[24px]'>
          {/* <Linkedin className='size-6 bg-white text-[#2A254B] rounded'/> */}
          <FaLinkedinIn className='size-6'/>
          {/* <Facebook className='size-6 bg-white text-[#2A254B] rounded'/> */}
          <FaFacebookF className='size-6' />
          {/* <Instagram className='size-6 bg-white text-[#2A254B] rounded'/>*/}
           <FaInstagram className='size-6'/>
          {/* <Twitter className='size-6 bg-white text-[#2A254B] rounded'/> */}
          <FaTwitter className='size-6'/>
          </div>
        </div>
      </div>
  )
}

export default Footer
