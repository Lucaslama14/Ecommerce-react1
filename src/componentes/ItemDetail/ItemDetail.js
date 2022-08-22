import ItemCount from "../ItemCount/ItemCount"
import './ItemDetail'
import { useState } from "react"
import { Link } from 'react-router-dom'

const ItemDetail = ({ data }) => {
    const [quantitySelected, setQuantitySelected] = useState(0)
    return (
        <>
            <div className="item-detail-image">
                <img src={`/assets/${data.imagen}`} alt="imagen" />
            </div>
            <div className="item-detail-info">
                <spam className="category">Cuenco</spam>
                <h2>{data.title}</h2>
                <p className="detail-info__price">$ {data.precio}</p>
                <div className="detail-info__color">
                </div>
                {console.log("quantitySelected: ", quantitySelected)}
                {
                    quantitySelected > 0 ? <button><Link to="/cart">Finalizar Compra</Link></button> : <ItemCount setQuantitySelected={setQuantitySelected} productData={data} />
                }

            </div>
        </>
    )

}

export default ItemDetail