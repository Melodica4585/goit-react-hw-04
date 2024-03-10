import { useState, useEffect } from 'react';
import { getImage } from '../../api';
import { SearchBar } from '../SearchBar/SearchBar';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { Loader } from '../Loader/Loader';
import { Toaster } from 'react-hot-toast';
import { LoadMoreBtn } from '../LoadMoreBtn/LoadMoreBtn';

function App() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const searchArticles = async (newQuery) => {
    setQuery(`${Date.now()}/${newQuery}`);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    if (query === "") {
      return;
    }

    async function fetchData() {
      try {
        setLoading(true);
        setError(false);

        const fetchedData = await getImage(query.split("/")[1], page);
        setTotalPage(fetchedData.total_pages);
        setImages((prevImages) => [...prevImages, ...fetchedData.results]);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [query, page]);
  console.log(totalPage);

  return (
    <>
      <SearchBar onSubmit={searchArticles} />
      {error && <b>Error, please reload the page</b>}
      {images.length > 0 && !error && <ImageGallery items={images} />}
      {images.length > 0 && !loading && page !== totalPage && (
        <LoadMoreBtn handleLoadMore={handleLoadMore} />
      )}
      {page === totalPage && <b>these are all the results</b>}
      <Toaster position="top-center" />
      {loading && <Loader />}
    </>
  );
}

export default App;