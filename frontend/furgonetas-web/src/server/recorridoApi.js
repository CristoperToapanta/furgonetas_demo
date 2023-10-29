import initConfig from "../configs/initConfig";
import axios from 'axios';

//const INSERTAR_RECORRIDO_URL = initConfig.host + "/recorrido/registrar-recorrido";
const CONSULTAR_RECORRIDOS_URL = initConfig.host + "/recorrido/consultar-recorridos";

/*export function insertar_recorridos(data) {
    return axios.post(`${INSERTAR_RECORRIDO_URL}`, data, {timeout:50000})
        .then(r=> r) 
        .catch(err => err)
}*/

export function consultar_recorrido() {
    return axios.get(`${CONSULTAR_RECORRIDOS_URL}`, {timeout:50000})
        .then(r=> r) 
        .catch(err => err)
}