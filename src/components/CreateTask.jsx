
export default function CreateTask({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[1000] flex items-end lg:items-center justify-center bg-black/50 p-0 lg:p-4" onClick={onClose}>
      <div
        className="relative w-full max-w-[500px] rounded-t-2xl lg:rounded-lg bg-white p-6 lg:p-[30px] shadow-[0_4px_15px_rgba(0,0,0,0.2)]"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="absolute right-[15px] top-[10px] cursor-pointer border-none bg-transparent text-2xl" onClick={onClose}>&times;</button>
        {children}
      </div>
    </div>
  );
}
