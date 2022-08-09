import './NavBar.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom'

const NavBar = () => {
        return(
            //fragmnt
            <div className='NavBar'>
            <img className='img' src="/assets/logo.jpg"  alt="logo" />
            <h1>Flor de Ceramica</h1>
            <ul>
            <Link to="/"><li><button>Inicio</button></li></Link>
            <Link to="/productos"><li><button>Productos</button></li></Link>
            <Link to="/contacto"><li><button>Nosotros</button></li></Link>
            <Link to="/contacto"><li><button>Contacto</button></li></Link>
            </ul>
            <ShoppingCartIcon  />
            </div>
    )
}

export default NavBar;