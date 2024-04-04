import React from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom';

const Smartphones = () => {
    let { state } = useLocation();
    let datastore = useSelector((state) => state.product.storedata);
    console.log(datastore)
    return (
        <div className='flex flex-wrap justify-center gap-6 m-10 '>
            {
                datastore.map((item) => {
                    if (item.category == "smartphones") {
                        return <div key={item.id}>
                            <img src={item.thumbnail} style={{ width: "300px", height: "300px" }} />

                        </div>
                    }

                })


            }

        </div>
    )
}

export default Smartphones