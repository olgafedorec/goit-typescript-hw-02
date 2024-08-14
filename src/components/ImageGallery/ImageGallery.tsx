import ImageCard from '../ImageCard/ImageCard';
import { Image } from '../../images-api';
import css from './ImageGallery.module.css';

type ImageGalleryProps = {
    images: Image[];
    onImageClick: (image: Image) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, onImageClick }) => {
    return (
        <ul className={css.list}>
            {images.map((image) => (
                <li key={image.id}>
                    <ImageCard image={image} onImageClick={() => onImageClick(image)} />
                </li>
            ))}
        </ul>
    );
};

export default ImageGallery;

