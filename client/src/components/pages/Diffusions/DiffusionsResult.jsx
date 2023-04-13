import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
            {diffusions.map((diffusion) => (
                <div key={diffusion.id}>
                    <h3>{diffusion.name}</h3>
                </div>
            ))}
        </div>
    );
}

export default DiffusionsResult;
