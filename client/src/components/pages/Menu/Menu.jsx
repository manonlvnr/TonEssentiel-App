import { Link } from "react-router-dom";
import './Menu.scss';
import { useAuthContext } from "../../../hooks/useAuthContext";
import Search from "../../molecules/Search/Search";
import { IconChevronRight, IconHelpOctagon, IconAlertOctagon, IconUser, IconBook2, IconSettings } from "@tabler/icons-react";

function Menu() {
    const { user } = useAuthContext()

    return (
        <div className="menu">
            <Search />
            <div className="menu__categories">
                <div className="menu__categories__link">
                    <Link to="/allOils">Toutes les huiles</Link>
                    <IconChevronRight />
                </div>
                <div className="menu__categories__link">
                    <Link to="/symptoms">Symptômes</Link>
                    <IconChevronRight />
                </div>
                <div className="menu__categories__link">
                    <Link to="/diffusions">Diffusons</Link>
                    <IconChevronRight />
                </div>
                <div className="menu__categories__link">
                    <Link to="/themes">Thèmes</Link>
                    <IconChevronRight />
                </div>
            </div>
            <div className="menu__account">
                {
                    user ?
                    <button className="menu__account__btn">
                        <IconUser />
                        <Link to="/account">Mon compte</Link>
                    </button>
                    :
                    <button className="menu__account__btn">
                        <IconUser />
                        <Link to="/signin">Mon compte</Link>
                    </button>
                }
            </div>
            <div className="menu__infos">
                <div className="menu__infos__link">
                    <IconHelpOctagon />
                    <Link to="/faq">FAQ</Link>
                </div>
                <div className="menu__infos__link">
                    <IconAlertOctagon />
                    <Link to="/utilisations">Précautions d'utilisation</Link>
                </div>
                <div className="menu__infos__link">
                    <IconBook2 />
                    <Link to="/sources">Sources</Link>
                </div>
                <div className="menu__infos__link">
                    <IconSettings />
                    <Link to="/parametres">Paramêtres</Link>
                </div>
            </div>
        </div>
    )
}

export default Menu;
