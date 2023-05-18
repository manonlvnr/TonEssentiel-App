import { Suspense, lazy, useEffect, useState } from 'react';
import Title from '../../atoms/Title/Title'
import { IconTrash } from '@tabler/icons-react';
import './Favorites.scss';
import Header from "../../organisms/Header/Header";
import { Link } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import API_URL from '../../../config';
import SyncLoader from 'react-spinners/SyncLoader';

const OilSummary = lazy(() => import('../../molecules/OilSummary/OilSummary'));


function Favorites() {
    const [userState, setUserState] = useState([]);
    const [loadingFavorites, setLoadingFavorites] = useState(true)

    useEffect(() => {
        const fetchFavorites = async () => {
            const localInfo = localStorage.getItem("user");
            const email = JSON.parse(localInfo).email;

            const response = await fetch(`${API_URL}/api/users/${email}`);
            const json = await response.json();

            if (response.ok) {
                setUserState(json);
                console.log("userState", json);
            }
            setLoadingFavorites(false)
        };

        fetchFavorites();
    }, [])

    const handleRemoveFavorites = async (e, oilId) => {
        e.preventDefault();

        const removeFavorites = async () => {
            const response = await fetch(
                `${API_URL}/api/users/favorites/${userState[0].email}`,
                {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ favorites: oilId }),
                }
            );

            if (response.ok) {
                const json = await response.json();
                console.log(json);
                toast.success('Huile supprimée des favoris');
                setUserState([json]);
            } else {
                toast.error('Une erreur est survenue');
            }
        };

        removeFavorites();
    }

    const override = {
        display: "block",
        margin: "2rem",
        textAlign: "center",
    };

    return (
        <>
        <Header />
        <Toaster   position="top-center"/>
        <Title children={"Favoris"} />
        <div className="favorites">
            <div className="favorites__container">
                {loadingFavorites ? (
                    <SyncLoader cssOverride={override} color={'#809D75'}/>
                ) : (
                    <Suspense fallback={<SyncLoader cssOverride={override} color={'#809D75'}/>}>
                        {userState.map((user) => (
                            user.favorites.map((favorite) => (
                                <div className="favorites__container__card">
                                    <Link to={`/allOils/${favorite.name}`} key={favorite._id}>
                                        <OilSummary oilInfo={favorite}/>
                                    </Link>
                                    {console.log("favorite", favorite)}
                                    <button className='favorites__delete-btn' onClick={(e) => handleRemoveFavorites(e, favorite._id)}>
                                        <IconTrash color='white'/>
                                    </button>
                                </div>
                            ))
                        ))}
                    </Suspense>
                )}
            </div>
        </div>
        </>
    )
}

export default Favorites;
