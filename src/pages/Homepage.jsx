import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import axios from 'axios';
import CollectionCard from '../components/CollectionCard';
import { IoMenu } from "react-icons/io5";
import Button from '../components/Button';
import Features from '../components/Features';
import { useSupabaseAuth } from '../context/SupabaseAuthContext';
import { useSupabaseProducts } from '../context/SupabaseDatabaseProvider';
import { LuLoader } from 'react-icons/lu';
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const { user ,logoutUser } = useSupabaseAuth();
    const [open, setOpen] = useState(false);
    // const [products, setProducts] = useState([]);
    const {products} = useSupabaseProducts();
    const navigate = useNavigate();

    

    // useEffect(()=>{
    //   axios
    //       .get("/ecommerce/products")
    //       .then(({data})=> setProducts(data.data.products))
    //       .catch((err) => console.log(err))
    // },[])

  return (
    <div className='h-[3705px] w-[1496px] relative '>
      {/* ----------------TOP NAV ------------------------------- */}
      <div className="top-nav w-full h-[132px] relative">
          {/* <img src="./src/images/Vector.png" alt="" className='size-4 absolute top-[26px] left-[28px]' /> */}
         <div className='absolute top-[26px] left-[28px]'>
         {
            user?(
              <button
              className=" px-2 py-1 font-semibold text-slate-700"
              onClick={logoutUser}>
              Logout
              </button>
            ) :(
                  <div className="flex gap-1 ">
                            <Link to={"/login"}>
                                <button className="px-2 py-1  text-[#389db6] font-bold bg-[#f5f3f3] rounded-md border border-[#2A254B]">
                                    Login
                                </button>
                            </Link>
                            <Link to={"/register"}>
                                <Button className="px-2 py-1  text-white bg-[#2A254B] rounded-md font-semibold">
                                    Register
                                </Button>
                            </Link>
                    </div>
            )
          }</div> 
          <h1 className='w-[65px] h-[30px] font-[400] text-[#22202E] text-[24px] absolute top-[20px] left-[687px]'>Avion</h1>
          <img src="./src/images/Shopping--cart.png" alt="" className='size-4 absolute top-[26px] left-[1364px]'/>
            <img src="./src/images/User--avatar.png" alt="" className='size-4 absolute top-[26px] left-[1396px]'/>
         <div className='absolute top-[70px] left-[28px] border w-[1480px]'><hr /></div>
        <div className='absolute top-[90px] left-[382px]'>
          <ul className='flex justify-center h-[22px] w-[675px] gap-11'>
          <li className='text-[gray] text-[16px] leading-[21.6px]'><Link>Plant pots</Link></li>
          <li className='text-[gray] text-[16px] leading-[21.6px]'><Link>Ceramics</Link></li>
          <li className='text-[gray] text-[16px] leading-[21.6px]'><Link>Tables</Link></li>
          <li className='text-[gray] text-[16px] leading-[21.6px]'><Link>Chairs</Link></li>
          <li className='text-[gray] text-[16px] leading-[21.6px]'><Link>Crockery</Link></li>
          <li className='text-[gray] text-[16px] leading-[21.6px]'><Link>Tableware</Link></li>
          <li className='text-[gray] text-[16px] leading-[21.6px]'><Link>Cutlery</Link></li>
          </ul>
        </div>
      </div>


      {/* ----------------------HERO------------------------------------ */}
      <div className='h-[704px] w-full'>
      <div className="hero flex h-[584px] w-[1280px] relative bg-[#2A254B] top-[60px] left-[80px]">
        <div className="left-hero  text-[white] flex flex-col justify-between absolute ">
          <div className='w-[513px] h-[187px] absolute top-[60px] left-[60px] gap-[41px] flex flex-col'>
            <h1 className=' text-[32px] font-[400] h-[90px] w-[513px] leading-[44.8px]'>The furniture brand for the future,with timeless designs</h1>
            <button className='left-[60px] bg-[rgba(0,0,0,0.3)] border-[#4E4D93] text-[white] w-[170px] h-[56px]'>View collection</button>
          </div>
          <div className=' w-[602px] h-[81px] absolute top-[443px] left-[60px] font-[400] text-[18px] leading-[27px] '>
            <p>A new era in eco friendly furniture with Avelon, the French luxury retail brand with nice fonts, tasteful colors and a beautiful way to display things digitally using modern web technologies.</p>
          </div>

        </div>
        <div className="right-hero    ">
          <img src="./src/images/Right_Image.png" alt="" className='w-[550px] h-[584px] left-[760px] absolute' />
        </div>
      </div>
      </div>


      {/* ------------------------FEATURES--------------------------------*/}
      {/* <div className="features1 h-[335px] w-full relative">
        <h1 className='absolute top-[60px] left-[529px] w-[366px] h-[34px] font-[400] text-[24px] leading-[33.6px]'>What makes our brand different</h1>
        <div>
          <div className='absolute top-[145px] left-[86px] gap-4 flex flex-col '>
            <img src="./src/images/Delivery.png" alt="" className='size-6' />
            <div className=' w-[270px] h-[84px] flex flex-col gap-2 top-[40px] '>
                <h2 className='w-[199px] h-[28px] text-[20px] font-[400] leading-7 '>Next day as standard</h2>
                <p className='h-[48px] w-[270px] font-[400] text-[16px] leading-[24px] '>Order before 3pm and get your order the next day as standard</p>
            </div>
          </div>
          <div className='absolute   top-[145px] left-[415px] gap-4 flex flex-col '>
            <img src="./src/images/Checkmark.png" alt="" className='size-6' />
            <div className=' w-[270px] h-[84px] flex flex-col gap-2 top-[40px] '>
                <h2 className='w-[199px] h-[28px] text-[20px] font-[400] leading-7 '>Made by true artisans</h2>
                <p className='h-[48px] w-[270px] font-[400] text-[16px] leading-[24px] '>Handmade crafted goods made with real passion and craftmanship</p>
            </div>
          </div>
          <div className='absolute top-[145px] left-[739px] gap-4 flex flex-col '>
            <img src="./src/images/Purchase.png" alt="" className='size-6' />
            <div className=' w-[270px] h-[84px] flex flex-col gap-2 top-[40px] '>
                <h2 className='w-[199px] h-[28px] text-[20px] font-[400] leading-7 '>Unbeatable prices</h2>
                <p className='h-[48px] w-[270px] font-[400] text-[16px] leading-[24px] '>For our materials and quality you won’t find better prices anywhere</p>
            </div>
          </div>
          <div className='absolute top-[145px] left-[1065px] gap-4 flex flex-col '>
            <img src="./src/images/Sprout.png" alt="" className='size-6' />
            <div className=' w-[270px] h-[84px] flex flex-col gap-2 top-[40px] '>
                <h2 className='w-[199px] h-[28px] text-[20px] font-[400] leading-7 '>Recycled packaging</h2>
                <p className='h-[48px] w-[270px] font-[400] text-[16px] leading-[24px] '>We use 100% recycled packaging to ensure our footprint is manageable</p>
            </div>
          </div>
        </div>
      </div> */}
      <Features/>

      
      {/* -----------------------Listing1---------------------------------- */}
      <div className="listing1 h-[761px] w-full relative">
        <h1 className='w-[217px] h-[39px] font-[400] text-[32px] leading-[39.36px] absolute top-[80px] left-[80px] '>New ceramics</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  mt-[50px] h-full gap-[330px] absolute left-[80px]'>

          {
            products ? (products.slice(0,4).map((product)=>{
              return(
                <CollectionCard
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  image={product.image}
                />
              )
            })
           ) : (<div className='h-[600px] col-span-5 flex items-center justify-center w-full '>
              <LuLoader size={40} className='animate-spin'/>
              </div>
           )
          }

         {/* { products.slice(0,4).map((product)=>{
            return(
              <CollectionCard 
                  key="product._id"
                  img={product?.mainImage?.url}
                  title={product.name}
                  price={product.price}
                  />
            )
          })} */}


          {/* <CollectionCard 
          img="./src/images/Right_image.png"
          desc="The Dandy chair"
          price="£250"
          left="left-[80px]"/>
          <CollectionCard 
          img="./src/images/Right_image.png"
          desc="The Dandy chair"
          price="£250"
          left="left-[405px]"/>
          <CollectionCard 
          img="./src/images/Right_image.png"
          desc="The Dandy chair"
          price="£250"
          left="left-[730px]"/>
          <CollectionCard 
          img="./src/images/Right_image.png"
          desc="The Dandy chair"
          price="£250"
          left="left-[1055px]"/> */}
          {/* <div className='w-[305px] h-[462px] absolute top-[152px] left-[80px] flex flex-col gap-6 '>
            <img src="./src/images/Right_image.png" alt="" className='h-[375px] w-[305px]' />
            <div className='h-[63px] w-[154px] flex flex-col gap-2'>
              <p className='w-[154px] h-[28px] text-[20px] leading-7 font-[400] '>The Dandy chair</p>
              <p className='h-[27px] w-[44px] font-[400] text-[18px] leading-[27px] '>£250</p>
            </div>
          </div> */}
          {/* <div className='w-[305px] h-[462px] absolute top-[152px] left-[405px] flex flex-col gap-6 '>
            <img src="./src/images/Parent.png" alt="" className='h-[375px] w-[305px]' />
            <div className='h-[63px] w-[154px] flex flex-col gap-2'>
              <p className='w-[154px] h-[28px] text-[20px] leading-7 font-[400] '>Rustic Vase Set</p>
              <p className='h-[27px] w-[44px] font-[400] text-[18px] leading-[27px] '>£155</p>
            </div>
          </div>
          <div className='w-[305px] h-[462px] absolute top-[152px] left-[730px] flex flex-col gap-6 '>
            <img src="./src/images/Parent1.png" alt="" className='h-[375px] w-[305px]' />
            <div className='h-[63px] w-[154px] flex flex-col gap-2'>
              <p className='w-[154px] h-[28px] text-[20px] leading-7 font-[400] '>The Silky Vase</p>
              <p className='h-[27px] w-[44px] font-[400] text-[18px] leading-[27px] '>£125</p>
            </div>
          </div>
          <div className='w-[305px] h-[462px] absolute top-[152px] left-[1055px] flex flex-col gap-6 '>
            <img src="./src/images/Parent2.png" alt="" className='h-[375px] w-[305px]' />
            <div className='h-[63px] w-[154px] flex flex-col gap-2'>
              <p className='w-[154px] h-[28px] text-[20px] leading-7 font-[400] '>The Lucy Lamp</p>
              <p className='h-[27px] w-[44px] font-[400] text-[18px] leading-[27px] '>£399</p>
            </div>
          </div> */}
        </div>
        <button className='w-[170px] h-[56px] top-[649px] left-[635px] absolute  bg-[#F9F9F9]' onClick={()=>{navigate("/shop")}}><p>View collection</p></button>
      </div>


      {/* ------------------------Listing2------------------------------------*/}
      <div className="listing2 h-[744px] w-full relative">
        <h1 className='w-[330px] h-[45px] top-[64px] left-[80px] font-[400] text-[32px] leading-[44.8px] absolute '>Our popular products</h1>
        <div>
          <div className='w-[630px] h-[462px] top-[134px] left-[80px] absolute flex flex-col gap-6 '>
            <img src="./src/images/Large.png" alt="" className='h-[375px] w-[630px] '/>
            <div className='w-[209px] h-[63px] flex flex-col gap-2'>
              <p className='w-[209px] h-[28px] font-[400] leading-[28px] text-[20px]'>The Poplar suede sofa</p>
              <p className='w-[46px] h-[27px] font-[400] leading-[27px] text-[18px]'>£980</p>
            </div>
          </div>
          <div className='w-[305px] h-[462px] top-[136px] left-[730px] absolute flex flex-col gap-6 '>
            <img src="./src/images/Right_image.png" alt="" className='h-[375px] w-[305px] '/>
            <div className='w-[154px] h-[63px] flex flex-col gap-2'>
              <p className='w-[154px] h-[28px] font-[400] leading-[28px] text-[20px]'>The Dandy chair</p>
              <p className='w-[44px] h-[27px] font-[400] leading-[27px] text-[18px]'>£250</p>
            </div>
          </div>
          <div className='w-[305px] h-[462px] top-[136px] left-[1055px] absolute flex flex-col gap-6 '>
            <img src="./src/images/ChairProduct.png" alt="" className='h-[375px] w-[305px] '/>
            <div className='w-[154px] h-[63px] flex flex-col gap-2'>
              <p className='w-[154px] h-[28px] font-[400] leading-[28px] text-[20px]'>The Dandy chair</p>
              <p className='w-[44px] h-[27px] font-[400] leading-[27px] text-[18px]'>£250</p>
            </div>
          </div>
        </div>
        <button className='w-[170px] h-[56px] top-[640px] left-[635px] absolute  bg-[#F9F9F9]'><p>View collection</p></button>
      </div>

      {/* ----------------------- text-center----Email_signup----------------------------*/}
      <div className="email_signup w-full h-[481px] bg-[#F9F9F9] relative">
        <div className='h-[364px] w-[1273px] relative top-[52px] left-[93px] 
        bg-[#FFFFFF]'>
            <div className='w-[571px] h-[114px] top-[68px] left-[351px] flex flex-col gap-4 absolute'>
              <h1 className='w-[571px] h-[50px] font-[400] text-[36px] leading-[50.4px] text-center'>Join the club and get the benefits</h1>
              <p className='h-[48px] w-[470px] font-[400] leading-[24px] 
              text-[16px] text-center top-[66px] left-[50.5px] absolute'>Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more</p>
            </div>
            <div className='w-[472px] h-[56px] relative top-[254px] left-[400px]'>
              <input type="text" className='bg-[#F9F9F9] w-[354px] h-[56px] text-[16px] placeholder:pl-[32px] placeholder:pt-[17px]' placeholder='your@email.com'/>
              <button className='w-[118px] h-[56px] py-4 px-8 
              bg-[#2A254B] text-[white] text-[16px] leading-6'><p>Sign up</p></button>
            </div>
        </div>
      </div>


      {/* ------------------------------------Features2-------------------------------------- */}
      <div className="features2 h-[603px] w-full relative">
        <div className="left">
          <div className='w-[536px] h-[225px] absolute top-[72px] left-[84px] flex flex-col gap-[25px]'>
            <h1 className='w-[514px] h-[68px] text-[24px] leading-[33.6px] font-[400] text-[#2A254B]'>From a studio in London to a global brand with over 400 outlets</h1>
            <div className='w-[536px] h-[132px] font-[400] text-[16px] leading-[21.6px] text-[#505977] '>
              <p>When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market. <br/><br/>Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.</p>
            </div>
          </div>
          <button className='w-[150px] h-[56px] top-[493px] left-[84px] absolute bg-[#F9F9F9] text-4 leading-[24px] font-[400] text-[#2A254B] '>Get in touch</button>
        </div>
        <div className="right">
          <img src="./src/images/Image.png" alt="" className='h-[603px] w-[799px] left-[720px] absolute '/>
        </div>
      </div>



      {/* ------------------------------Footer---------------------------------------------------- */}
      
    </div>
  )
}

export default Homepage































// import React from 'react'

// const Homepage = () => {
//   return (
//     <div>
//       <div className="banner">
//       <div className="relative isolate flex items-center gap-x-6 overflow-hidden bg-gray-50 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
//       <div
//         className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
//         aria-hidden="true"
//       >
//         <div
//           className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
//           style={{
//             clipPath:
//               'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
//           }}
//         />
//       </div>
//       <div
//         className="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
//         aria-hidden="true"
//       >
//         <div
//           className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
//           style={{
//             clipPath:
//               'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
//           }}
//         />
//       </div>
//       <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
//         <p className="text-sm leading-6 text-gray-900">
//           <strong className="font-semibold">GeneriCon 2023</strong>
//           <svg viewBox="0 0 2 2" className="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true">
//             <circle cx={1} cy={1} r={1} />
//           </svg>
//           Join us in Denver from June 7 – 9 to see what’s coming next.
//         </p>
//         <a
//           href="/register"
//           className="flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
//         >
//           Register now <span aria-hidden="true">&rarr;</span>
//         </a>
//       </div>
//       <div className="flex flex-1 justify-end">
//         <button type="button" className="-m-3 p-3 focus-visible:outline-offset-[-4px]">
//           <span className="sr-only">Dismiss</span>
//         </button>
//       </div>
//     </div>
//       </div>
//       <div className='h-[350px]'>
//         Homepage
//       </div>
//     </div>
//   )
// }

// export default Homepage