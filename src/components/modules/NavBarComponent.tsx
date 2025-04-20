import React, { useState } from 'react';
import { FaBars } from "react-icons/fa";
import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group";
import ReactCountryFlag from "react-country-flag"

const NavBarComponent = () => {
    const [selected, setSelected] = useState("US");

    return (
        <div className='w-full fixed top-0 left-0 right-0 bg-white py-2  flex items-center justify-between flex-row-reverse pl-8'>
            <div id="NAVBAR___LEFT" className='w-1/2 h-full flex items-center justify-end'>
                <h2 className='tracking-wide text-3xl font-black text-[var(--cyan)] underline decoration-[var(--pink)]'>WAMAPP</h2>
            </div>
            <div id="NAVBAR___RIGHT" className='w-1/2 h-full flex items-center justify-start pr-3 gap-2'>
                <button className="bg-[#DDE2E5]  p-1 rounded hover:bg-[var(--cyan)] duration-300">
                    <FaBars className="w-8 h-5" />
                </button>

                <ToggleGroup type="single" size="sm" className="gap-1" value={selected} onValueChange={setSelected}>
                    <ToggleGroupItem value="US" aria-label="Toggle US" className={`rounded-md   p-3 ${selected === "US" ? "bg-black border-2 border-[var(--cyan)]" : ""}`}>
                        <ReactCountryFlag countryCode="US" />
                    </ToggleGroupItem>
                    <ToggleGroupItem value="IR" aria-label="Toggle IR" className={`rounded-md p-3 ${selected === "IR" ? "bg-black  border-2 border-[var(--cyan)]" : ""}`}>
                        <ReactCountryFlag countryCode="IR" />
                    </ToggleGroupItem>
                </ToggleGroup>
            </div>
        </div>
    )
}

export default NavBarComponent