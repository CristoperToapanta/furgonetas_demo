import initConfig from "../configs/initConfig";
import axios from 'axios';

const INSERTAR_PASAJERO_URL = initConfig.host + "/pasajero/registrar-pasajero";
const CONSULTAR_PASAJEROS_URL = initConfig.host + "/pasajero/consultar-pasajeros";

export function insertar_pasajero(data) {

    return axios.post(`${INSERTAR_PASAJERO_URL}`, data, {timeout:50000})
        .then(r=> r) 
        .catch(err => err)

}

export function consultar_pasajeros() {

    return axios.get(`${CONSULTAR_PASAJEROS_URL}`, {timeout:50000})
        .then(r=> r) 
        .catch(err => err)

}
