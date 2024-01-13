import Modal from 'react-bootstrap/Modal';

const ModalMessage = ({ children, show, setShow}) => {


    return (
        <>
            <Modal show={show} onHide={setShow}>
                <Modal.Header closeButton>
                    <Modal.Title>Aviso</Modal.Title>
                </Modal.Header>
                <Modal.Body>{children}</Modal.Body>
            </Modal>
        </>
    )
}


export default ModalMessage;