import { useContext, useState } from "react"
import { CartContext } from "../../Context/CartContext"
import './Cart.css'

const Cart = () => {
    const { cartProducts, totalPrice } = useContext(CartContext)
    const [success, setSuccess] = useState()
    return (
        <div className="checkout-page">
            <div className="info-checkout">
                <h2>CARRITO</h2>
                <span>TOTAL:</span>
                <p>Productos Agregados</p>
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
                        <button>Finalizar Compra</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Cart