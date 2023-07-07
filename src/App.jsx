import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import ShowList from './components/ShowList'
import AddToDo from './components/TodoAdd'

function App() {

  const [todoList, addTodo] = useState(['Code', 'Code hard', 'Code again', 'Relax for a 5 mins'])

  return (
    <>
    <Header />
    <ShowList toDos={todoList} />
    <AddToDo todoList={todoList} addTodo={addTodo} />
    </>
  )
}

export default App