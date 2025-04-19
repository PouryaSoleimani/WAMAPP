import React from 'react'
import { Button } from '../ui/button'

const HeaderButtonsTopComponent = () => {
    return (
        <div className='w-[85%] mx-auto my-6 flex items-center justify-center gap-5'>
            <Button className='bg-white text-[var(--pink)] text-lg font-bold px-3 py-8 tracking-tighter rounded-lg  hover:bg-[var(--pink)] hover:text-white duration-500 cursor-pointer'>همین حالا شروع کن</Button>
            <Button className='bg-white text-black text-lg font-bold px-3 py-8 tracking-tighter rounded-lg  hover:bg-zinc-500 hover:text-white duration-500 cursor-pointer'>لیست فروشنده ها</Button>
        </div>
    )
}

export default HeaderButtonsTopComponent