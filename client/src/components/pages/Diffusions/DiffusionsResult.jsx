import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import OilSummary from '../../molecules/OilSummary/OilSummary';

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
                <Link to={`/allOils/${oil.name}`} key={oil.id}>
                    <OilSummary oilInfo={oil}/>
                </Link>
            ))}
        </div>
    );
}

export default DiffusionsResult;
