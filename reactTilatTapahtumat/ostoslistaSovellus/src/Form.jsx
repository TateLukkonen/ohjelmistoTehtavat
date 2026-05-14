import { useState } from "react";

function Form({ onAddItem }) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (inputValue.trim() === "") return;

    onAddItem(inputValue);

    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Kirjoita ostos"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      <button type="submit">Lisää</button>
    </form>
  );
}

export default Form;
