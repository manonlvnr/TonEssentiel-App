import { Link } from "react-router-dom";
import './Menu.scss';
import { useSignout } from "../../../hooks/useSignout";
import { useAuthContext } from "../../../hooks/useAuthContext";

function Menu() {
    const signout = useSignout()
    const { user } = useAuthContext()

    const handleclick = () => {
        signout()
    }

    return (
        <div className="menu__wrapper">
            <div className="menu__title">Menu</div>
            <ul className="menu__links">
                <li className="menu__link"><Link to="/allOils">Toutes les huiles</Link></li>
                <li className="menu__link"><Link to="/symptoms">Symptômes</Link></li>
                <li className="menu__link"><Link to="/diffusions">Diffusons</Link></li>
                <li className="menu__link"><Link to="/themes">Thèmes</Link></li>
            </ul>
            {
                user ?
                <div>
                    <div>{user.email}</div>
                    <button onClick={handleclick}>Déconnexion</button>
                </div>
                :
                <div>
                    <Link to="/signup">Créer un compte</Link>
                    <Link to="/signin">Se connecter</Link>
                </div>
            }
        </div>
    )
}

export default Menu;
