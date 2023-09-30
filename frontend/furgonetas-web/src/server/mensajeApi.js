import initConfig from "../configs/initConfig";
import axios from 'axios';

const RECIBIR_URL = initConfig.host + "/prueba/enviarMensaje";
const ENVIAR_URL = initConfig.host + "/prueba/recibirMensaje";


export function recibirMensaje() {

    return axios.post(`${RECIBIR_URL}`, {timeout:5000})
        .then(r=> r) 
        .catch(err => err)

}

export function enviarMensaje(data) {

    return axios.post(`${ENVIAR_URL}`, data, {timeout:5000})
        .then(r=> r) 
        .catch(err => err)

}
