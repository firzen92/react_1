import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_URL;

/* As compared to fetch API, axios lets you define commons for all the apis that you
are gonna hit, like baseURL, headers etc. Just imagine if you used fetch, then for 
every request you need to specify the baseURL, headers etc */

const deliveryDirect = axios.create({
    baseURL: BASE_URL+'/delivery-direct',
    headers: {
        'Content-Type': 'application/json',
    }
});


export const fetchInfraComms = async (sln) => {
    try {
        const response = await deliveryDirect.get(`/infrastructure?sln=US02448`);
        return response;
    } catch (error) {
        throw error;
    }
}