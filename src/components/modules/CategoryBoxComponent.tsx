import React from 'react'
import ReactLogo from "../../public/image2.png"

interface CategoryBoxComponentProps { title: string }

const CategoryBoxComponent = ({ id, title }) => {
    return (
        <div className='border-2 border-green-800 rounded-xl bg-[#DDE2E5] text-black h-44 flex flex-col justify-between hover:scale-110 duration-300'>
            <img src={ReactLogo} alt='Category' width={90} className='rounded-t-lg' />
            <h2 className='mb-4 font-bold tracking-tighter'>{title}</h2>
        </div>
    )
}

export default CategoryBoxComponent