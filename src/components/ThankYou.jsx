import React from "react";
import IlustrationThankYou from "../images/illustration-thank-you.svg"

function ThankYou() {

  return (
   <div>
    <div id="container">
    <div class="mainDiv center">
     
      <img id="IlustrationThankYou" src={IlustrationThankYou} alt="description"></img>
  <div class="showRating">
    <p>You selected rate out of 5</p>
  </div>
  
<h3>Thank You!</h3>
<p class="TextP">We appreciate you taking the time to give a 
    rating. If you ever need more support, don't 
    hesitate to get in touch!</p>

    </div>
   </div>
   </div>
  );
}

export default ThankYou;