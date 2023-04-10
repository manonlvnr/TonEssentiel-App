import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
        {symptoms.map((symptom) => (
            <div key={symptom.id}>
                <h3>{symptom.name}</h3>
            </div>
        ))}
        </div>
    );
}

export default SymptomsResult;
