import React, { useState } from "react";
import ToDoItem from "../ToDoItem/ToDoItem";
import ChildComponent from "../ChildComponent/ChildComponent";


function ToDoList() {
    const [items, setItems] = useState([]);
  
    function addItem() {
      const newItem = { id: Date.now(), text: "New item" };
      setItems(prevItems => [...prevItems, newItem]);
    }
  
    function removeItem(id) {
      setItems(prevItems => prevItems.filter(item => item.id !== id));
    }
  
    return (
      <div>
        <button onClick={addItem}>Add Item</button>
        {items.map(item => (
          <ToDoItem key={item.id} item={item} onRemove={removeItem} />
        ))}
        <ChildComponent someState="Some state that is not related to the array" />
      </div>
    );
  }

  export default ToDoList;