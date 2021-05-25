import './sass/main.scss';
// import galleryTemplate from './templates/gallery';
import ImgApiService from './js/apiService'

const refs = {
    searchForm: document.querySelector('.search-form'),
    gallery: document.querySelector('.gallery'),
    buttonLoadMore: document.querySelector('.loadMoreButton'),
    buttonSearchImg: document.querySelector('.submit')
}

// const API_KEY = '21757079-036beeeb18b1a04124bd9f213';
// const BASE_URL = 'https://pixabay.com/api/?image_type=photo&orientation=horizontal';

imgApiService = new ImgApiService();

refs.searchForm.addEventListener('submit', searchImage);

function searchImage(e) {
    e.preventDefault();
    imgApiService.query = e.target.elements.query.value;
    console.log(imgApiService.query);
    imgApiService.fetchImages().then(data => console.log(data));

    //const response = await fetch(`${BASE_URL}&q=что_искать&page=номер_страницы&per_page=12&key=${API_KEY}`)
};