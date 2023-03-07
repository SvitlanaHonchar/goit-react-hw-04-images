import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';
import css from './ImageGallery.module.css';

const ImageGallery = ({ photos }) => {
  return (
    <>
      <ul className={css.ImageGallery}>
        {photos !== null &&
          photos.map(photo => {
            return (
              <li key={photo.id} className={css.ImageGalleryItem}>
                <ImageGalleryItem photo={photo} />
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default ImageGallery;

ImageGallery.propTypes = {
  photos: PropTypes.array.isRequired,
};
