import { useState } from "react";
import SyötettyNimi from "./SyötettyNimi";

function NameList() {
  const [names, setNames] = useState(["Anna", "Jussi", "Sara"]);
  const [newName, setNewName] = useState("");
  
    
    
  function addName() {
      setNames([...names, newName]);
      setNewName("")
      console.log(newName)
  }

  return (
    <div>
        <ul>
            {names.map((name, index) => (
            <li key={index}>{name}</li>
        ))}
        </ul>
          <SyötettyNimi newName={newName} setNewName={setNewName} />
        <button onClick={addName}>Lisää nimi</button>
    </div>
  );
}

export default NameList;