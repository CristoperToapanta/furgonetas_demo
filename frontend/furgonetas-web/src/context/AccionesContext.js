import React, { createContext, useState } from 'react'

// Crear Contexto
export const AccionContext = createContext()

// Exportar Provider
export const AccionesContext = ({ children }) => {

    // Estados Iniciales de las Banderas
    const [recargarPasajeros, setRecargarPasajeros] = useState(false);

    // Bandera del Contexto
    const accionPasajeros = () => {
        setRecargarPasajeros(!recargarPasajeros);
    };

    // Componente Provider
    return (
        <AccionContext.Provider
            value={{
                recargarPasajeros,
                accionPasajeros
            }}
        >
            {children}
        </AccionContext.Provider>
    )

}