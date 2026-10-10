import { TaskContext } from "./TaskContext"
import { useContext } from "react"

import TaskBoardItem from "./TaskBoardItem"

export default function TaskBoard() {
  const { tasks, activeTab } = useContext(TaskContext)

  const visibleTasks = activeTab === "Done"
    ? tasks.filter((item) => item.completed)
    : tasks.filter((item) => !item.completed)

  return (
    <div className="w-full min-h-40 bg-[#F7F7F7] rounded-xl p-3 lg:p-5">
      {visibleTasks.length === 0 ? (
        <p className="text-center opacity-40 py-10">
          {activeTab === "Done" ? "No completed tasks yet" : "No tasks yet — create one!"}
        </p>
      ) : (
        visibleTasks.map((item) => (
          <TaskBoardItem
            key={item.id}
            id={item.id}
            name={item.name}
            desc={item.desc}
            completed={item.completed}
          />
        ))
      )}
    </div>
  )
}
