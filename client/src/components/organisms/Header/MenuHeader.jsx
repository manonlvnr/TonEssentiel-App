import { Link, useNavigate } from "react-router-dom";
import BackButton from "../../atoms/BackButton/BackButton"
import "./Header.scss"

function MenuHeader() {
    const navigate = useNavigate();
	const handleback = () => {
		navigate(-1, {replace: true});
	}

    return (
        <header className="header menu">
            <Link to="/">  
                <h1 className="header__name">Menu</h1>
            </Link>
            <BackButton handleback={handleback}/>
        </header>
    )
}

export default MenuHeader
