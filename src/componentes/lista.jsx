import React, { useState, useCallback } from 'react';
import '../App.css';

const Lista_Filmes = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [nota, setNota] = useState(0);

  const handleAddTask = useCallback((newTask, newNota) => {
    setTasks((prevTasks) => [...prevTasks, { nome: newTask, nota: newNota }]);
  }, [setTasks]);

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleNotaChange = (event) => {
    setNota(Number(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newTask.trim() === '') return; // Evita adicionar tarefas vazias
    handleAddTask(newTask, nota);
    setNewTask('');
    setNota(0);
  };

  return (
    <div>
      <h1>Lista de Filmes</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={newTask} onChange={handleInputChange} />
        <input type="number" value={nota} onChange={handleNotaChange} />
        <button type="submit">Adicionar Filme</button>
      </form>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task.nome} - Nota: {task.nota}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Lista_Filmes;
