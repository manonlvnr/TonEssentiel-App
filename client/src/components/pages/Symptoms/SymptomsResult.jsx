import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import './SymptomsResult.scss'
import OilSummary from '../../molecules/OilSummary/OilSummary';

function SymptomsResult() {
    const routeParams = useParams();

    const [symptoms, setSymptoms] = useState([]);

    useEffect(() => {
        const fetchSymptoms = async () => {
        const response = await fetch(`/api/oils/symptoms/${routeParams.name}`);
        const json = await response.json();

        if (response.ok) {
            setSymptoms(json);
        }
        };

        fetchSymptoms();
    }, [ routeParams.name ]);

    return (
        <div className="symptoms-result__wrapper">
            <h2>SymptomsResult</h2>
            {symptoms.map((oil) => (
                <Link to={`/allOils/${oil.name}`} key={oil.id}>
                    <OilSummary oilInfo={oil}/>
                </Link>
            ))}
        </div>
    );
}

export default SymptomsResult;
