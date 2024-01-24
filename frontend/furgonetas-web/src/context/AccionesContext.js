import React, { createContext, useState } from 'react'
import {eliminar_representante} from '../server/representanteApi'

// Crear Contexto
export const AccionContext = createContext()

// Exportar Provider
export const AccionesContext = ({ children }) => {

    // Estados Iniciales de las Banderas
    const [recargarPasajeros, setRecargarPasajeros] = useState(false);

    const [recargarFurgonetas, setRecargarFurgonetas] = useState(false);

    const [recargarRepresentante, setRecargarRepresentante] = useState(false);

    const [recargarConductor, setRecargarConductor] = useState(false);

    const [recargarRecorrido, setRecargarRecorrido] = useState(false);

    const [representante, setRepresentante] = useState([]);

    // Bandera del Contexto
    const accionPasajeros = () => {
        setRecargarPasajeros(!recargarPasajeros);
    };

    const accionFurgonetas = () => {
        setRecargarFurgonetas(!recargarFurgonetas);
    }

    const accionRepresentante = () => {
        setRecargarRepresentante(!recargarRepresentante);
    }

    const accionConductor = () => {
        setRecargarConductor(!recargarConductor);
    }

    const accionRecorrido = () => {
        setRecargarRecorrido(!recargarRecorrido);
    }

    /* context para la eliminación de un representante */
    const eliminarRepresentante = async (id) => {
        try {
            const respuesta = await eliminar_representante(id);
            if(respuesta.status === 204) setRepresentante(representante.filter(representante._id !== id));
        } catch (error) {
            console.log(error.response);
        }
    }

    // Componente Provider
    return (
        <AccionContext.Provider
            value={{
                recargarPasajeros,
                accionPasajeros,
                recargarFurgonetas,
                accionFurgonetas,
                recargarRepresentante,
                accionRepresentante,
                recargarConductor,
                accionConductor,
                recargarRecorrido,
                accionRecorrido,
                eliminarRepresentante
            }}
        >
            {children}
        </AccionContext.Provider>
    )

}