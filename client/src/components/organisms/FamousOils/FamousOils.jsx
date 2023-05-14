import { useEffect, useState } from 'react';
import './FamousOils.scss'
import { Link } from 'react-router-dom';
import OilSummary from '../../molecules/OilSummary/OilSummary';

function FamousOils() {
    const [oils, setOils] = useState(null);

    useEffect(() => {
        const fetchOils = async () => {
            const response = await fetch('https://ton-essentiel-api.vercel.app/api/oils');
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
                <Link to={`/allOils/${oil.name}`} key={oil._id} className="famous-oils__link">
                    <OilSummary oilInfo={oil}/>
                </Link>
                )
            ))}
        </div>
    )
}

export default FamousOils;
