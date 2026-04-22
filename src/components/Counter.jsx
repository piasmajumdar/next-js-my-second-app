'use client'

import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0)

    console.log('Counter value in counter component', count)
    return (
        <div>
            <h2 className='text-5xl'>Counter: {count}</h2>
        <button
        onClick={()=> setCount(count+1)}>Increment</button>
        </div>
    );
};

export default Counter;