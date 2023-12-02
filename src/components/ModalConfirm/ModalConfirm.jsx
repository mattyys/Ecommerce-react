import './ModalConfirm.css'
import { useNavigate } from 'react-router-dom';

export const ModalConfirm = ({ onCloseModal }) => {
    const navigate = useNavigate();

    const onNavigate = () => {
        navigate("/");
    };


    return (
        <main className="modal-background">

            <div className="modal-container">

                <div className="title">
                    <h2>Compra realizada correctamente!</h2>
                </div>

                <div className="buttons-container">
                    <button 
                        onClick={ () => {
                            onCloseModal(false)
                            onNavigate()
                            }}
                    >Continuar</button>
                </div>
            </div>
        </main>
  );
};
