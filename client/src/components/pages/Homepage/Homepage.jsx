import { useEffect, useState } from "react";
import { IconArrowLeft } from '@tabler/icons-react';
import Search from '../../molecules/Search/Search';
import Categories from "../../molecules/Categories/Categories";


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
            <Search />
            <Categories />
            {/* <div>
                {oils && oils.map(oil => (
                    <div key={oil.id}>
                        <h2>{oil.name}</h2>
                        <p>{oil.description}</p>
                    </div>
                ))}    
            </div>
                <IconArrowLeft /> */}
        </div>
    );
}

export default Homepage;
