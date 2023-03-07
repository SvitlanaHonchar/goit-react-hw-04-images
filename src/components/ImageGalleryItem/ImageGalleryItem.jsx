import { useState } from 'react';
import ImgModal from 'components/Modal/Modal';
import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ photo }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(prevState => !prevState);
  };

  return (
    <>
      {isModalOpen && (
        <ImgModal toggleModal={toggleModal}>
          <img src={photo.largeImageURL} alt={photo.tags} />
        </ImgModal>
      )}

      <img
        src={photo.webformatURL}
        alt={photo.tags}
        className={css.ImageGalleryItemImage}
        onClick={toggleModal}
      />
    </>
  );
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  photo: PropTypes.object,
};
