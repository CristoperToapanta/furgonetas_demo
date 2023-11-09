import React, { createContext, useState } from 'react'

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
                accionRecorrido
            }}
        >
            {children}
        </AccionContext.Provider>
    )

}