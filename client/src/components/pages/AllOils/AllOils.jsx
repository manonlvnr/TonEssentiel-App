import './AllOils.scss';
import { useEffect, useState } from "react";
import AlphabeticalList from "../../molecules/AlphabeticalList/AlphabeticalList";
import Title from '../../atoms/Title';

function AllOils() {
    const [oils, setOils] = useState(null);
    const allOils = []

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

    oils && oils.map((oil) => {
        allOils.push(oil.name)
    })

    console.log(allOils)

    return (
        <div>
            <Title children={"Huiles de A à Z"} />
            <div>
                <AlphabeticalList words={allOils} link="allOils"/>
            </div>
        </div>
    )
}

export default AllOils;
