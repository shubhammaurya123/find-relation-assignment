import React from 'react';
import './App.css';
import Addfriend from './component/Addfriend'
import Navbaar  from './component/Navbaar';
import Findrelation from './component/Findrelation'
import { Route, Routes, Link } from "react-router-dom";
function App() {
  return (
     <>
     <div className="App"  >
     <Navbaar/>
      
        <Routes>
        <Route exact path="/" element={<Addfriend />} />
          <Route exact path="/findrelation" element={<Findrelation />} />
        </Routes>
     
     </div>
     </>
   
  );
}

export default App;
