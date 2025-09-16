import Modal from 'react-modal'

export default function Modalka({isOpen, onClose, children}) {
    return (
        <div onClick={onClose}>
            <Modal
                isOpen={isOpen}
                onRequestClose={onClose}
                overlayClassName='fixed inset-0 flex items-center justify-center'
                className='rounded-lg shadow-2xl max-w-md w-full bg-primary'
                style={{overlay: {background: "rgba(0,0,0,0.25)"}}}
            >
                <div onClick={(e)=> {e.stopPropagation()}}>
                    <div className='flex w-full justify-end p-3'>
                        <button onClick={onClose} className='p-2 shadow-xl text-white bg-red-500 rounded-xl' >Закрыть</button>
                    </div>
                    <div className='flex items-center justify-center flex-col'>
                        {children}
                    </div>


                </div>
            </Modal>

        </div>
    )
}