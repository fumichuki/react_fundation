import React, { useState, useEffect } from 'react';

function Demo_useEffect() {
    const [count, setCount] = useState(0)
    const [count2, setCount2] = useState(0)


    //  if no [], useEffect run when page first load  and every values change 
    // if [] ,  useEffect run only first load
    // if [hoge] , useEffect run only first load and every hoge change
    useEffect(() => {
        console.log('useEffectが実行されました')
    }, [count])




    return (
        <div className="App">
            <h1>Learn useEffect</h1>
            <h2>Count: {count}/ Count2: {count2}</h2>
            <button onClick={() => setCount(count + 1)}>Count+</button><br />
            <button onClick={() => setCount2(count2 + 1)}>Count2+</button><br />
        </div>
    );
}

export default Demo_useEffect
