import './AllOils.scss';
import { useEffect, useState, useMemo, Suspense, lazy } from "react";
import Title from '../../atoms/Title/Title';
import Header from "../../organisms/Header/Header";
import API_URL from '../../../config';
import SyncLoader from "react-spinners/SyncLoader";

const AlphabeticalList = lazy(() =>
  import("../../molecules/AlphabeticalList/AlphabeticalList")
);


function AllOils() {
    const [oils, setOils] = useState(null);
    const allOils = []
    const [loading, setLoading] = useState()
    
    useEffect(() => {
        const fetchOils = async () => {
            const response = await fetch(`${API_URL}/api/oils`);
            const json = await response.json();
            
            if(response.ok) {
                setOils(json);
            }
        }
        
        fetchOils();
        
    }, []);
    
    useMemo(() => {
        if (oils) {
            oils.forEach((oil) => {
                allOils.push(oil.name);
            });
        }
    }, [oils]);
    
    console.log(allOils)
    
    const override = {
        display: "block",
        margin: "2rem",
        textAlign: "center",
    };

    return (
        <div>
            <Header />
            <Title children={"Huiles de A à Z"} />
            <div className='allOils__wrapper'>
            <Suspense fallback={<SyncLoader cssOverride={override} color={'#809D75'}/>}>
                {oils ? (
                        <AlphabeticalList words={allOils} link="allOils" />
                    ) : (
                        <SyncLoader cssOverride={override} color={'#809D75'}/>
                    )}
            </Suspense>
            </div>
        </div>
    )
}

export default AllOils;
