import axios from 'axios';

export const api = axios.create({
    baseURL: " https://calm-gold-lion-veil.cyclic.cloud/",
    timeout: 5000,
    headers: { "Content-Type": "application/json" }
})

const token = localStorage.getItem("token");
const config = {
    headers: {
        Authorization: `Bearer ${token}`,
    },
};

export async function newUser(body) {
    const data = await api.post('signup', body)
    return data
}

export async function login(body) {
    const data = await api.post('login', body)
    return data
}

export default (newUser, login)