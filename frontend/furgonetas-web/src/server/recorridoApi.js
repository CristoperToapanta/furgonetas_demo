import initConfig from "../configs/initConfig";
import axios from 'axios';

const INSERTAR_RECORRIDO_URL = initConfig.host + "/recorrido/registrar-recorrido";
const CONSULTAR_RECORRIDOS_URL = initConfig.host + "/recorrido/consultar-recorridos";
const CONSULTAR_ASISTENCIA_URL = initConfig.host + "/recorrido/asistencia/:id";

export function insertar_recorridos(data) {
    return axios.post(`${INSERTAR_RECORRIDO_URL}`, data, {timeout:50000})
        .then(r=> r) 
        .catch(err => err)
}

export function consultar_recorrido() {
    return axios.get(`${CONSULTAR_RECORRIDOS_URL}`, {timeout:50000})
        .then(r=> r) 
        .catch(err => err)
}

export function asistencia(id){
    return axios.get(`${CONSULTAR_ASISTENCIA_URL}`, id, {timeout:50000})
        .then(r=> r)
        .catch(err => err)
}