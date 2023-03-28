import React, {useState} from "react";
import { Link } from 'react-router-dom';
import Star from "../images/icon-star.svg";




function Test() {
  
    const [isActive, setIsActive]= useState(false);
  
    const toggleClass= () => {
      setIsActive(!isActive);
    }
  
  return (
   <div>
    <div id="container">
    <div class="mainDiv">
     
      <img id="star" class="BorderCircle" src={Star} alt="description"></img>
  <h3>How did we do?</h3>
  <p class="TextP">Please let us know how we did with your
   support request. All feedback is appreciated
    to help is improve our offering!</p>

    <ul>
      <li class={`BorderCircle ${isActive ? 'active' : ''} ${isActive && 'second-class'}`} onClick={toggleClass}>1</li>
      <li class="BorderCircle">2</li>
      <li class="BorderCircle">3</li>
      <li class="BorderCircle">4</li>
      <li class="BorderCircle">5</li>
    </ul>

    <Link to="/ThankYou"> 
      <button  type="submit"> SUBMIT </button>
    </Link>
    </div>
   </div>
   </div>


  );
}

export default Test;

