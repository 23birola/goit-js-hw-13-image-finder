import './sass/main.scss';
import galleryTemplate from './templates/gallery';
import ImgApiService from './js/apiService'
import LoadMoreBtn from './js/loadMoreButton';
import { alert, defaultModules } from '@pnotify/core';
import * as PNotifyMobile from '@pnotify/mobile';

const refs = {
    searchForm: document.querySelector('.search-form'),
    gallery: document.querySelector('.gallery'),
    buttonLoadMore: document.querySelector('.load-more-button'),
    buttonSearchImg: document.querySelector('.submit')
}

const imgApiService = new ImgApiService();
const loadMoreBtn = new LoadMoreBtn({
    selector: '[data-action="load-more"]',
    hidden: true
});

refs.searchForm.addEventListener('submit', searchImage);
defaultModules.set(PNotifyMobile, {});
async function searchImage(e) {
    e.preventDefault();
    clearGallery();
    imgApiService.resetPage();
    imgApiService.query = e.target.elements.query.value;
    if (imgApiService.query === "") {
        refs.buttonLoadMore.classList.add('is-hidden')
        return alert({ text: "Что ищем?" });
    }
    const images = await imgApiService.fetchImages()
    appendGalleryMarkup(images);
    loadMoreBtn.show();
};

function appendGalleryMarkup(img) {
    refs.gallery.insertAdjacentHTML('beforeend', galleryTemplate(img));
}

function clearGallery() {
    refs.gallery.innerHTML = "";
}

refs.buttonLoadMore.addEventListener('click', loadMoreImg);

async function loadMoreImg(e) {
    e.preventDefault();
    loadMoreBtn.disable();
    const images = await imgApiService.fetchImages();
    appendGalleryMarkup(images);
    imgApiService.incrementPage();
    window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
    })
    loadMoreBtn.enable();
}