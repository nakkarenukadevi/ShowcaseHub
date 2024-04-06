import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom';

const Category = () => {
    let { state } = useLocation();
    let categorydata = state.key
    let datastore = useSelector((pro) => pro.product.storedata);

    return (
        <div className='flex flex-nowrap  gap-6 m-10 cursor-pointer mt-40'>

            {
                datastore.map((item) => {
                    if (item.category.includes(categorydata)) {

                        return <div key={item.id}>

                            <div>  <Link to={"singelproduct/" + item.id} >
                                <img src={item.thumbnail} style={{ width: "300px", height: "300px" }} /></Link>
                            </div>
                            <div className='justify-center '>
                                <div className='mx-5 text-xl font-serif font-bold'>{item.title}</div>
                                <div className='text-xl '>Barnd: {item.brand}</div>

                                <div className='text-red-600 text-xl font-bold'> Price: {item.price}/-Rs</div>
                                <div>Rating :{item.rating}</div>

                                <div >
                                    <div className='text-xl font-semibold bg-red-500 text-white w-40 text-center p-3 mt-3 flex'>{item.discountPercentage} % Off</div>
                                    <div className='text-red-500 text-bold '>Limited time deal</div>
                                </div>
                            </div>
                        </div>
                    }

                })


            }

        </div>
    )
}

export default Category