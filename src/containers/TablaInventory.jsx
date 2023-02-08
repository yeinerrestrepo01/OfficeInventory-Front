import React, { useState, useEffect } from "react";
import { getLibros } from "../services/libros";
import '../Styles/global.scss'
import imagenBook from '../assets/images/libros.png'
import ModalDetailLibros from "../components/ModalDetailLibros";


const TablaInventory = () => {
  const [libros, setLibros] = useState([]);

  const [modal, setModal] = useState(false);

  const [detalleModal, setDetalleModal] = useState(null);

  useEffect(() => {
    getLibros().then((res) => setLibros(res.data));
  }, [])

  const getModalData =(data)=>{
    setModal(true);
    setDetalleModal(data);
  }

  const closeModal=()=>
  {
    setModal(false);
    setDetalleModal(null);
  }
  console.log(libros)
  return (
   
    <div className="container mt-4">
       <h2>Detalles Libros</h2>
      <div className="row d-flex justify-content-center">
      {libros.length <=0?<h3>No existen libros cargados actualmente</h3>:<div></div>}
        {libros?.map((data) => (
          <div className="col-md-3 ml-2 pb-3" key={data.id} onClick={()=>getModalData(data)}>
            <div className="card" style={{width:284, cursor:"pointer"}}>
              <img className="card-img-top" src={imagenBook} alt="Card image cap" style={{ height: 300 }} />
              <div className="card-body" key={data?.id}>
                <h5 className="card-title">{data?.titulo}</h5>
                <p className="card-text">{data?.sinopsis}</p>
              </div>
              <div className="card-footer text-muted justify-content-between">
                Numero de Pag. {data?.nPaginas} 
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {modal && <ModalDetailLibros data={detalleModal} closeModal={closeModal}/>}
    </div>
  )
}

export default TablaInventory