import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

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
        <h2>SymptomsResult</h2>
        {symptoms.map((oil) => (
            <Link to={`/allOils/${oil.name}`} key={oil.id}>
                <h3>{oil.name}</h3>
            </Link>
        ))}
        </div>
    );
}

export default SymptomsResult;
