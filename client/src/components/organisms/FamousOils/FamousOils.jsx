import { useEffect, useState } from 'react';
import './FamousOils.scss'

function FamousOils() {
    const [oils, setOils] = useState(null);

    useEffect(() => {
        const fetchOils = async () => {
            const response = await fetch('/api/oils');
            const json = await response.json();

            if(response.ok) {
                setOils(json);
            }
        }

        fetchOils();
    }, []);

    return (
        <div className="famous-oils">
            <h2 className="famous-oils__title">Les huiles du moment</h2>
            {oils && oils.map(oil => (
                oil.highlight && (
                <div key={oil._id}>
                    <h2 key={oil.index}>{oil.name}</h2>
                    {oil.symptoms.map(e => (
                        <div key={e.name}>
                            {e.diffusions && e.diffusions.map(d => (
                                <p key={d.index}>{d.name}</p>
                            ))}
                            <p key={e.index}>{e.theme}</p>
                        </div>
                    ))}
                </div>
                )
            ))}
        </div>
    )
}

export default FamousOils;
