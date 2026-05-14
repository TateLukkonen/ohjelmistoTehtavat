import { useState } from "react";
import Form from "./Form";
import ItemList from "./ItemList";

function ShoppingList() {
  const [items, setItems] = useState([]);

  function addItem(newItemText) {
    const newItem = {
      id: crypto.randomUUID(),
      text: newItemText,
    };

    setItems([...items, newItem]);
  }

  function removeItem(id) {
    setItems(items.filter((item) => item.id !== id));
  }

  return (
    <div>
      <Form onAddItem={addItem} />

      <ItemList items={items} onRemoveItem={removeItem} />
    </div>
  );
}

export default ShoppingList;
