import React from "react";

function ToDoItem({ item, onRemove }) {
    return (
      <div>
        <span>{item.text}</span>
        <button onClick={() => onRemove(item.id)}>Remove</button>
      </div>
    );
  }

  export default ToDoItem;
  