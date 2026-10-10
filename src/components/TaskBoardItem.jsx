import { useContext } from "react"
import { TaskContext } from "./TaskContext"

export default function TaskBoardItem({ id, name, desc, completed }) {
  const { completeTask, deleteTask } = useContext(TaskContext)

  return (
    <div className="w-full min-h-24 lg:h-30 bg-white rounded-xl p-4 lg:p-5 flex justify-between items-center gap-3 mb-2">
      <div className="min-w-0 flex-1">
        <h1 className={`text-lg lg:text-xl font-medium break-words ${completed ? "line-through opacity-60" : ""}`}>
          {name}
        </h1>
        <p className="opacity-50 break-words">{desc}</p>
      </div>
      {completed ? (
        <button
          type="button"
          onClick={() => deleteTask(id)}
          className="shrink-0 bg-red-500 hover:bg-red-600 text-white text-sm px-3 py-2 rounded-md cursor-pointer"
          aria-label={`Delete ${name}`}
        >
          Delete
        </button>
      ) : (
        <input
          type="checkbox"
          checked={false}
          onChange={() => completeTask(id)}
          className="shrink-0 w-5 h-5 cursor-pointer accent-black"
          aria-label={`Mark ${name} as done`}
        />
      )}
    </div>
  )
}
