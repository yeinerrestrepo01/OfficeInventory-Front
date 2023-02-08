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
                <div className={styles.content}></div>
            </div>
        </div>
    )
}

export default ModalDetailLibros
