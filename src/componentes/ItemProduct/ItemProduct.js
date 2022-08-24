import { useState, useEffect, useContext } from 'react'
import './ItemProduct.css'
import CreditCardIcon from '@mui/icons-material/CreditCard';
import { Link } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext';

const ItemProduct = ({ data, action }) => {
    const { name } = useContext(CartContext)


    const [contador, setContador] = useState(1)
    const { titulo, imagen, precio, stock, id } = data

    const addNumber = () => {
        setContador(contador + 1)
    }
    const removeNumber = () => {
        setContador(contador - 1)
    }

    useEffect(() => {
        // setContador(1)
    }, [contador])

    const addToCart = (e) => {
        
    }

    return (
            <Link to={`/productos/${id}`}>
            <div className="item-product">
            <h1>{name}</h1>
            <img src={`/assets/${imagen}`} alt="Imagen producto" />
            <p>{titulo}</p>
            <span>${precio}</span>
            <p><CreditCardIcon /> 3 Cuotas sin interes</p>
            <button onClick={addToCart}>Ver producto</button>
            </div>
            </Link>
    )
}

export default ItemProduct