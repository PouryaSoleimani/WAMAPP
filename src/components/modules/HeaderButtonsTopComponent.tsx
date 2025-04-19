import React from 'react'
import { Button } from '../ui/button'

const HeaderButtonsTopComponent = () => {
    return (
        <div className='border border-green-600 w-full'>
            <Button>HELLO2</Button>
            <Button className='bg-white text-black text-2xl font-bold px-6 py-9 tracking-tighter rounded-xl w-1/3 hover:bg-zinc-300 duration-500 cursor-pointer'>لیست فروشنده ها</Button>
        </div>
    )
}

export default HeaderButtonsTopComponent