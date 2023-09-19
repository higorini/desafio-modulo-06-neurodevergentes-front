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
    try {
        const data = await api.post('signup', body)
        return data
    } catch (erro) {
        return erro.response
    }
}

export async function login(body) {

    try {
        const data = await api.post('login', body)
        return data
    } catch (erro) {
        return erro.response
    }

}
export async function validateEmail(email, name) {
    try {
        const data = await api.post('validateEmail', {
            "email": email,
            "name": name
        })
        return data
        console.log(data)
    } catch (erro) {
        console.log(erro)
        return erro.response
    }
}

export async function getUserData() {
    try {
        const data = await api.get("user", config)
        return data.data
    } catch (erro) {
        return erro.response
    }
}

export async function edityUserData(body, idUser) {

    try {
        const data = await api.put(`user/edit`, body, config)
        return data.data
    } catch (erro) {
        return erro.response
    }
}

export default (newUser, login, validateEmail, edityUserData, getUserData)