import React, {useState, useEffect} from 'react'
import { recibirMensaje, enviarMensaje } from '../server/mensajeApi'

export default function MensajeScreen() {

  const [mensaje, setMensaje] = useState("Hola")

  useEffect(() => {
    
    recibirMensaje()
      .then((res) => {
          setMensaje(res.data.mensaje)
        }
      )
      .catch((err) => {
          console.log(err);
        }
      )

  }, [])
  
  const handleEnviarMensaje = () => {

    const mensaje = {mensaje_enviado: "Envio de Mensaje"}
    enviarMensaje(mensaje)

  }

  return (
    <div>
    <div>{mensaje}</div>
      <button 
        onClick={
          handleEnviarMensaje
        }
      > 
        Enviar Mensaje 
      </button>
    </div>
  )
}
