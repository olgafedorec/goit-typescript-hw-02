import Modal from 'react-modal';
import { Image } from '../ImageCard/ImageCard';
import css from './ImageModal.module.css';

type ImageModalProps = {
    image: Image;
    onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ image: { alt_description, urls: { regular } }, onClose }) => {
    return (
        <Modal
            isOpen={true}
            onRequestClose={onClose}
            className={css.modal}
            overlayClassName={css.overlay}
        >
            <img src={regular} alt={alt_description} />
        </Modal>
    );
}

export default ImageModal;
