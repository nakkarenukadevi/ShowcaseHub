import React from 'react'
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'


const SingelProduct = () => {
    let parmas = useParams();
    let data = useSelector((state) => state.product.storedata);

    let product = data.find((item) => {
        if (item.id == parmas.id) {
            return true
        } else {
            return false
        }
    })


    return (
        <div className=' flex flex-wrap gap-6 justify-center items-center mt-40'>

            {product.images.map((image, index) => (
                <div key={index}>
                    <div><Link to={"productdetails/" + product.id} state={{ key: `${image}` }}><img key={index} src={image} alt={`Image ${index}`} style={{ width: "400px", height: "400px" }} /></Link></div>


                </div>

            ))}


        </div>
    )
}

export default SingelProduct