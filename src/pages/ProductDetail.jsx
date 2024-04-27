import React, { useEffect, useState } from 'react'
import { useSupabaseProducts } from '../context/SupabaseDatabaseProvider'
import { useParams } from 'react-router-dom';
import { LuLoader } from 'react-icons/lu';

const ProductDetail = () => {

    const {getProductById} = useSupabaseProducts();
    const {id} = useParams();
    const [productDetail ,setProductDetail] = useState(null);
    const [loading ,setLoading] = useState(true);

    useEffect(()=>{
        if(id){
            getProductById(id).then(data=>{
              data && setProductDetail(data);  
            }).catch(err=> console.log(err)).finally(()=>{
                setLoading(false)
            })
        }
    },[id])


    if(loading){
        return <div className='w-full h-screen flex justify-center items-center'>
            <LuLoader size={40} className='animate-spin'/>
        </div>
    }

  return (
    <div className='px-10'>
      <div className=' grid grid-cols-1 md:grid-cols-2 h-screen'>
        <div className='w-full p-10 overflow-hidden'>
            <img src={productDetail.image} alt="" className='h-full w-full'/>
        </div>
        <div className='w-full p-10 overflow-hidden'>
            <div>
                <h1 className='text-4xl font-normal '>{productDetail.name}</h1>
                <p className='text-2xl mt-3'>₹{productDetail.price.toLocaleString("en-In")}</p>
            </div>
            <div className='h-[1.5px] bg-gray-200 my-5 w-[90%]'/>
            <div className='font-normal'>
            <p className='text-base '>Product Description</p>
            <p className='text-base mt-4 tracking-wide'>{productDetail.short_description}</p>
            </div>
            <div className='mt-5'>
                <p className='font-normal text-base'>Quantity</p>
                <div className='w-fit bg-gray-100 mt-4'>
                    <button className='px-2 py-3'>_</button>
                    <input type="number" className='w-[70px] inline-flex items-center justify-center text-center border-none outline-none px-2 py-3  bg-white' disabled value={1}/>
                    <button className='px-2 py-3'>+</button>
                </div>
            </div>
            <div className='mt-10 flex gap-5 ]'>
                <button className='bg-[#2A254B] text-white h-full w-1/4'>Add to Cart</button>
                <button className='text-[#2A254B] bg-white w-1/4 '>Save to favourite</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
