const ItemDetail = ({ data }) => {
    // const [quantitySelected, SetQuantitySelected] = useState(0)

    return (
        <>
            <div className="item-detail-image">
                <img src={`/assets/${data.image}`} alt="imagen" />
            </div>
            <div className="item-detail-info">
                <spam className="category">Cuenco</spam>
                <h2>{data.title}</h2>
                <p className="detail-info__price">$ {data.price}</p>
                <div className="detail-info__color">
                    <button>Naranja</button> / <button>Verde</button>
                </div>
                {/* {console.log("quantitySelected: ", quantitySelected)}
                {
                    quantitySelected > 0 ? <button><Link to="/cart">TERMINAR COMPRA</Link></button> : <ItemCount setQuantitySelected={setQuantitySelected} productData={data} />
                }
 */}
            </div>
        </>
    )

}

export default ItemDetail