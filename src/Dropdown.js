import React, { useState } from "react";

function Dropdown({ items }) {
  const [showItems, setShowItems] = useState(false);
  const [selectedItem, setSelectedItem] = useState(items[0]);

  const toggleItems = () => {
    setShowItems(!showItems);
  };

  const selectItem = (item) => {
    setSelectedItem(item);
    setShowItems(false);
  };

  return (
    <div className="box">
    <div className="dropdown">
        <p> Should you use a dropdwown ? </p>
      <button className="dropdown-button" onMouseEnter={toggleItems}>Select &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#9660;
      </button>
      {showItems && (
        <div className="dropdown-items">
          {items.map((item) => (
            <div
              key={item}
              className="dropdown-item"
              onClick={() => selectItem(item)}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
    </div>
  );
}

export default Dropdown;
