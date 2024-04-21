import React, { useState } from 'react';

const Partice = () => {
    let [counter, setCounter] = useState(10);
    let [age, setAge] = useState(10);

    const handleCounter = () => {
        setCounter(counter + 10)
    }

    const handleAge = () => {
        let x = 30
        setCounter((newcounter) => newcounter + x)
    }

    return (
        <div className='mt-40 text-center'>
            <h1>counter:{counter}</h1>
            <h1>age:{age}</h1>

            <button onClick={() => {
                handleCounter()
                handleAge()

            }} className='px-4 py-4 bg-blue-400 rounded-lg text-center'>Click</button>

        </div>
    )
}

export default Partice