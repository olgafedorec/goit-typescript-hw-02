import { Image } from '../../images-api';
import css from './ImageCard.module.css';

type ImageCardProps = {
    image: Image;
    onImageClick: () => void;
};

const ImageCard: React.FC<ImageCardProps> = ({ image: { alt_description, width, urls: { small }}, onImageClick }) => {
    return (
      <div onClick={() => onImageClick()}>
        <img 
          className={css.img}
          src={small} 
          alt={alt_description}
          width={width}
        />
      </div>
    );
  };
  
  export default ImageCard;

