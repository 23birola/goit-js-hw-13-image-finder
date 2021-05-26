import './sass/main.scss';
import galleryTemplate from './templates/gallery';
import ImgApiService from './js/apiService'

const refs = {
    searchForm: document.querySelector('.search-form'),
    gallery: document.querySelector('.gallery'),
    buttonLoadMore: document.querySelector('.loadMoreButton'),
    buttonSearchImg: document.querySelector('.submit')
}

// const API_KEY = '21757079-036beeeb18b1a04124bd9f213';
// const BASE_URL = 'https://pixabay.com/api/?image_type=photo&orientation=horizontal';

const imgApiService = new ImgApiService();

refs.searchForm.addEventListener('submit', searchImage);

function searchImage(e) {
    e.preventDefault();
    imgApiService.query = e.target.elements.query.value;
    if (imgApiService.query === "") {
        return alert("Что ищем?");
    }
    console.log(imgApiService.query);
    imgApiService.fetchImages()
        .then(data => {
            console.log(data);
            console.log(galleryTemplate(data));
            return appendGalleryMarkup(data);
        });
};

function appendGalleryMarkup(img) {
    refs.gallery.insertAdjacentHTML('beforeend', galleryTemplate(img));
}