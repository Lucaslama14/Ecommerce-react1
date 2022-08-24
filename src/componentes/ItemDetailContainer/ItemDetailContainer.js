import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import './ItemDetailContainer.css'
import { useParams } from 'react-router-dom'
// firebase
import db from "../../firebaseConfig"
import {doc, getDoc} from "firebase/firestore";


const ItemDetailContainer = () => {
    const [productData, setProductData] = useState({})
    const { id } = useParams()

    useEffect( () => {
        getProduct()
        .then((res) => {
            setProductData(res)
        })
    }, [id])


    const getProduct = async () => {
        const docRef = doc(db, 'productos', id)
        const docSnapshot = await getDoc(docRef)
        let product = docSnapshot.data()
        product.id = docSnapshot.id
        console.log('data con id:', product)
        return product
    }

    return(
        <div className="container-item-detail">
            <ItemDetail data={productData}/>
        </div>
    )
}

export default ItemDetailContainer