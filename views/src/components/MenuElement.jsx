import React from "react";

const MenuElement = (props)=>{

    const formatPrice = (price)=>{
        return "Rp."+ price + ',00'
    }

    return (
        <div>
            <hr />
            <img src={props.image} alt={props.name}/>
            <h4>{props.name}</h4>
            <p>{props.desc}</p>
            <p>{formatPrice(props.price)}</p>
            <hr />
        </div>
    )
}

export default MenuElement;