import React, { useState, useCallback } from 'react';
import '../App.css';

const Lista_Filmes = () => {
  // Estado para armazenar a lista de filmes e suas notas
  const [tasks, setTasks] = useState([]);
  // Estado para armazenar o nome do novo filme ou filme sendo editado
  const [newTask, setNewTask] = useState('');
  // Estado para armazenar a nota do filme
  const [nota, setNota] = useState(0);
  // Estado para verificar se estamos no modo de edição
  const [editing, setEditing] = useState(false);
  // Estado para armazenar o índice do filme atualmente sendo editado
  const [currentIndex, setCurrentIndex] = useState(null);

  // Função para adicionar uma nova tarefa (filme) à lista
  const handleAddTask = useCallback((newTask, newNota) => {
    setTasks((prevTasks) => [...prevTasks, { nome: newTask, nota: newNota }]);
  }, [setTasks]);

  // Função para lidar com mudanças no campo de texto do nome do filme
  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  // Função para lidar com mudanças no campo numérico da nota
  const handleNotaChange = (event) => {
    setNota(Number(event.target.value)); // Converte o valor para número
  };

  // Função para lidar com a submissão do formulário
  const handleSubmit = (event) => {
    event.preventDefault(); // Previne o comportamento padrão do formulário (recarregar a página)
    if (newTask.trim() === '') return; // Evita adicionar tarefas com nome vazio
    if (editing) {
      handleUpdateTask(newTask, nota); // Atualiza a tarefa existente
    } else {
      handleAddTask(newTask, nota); // Adiciona uma nova tarefa
    }
    // Limpa os campos e sai do modo de edição
    setNewTask('');
    setNota(0);
    setEditing(false);
  };

  // Função para atualizar uma tarefa existente na lista
  const handleUpdateTask = (newTask, newNota) => {
    setTasks((prevTasks) =>
      prevTasks.map((task, index) => {
        if (index === currentIndex) {
          return { nome: newTask, nota: newNota }; // Atualiza a tarefa no índice atual
        }
        return task; // Retorna a tarefa sem alterações
      })
    );
  };

  // Função para preparar uma tarefa para edição
  const handleEditTask = (index) => {
    const task = tasks[index]; // Obtém a tarefa no índice fornecido
    setNewTask(task.nome); // Define o nome da tarefa no campo de texto
    setNota(task.nota); // Define a nota da tarefa no campo numérico
    setEditing(true); // Habilita o modo de edição
    setCurrentIndex(index); // Define o índice da tarefa que está sendo editada
  };

  // Função para remover uma tarefa da lista
  const handleRemoveTask = (index) => {
    setTasks((prevTasks) => prevTasks.filter((task, i) => i !== index)); // Filtra a lista, removendo a tarefa no índice fornecido
  };

  return (
    <div className="container">
      <div className="header">
        <h1 id="Title">Lista de Filmes</h1>
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={newTask} 
          onChange={handleInputChange} 
          placeholder="Nome do filme" 
        />
        <input 
          type="number" 
          value={nota} 
          onChange={handleNotaChange} 
          placeholder="Nota" 
        />
        <button type="submit">
          {editing ? 'Atualizar Filme' : 'Adicionar Filme'} {/* Texto do botão muda dependendo do modo de edição */}
        </button>
      </form>
      <ul className="list">
        {tasks.map((task, index) => (
          <li key={index}>
            {task.nome} - Nota: {task.nota}
            <div className="edits">
              <button className="botao" onClick={() => handleEditTask(index)}>Editar</button>
              <button className="botao" onClick={() => handleRemoveTask(index)}>Remover</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Lista_Filmes;
