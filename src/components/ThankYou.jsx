import React from "react";
import IlustrationThankYou from "../images/illustration-thank-you.svg"

function ThankYou(props) {
console.log(props.selectedItem);
  return (
   <div>
    <div id="container">
    <div className="mainDiv center">
      <img id="IlustrationThankYou" src={IlustrationThankYou} alt="description"></img>
  <div className="showRating">
    <p>You selected {props.selectedItem} out of 5</p>
  </div>
  
<h3>Thank You!</h3>
<p className="TextP">We appreciate you taking the time to give a 
    rating. If you ever need more support, don't 
    hesitate to get in touch!</p>
    </div>
   </div>
   </div>
  );
}

export default ThankYou;