import { useState } from "react";
import Form from "./Form";
import { nanoid } from "nanoid";
import Items from "./Items";

const setLocalStorage = (items) => {
  localStorage.setItem("list", JSON.stringify(items));
};

const App = () => {
  const [items, setItems] = useState(
    localStorage.getItem("list") ? JSON.parse(localStorage.getItem("list")) : []
  );

  const addItem = (itemName) => {
    const newItem = {
      name: itemName,
      completed: false,
      id: nanoid(),
    };

    const newItems = [...items, newItem];

    setItems(newItems);
    setLocalStorage(newItems);
  };

  const removeItem = (itemID) => {
    setItems(items.filter((item) => item.id !== itemID));
    setLocalStorage(items.filter((item) => item.id !== itemID));
  };

  const editItem = (itemID) => {
    const newItems = items.map((item) => {
      if(item.id === itemID) {
        return {...item, completed: !item.completed}
      }

      return item;
    });
    setItems(newItems);
    setLocalStorage(newItems);
  }
  return (
    <section className="section-center">
      <Form addItem={addItem} />
      <Items items={items} removeItem={removeItem} editItem={editItem} />
    </section>
  );
};

export default App;
