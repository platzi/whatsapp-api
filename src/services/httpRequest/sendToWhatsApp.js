import axios from "axios";
import config from '../../config/env.js';

const sendToWhatsApp = async (data) => {
    const baseUrl = `${config.BASE_URL}/${config.API_VERSION}/${config.BUSINESS_PHONE}/messages`;
    const headers = {
        Authorization: `Bearer ${config.API_TOKEN}`
    };

    try {
        const response = await axios({
            method: 'POST',
            url: baseUrl,
            headers: headers,
            data,
        })
        return response.datal;
    } catch (error) {
        console.error(error)
    }
};

export default sendToWhatsApp;