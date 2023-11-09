import initConfig from "../configs/initConfig";
import axios from 'axios';

const INSERTAR_FURGONETA_URL = initConfig.host + "/furgoneta/registrar-furgoneta";
const CONSULTAR_FURGONETAS_URL = initConfig.host + "/furgoneta/consultar-furgonetas";
const CONSULTAR_PLACAS_URL = initConfig.host + "/furgoneta/placas-furgonetas";

export function insertar_furgoneta(data) {
    return axios.post(`${INSERTAR_FURGONETA_URL}`, data, {timeout:50000})
        .then(r=> r) 
        .catch(err => err)
}

export function consultar_furgonetas() {
    return axios.get(`${CONSULTAR_FURGONETAS_URL}`, {timeout:50000})
        .then(r=> r) 
        .catch(err => err)
}

export function consultar_placas(){
    return axios.get(`${CONSULTAR_PLACAS_URL}`, {timeout:50000})
        .then(r=> r)
        .catch(err => err)
}