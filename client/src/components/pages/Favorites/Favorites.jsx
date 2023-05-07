import { useEffect, useState } from 'react';
import Title from '../../atoms/Title/Title'
import OilSummary from '../../molecules/OilSummary/OilSummary';
import { IconTrash } from '@tabler/icons-react';
import './Favorites.scss';
import Header from "../../organisms/Header/Header";


function Favorites() {
    const [userState, setUserState] = useState([]);

    useEffect(() => {
        const fetchFavorites = async () => {
            const localInfo = localStorage.getItem("user");
            const email = JSON.parse(localInfo).email;

            const response = await fetch(`/api/users/${email}`);
            const json = await response.json();

            if (response.ok) {
                setUserState(json);
                console.log("userState", json);
            }
        };

        fetchFavorites();
    }, [])

    const handleRemoveFavorites = async (e, oilId) => {
        e.preventDefault();

        const removeFavorites = async () => {
            const response = await fetch(
                `/api/users/favorites/${userState[0].email}`,
                {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ favorites: oilId }),
                }
            );
            const json = await response.json();
            console.log(json);
            setUserState([json]);
        };

        removeFavorites();
    }

    return (
        <>
        <Header />
        <div className="favorites">
            <Title children={"Favoris"} />
            <div className="favorites__container">
                {userState.map((user) => (
                    user.favorites.map((favorite) => (
                        <div className="favorites__container__card">
                            <OilSummary oilInfo={favorite}/>
                            {console.log("favorite", favorite)}
                            <button className='favorites__delete-btn' onClick={(e) => handleRemoveFavorites(e, favorite._id)}>
                                <IconTrash color='white'/>
                            </button>
                        </div>
                    ))
                ))}
            </div>
        </div>
        </>
    )
}

export default Favorites;
