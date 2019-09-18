import axios from 'axios';

export default {
    getWaka: function () {
        return axios.get("/waka")
    }
}