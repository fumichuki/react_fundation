// https://reffect.co.jp/react/react-hook-useref

import React, { useState, useRef } from 'react'

function Demo_useRef() {

    const [name, setName] = useState('')
    const handleOnChange = (e) => setName(e.target.value)

    const inputEl = useRef(null)
    const handleOnClick = () => console.log(inputEl.current.focus())



    const [count, setCount] = useState(0)
    const handleOnClick_useState = () => setCount(count + 1)

    const countRef = useRef(0)
    const handleOnClick_useRef = () => countRef.current = countRef.current + 4;


    return (
        <div>
            <h1>useRef allow to access to input element</h1>
            {/* 10em　なら　親要素の10倍、　rem　なら　root要素の10倍 */}
            <div style={{ 'margin': '10em' }}>
                {/* access to input element By useRef  */}
                <input ref={inputEl} type="text" value={name} onChange={handleOnChange} />
                <p>名前：{name}</p>
                <button onClick={handleOnClick}>フォーカスを当てる</button>


            </div>

            <h1>useState Re-render every value chanege, but useRef do not Re-render</h1>
            <div style={{ 'margin': '10em' }}>{count}
                <button style={{ 'margin-left': '5em' }} onClick={handleOnClick_useState}>Countアップ</button>
            </div>
            <div style={{ 'margin': '10em' }}>{countRef.current}
                <button style={{ 'margin-left': '5em' }} onClick={handleOnClick_useRef}>Count2アップ</button>
            </div>
        </div>
    );
}
export default Demo_useRef
