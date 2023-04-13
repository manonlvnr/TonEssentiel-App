import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function DiffusionsResult() {
    const routeParams = useParams();

    const [diffusions, setDiffusions] = useState([]);

    useEffect(() => {
        const fetchDiffusions = async () => {
        const response = await fetch(`/api/oils/diffusions/${routeParams.name}`);
        const json = await response.json();

            if (response.ok) {
                setDiffusions(json);
            }
        };

        fetchDiffusions();
    }, [ routeParams.name ]);

    return (
        <div>
            <h2>DiffusionsResult</h2>
            {diffusions.map((oil) => (
                <Link to={`/${oil.name}`} key={oil.id}>
                    <h3>{oil.name}</h3>
                </Link>
            ))}
        </div>
    );
}

export default DiffusionsResult;
