import React, { useState, useEffect } from 'react';
// import Demo_useRef from './components/Demo_useRef'
import Demo_useState from './components/Demo_useState'
// import Demo_useEffect from './components/Demo_useEffect'
// import Fetch_Data from './components/Fetch_Data'
// import Unmount_toggle from './components/Unmount_toggle'
// import Demo_createContext from './components/Demo_createContext'


// export const UserCount = React.createContext()

function App() {
  const [count, setCount] = useState(0)



  return (
    <div className="App">
      <h1>Hello Counter AppPPP</h1>
      <Demo_useState />
    </div>
  );
}

export default App;
