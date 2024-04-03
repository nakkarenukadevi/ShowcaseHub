import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faX } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    let [menubar, setMenubar] = useState(false);
    const handleShowmenuBar = () => {
        setMenubar(!menubar)
    }
    const handleShowmenuBarclose = () => {
        setMenubar(false)
    }

    return (
        <div className='bg-white  p-8 shadow-lg flex justify-between'>
            <div><FontAwesomeIcon icon={faBars} style={{ width: "30px", height: "30px" }} onClick={() => {
                handleShowmenuBar()
            }} /></div>
            <div>
                <input type="search" onChange={() => {

                }} className='border-2 mx-20 p-2 border-black rounded-lg w-64' />
            </div>
            {menubar ? <div className='absolute top-0 left-0 w-1/4 border-2 h-screen bg-gray-400 '>
                <div className='absolute top-5 px-4 '> <FontAwesomeIcon icon={faBars} style={{ width: "30px", height: "30px" }} onClick={() => {
                    handleShowmenuBarclose()
                }} /></div>
                <ul className='relative top-20 px-7 font-bold font-serif text-xl '>
                    <li className='bg-white w-48 p-3 justify-center my-4  flex hover:bg-black hover:text-white active:bg-slate-400'>Smartphones</li>
                    <li className='bg-white w-48 p-3 justify-center my-4  flex hover:bg-black hover:text-white active:bg-slate-400'>laptops</li>
                    <li className='bg-white w-48 p-3 justify-center my-4  flex hover:bg-black hover:text-white active:bg-slate-400'>fragrances</li>
                    <li className='bg-white w-48 p-3 justify-center my-4  flex hover:bg-black hover:text-white active:bg-slate-400'>skincare</li>
                    <li className='bg-white w-48 p-3 justify-center my-4  flex hover:bg-black hover:text-white active:bg-slate-400'>groceries</li>
                    <li className='bg-white w-48 p-3 justify-center my-4  flex hover:bg-black hover:text-white active:bg-slate-400'>home decoration</li>


                </ul>

            </div> : null}
        </div>
    )
}

export default Header