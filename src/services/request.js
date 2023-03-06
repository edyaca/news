import axios from 'axios'
import api from '../constants/api'
import queryString from 'querystring'
const Request = {
    async getEncoded(url, data = {}) {
        console.log(api.API_URL)
        console.log(url)
        let parameters = { ...data, apiKey: api.PRIVATE_KEY }
        console.log(`${api.API_URL}${url}&${queryString.stringify(parameters)}`)
        const response = await axios.get(`${api.API_URL}${url}&${queryString.stringify(parameters)}`)
        if (response && response.status === 200) {
            return response?.data?.articles || response?.data || []
        }
        return []
    }
}

export default Request