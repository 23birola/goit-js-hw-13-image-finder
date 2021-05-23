import './sass/main.scss';
import galleryTemplate from './templates/gallery';

const refs = {
    searchForm: document.querySelector('.search-form'),
    gallery: document.querySelector('.gallery'),
    buttonLoadMore: document.querySelector('.loadMoreButton'),
    buttonSearchImg: document.querySelector('.submit')
}

async function searchImage {
    const response = await fetch(https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=что_искать&page=номер_страницы&per_page=12&key=твой_ключ)
}