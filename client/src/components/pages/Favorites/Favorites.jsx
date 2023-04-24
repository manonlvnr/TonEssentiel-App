import { useEffect, useState } from 'react';
import Title from '../../atoms/Title/Title'

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

    return (
        <div className="favorites">
            <Title children={"Favoris"} />
            <div className="favorites__container">
                {userState.map((user) => (
                    user.favorites.map((favorite) => (
                        <div className="favorites__container__card">
                            <div>
                                <h3>{favorite.name}</h3>
                                <p>{favorite.description}</p>
                            </div>
                        </div>
                    ))
                ))}
            </div>
        </div>
    )
}

export default Favorites;
