import React from 'react'
import _Image from "../../public/image2.png"

interface CategoryFlexBoxComponentProps { id: number, title: string }


const CategoryFlexBoxComponent: React.FC<CategoryFlexBoxComponentProps> = ({ id, title }) => {
    return (
        <div className='w-full h-auto rounded-xl flex flex-col bg-[#DDE2E5] hover:scale-105 duration-500'>
            <img src={_Image} alt="image" width={145} className='rounded-t-lg' />
            <h2 className='text-xl tracking-tighter py-4 font-black' >{title}</h2>
        </div>
    )
}

export default CategoryFlexBoxComponent
