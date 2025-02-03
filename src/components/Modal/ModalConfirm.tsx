import { ModalConfirmProps } from "../../utilites/Types/types"

const ModalConfirm = ({ isOpen, onClose, onConfirm, children}: ModalConfirmProps) => {
    if(!isOpen) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-sm w-full text-center">
            <p className="text-lg text-gray-700 dark:text-gray-200">{children}</p>
            <div className="mt-4 flex justify-center gap-4">
                <button 
                    onClick={onClose}
                    className="px-4 py-2 bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md hover:bg-gray-400 dark:hover:bg-gray-600 transition">
                    Cancelar
                </button>
                <button 
                    onClick={onConfirm}
                    className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition">
                    Eliminar
                </button>
            </div>
        </div>
    </div>
)
}

export default ModalConfirm
