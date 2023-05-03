import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import OilSummary from '../../molecules/OilSummary/OilSummary';
import Title from "../../atoms/Title/Title";
import './DiffusionsResult.scss'

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
            <Title children={routeParams.name} />
            <div className="diffusion-results__wrapper">
                {diffusions.map((oil) => (
                    <Link to={`/allOils/${oil.name}`} key={oil._id}>
                        <OilSummary oilInfo={oil}/>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default DiffusionsResult;
