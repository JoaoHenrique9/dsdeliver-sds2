const API_URL = 'https://joao-henrique-sds2.herokuapp.com';
import axios from "axios";

export function fetchOrders(){
    return axios(`${API_URL}/orders`);
}

export function confirmeDelivery(orderId: number){
    return axios.put(`${API_URL}/orders/${orderId}/delivered`);
}