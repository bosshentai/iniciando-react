import React, { useState } from "react";

//JSX
//camelCase
// F(x) => HTML

function App() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  //Controlled Forms
  
  return (
    <div>
      <h1>Todo list</h1>
      <form>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="description">Descrição:</label>
          <input
            id="description"
            type="text"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </div>
        <button type="submit">Adicionar</button>
      </form>
      <ul>
        <li></li>
      </ul>
    </div>
  );
}

export default App;

// usamos o paradigma orientado a componentes
