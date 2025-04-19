import React from 'react'
import ReactLogo from "../../public/image2.png"



const CategoryBoxComponent = () => {
    return (
        <div className='border-2 border-green-800 rounded-xl bg-white text-black h-44 flex flex-col justify-between hover:scale-110 duration-300'>
            <img src={ReactLogo} alt='Category' width={90} className='rounded-t-lg' />
            <h2 className='py-5 font-bold tracking-tighter'>لوازم فروشی</h2>
        </div>
    )
}

export default CategoryBoxComponent