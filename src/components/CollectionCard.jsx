import React from 'react'
import { Link } from 'react-router-dom'

const CollectionCard = ({id,image,name,price,left}) => {
  return (
    <Link to={`/product/${id}`}>
     <div>
      <div className={`${left} w-[305px] h-[400px] top-[152px] absolute  flex flex-col gap-6 shadow-xl`}>
            <img src={image} alt="" className='h-[300px] w-[300px]' />
            <div className='h-[63px] w-[154px] flex flex-col gap-2'>
              <p className='w-[154px] h-[28px] text-[20px] leading-7 font-semibold '>{name}</p>
              <p className='h-[27px] w-[44px] font-[400] text-[18px] leading-[27px] '>₹{price}</p>
            </div>
          </div>
    </div>
    </Link>
  )
}

export default CollectionCard
