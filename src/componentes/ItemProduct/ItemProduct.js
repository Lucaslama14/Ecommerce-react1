import { useState } from 'react' 
import './ItemProduct.css'

const ItemProduct = ({data}) => {
    const [contador, setContador] = useState(0)

    const {titulo, imagen, precio, stock} = data

    const addNumber =() => {
        setContador(contador + 1)
        }

    const removeNumber =() => {
        setContador(contador - 1)
    }

    return(
        <div className="item-product">
            <img src={`/assets/${imagen}`} alt="Imagen producto" />
            <p>{titulo}</p>
            <span>${precio}</span>
            <div className='contadorProd'>
                <button onClick={removeNumber}>-</button>
                <p>{contador}</p>
                <button onClick={addNumber}>+</button>
            </div>
            <p>stock: {stock}</p>
            <button className="boton">Comprar</button>
        </div>
    )
} 

export default ItemProduct