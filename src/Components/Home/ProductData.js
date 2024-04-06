import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';



const ProductData = () => {
    let data = useSelector((state) => state.product.storedata);
    console.log(data)


    return (
        <div className='flex flex-wrap gap-20 justify-center mt-40 mb-40 '>
            {data.map((item) => {
                return <div className='shadow-lg ' key={item.id} >
                    <div className='shadow-lg '><Link to='category' state={{ key: `${item.category}` }}><img src={item.thumbnail} alt='thumbnail' style={{ width: "300px", height: "300px" }} className='rounded' /></Link></div>
                    <div className='flex justify-center items-center mt-4 font-serif font-bold p-4'>{item.title}</div>
                </div>
            })}


        </div>
    )
}

export default ProductData