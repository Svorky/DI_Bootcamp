const axios = require('axios')

async function fetchPosts(){
    return await axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
        return response.data;
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
}

module.exports = fetchPosts