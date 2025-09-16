import Modal from 'react-modal'

export default function ImageModal({isOpen, onClose, children }) {
    return (
        <div onClick={onClose}>
            <Modal
                isOpen={isOpen}
                onClose={onClose}
                className='rounded-lg shadow-2xl h-5/6 relative overflow-hidden m-30'
                overlayClassName='fixed inset-0 flex items-center justify-center'
                style={{overlay: {background: "rgba(0,0,0,0.25)"}}}
            >
                {children}
            </Modal>
        </div>
    )
}