import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"
import './ItemListContainer.css'
import products from "../../utils/products.mock"
// firebase
import { collection, getDocs } from "firebase/firestore"
import db from "../../firebaseConfig"

const ItemListContainer = () => {

    const [listProducts, setListProducts] = useState([])

    const getProducts = async () => {
        const productCollection = collection(db, 'productos')
        const productSnapshot = await getDocs(productCollection)
        const productList = productSnapshot.docs.map((doc) => {
            let product = doc.data()
            product.id = doc.id
            return product
        })
        return productList
    }

    useEffect(() => {
        getProducts()
            .then((res) => {
                setListProducts(res)
            })

        // .then( (res) => { //OK
        //     //console.log("Productos: ", res)
        //     setListProducts(res)
        // })
        // .catch( (error) => { //FALLO
        //     console.log("Fallo")
        // })
        // .finally( () =>{
        // })
    }, [])

    return (
        <div className="list-product">
            <h2>Productos</h2>
            <ItemList dataProducts={listProducts} />
        </div>
    )
}

export default ItemListContainer