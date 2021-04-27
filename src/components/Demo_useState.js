import React, { useState } from 'react';

function Demo_useState() {

    const [count, setCount] = useState(1000);


    const increment = (params) => {
        //  cで現在のcount値を取得
        setCount(c => c + 1)
    }

    const decrement = (params) => {
        setCount(c => c + 1)
    }







    return (
        <div style={{ 'margin': '10em' }}>
            <h1>Counter</h1>
            <h2>カウント: {count}</h2>
            <button onClick={() => increment()} style={{ 'marginRight': '10em' }}>Up</button>
            <button onClick={() => decrement()}>Down</button>
        </div >
    )
}

export default Demo_useState
