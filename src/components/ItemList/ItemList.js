import React from "react";
import Item from "../Item/Item"

const ItemList = ({items}) => {

    return (
        <>
            <h6>poner aqui el buscador</h6>
        {items.map ( el =>  {
            return <Item items key={el.id} {...el}/>
        })}
        </>
    )
}

export default ItemList;