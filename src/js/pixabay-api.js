import axios from "axios";


export default function getImagesByQuery(query) {  
  return axios
    .get('https://pixabay.com/api/', {
                    params: {
                      key: '53047791-da6bf0178b39a3cb2727ecc21',
                      q: query,
                      image_type: "photo",
                      orientation: 'horizontal',
                      safesearch: true,
                      per_page: 36,
                    }
                  })
    .then(response => {      
      return response.data.hits;
    })
    .catch(() => {      
      return [];
    });    
}
