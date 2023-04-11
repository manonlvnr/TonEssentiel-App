import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
            {themes.map((theme) => (
                <div key={theme.id}>
                    <h3>{theme.name}</h3>
                </div>
            ))}
        </div>
    );
}

export default ThemesResult;
