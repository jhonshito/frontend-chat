
import '../styles/notificacion.css'

const Notificacion = () => {
  return (
    <div className='contenedor-notificacion'>
        <div className="notificacion-cantidad">
            <h3 className='notificacion'>Notificación</h3>
            <div className="cantidad">
                <p>0</p>
            </div>
        </div>
        <p className='texto-cabezera'>Mark all as read</p>
    </div>
  )
}

export default Notificacion