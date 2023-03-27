import React from "react";
import IlustrationThankYou from "../images/illustration-thank-you.svg"

function ThankYou() {

  return (
   <div>
    <div id="container">
    <div id="mainDiv">
     
      <img id="IlustrationThankYou" class="BorderCircle" src={IlustrationThankYou} alt="description"></img>
<p>You selected rate out of 5</p>
<h3>Thank You!</h3>
<p>We appreciate you taking the time to give a 
    rating. If you ever need more support, don't 
    hesitate to get in touch!</p>

    </div>
   </div>
   </div>
  );
}

export default ThankYou;