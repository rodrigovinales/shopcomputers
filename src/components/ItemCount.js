import React, { useState } from 'react';
import add from "../img/icon/add.png";
import minus from "../img/icon/minus.png";


const ItemCount = ({ stock, inicioCont, onAdd }) => {
    const [inicial, setInicial] = useState(inicioCont);
        
    const sumarStock = ()=> inicial+1 <= stock ? setInicial(inicial + 1) ? setInicial(inicial) : inicial === stock : console.log("No hay mas productos en Stock")  ;

    const restarCantidad = () => inicial -1 >=1 ? setInicial(inicial -1) ? setInicial(1) : inicial === 1 : console.log("Has llegado al minimo para la compra");
    
    const agregar = () => {
        // onAdd(conteo);
        // console.log(`gracias por la compra de ${inicial} unidades`)
    }

    return <div>
        <div className="card" style={{ width: 288 }}>
                <div className="botonera">
                    <i onClick={restarCantidad}><img className="boton-eliminarItem" src={minus} alt="restar" /></i>
                    <p className="conteo">{inicial}</p>
                    <i onClick={sumarStock}><img className="boton-sumarItem" src={add} alt="sumar" /></i>
                </div>
                <button className="btn btn-sm btn-dark" onClick={agregar}>Agregar al carrito</button>
            </div>
        </div>


}

export default ItemCount;