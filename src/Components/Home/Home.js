import React from 'react'
import { useEffect, useState } from "react";
import ProductData from './ProductData';
import { useDispatch, useSelector } from 'react-redux';
import { initialData } from '../Store/ProductSlice';

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

    return <>
        {

            <ProductData />
        }

    </>


}

export default Home