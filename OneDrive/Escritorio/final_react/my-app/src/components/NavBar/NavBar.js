
import './style.css';
import {CartWidgets} from '../CartWidgets/CartWidgets';
import {Link} from 'react-router-dom'

export const NavBar = () => { 
    return (
        <div className='navbar-container'> 
            <div>
                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/item">Catálogo</Link></li>
                    <li><Link>Sobre nosotros</Link></li>
                </ul>
            </div>
            <CartWidgets/>
            <div>
                <button> Login </button>
            </div>
        </div>
    )
}

