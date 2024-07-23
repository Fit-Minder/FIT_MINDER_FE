import React from "react";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="MainLogo">
        <img src={`${process.env.PUBLIC_URL}/logo.jpg`} alt="" />
      </div>
    </div>
  );
}

export default App;
