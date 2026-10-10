import { useState, useContext } from 'react'
import { TaskContext } from "./TaskContext"

export default function TaskTab() {
  const [tabs, setTabs] = useState([
    {
      id: 1,
      name: "To do",
      isActive: true
    },
    {
      id: 2,
      name: "Done",
      isActive: false
    },
  ])
  const { setActiveTab } = useContext(TaskContext)

  const handleActive = (idItem, nameItem) => {
    setTabs((prevTabs) =>
      prevTabs.map((item) => ({
        ...item,
        isActive: item.id === idItem,
      }))
    );
    setActiveTab(nameItem)
  };

  return (
  <div className="flex justify-center pt-6 lg:pt-10">
    <div className="w-full lg:w-200 bg-[#F7F7F7] h-12 lg:h-14 rounded-t-xl flex items-center justify-around gap-1 p-1 lg:gap-0 lg:p-0">
      {tabs.map((item) => (
        <button
          onClick={() => handleActive(item.id, item.name)}
          className={
            item.isActive
              ? "flex-1 lg:flex-none bg-white h-10 lg:px-40 rounded-md cursor-pointer font-medium"
              : "flex-1 lg:flex-none h-10 lg:px-40 cursor-pointer"
          }
          key={item.id}
        >
          {item.name}
        </button>
      ))}
    </div>
  </div>
  )
}
