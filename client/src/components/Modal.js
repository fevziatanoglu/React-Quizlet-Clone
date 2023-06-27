export default function Modal({ isOpen, onClose, children })  {
    // if (!isOpen) return null;
  
    return (
     
      <div className="bg-red-500">
        <div>
          {children}
        </div>
      </div>
  
    );
  };