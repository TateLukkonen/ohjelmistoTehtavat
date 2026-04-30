import { useState } from "react";

function SyötettyNimi({newName, setNewName}) {
    return (
      <input type="text" placeholder="Kirjoita nimi" value={newName} onChange={(e) => setNewName(e.target.value)}></input>
    );
}

export default SyötettyNimi;