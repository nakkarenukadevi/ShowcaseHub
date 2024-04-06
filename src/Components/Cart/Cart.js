import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { deleteItem, dicrement, increment } from '../Store/ProductSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDeleteLeft, faTrash } from '@fortawesome/free-solid-svg-icons'
import { faBoxes } from '@fortawesome/free-solid-svg-icons/faBoxes';

const Cart = () => {
    let { cart } = useSelector((pro) => pro.product);
    console.log(cart);

    let dispath = useDispatch()

    let totalsum = 0
    cart.forEach((item) => {
        return totalsum += item.price * item.quantity

    })
    let handleDelete = (item) => {
        dispath(deleteItem(item))
    }

    return <div>

        {
            cart.length == "" ? <div className='mt-40  font-2xl text-center font-sans text-3xl font-bold '>cart is empty</div> : <div className='mt-40'>
                {cart.map((item) => {
                    return <div className='mb-3 bg-gray-100 border-2 p-5 w-98  h-96 flex justify-around items-start mt-5 mx-40  '>
                        {<div className='mx-10'>
                            <img src={item.thumbnail} style={{ width: "300px", height: "300px" }} /></div>}
                        <div className='justify-start items-start grid'>

                            <div className='text-xl font-serif font-bold  '> {item.description}</div>


                            <div className='text-xl font-semibold  '>Price : {item.price}.00   /-</div>
                            <div >
                                <div className='text-xl font-semibold bg-red-500 text-white w-40 text-center p-3 mt-3 flex'>{item.discountPercentage} % Off</div>
                                <div className='text-red-500 text-bold '>Limited time deal</div>
                            </div>


                            <div className='flex justify-start items-center m-5'>
                                <div className='font-bold text-3xl ' onClick={() => dispath(increment(item))}>+</div>
                                <div className='text-xl font-semibold mx-9'>{item.quantity}</div>
                                <div className='font-blod text-3xl' onClick={() => dispath(dicrement(item))}>-</div>
                            </div>
                            <div className='text-xl font-semibold'>SubTotal : {item.quantity * item.price}/-Rs</div>
                            <div className='text-xl font-bold text-red-600 mt-3'><FontAwesomeIcon icon={faTrash} onClick={() => {
                                handleDelete(item)
                            }} /></div>
                        </div>

                    </div>

                })}
                <div className='text-center mb-20 font-sans text-3xl font-bold'> Total :  {totalsum} -/ Rs</div>
            </div>
        }
    </div>



}

export default Cart