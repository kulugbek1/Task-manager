import { useEffect, useState, useContext } from "react"
import { TaskContext } from "./TaskContext";

export default function Header() {
  const [dateState, setDateState] = useState(new Date());
  const {setIsPopupOpen} = useContext(TaskContext)

  useEffect(() => {
    const timer = setInterval(() => setDateState(new Date()), 30000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className='flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between mb-6 lg:mb-10'>
      <div>
        <h1 className='text-3xl lg:text-4xl font-bold'>My Tasks</h1>
        <h3 className='opacity-50'>{dateState.toLocaleDateString('en-GB', {
          day: 'numeric',
          month: 'short',
          year: 'numeric',
        })}</h3>
      </div>
      <button
        className='bg-black text-white p-3 rounded-md cursor-pointer w-full lg:w-auto shrink-0'
        onClick={() => setIsPopupOpen(true)}
      >
        Create new Task
      </button>
    </header>
  )
}
