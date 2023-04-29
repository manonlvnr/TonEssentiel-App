import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import OilSummary from '../../molecules/OilSummary/OilSummary';

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
                <Link to={`/allOils/${oil.name}`} key={oil.id}>
                    <OilSummary oilInfo={oil}/>
                </Link>
            ))}
        </div>
    );
}

export default ThemesResult;
