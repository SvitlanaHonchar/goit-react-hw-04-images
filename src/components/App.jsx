import { useState, useEffect } from 'react';
import Button from './Button/Button';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Searchbar from './Searchbar/Searchbar';
import { requestPhotos } from 'services/api';

const App = () => {
  const [query, setQuery] = useState('popular');
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalHits, setTotalHits] = useState(null);

  const handleFormSubmit = query => {
    setQuery(query);
    setPhotos([]);
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage(prevState => prevState + 1);
  };

  useEffect(() => {
    if (!query) {
      return;
    }

    const fetchPhotos = async () => {
      try {
        setIsLoading(true);

        const { hits: photos, totalHits } = await requestPhotos(query, page);
        setPhotos(prevState => [...prevState, ...photos]);
        setTotalHits(totalHits);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPhotos();
  }, [query, page]);

  return (
    <div className="App">
      <Searchbar onSubmit={handleFormSubmit} />
      {isLoading && <Loader />}
      {error !== null && <i>An error {error} occured</i>}
      {(photos !== null && photos.length) === 0 && (
        <i>Nothing found, try to search something else</i>
      )}
      <ImageGallery photos={photos} />

      {totalHits > 12 && totalHits / 12 > page && (
        <Button onClick={handleLoadMore} />
      )}
    </div>
  );
};

export default App;
