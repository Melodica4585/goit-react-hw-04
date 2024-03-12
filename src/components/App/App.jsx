import { useState, useEffect } from 'react';
import { getImage } from '../../api';
import { SearchBar } from '../SearchBar/SearchBar';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { Loader } from '../Loader/Loader';
import toast, { Toaster } from 'react-hot-toast';
import { LoadMoreBtn } from '../LoadMoreBtn/LoadMoreBtn';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import { ImageModal } from '../ImageModal/ImageModal';

function App() {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const [isOpen, setIsOpen] = useState(false);
  const [modalUrl, setModalUrl] = useState("")
  const [modalAlt, setModalAlt] = useState("")
  
  const searchImages = (newQuery) => {
    setQuery(newQuery);

    setCurrentPage(1);
    setImages([]);
  };

  const loadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    if (query === "") {
      return;
    }
    async function fetchData() {
      setLoading(true);
        setError(false);
      try {

        const fetchedData = await getImage(query, currentPage);
        setTotalPages(fetchedData.total_pages);

        if (fetchedData.results.length === 0) {
          toast.error("No matches found according to your request", {
            position: "top-right",
          });
          return;
        }

        setImages((prevImages) => [...prevImages, ...fetchedData.results]);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [query, currentPage]);

  const showLoadMoreBtn =
    images.length > 0 && !loading && currentPage < totalPages;

  const openModal = (url, alt) => {
    setIsOpen(true);
    setModalUrl(url)
    setModalAlt(alt)
  };

  const closeModal = () => {
    setIsOpen(false);
    setModalUrl("")
    setModalAlt("")
  }

  return (
    <>
      <SearchBar onSearch={searchImages} />
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {images.length > 0 && (
        <ImageGallery items={images} onClickModal={openModal} />
      )}
      {showLoadMoreBtn && <LoadMoreBtn onClick={loadMore} />}
      <Toaster />
        <ImageModal
          isOpen={isOpen}
          onCloseModal={closeModal}
          url={modalUrl}
          alt={modalAlt}
        />
    </>
  );
      }

export default App;