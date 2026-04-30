import { useState } from 'react'
import Postaukset from './postaukset.jsx'
import KayttajanPostaukset from './postaukset2.jsx'

function App() {
  return (
    <div>
      <h1>Postaukset</h1>
      <Postaukset />
      <h1>Käyttäjän postaukset</h1>
      <KayttajanPostaukset />
    </div>
  )
}

export default App
