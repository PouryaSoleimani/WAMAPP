import React from 'react'
import _Image from "../../public/image2.png"

interface CategoryBoxComponentProps { id: number, title: string }

const CategoryGridBoxComponent: React.FC<CategoryBoxComponentProps> = ({ id, title }) => {
    return (
        <div className='rounded-xl bg-[#DDE2E5] text-black h-44 flex flex-col justify-between hover:scale-110 duration-300'>
            <img src={_Image} alt='Category' width={95} className='rounded-t-lg' />
            <h2 className='mb-4 font-bold tracking-tighter'>{title}</h2>
        </div>
    )
}

export default CategoryGridBoxComponent