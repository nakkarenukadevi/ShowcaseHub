import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCartPlus, faX } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
    let [menubar, setMenubar] = useState(false);
    let [search, setSearch] = useState('');
    let cart = useSelector((pro) => pro.product.cart);

    let sum = 0
    cart.forEach((item) => {

        return sum = item.quantity + sum;
    });

    const handleShowmenuBar = () => {
        setMenubar(!menubar)
    }
    const handleShowmenuBarclose = () => {
        setMenubar(false)
    }

    let navigate = useNavigate();
    const handelnavigatepage = (e) => {
        navigate("category", { state: { key: `${e.target.innerText}` } });
        setMenubar(false);

    }
    const handleSeach = () => {
        console.log(search)
        navigate("category", { state: { key: `${search}` } })
        setMenubar(false)
    }

    return (
        <div className='bg-white  p-8 shadow-lg flex justify-between header fixed top-0 w-full'>
            <div><FontAwesomeIcon icon={faBars} style={{ width: "30px", height: "30px" }} onClick={() => {
                handleShowmenuBar()
            }} /></div>

            <div className='flex justify-center items-center '>

                <div className='mx-10'>
                    <input type="search" value={search} onChange={(e) => { setSearch(e.target.value) }} className='border-2  p-2 border-black rounded-lg w-64' />
                    <button onClick={() => { handleSeach() }} className='px-4 py-2 rounded-lg bg-blue-600 text-white '>search</button>
                </div>

                <div className='text-xl font-semibold'>
                    <Link to='cart'><FontAwesomeIcon icon={faCartPlus} className=' text-3xl text-red-600' />({sum})</Link>
                </div>

            </div>

            {menubar ? <div className='absolute top-0 left-0 w-1/4 border-2 h-screen bg-gray-400 '>
                <div className='absolute top-5 px-4 '>
                    <FontAwesomeIcon icon={faBars} style={{ width: "30px", height: "30px" }} onClick={() => {
                        handleShowmenuBarclose()
                    }} />
                </div>

                <div>

                    <div className='absolute top-3 right-5' onClick={() => { setMenubar(false) }}><FontAwesomeIcon icon={faX} /></div>

                </div>

                <ul className='relative top-20 px-7 font-bold font-serif text-xl '>

                    <li className='bg-white w-48 p-3 justify-center my-4  flex hover:bg-black hover:text-white active:bg-slate-400' onClick={() => {
                        navigate("/");
                        setMenubar(false)
                    }}>Home</li>

                    <li className='bg-white w-48 p-3 justify-center my-4  flex hover:bg-black hover:text-white active:bg-slate-400' onClick={(e) => {
                        handelnavigatepage(e)
                    }}>smartphones</li>

                    <li className='bg-white w-48 p-3 justify-center my-4  flex hover:bg-black hover:text-white active:bg-slate-400' onClick={(e) => {
                        handelnavigatepage(e)
                    }}>laptops</li>

                    <li className='bg-white w-48 p-3 justify-center my-4  flex hover:bg-black hover:text-white active:bg-slate-400' onClick={(e) => {
                        handelnavigatepage(e)
                    }}>fragrances</li>

                    <li className='bg-white w-48 p-3 justify-center my-4  flex hover:bg-black hover:text-white active:bg-slate-400' onClick={(e) => {
                        handelnavigatepage(e)
                    }}>skincare</li>

                    <li className='bg-white w-48 p-3 justify-center my-4  flex hover:bg-black hover:text-white active:bg-slate-400' onClick={(e) => {
                        handelnavigatepage(e)
                    }}>groceries</li>

                    <li className='bg-white w-48 p-3 justify-center my-4  flex hover:bg-black hover:text-white active:bg-slate-400' onClick={(e) => {
                        handelnavigatepage(e)
                    }}>home-decoration</li>


                </ul>

            </div> : null}
        </div>
    )
}

export default Header