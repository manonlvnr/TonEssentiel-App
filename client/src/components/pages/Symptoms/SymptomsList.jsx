import "./SymptomsList.scss";
import AlphabeticalList from "../../molecules/AlphabeticalList/AlphabeticalList";
import Title from "../../atoms/Title/Title";
import Header from "../../organisms/Header/Header";
import { useEffect, useState } from "react";
import API_URL from "../../../config";


function SymptomsList() {
    const [oils, setOils] = useState(null);
    const [symptoms, setSymptoms] = useState([]);

    useEffect(() => {
        const fetchOils = async () => {
            const response = await fetch(`${API_URL}/api/oils`);
            const json = await response.json();

            if (response.ok) {
                setOils(json);
            }
        };

        fetchOils();
    }, []);

    if (!oils) {
        return <div>Loading...</div>;
    }

    const uniqueSymptoms = Array.from(
    new Set(
        oils
        .flatMap((oil) => oil.symptoms || [])
        .map((symptom) => symptom.name)
    )
    ).sort();


    console.log(symptoms);
    return (
        <>
            <Header />
            <div className="symptoms__wrapper">
                <Title children={"Symptômes"} />
                <div>
                    <AlphabeticalList words={uniqueSymptoms} link="symptoms" />
                </div>
            </div>
        </>
    );
}

export default SymptomsList;
