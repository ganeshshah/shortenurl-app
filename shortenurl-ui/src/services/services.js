import axios from 'axios';


export const shortenUrl = async (body) => {
    const url = 'http://localhost:8080/shortenurl';
    const response = await axios.post(url, body);
    if (response.status == 200) {
        console.log('POST request successful!!!')
    } else {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response;
}