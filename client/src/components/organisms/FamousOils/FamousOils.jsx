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
                <div key={oil.id} className=''>
                    <h2>{oil.name}</h2>
                    {oil.themes.map(e => (
                        <p>{e.theme}</p>
                    ))}
                </div>
            ))}
        </div>                     
    )
}

export default FamousOils;
