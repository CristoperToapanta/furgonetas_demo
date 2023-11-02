import initConfig from "../configs/initConfig";
import axios from 'axios';

//const INSERTAR_REPRESENTANTE_URL = initConfig.host + "/representante/registrar-pasajero";
const CONSULTAR_REPRESENTANTES_URL = initConfig.host + "/representante/consultar-representantes";
const CONSULTAR_NOMBRES_REPRESENTANTES_URL = initConfig.host + "/representante/nombres-representantes";

/*export function insertar_representante(data) {
    return axios.post(`${INSERTAR_REPRESENTANTE_URL}`, data, {timeout:50000})
        .then(r=> r) 
        .catch(err => err)
}*/

export function consultar_representantes() {
    return axios.get(`${CONSULTAR_REPRESENTANTES_URL}`, {timeout:50000})
        .then(r=> r) 
        .catch(err => err)
}

export function consultar_nombres_representantes() {
    return axios.get(`${CONSULTAR_NOMBRES_REPRESENTANTES_URL}`, {timeout:50000})
        .then(r=> r) 
        .catch(err => err)
}