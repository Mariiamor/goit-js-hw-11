import fetchImages from './js/pixabay-api';
import {
  hideLoader,
  renderImages,
  showLoader,
  showMessage,
  clearGallery,
} from './js/render-functions';

const form = document.querySelector('form');
const input = document.querySelector('#search-text');

form.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  const searchText = input.value.trim();

  if (!searchText) return;

  input.value = '';
  clearGallery();
  showLoader();

  fetchImages(searchText)
    .then(response => {
      const images = response.data.hits;
      handleSearchResults(images);
    })
    .catch(err => {
      console.error('Error fetching images:', err);
      hideLoader();
    });
}

function handleSearchResults(images) {
  if (!images.length) {
    showMessage();
    hideLoader();
    return;
  }

  renderImages(images);
}
