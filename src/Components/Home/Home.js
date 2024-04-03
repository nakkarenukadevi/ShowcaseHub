import React from 'react'
import { useEffect, useState } from "react";
import ProductData from './ProductData';
const Home = () => {
    let [product, setProduct] = useState([])

    useEffect(() => {
        getdata()


    }, [])

    const getdata = async () => {
        let data = await fetch("https://dummyjson.com/products");
        let json = await data.json();
        console.log(json)
        setProduct(json.products)
    }



    return <>

    </>


}

export default Home