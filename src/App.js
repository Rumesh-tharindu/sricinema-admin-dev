import React,{useState} from 'react';
import Sidebar from './component/Sidebar'
import './App.css';
import Login from './component/Login'

function App() {
  const [login,handleLogin] =useState(false);
 
  return (
    <div className="App">
     {login? <Sidebar /> : <Login handleLogin={handleLogin} />}
      
    </div>
  );
}

export default App;
