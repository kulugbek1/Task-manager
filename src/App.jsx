import { useState, useEffect } from 'react'
import { TaskContext } from './components/TaskContext'

import './App.css'
import Header from './components/Header'
import TaskTab from './components/TaskTab'
import TaskBoard from './components/TaskBoard'
import CreateTask from './components/CreateTask'


function App() {
  // Load tasks from localStorage on first render (lazy initializer).
  // This runs only once — not on every re-render.
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('tasks')
    return saved ? JSON.parse(saved) : []
  })
  const [activeTab, setActiveTab] = useState("To do");
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Every time `tasks` changes, write the new list to localStorage.
  // That way data survives page refresh.
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    let name = formData.get("taskName")
    let desc = formData.get("taskDesc")

    setTasks([
      ...tasks,
      {
        id: Date.now(),
        name: name,
        desc: desc,
        completed: false,
      }
    ])
    setIsPopupOpen(false)
    e.currentTarget.reset()
  };
  const completeTask = (id) => {
    setTasks(tasks.map((task) =>
      task.id === id ? { ...task, completed: true } : task
    ))
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <TaskContext value={{
      tasks,
      setTasks,
      activeTab,
      setActiveTab,
      isPopupOpen,
      setIsPopupOpen,
      completeTask,
      deleteTask,
    }}>
      <div className='px-4 py-8 sm:px-8 md:px-16 lg:mx-80 lg:px-0 lg:py-20'>
        <Header />
        <div>
          <TaskTab />
          <TaskBoard />
        </div>
      </div>
      <CreateTask isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)}>
        <form onSubmit={handleSubmit}>
          <h2 className="font-medium text-xl mb-3">Create New Task</h2>
          <input type="text" name="taskName" placeholder="Task name" className="border border-gray-300 w-full p-3 rounded-md mb-2" required/>
          <textarea name="taskDesc" placeholder="Description" className="border border-gray-300 w-full p-3 rounded-md mb-3 max-h-30 min-h-30" required/>
          <button type="submit" className="bg-black text-white py-2 px-4 rounded-md cursor-pointer w-full lg:w-auto">
            Create task
          </button>
        </form>
      </CreateTask>
    </TaskContext>

  )
}

export default App
