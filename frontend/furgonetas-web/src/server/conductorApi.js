import initConfig from "../configs/initConfig";
import axios from 'axios';

const CONSULTAR_CONDUCTORES_URL = initConfig.host + "/conductor/consultar-pasajeros";
const INSERTAR_CONDUCTOR_URL = initConfig.host + "/conductor/registrar-conductor";


export function consultar_conductores() {
    return axios.get(`${CONSULTAR_CONDUCTORES_URL}`, {timeout:50000})
        .then(r=> r) 
        .catch(err => err)
}

export function insertar_conductor(data) {
    return axios.post(`${INSERTAR_CONDUCTOR_URL}`, data, {timeout:50000})
        .then(r=> r) 
        .catch(err => err)
}

