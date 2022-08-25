import { useContext, useState } from "react"
import { CartContext } from "../../Context/CartContext"
import './Cart.css'
import Modal from '../Modal/Modal'
import db from "../../firebaseConfig"
import { collection, addDoc } from 'firebase/firestore'

const Cart = () => {
    const [showModal, setShowModal] = useState(false)
    const { cartProducts, totalPrice } = useContext(CartContext)
    const [success, setSuccess] = useState()


    const [order, setOrder] = useState({
        items: cartProducts.map((product) => {
            return {
                id: product.id,
                titulo: product.titulo,
                precio: product.precio
            }
        }),
        buyer: {},
        total: totalPrice
    })
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: ''
    })


    const handleChange = (e) => {
        setFormData({...formData, [e.target.name] : e.target.value})
    }

    const submitData = (e) => {
        e.preventDefault()
        console.log("order para enviar: ", {...order, buyer: formData}) 
        pushData({...order, buyer: formData})
    }

    const pushData = async (newOrder) => {
        const collectionOrder = collection(db, 'ordenes')
        const orderDoc = await addDoc(collectionOrder, newOrder)
        setSuccess(orderDoc.id)
        console.log('ORDEN GENERADA', orderDoc)
    }

    return (
        <div className="checkout-page">
            <div className="info-checkout">
                {console.log("order: ", order)}
                <h2>Tus Productos</h2>
                <div className="container-checkout-products">
                    {cartProducts.map((cartProduct) => {
                        const { titulo, imagen, precio } = cartProduct
                        return (
                            <div className="checkout-item">
                                <img src={`./assets/${imagen}`} alt="imagen" />
                                <div className="info-checkout-item">
                                    <p>{titulo}</p>
                                    <p className="checkout-item-price">$ {precio}</p>
                                    <button>X</button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="info-subtotal">
                <div className="total-purchase">
                    <h3>RESUMEN DE PEDIDO</h3>
                    <div className="item-purchase">
                        <p>2 PRODUCTOS</p>
                        <p>$ 10.000</p>
                    </div>
                    <div className="item-purchase">
                        <p>ENTREGA</p>
                        <p>Sin cargo</p>
                    </div>
                    <div className="item-purchase">
                        <p>TOTAL</p>
                        <p>$ 10.000</p>
                    </div>
                    <div className="Button-final">
                    </div>
                </div>
                <button onClick={() => setShowModal(true)}>IR A PAGAR</button>
            </div>
            {showModal &&
                <Modal title="DATOS DE CONTACTO" close={() => setShowModal()}>
                    {success ? (
                        <>
                             <h2>ORDEN GENERADA EXITOSAMENTE</h2>
                             <p>Su ID de Compra : {success}</p>
                        </>
                    ) : (    
                    <form onSubmit={submitData}>
                        <input
                            type='text'
                            name='name'
                            placeholder='Ingrese su nombre'
                            onChange={handleChange}
                            value={formData.name}
                        />
                        <input
                            type='number'
                            name='phone'
                            placeholder='Ingrese el telefono'
                            value={formData.phone}
                            onChange={handleChange}
                        />
                        <input
                            type='email  '
                            name='email'
                            placeholder='Ingrese el mail'
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <button type="submit">Enviar</button>
                    </form>
                    )}
                </Modal>
            }
        </div>
    )
}

export default Cart