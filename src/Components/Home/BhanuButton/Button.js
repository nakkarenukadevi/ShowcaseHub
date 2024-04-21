import React from 'react'

const Button = (props) => {
    console.log(props)


    return (
        <div className='mt-40 grid justify-center items-start'>

            <div> {props.children}</div>
            <div className='flex'>
                <div><button className='bg-black mt-5 text-white py-5 px-20 border-2 text-xl' onClick={props.btn1.onClick}>{props.btn1.text}</button></div>
                <div><button className='bg-white border-2 mt-5 text-bold text-xl border-black py-5 px-20 mx-4' onClick={props.btn2.onClick}>{props.btn2.text}</button>
                </div>
            </div>


        </div>
    )
}

export default Button
