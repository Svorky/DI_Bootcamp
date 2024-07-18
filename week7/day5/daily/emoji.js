import axios from 'axios';

async function fetchEmoji(){
    return await axios.get('https://emoji-api.com/emojis?access_key=b3d9abea28edadf036ebf900e5be8c5c2e1189b4')
    .then(response => {
        return response.data;
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
}

// async function fetchEmoji(){
//     return await axios.get('https://api.api-ninjas.com/v1/emoji',{
//         headers: {
//             'X-Api-Key': 'sDwNwviCRiGjnFvovHdLAg==vW0gIEPPlCzh3k3b'
//         }
//     })
//     .then(response => {
//         return response.data;
//     })
//     .catch(error => {
//         console.error('Error fetching data:', error);
//     });
// }

export default fetchEmoji