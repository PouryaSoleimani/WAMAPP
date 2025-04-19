import React from 'react'

const NavBarComponent = () => {
    return (
        <div className='w-full border-4 fixed top-0 left-0 right-0 bg-white py-2  flex items-center justify-between'>
            <div id="NAVBAR___LEFT" className='border-2 border-pink-500 w-1/2 h-full'>LEFT</div>
            <div id="NAVBAR___RIGHT" className='border-2 border-cyan-500 w-1/2 h-full'>RIGHT</div>
        </div>
    )
}

export default NavBarComponent