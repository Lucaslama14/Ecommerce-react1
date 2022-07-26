import ItemProduct from "../ItemProduct/ItemProduct"
import './ItemContainer.css'

const ItemContainer = () => {
    const product1 ={
        title: "Cuenco",
        precio: 3000,
        imagen: 'cuenco.jpg',
        stock: 10
    }
    const product2 ={
        title: "Cuenco",
        precio: 3000,
        imagen: 'vaso.jpg',
        stock: 10

    }
    const product3 ={
        title: "Cuenco",
        precio: 3000,
        imagen: 'plato.jpg',
        stock: 10

    }
    return (
        <div className="list-product">
            <h2>Productos</h2>
            <ItemProduct data={product1} />
            <ItemProduct data={product2} />
            <ItemProduct data={product3} />


        </div>
    )
}

export default ItemContainer