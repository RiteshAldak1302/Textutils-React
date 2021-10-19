// import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';   // also use this code to import Navbar component here
import Textform from './components/Textform'; 
// import About from './components/About';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,

// } from "react-router-dom";
function App() {
  // this will equal to Navbar component code  --> <Navbar/>
  

  return (
    <>
    {/* <Router> */}
    <Navbar title="TextUtils"  />
    <div className="container">
    {/* <Switch>
      {/* always use exact with path as written below */}
          {/* <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
          </Route>
        </Switch> */}
    
    {/* <About/>  */}
        {/* // </Router> */}
        <Textform heading="Enter the Text to Analyze"   />
      </div> 
    </>
  );
}

export default App;
