import React, {useState} from "react";
import { Link } from 'react-router-dom';
import Star from "../images/icon-star.svg";


function Test() {
  
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
    
  };

  
   const renderListItems = () => {
    const items = ['1', '2', '3', '4', '5'];
    
    return items.map((item, index) => (
      
      <li
        key={index}
        className={index === activeIndex ? 'active BorderCircle' : 'BorderCircle'}
        onClick={() => handleClick(index)}
      >
        {item}
      </li>
    ));
  };

  return (
   <div>
    <div id="container">
    <div class="mainDiv">
     
      <img id="star" class="BorderCircle" src={Star} alt="description"></img>
  <h3>How did we do?</h3>
  <p class="TextP">Please let us know how we did with your
   support request. All feedback is appreciated
    to help is improve our offering!</p>


    <ul>{renderListItems()}</ul>

    <Link to="/ThankYou"> 
      <button  type="submit"> SUBMIT </button>
    </Link>
    </div>
   </div>
   </div>


  );
}

export default Test;

