import React from "react";
import { Link } from 'react-router-dom';
import Star from "../images/icon-star.svg";

function Test(props) {
  
  return (
   <div>
    <div id="container">
    <div className="mainDiv">

      <img id="star" className="BorderCircle" src={Star} alt="description"></img>
  <h3>How did we do?</h3>
  <p className="TextP">Please let us know how we did with your
   support request. All feedback is appreciated
    to help is improve our offering!</p>


    <ul>{props.renderListItems()}</ul>

    

    <Link to="/ThankYou"> 
      <button  type="button"> SUBMIT </button>
    </Link>
    </div>
   </div>
   </div>


  );
}

export default Test;

