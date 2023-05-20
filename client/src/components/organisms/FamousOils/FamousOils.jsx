import { Suspense, lazy, useEffect, useState } from 'react';
import './FamousOils.scss'
import { Link } from 'react-router-dom';
import API_URL from '../../../config';
import SyncLoader from 'react-spinners/SyncLoader';

const OilSummary = lazy(() =>
    import("../../molecules/OilSummary/OilSummary")
);

function FamousOils() {
    const [oils, setOils] = useState(null);
    const [loadingOils, setLoadingOils] = useState(true)

    useEffect(() => {
        const fetchOils = async () => {
            const response = await fetch(`${API_URL}/api/oils`);
            const json = await response.json();

            if(response.ok) {
                setOils(json);
            }
            setLoadingOils(false)
        }

        fetchOils();
    }, []);

    const override = {
        display: "block",
        margin: "2rem",
        textAlign: "center",
    };

    return (
        <div className="famous-oils">
            <h2 className="famous-oils__title">Les incontournables</h2>
                {loadingOils ? (
                    <SyncLoader cssOverride={override} color={'#809D75'}/>
                ) : (
                    <Suspense fallback={<SyncLoader cssOverride={override} color={'#809D75'}/>}>
                        {oils && oils.map(oil => (
                            oil.highlight && (
                                <Link to={`/allOils/${oil.name}`} key={oil._id} className="famous-oils__link">
                                    <OilSummary oilInfo={oil}/>
                                </Link>
                            )
                        ))}
                    </Suspense>
                )}
        </div>
    )
}

export default FamousOils;
