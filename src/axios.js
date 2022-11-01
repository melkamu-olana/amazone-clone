import axios from 'axios';
const instance = axios.create({
    baseURL: "http://localhost:5001/fir-f9698/us-central1/api",
});
export default instance;
// https://fir-f9698.web.app = amazon deploy link