import { useState, useEffect, useContext } from 'react'
import './ItemProduct.css'
import { Link } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext';

const ItemProduct = ({ data, action }) => {
    const { handleClick, name } = useContext(CartContext)


    const [contador, setContador] = useState(1)
    const { titulo, imagen, precio, stock, id } = data

    // const addNumber = () => {
    //     setContador(contador + 1)
    // }
    // const removeNumber = () => {
    //     setContador(contador - 1)
    // }

    useEffect(() => {
        console.log("Actualizacion")
        // setContador(1)
    }, [contador])

    const addToCart = (e) => {
        console.log("click Producto")
        e.stopPropagation()
    }

    return (
            <Link to={`/productos/${id}`}>
            <div className="item-product">
            <h1>{name}</h1>
            <img src={`/assets/${imagen}`} alt="Imagen producto" />
            <p>{titulo}</p>
            <span>${precio}</span>
            <p><CreditCardIcon /> 3 Cuotas sin interes</p>
        {/* <div className='contadorProd'>
              <button onClick={removeNumber}>-</button>
                <p>{contador}</p>
                <button onClick={addNumber}>+</button>
            </div>
            <p>stock: {stock}</p> */}
            <button onClick={addToCart}>Agregar al carrito</button>
            </div>
            </Link>
    )
}

export default ItemProduct