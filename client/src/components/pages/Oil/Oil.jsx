import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useAuthContext } from "../../../hooks/useAuthContext";
import parse from "html-react-parser";
import Title from "../../atoms/Title/Title";
import "./Oil.scss";
import { IconPlus, IconMinus, IconHeart, IconHeartFilled } from "@tabler/icons-react";
import OilSummary from "../../molecules/OilSummary/OilSummary";
import { Swiper, SwiperSlide } from "swiper/react";
import Header from "../../organisms/Header/Header";
import bain from '../../../icons/bain.png';
import diffusion from '../../../icons/diffusion.png';
import massage from '../../../icons/massage.png';
import oral from '../../../icons/voie-orale.png';
import cosmetique from '../../../icons/cosmétique.png';
import inhalation from '../../../icons/inhalation.png';


function Oil() {
    const routeParams = useParams();

    const [oil, setOil] = useState([]);
    const [userState, setUserState] = useState([]);
    const [opened, setOpened] = useState([]);

    const { user } = useAuthContext();

    const navigate = useNavigate();

    useEffect(() => {
        const fetchOil = async () => {
            const response = await fetch(`/api/oils/names/${routeParams.oil}`);
            const json = await response.json();

            if (response.ok) {
                setOil(json);
                // console.log(json);
            }
        };

        const fetchUser = async () => {
            if (user) {
                const localInfo = localStorage.getItem("user");
                const email = JSON.parse(localInfo).email;
                // console.log(email);

                const response = await fetch(`/api/users/${email}`);
                const json = await response.json();

                if (response.ok) {
                    setUserState(json);
                    // console.log("userState", json);
                }
            }
        };

        fetchOil();
        fetchUser();
    }, [routeParams.oil, user, navigate]);

    const handleFavorites = async (e) => {
        e.preventDefault();

        const oilId = await oil.map((oil) => oil._id);
        console.log("oil-id", oilId);

        const favoritesArray = await userState[0].favorites.map(
            (favorite) => favorite._id
        );
        console.log("favorites", favoritesArray);

        if (favoritesArray.includes(oilId[0])) {
            console.log("oui");

            const removeFavorites = async () => {
                const response = await fetch(
                    `/api/users/favorites/${userState[0].email}`,
                    {
                        method: "DELETE",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({ favorites: oilId[0] }),
                    }
                );
                const json = await response.json();
                console.log(json);
                setUserState([json]);
            };

            removeFavorites();
        } else {
            console.log("non");

            const addFavorites = async () => {
                const response = await fetch(
                    `/api/users/favorites/${userState[0].email}`,
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({ favorites: oilId[0] }),
                    }
                );
                const json = await response.json();
                console.log(json);
                setUserState([json]);
            };

            addFavorites();
        }
    };

    const handleToggle = (index) => {
        setOpened((prevOpened) => {
            const newOpened = [...prevOpened];
            newOpened[index] = !newOpened[index];
            return newOpened;
        });
    };
    console.log(oil);
    return (
        <>
        <Header />
        <div>
            {oil && oil.map((oil) => (
                <div key={oil._id}>
                    <Title children={oil.name} />
                    <div className="oil__wrapper">
                        <div className="oil__top-info">
                            <img
                                src={oil.image}
                                alt={oil.name}
                                className="oil__top-info__img"
                            />
                            <div className="oil__top-info__description">
                                <h3 className="oil__top-info__description__title">
                                    Description :
                                </h3>
                                {parse(oil.description)}
                            </div>
                        </div>
                        <div className="oil__main-info">
                            <h3 className="oil__main-info__title">Utile pour :</h3>
                            {oil && oil.symptoms.map((symptom, index) => (
                                <div key={symptom.name} className="oil__accordion">
                                    <li
                                        className={`oil__accordion__item ${
                                            opened[index] ? "active" : ""
                                        }`}
                                    >
                                        <button
                                            className="item__btn"
                                            onClick={() => handleToggle(index)}
                                        >
                                            <div>{symptom.name}</div>
                                            <span className="item__control">
                                                {opened[index] ? (
                                                    <IconMinus />
                                                ) : (
                                                    <IconPlus />
                                                )}
                                            </span>
                                        </button>
                                        {symptom && symptom.diffusions.map((diffusion) => (
                                                <div key={diffusion.name} className={`item__content ${ opened[index] ? "open" : ""}`} >
                                                    <p className="item__content__name">
                                                        <div>
                                                            {(() => {
                                                                    switch (diffusion.name) {
                                                                    case 'bain':
                                                                        return <img src={bain} alt="bain" />;
                                                                    case 'diffusion':
                                                                        return <img src={diffusion} alt="diffusion" />;
                                                                    case 'massage':
                                                                        return <img src={massage} alt="massage" />;
                                                                    case 'voie orale':
                                                                        return <img src={oral} alt="voie orale" />;
                                                                    case 'cosmétique':
                                                                        return <img src={cosmetique} alt="cosmétique" />;
                                                                    case 'inhalation':
                                                                        return <img src={inhalation} alt="inhalation" />;
                                                                    default:
                                                                        return null;
                                                                    }
                                                                })()}
                                                        </div>
                                                        {diffusion.name}
                                                    </p>
                                                    {diffusion.descriptionAlone !==
                                                    null ? (
                                                        <p className="item__content__description">
                                                            {
                                                                diffusion.descriptionAlone
                                                            }
                                                        </p>
                                                    ) : null}
                                                    {diffusion.descriptionWithOthers !==
                                                    null ? (
                                                        <p className="item__content__description">
                                                            {
                                                                diffusion.descriptionWithOthers
                                                            }
                                                        </p>
                                                    ) : null}
                                            </div>
                                        ))}
                                    </li>
                                </div>
                            ))}
                        </div>
                        <div className="oil__bottom-info">
                            {oil.OilsAssociated.length ? (
                                <>
                                    <h3 className="oil__bottom-info__title">Huiles associées :</h3>
                                    <Swiper slidesPerView={"auto"} spaceBetween={8}>
                                        {oil.OilsAssociated.map((associated) => (
                                            <SwiperSlide key={associated._id}>
                                                <Link to={`/allOils/${associated.name}`} key={associated._id}>
                                                    <OilSummary oilInfo={associated} />
                                                </Link>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </>
                            ) : (
                                <></>
                            )}
                        </div>
                    </div>
                </div>
            ))}
            {oil[0] && <button type="button" onClick={handleFavorites} className="oil__favorite-btn">
                {userState[0]?.favorites?.some((e) => e._id === oil[0]._id) ? (
                    <IconHeartFilled />
                ) : (
                    <IconHeart />
                )}
            </button> }
        </div>
        </>
    );
}

export default Oil;
