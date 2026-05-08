import { useState } from "react";
import Header from "./Header";
import ItemList from "./ItemList";
import Form from "./Form";

function App() {
  const [items, setItems] = useState(["omena", "banaani", "kiivi"]);

  const addItem = (newItem) => {
    if (newItem.trim() === "") return;

    setItems([...items, newItem]);
  };

  return (
    <div>
      <Header />
      <Form onAddItem={addItem} />
      <ItemList items={items} />
    </div>
  );
}

export default App;
