import React, { FormEvent, useState } from "react";
import { Header } from "./components/Header";
import { TextField } from "./components/TextField";

interface Task {
  name: string;
  description: string;
}
//JSX
//camelCase
// F(x) => HTML

function App() {
  const [name, setName] = useState(""); // react Hooks
  const [description, setDescription] = useState(""); // react Hooks
  const [tasks, setTasks] = useState<Task[]>([]); // Generic
  //Controlled Forms 

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    setTasks([...tasks, { name, description }]);
  }

  return (
    <div>
      <Header/>
      <form onSubmit={onSubmit}>
        <TextField
        id="name"
        label="Nome"
        onChange={(value) => setName(value)}
        />
        <TextField
        id="description"
        label="Descrição"
        onChange={(value) => setDescription(value)}
        />      
        <button type="submit">Adicionar</button>
      </form>
      <ul>
        {tasks.map((tasks) => (
          <li>
            {tasks.name} - {tasks.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

// usamos o paradigma orientado a componentes
