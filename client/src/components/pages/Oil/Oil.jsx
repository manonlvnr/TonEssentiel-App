import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Oil() {
    const routeParams = useParams();

    const [oil, setOil] = useState([]);

    useEffect(() => {
        const fetchThemes = async () => {
        const response = await fetch(`/api/oils/${routeParams.oil}`);
        const json = await response.json();

            if (response.ok) {
                setOil(json);
                console.log(json);
            }
        };

        fetchThemes();
    }, [ routeParams.oil ]);

    return (
        <div>
            <h2>Oil</h2>
            {oil.map((oil) => (
                <div key={oil.id}>
                    <h3>{oil.name}</h3>
                    <p>{oil.description}</p>
                </div>
            ))}
        </div>
    );
}

export default Oil;
