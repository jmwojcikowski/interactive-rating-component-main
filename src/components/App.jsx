import React from "react";
// import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Test from "./Test";
import ThankYou from "./ThankYou";

function App() {
    return (
      <BrowserRouter>    
    <Routes>
     <Route path="/" element={<Test />}/>
     <Route path="/ThankYou" element={<ThankYou />}/>
    </Routes>
    </BrowserRouter>
    );}
  
  export default App;