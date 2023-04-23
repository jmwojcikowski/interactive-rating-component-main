import React, {useState} from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Test from "./Test";
import ThankYou from "./ThankYou";

function App() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [selectedItem, setSelectedItem] = useState('');

  const handleClick = (index, item) => {
    setActiveIndex(index === activeIndex ? null : index);
    setSelectedItem(item)
  };

   const renderListItems = () => {
    const items = ['1', '2', '3', '4', '5'];
   
    return items.map((item, index) => (
      <li
        key={index}
        className={index === activeIndex ? 'active BorderCircle' : 'BorderCircle'}
        onClick={() => handleClick(index, item)}
      >
        {item}
      </li>
    ));
  };
    return (
      <BrowserRouter>    
    <Routes>
     <Route path="/" element={<Test renderListItems={renderListItems}/>}/>
     <Route path="/ThankYou" element={<ThankYou selectedItem={selectedItem} />}/>
    </Routes>
    </BrowserRouter>
    );}
  
  export default App;