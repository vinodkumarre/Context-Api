import React, {createContext, useState} from 'react';
import './App.css';
import Length from './lenght';
import Numerical from './numarical';
export const nameContext = createContext();
function App() {
  const [name, setName] = useState("");
  const handle = (e) => {
    setName(e.target.value);
  }
  return (
    <>
      <div className="App">
        <input value={name} onChange={handle} />
      </div>
      <nameContext.Provider value={name}>
          <Length />
          <Numerical />
      </nameContext.Provider>
    </>
  );
}

export default App;
