const API_KEY = '25069580-db92d955714ee250824c2e025';
const BASE_URL = 'https://pixabay.com/api/';

const axios = require('axios');

export default class ImagesApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
 
  }


  async fetchImages() {
   const url = `${BASE_URL}?key=${API_KEY}&q=${this.searchQuery}
   &image_type=photo&orientation=horizontal&safesearch=true
   &page=${this.page}&per_page=40`;

    try {
        const resp = await axios.get(url);
          this.incrementPage();
          return resp.data;
        
        }
          catch (error) {
              return error;
          }
  }
  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }

    incrementPage() {
    this.page += 1;
  }
  resetPage() {
    this.page = 1;
  }
}