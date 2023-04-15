import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function ThemesResult() {
    const routeParams = useParams();

    const [themes, setThemes] = useState([]);

    useEffect(() => {
        const fetchThemes = async () => {
        const response = await fetch(`/api/oils/themes/${routeParams.theme}`);
        const json = await response.json();

            if (response.ok) {
                setThemes(json);
                console.log(json);
            }
        };

        fetchThemes();
    }, [ routeParams.theme ]);

    return (
        <div>
            <h2>ThemesResult</h2>
            {themes.map((oil) => (
                <Link to={`/${oil.name}`} key={oil.id}>
                    <h3>{oil.name}</h3>
                </Link>
            ))}
        </div>
    );
}

export default ThemesResult;
