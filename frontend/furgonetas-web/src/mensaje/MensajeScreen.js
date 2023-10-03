import React, {useState, useEffect} from 'react'
import { recibir_mensaje, enviar_mensaje } from '../server/mensajeApi'

// Pantalla de Prueba
export default function MensajeScreen() {

  // Estado Inicial
  const [mensaje, setMensaje] = useState("Hola")

  // Use Effect de para pintar el mensaje apenas se carga la pagina
  useEffect(() => {
    
    /* Consumo del endpoint "enviarMensaje" del backend 
       llamando al metodo "recibir_mensaje" del frontend */

    recibir_mensaje()
      .then((res) => {

          console.log('Mensaje desde el Back: ', res)
          if(res.data.mensaje != undefined){
            setMensaje(res.data.mensaje)

          }
          
        }
      )
      .catch((err) => {
          console.log(err);
        }
      )

  }, [])
  
  // Manejador del boton para enviar mensaje
  const handleEnviarMensaje = () => {

    /* Definicion del mensaje y
       Consumo del endpoint "recibirMensaje" del backend 
       llamando al metodo "enviar_mensaje" del frontend */

    const mensaje = {mensaje_enviado: "Envio de Mensaje"}
    enviar_mensaje(mensaje)

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
