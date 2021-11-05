import axios from "axios";

const instance = axios.create({
    baseUrl:'https://car-rental-system-37a31-default-rtdb.asia-southeast1.firebasedatabase.app/'
});

export default instance;