import { Link } from "react-router-dom";

const Themes = ["beauté", "bien-ëtre", "cuisine", "maison", "parfum", "santé"]

function ThemesList() {
    return (
        <div className="symptoms__wrapper">
            <h2>Themes</h2>
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
