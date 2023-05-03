import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import './SymptomsResult.scss'
import OilSummary from '../../molecules/OilSummary/OilSummary';
import Title from '../../atoms/Title/Title'

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
        <div>
            <Title children={routeParams.theme} />
            <div className="symptoms-results__wrapper">
                {symptoms.map((oil) => (
                    <Link to={`/allOils/${oil.name}`} key={oil.id}>
                        <OilSummary oilInfo={oil}/>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default SymptomsResult;
