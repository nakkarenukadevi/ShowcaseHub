import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { addtoCart } from '../Store/ProductSlice';

const Productdetails = () => {
    let parmas = useParams();
    let { state } = useLocation()
    let img = state.key
    let navgate = useNavigate();
    let data = useSelector((pro) => pro.product.storedata);

    let product = data.find((item) => {

        if (item.id == parmas.id) {
            return true
        } else {
            return false
        }
    })
    console.log(product);

    let Qty = { quantity: 1 }

    let dispatch = useDispatch();


    let handleaddtoCart = (pro) => {


        dispatch(addtoCart({ ...pro, ...Qty }))

    }

    return (
        <div className='mt-40'>
            {
                product.images.map((item) => {

                    if (item == img) {

                        return <div className=' mx-20 flex text-xl'>
                            <div className='mx-20 '>
                                <div><img src={item} /></div>
                            </div>
                            <div className='justify-center '>
                                <div className='mx-5 text-4xl font-serif font-bold'>{product.title}</div>
                                <div className='text-xl '>Barnd: {product.brand}</div>
                                <div >Description:{product.description}</div>
                                <div className='text-red-600 text-2xl font-bold'> Price: {product.price}/-Rs</div>
                                <div>Rating :{product.rating}</div>

                                <div>discountPercentage:{product.
                                    discountPercentage
                                }%</div>
                                <div className='flex m-20'>
                                    <div><button className='px-5 py-4 mx-20 bg-blue-700 font-sans font-bold text-white active:bg-sky-400 ' onClick={() => {
                                        handleaddtoCart(product)
                                    }}>Add to Cart</button></div>
                                    <div><button className='px-5 py-4 bg-blue-700 font-sans font-bold text-white active:bg-sky-400 '>Buy now</button></div>
                                </div>
                            </div>
                        </div>




                    }
                })

            }




        </div>
    )
}

export default Productdetails