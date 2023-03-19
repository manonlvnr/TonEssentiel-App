import { useEffect, useState } from "react";
import { IconArrowLeft } from '@tabler/icons-react';


function Homepage() {
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
        <div className='Homepage'>
        <h1>Homepage</h1>
        <div>
            {oils && oils.map(oil => (
                <div key={oil.id}>
                    <h2>{oil.name}</h2>
                    <p>{oil.description}</p>
                </div>
            ))}    
        </div>
            <IconArrowLeft />
        </div>
    );
}

export default Homepage;
