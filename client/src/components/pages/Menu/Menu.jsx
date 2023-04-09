import { Link } from "react-router-dom";
import './Menu.scss';

function Menu() {

    return (
        <div className="menu__wrapper">
            <div className="menu__title">Menu</div>
            <ul className="menu__links">
                <li className="menu__link"><Link to="/allOils">Toutes les huiles</Link></li>
                <li className="menu__link"><Link to="/symptoms">Symptômes</Link></li>
                <li className="menu__link"><Link to="/diffusions">Diffusons</Link></li>
                <li className="menu__link"><Link to="/themes">Thèmes</Link></li>
            </ul>
        </div>
    )
}

export default Menu;
