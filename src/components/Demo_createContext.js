import React, { useContext } from 'react'
import { UserCount } from '../App'

function Demo_createContext() {
    const [count, count2, setCount] = useContext(UserCount)
    return (
        <div>
            <p>Componet C</p>
            <p>{count}</p>
            <p>{count2}</p>
            <button onClick={() => setCount(c => c + 1)}>+</button>
        </div>
    )
}

export default Demo_createContext


// const [count, setCount] = useState(100)
// const [count2, setCount2] = useState(200)


{/* <h1>Learn useContext</h1>
      <UserCount.Provider value={[count, count2, setCount]}>
        <Demo_createContext />
      </UserCount.Provider> */}
