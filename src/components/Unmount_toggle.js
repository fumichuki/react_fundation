import React, { useState, useEffect } from 'react';

function Unmount_toggle() {

    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log('useEffectが実行されました')

        // この形は即実行
        const test = console.log("test")



        // 即実行される 
        // const interval = () => の形だと即実行されない
        const interval = setInterval(() => {
            setCount(c => c + 1)
            console.log('カウントが1アップしました')
        }, 1000)

        return () => {
            clearInterval(interval)
            console.log('コンポーネントがアンマウントしました')
            console.log(count)
        }
    }, [])

    return (
        <div>
            <div>
                <h1>Count: {count}</h1>
            </div>
        </div>
    );
}
export default Unmount_toggle



// const [display, setDisplay] = useState(true)
//   // {display && <Unmount_toggle />} 解説 左から判定、trueであれば右辺が実行。逆にOR(||)を使用すると、左辺がfalseであれば、右辺が実行



{/* <h1>Learn useEffect_Unmount_toggle</h1>
      <button onClick={() => setDisplay((d) => !display)}>Toggle</button>
      {display && <Unmount_toggle />} */}
