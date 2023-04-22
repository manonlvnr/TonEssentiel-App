import { Link } from "react-router-dom";
import Title from '../../atoms/Title';


const Themes = ["beauté", "bien-ëtre", "cuisine", "maison", "parfum", "santé"]

function ThemesList() {
    return (
        <div className="symptoms__wrapper">
            <Title children={"Thèmes"} />
            <div>
                <lu>
                    {Themes.map((theme) => (
                        <li key={theme.id}>
                            <Link to={`/themes/${theme}`}>{theme}</Link>
                        </li>
                    ))}
                </lu>
            </div>
        </div>
    )
}

export default ThemesList;
