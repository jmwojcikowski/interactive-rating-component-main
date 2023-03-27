import React from "react";
import { Link } from 'react-router-dom';
import Star from "../images/icon-star.svg";
import ThankYou from "./ThankYou.jsx"

function Test() {

  return (
   <div>
    <div id="container">
    <div id="mainDiv">
     
      <img id="star" class="BorderCircle" src={Star} alt="description"></img>
<h3>How did we do?</h3>
<p>Please let us know how we did with your
   support request. All feedback is appreciated
    to help is improve our offering!</p>

    <ul>
      <li class="BorderCircle">1</li>
      <li class="BorderCircle">2</li>
      <li class="BorderCircle">3</li>
      <li class="BorderCircle">4</li>
      <li class="BorderCircle">5</li>
    </ul>

    <Link to="/ThankYou"> 
      <button  type="submit"> SUMBIT </button>
    </Link>
    </div>
   </div>
   </div>


  );
}

export default Test;