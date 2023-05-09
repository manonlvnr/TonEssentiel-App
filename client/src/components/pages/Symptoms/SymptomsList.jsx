import "./SymptomsList.scss";
import AlphabeticalList from "../../molecules/AlphabeticalList/AlphabeticalList";
import Title from "../../atoms/Title/Title";
import Header from "../../organisms/Header/Header";
import { useEffect, useState } from "react";


function SymptomsList() {
    const [oils, setOils] = useState(null);
    const symptoms = [];

    useEffect(() => {
        const fetchOils = async () => {
            const response = await fetch("/api/oils");
            const json = await response.json();

            if (response.ok) {
                setOils(json);
            }
        };

        fetchOils();
    }, []);

    oils && oils.map(oil => {
        oil.symptoms && oil.symptoms.map(symptom => {
            symptoms.push(symptom.name)
        })
    })


    console.log(symptoms);
    return (
        <>
            <Header />
            <div className="symptoms__wrapper">
                <Title children={"Symptômes"} />
                <div>
                    <AlphabeticalList words={symptoms} link="symptoms" />
                </div>
            </div>
        </>
    );
}

export default SymptomsList;
