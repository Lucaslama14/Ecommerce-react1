import './NavBar.css'
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom'

const NavBar = () => {
        return(
            //fragmnt
            <div className='NavBar'>
            <Link to="/" ><button><img className='img' src="/assets/logo.jpg"  alt="logo" /></button></Link>
            <h1>Flor de Ceramica</h1>
            <ul>
            <Link to="/"><li><button>Inicio</button></li></Link>
            <Link to="/productos"><li><button>Productos</button></li></Link>
            <Link to="/contacto"><li><button>Nosotros</button></li></Link>
            <Link to="/contacto"><li><button>Contacto</button></li></Link>
            </ul>
            <CartWidget  />
            </div>
    )
}

export default NavBar;