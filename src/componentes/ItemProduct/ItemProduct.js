import './ItemProduct.css'

const ItemProduct = ({titulo, precio,}) => {

    return(
        <div className="item-product">
            <img src={'/assets/${imagen}'} alt="Imagen producto" />
            <p>{titulo}</p>
            <span>{precio}</span>
            <button>Comprar</button>
        </div>
    )
} 

export default ItemProduct