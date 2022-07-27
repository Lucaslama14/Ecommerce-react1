import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"
import './ItemListContainer.css'
import products from "../../utils/products.mock"


const ItemListContainer = () => {

    const [listProducts, setListProducts] = useState([])

    const getProducts = new Promise((resolve, reject) =>{
        setTimeout( ()  => {
            resolve(products)
        }, 2000)
    })

    useEffect(() => {
        getProducts
        .then( (res) => { //OK
            //console.log("Productos: ", res)
            setListProducts(res)
        })
        .catch( (error) => { //FALLO
            console.log("Fallo")
        })
        .finally( () =>{
        })
    }, [])






    return (
        <div className="list-product">
            <h2>Productos</h2>
            <ItemList dataProducts={listProducts}/>
        </div>
    )
}

export default ItemListContainer