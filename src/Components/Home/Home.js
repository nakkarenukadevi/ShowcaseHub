import React from 'react'
import { useEffect, useState } from "react";
import ProductData from './ProductData';
import { useDispatch, useSelector } from 'react-redux';
import { initialData } from '../Store/ProductSlice';
import Button from "../Home/BhanuButton/Button"

const Home = () => {


    useEffect(() => {
        getdata();
    }, []);

    let dispatch = useDispatch();

    const getdata = async () => {
        let data = await fetch("https://dummyjson.com/products");
        let json = await data.json();

        dispatch(initialData(json.products))

    }
    let btn1 = {
        "text": "CONTINUE  SHOPPING",
        onClick: () => { console.log("button1 clicked") },
        style: "black"
    }
    let btn2 = {
        "text": "VIEW   ORDERS",
        onClick: () => { console.log("button2 clicked") },
        style: "black"
    }



    return <>
        {

            // <ProductData />
            <Button btn1={btn1} btn2={btn2} >
                <>
                    <h1 className='text-4xl mb-10'>THANK  YOU FOR YOUR ORDER!</h1>
                    <h2 className='text-2xl text-gray-700  '>WE SENT to AN  ORDER  CONFIRAMATIOON TO:</h2>
                    <h3 className='text-xl font-bold mb-5'>johnsmith@gmail.com</h3>
                    <h3 className='text-xl text-gray-700 '>YOUR ORDER NUMBER IS</h3>
                    <h4 className='text-xl font-bold mb-5'>345628</h4>
                    <h3 className='text-xl text-gray-700 '>WILL   DELIVERY BY:</h3>
                    <h4 className='text-xl font-bold mb-5'>THURSDAY NOV 16</h4>
                    <h3 className='text-xl text-gray-700 '>TO THE ADDERSS </h3>
                    <h3 className='text-xl font-bold mb-10'>42 Groundfloor . M K M Chambers ,k H Road, chennai </h3>

                </>
            </Button >
        }

    </>


}


export default Home