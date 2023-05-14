import { Link } from "react-router-dom";
import './Menu.scss';
import Search from "../../molecules/Search/Search";
import { IconChevronRight, IconHelpOctagon, IconAlertOctagon, IconUser, IconBook2, IconSettings } from "@tabler/icons-react";
import MenuHeader from "../../organisms/Header/MenuHeader";

function Menu() {

    return (
        <>
        <MenuHeader />
        <Search />
        <div className="menu">
            <div className="menu__categories">
                <Link to="/allOils" className="menu__categories__link">
                    <div>Toutes les huiles</div>
                    <IconChevronRight />
                </Link>
                <Link to="/symptoms" className="menu__categories__link">
                    <div>Symptômes</div>
                    <IconChevronRight />
                </Link>
                <Link to="/diffusions" className="menu__categories__link">
                    <div>Diffusons</div>
                    <IconChevronRight />
                </Link>
                <Link to="/themes" className="menu__categories__link">
                    <div>Thèmes</div>
                    <IconChevronRight />
                </Link>
            </div>
            <Link to="/account" className="menu__account">
                <IconUser />
                <div>Mon compte</div>
            </Link>
            <div to="/faq" className="menu__infos">
                <Link to="/faq" className="menu__infos__link">
                    <IconHelpOctagon />
                    <div>FAQ</div>
                </Link>
                <Link to="/utilisations" className="menu__infos__link">
                    <IconAlertOctagon />
                    <div>Précautions d'utilisation</div>
                </Link>
                <Link to="/sources" className="menu__infos__link">
                    <IconBook2 />
                    <div>Sources</div>
                </Link>
                <Link to="/parametres" className="menu__infos__link">
                    <IconSettings />
                    <div>Paramêtres</div>
                </Link>
            </div>
        </div>
        </>
    )
}

export default Menu;
