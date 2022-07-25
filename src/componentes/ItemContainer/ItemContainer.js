import ItemProduct from "../ItemProduct/ItemProduct"

const ItemContainer = () => {
    return (
        <div className="list-product">
            <h2>Productos</h2>
            <ItemProduct titulo="Cuenco" precio={3000} imagen={'cuenco.jpg'} />
            <ItemProduct titulo="Cuenco" precio={3000} imagen={'cuenco.jpg'} />
            <ItemProduct titulo="Cuenco" precio={3000} imagen={'cuenco.jpg'} />
            <ItemProduct titulo="Cuenco" precio={3000} imagen={'cuenco.jpg'} />
            <ItemProduct titulo="Cuenco" precio={3000} imagen={'cuenco.jpg'} />
            <ItemProduct titulo="Cuenco" precio={3000} imagen={'cuenco.jpg'} />
            <ItemProduct titulo="Cuenco" precio={3000} imagen={'cuenco.jpg'} />
            <ItemProduct titulo="Cuenco" precio={3000} imagen={'cuenco.jpg'} />
            <ItemProduct titulo="Cuenco" precio={3000} imagen={'cuenco.jpg'} />

        </div>
    )
}

export default ItemContainer