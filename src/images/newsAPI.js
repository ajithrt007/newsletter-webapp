import axios from 'axios';

export function fetchData() {
  return axios.get('https://newsapi.org/v2/everything?q=bitcoin&apiKey=4b8426f3d2614cd1bc33dcb26a2d6b3b')
    .then(response => response.data)
    .catch(error => {
      console.log(error);
    });
}