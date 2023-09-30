import initConfig from "../configs/initConfig";
import axios from 'axios';

// Armado de la ruta de los Servicios y sus endpoints
const RECIBIR_URL = initConfig.host + "/prueba/enviarMensaje";
const ENVIAR_URL = initConfig.host + "/prueba/recibirMensaje";

// Metodo para recibir el mensaje enviado desde el backend y mostrarlo en la pantalla del frontend
export function recibir_mensaje() {

    return axios.post(`${RECIBIR_URL}`, {timeout:5000})
        .then(r=> r) 
        .catch(err => err)

}

// Metodo para enviar un mensaje desde la pantalla y mostrarlo en la consola del backend
export function enviar_mensaje(data) {

    return axios.post(`${ENVIAR_URL}`, data, {timeout:5000})
        .then(r=> r) 
        .catch(err => err)

}
