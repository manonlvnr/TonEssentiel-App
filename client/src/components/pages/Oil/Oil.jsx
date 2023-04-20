import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuthContext } from "../../../hooks/useAuthContext";

function Oil() {
    const routeParams = useParams();

    const [oil, setOil] = useState([]);
    const [userState, setUserState] = useState([]);

    const { user } = useAuthContext();

    const navigate = useNavigate();

    useEffect(() => {
        const fetchOil = async () => {
            const response = await fetch(`/api/oils/${routeParams.oil}`);
            const json = await response.json();
            
            if (response.ok) {
                setOil(json);
                // console.log(json);
            }
        };

        fetchOil();

    }, [ routeParams.oil ]);

    const handleFavorites = async (e) => {
        e.preventDefault();

        if(user) {
            const localInfo = localStorage.getItem('user');
            const email = JSON.parse(localInfo).email;
            console.log(email);

            const fetchUser = async () => {
                const response = await fetch(`/api/users/${email}`);
                const json = await response.json();
                
                if (response.ok) {
                    setUserState(json);
                    console.log("userState", json);
                }
            }
            await fetchUser();

            const oilId = await oil.map((oil) => (oil._id))
            console.log("oil-id" , oilId);

            const favoritesArray = await userState[0].favorites
            console.log("favorites", favoritesArray);

            if(favoritesArray.includes(oilId[0])) {
                console.log('oui');

                const removeFavorites = async () => {
                    const response = await fetch(`/api/users/${email}`, {
                        method: "DELETE",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({favorites: oilId}),
                    });
                    const json = await response.json();
                    console.log(json);
                }

                removeFavorites();

            }  else {
                console.log('non');

                const addFavorites = async () => {
                    const response = await fetch(`/api/users/${email}`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({favorites: oilId}),
                    });
                    const json = await response.json();
                    console.log(json);
                }

                addFavorites();

            }
        } else {
            navigate('/signin');
        }
    }

    return (
        <div>
            <h2>Oil</h2>
            {oil.map((oil) => (
                <div key={oil._id}>
                    <h3>{oil.name}</h3>
                    <p>{oil.description}</p>
                </div>
            ))}
            <button type="button" onClick={handleFavorites}>favoris</button>
        </div>
    );
}

export default Oil;
