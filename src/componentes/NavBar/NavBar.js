import './NavBar.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const NavBar = () => {
        return(
            //fragmnt
            <div className='NavBar'>
            <img className='img' src="/assets/logo.jpg"  alt="logo" />
            <h1>Flor de Ceramica</h1>
            <ul>
                <li><button>Inicio</button></li>
                <li><button>Productos</button></li>
                <li><button>Nosotros</button></li>
                <li><button>Contacto</button></li>
            </ul>
            <ShoppingCartIcon />
            </div>
    )
}

export default NavBar;