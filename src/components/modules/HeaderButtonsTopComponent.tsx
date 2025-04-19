import React from 'react'
import { Button } from '../ui/button'

const HeaderButtonsTopComponent = () => {
    return (
        <div className='w-[80%] mx-auto my-6 flex items-center justify-center gap-5'>
            <Button className='bg-white text-[var(--pink)] text-2xl font-bold px-6 py-9 tracking-tighter rounded-xl w-1/2 hover:bg-[var(--pink)] hover:text-white duration-500 cursor-pointer'>همین حالا شروع کن</Button>
            <Button className='bg-white text-black text-2xl font-bold px-6 py-9 tracking-tighter rounded-xl w-1/2 hover:bg-zinc-500 hover:text-white duration-500 cursor-pointer'>لیست فروشنده ها</Button>
        </div>
    )
}

export default HeaderButtonsTopComponent