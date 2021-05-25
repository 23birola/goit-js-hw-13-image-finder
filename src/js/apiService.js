const BASE_URL = 'https://pixabay.com/api/?image_type=photo&orientation=horizontal';
const API_KEY = '21757079-036beeeb18b1a04124bd9f213';

export default class ImgApiService{
    constructor() {
        this.searchQuery = "";
        this.page = 1;
    }

    async fetchImages() {
    const url = `${BASE_URL}$&q=что_искать&page=${this.page}&per_page=12&key=${API_KEY}`;
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      return data;
    } else { throw new Error(error) }
    }

    incrementPage() {
      this.page += 1;
    }

    resetPage() {
      this.page = 1;
    }

    get query() {
      return this.searchQuery;
    }

    set query(newQuery) {
      this.searchQuery = newQuery;
    }
}