import React from "react";
import { Link } from 'react-router-dom';
import "../Css/ItemDetail.css"

const ItemDetail = ({ categoria, imagen, imagen2, precio, nombre, stock, id, descripcion, tamano, compatibilidad, conexion }) => {

    return (
        <div className="container">
            <div className="stylingItemDetail">
                <div className="card stylingCard_ItemDetail">
                    <h6>CATEGORIA: {categoria}</h6>
                    <img src={`${process.env.PUBLIC_URL}/productos/${imagen}`} className="imgItemDetail" alt="" />
                    {/* <p className="card-title">{nombre}</p> */}
                    <div className="card-body">
                        <span className="btn btn-danger disabled">$ {precio} <p className="titleSmall">IVA INCLUIDO</p></span>
                        <div className="imgItemDetail">
                            <img src={`${process.env.PUBLIC_URL}/productos/${imagen}`} className="imgDetail" alt="" />
                            {
                                imagen2 ? <img src={`${process.env.PUBLIC_URL}/productos/${imagen2}`} className="imgDetail" alt="" /> : null
                            }
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="detalleProducto">
                        <h1>{nombre}</h1>
                        <p>Lo que tenés que saber de este producto</p>
                        <ul className="descripcionFont">
                            <li>
                                <p> - {descripcion}</p>
                            </li>
                            <li>
                                {tamano ? <p> - DIMENSIONES: {tamano}</p> : null}
                            </li>
                            <li>
                                {compatibilidad ? <p> - COMPATIBILIDAD: {compatibilidad} </p> : null}
                            </li>
                            <li>
                                {conexion ? <p> - CONEXION: {conexion} </p> : null}
                            </li>
                        </ul>
                        <hr />
                        <div className="stylingShop">
                            <button className="btn btn-success disabled"> STOCK DISPONIBLE</button>
                            <hr />
                            <Link to="/" className="btn btn-info"> IR A INICIO </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ItemDetail;
