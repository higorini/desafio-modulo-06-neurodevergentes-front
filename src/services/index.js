import axios from "axios";

export const api = axios.create({
  baseURL: "https://contabily.onrender.com/",
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
});

function getToken() {
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return config;
}

export async function newUser(body) {
  try {
    const data = await api.post("signup", body);
    return data;
  } catch (erro) {
    return erro.response;
  }
}

export async function login(body) {
  try {
    const data = await api.post("login", body);
    return data;
  } catch (erro) {
    return erro.response;
  }
}

export async function validateEmail(email, name) {
  try {
    const data = await api.post("validateEmail", {
      email: email,
      name: name,
    });
    return data;
  } catch (erro) {
    return erro.response;
  }
}

export async function getUserData() {
  try {
    const data = await api.get("user", getToken());
    return data.data;
  } catch (erro) {
    return erro.response;
  }
}

export async function edityUserData(body) {
  try {
    const data = await api.put(`user/edit`, body, getToken());
    return data;
  } catch (erro) {
    return erro.response;
  }
}

export async function registerCostumers(body) {
  try {
    const data = await api.post(`costumer/signup`, body, getToken());
    return data.data;
  } catch (erro) {
    return erro.response;
  }
}

export async function listCustumers(body) {
  try {
    const data = await api.get(`costumers`, getToken());
    return data.data;
  } catch (erro) {
    return erro.response;
  }
}

export async function addCharge(body, idCustomer) {
  try {
    const data = await api.post(`charges/${idCustomer}`, body, getToken());
    return data;
  } catch (erro) {
    return erro.response;
  }
}

export async function listCharges() {
  try {
    const data = await api.get("/charges", getToken());
    return data.data;
  } catch (erro) {
    return erro.response;
  }
}

export async function loadDetailsCustomer(id) {
  try {
    const data = await api.get(`costumers/${id}`, getToken());
    return data.data;
  } catch (erro) {
    return erro.response;
  }
}

export async function edityCustomer(id, body) {
  try {
    const data = await api.put(`costumer/${id}/edit`, body, getToken());
    return data.data;
  } catch (erro) {
    return erro.response;
  }
}

export async function deleteCharge(chargeId) {
  try {
    const data = await api.delete(`charge/${chargeId}`, getToken());
    return data.data;
  } catch (erro) {
    return erro.response;
  }
}

export default (
  newUser,
  login,
  validateEmail,
  edityUserData,
  getUserData,
  listCustumers,
  listCharges,
  loadDetailsCustomer,
  deleteCharge);
