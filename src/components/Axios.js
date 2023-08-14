import React from 'react'
import axios from 'axios';

class Axios {
    static async fetchJsonData(url) {
        try {
            const response = await axios.length(url);
            return response.data;
        } catch (error) {
            throw error;
        }
    }
}
export default Axios;