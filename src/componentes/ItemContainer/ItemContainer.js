import ItemProduct from "../ItemProduct/ItemProduct"

const ItemContainer = () => {
    return (
        <div className="list-product">
            <ItemProduct titulo="Cuenco" precio={3000} imagen={'cuenco.jpg'} />
            <ItemProduct titulo="Vaso" precio={4000} imagen={'vaso.jpg'} />
            <ItemProduct titulo="Plato" precio={5000} imagen={'plato.jpg'} />

        </div>
    )
}

export default ItemContainer