interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="relative bg-white p-8 rounded-xl shadow-2xl w-80"
        onClick={(e) => e.stopPropagation()}
      >
      <button 
      onClick={onClose}
      className="absolute top-2 right-2 p-1 rounded-lg
      text-gray-400 bg-white hover:bg-gray-50
      hover:text-gray-600"
      >
        X
      </button>
        {children}
      </div>
    </div>
  );
}