import React from 'react'
import { useSelector } from 'react-redux'


const ProductData = () => {
    let data = useSelector((state) => state.product.storedata);
    console.log(data)


    return (
        <div className='flex flex-wrap gap-20 justify-center mt-10  '>
            {data.map((item) => {
                return <div className='shadow-lg ' key={item.id} >
                    <div className='shadow-lg '><img src={item.thumbnail} alt='thumbnail' style={{ width: "300px", height: "300px" }} className='rounded' /></div>
                    <div className='flex justify-center items-center mt-4 font-serif font-bold p-4'>{item.title}</div>
                </div>
            })}


        </div>
    )
}

export default ProductData