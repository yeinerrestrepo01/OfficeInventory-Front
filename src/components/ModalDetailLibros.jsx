import React from 'react'
import styles from '../Styles/Modal.module.scss'

function ModalDetailLibros(props) {
    console.log(props)
    return (
        <div className={styles.modal}>
            <div className={styles.container} >
                <div className={styles.header}>
                    <h3>Detalle Libros</h3>
                    <button type="button" onClick={props.closeModal}>X</button>
                </div>
                <div className={styles.content}>
                  <h4 style={styles.fontitalic}>Autor: {props.data.nombreAutor}</h4>
                  <h4 style={styles.fontitalic}>Editorial: {props.data.nombreEditorial}</h4>
                  <h4 style={styles.fontitalic} >Sede Editorial: {props.data.sedeEditorial}</h4>
                </div>
            </div>
        </div>
    )
}

export default ModalDetailLibros
