import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext';

const CartWidget = () => {

    const { carrito } = useContext(CartContext);

  return (
    <div>
        <Link className="menu-link" to="/carrito">
            Carrito
            <span className="numerito">{carrito}</span>
        </Link>
    </div>
  )
}

export default CartWidget