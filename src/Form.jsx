import React, { useState } from "react";

const Form = () => {
  const [newItemName, setNewItemName] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(newItemName);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-control">
        <input
          type="text"
          className="form-input"
          value={newItemName}
          onChange={(e) => setNewItemName(e.target.value)}
        />
        <button className="btn" type="submit">Add Item</button>
      </div>
    </form>
  );
};

export default Form;
