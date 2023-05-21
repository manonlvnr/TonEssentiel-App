import { useEffect, useState } from "react"
import { useSignout } from "../../../hooks/useSignout"
import "./Account.scss"
import { useUpdateProfile } from "../../../hooks/useUpdateProfile";
import Label from "../../atoms/Label/Label";
import Header from "../../organisms/Header/Header";
import Title from "../../atoms/Title/Title";
import Input from "../../atoms/Input/Input";
import { IconDeviceFloppy, IconPower } from "@tabler/icons-react";
import { Toaster } from 'react-hot-toast';
import API_URL from "../../../config";
import SyncLoader from "react-spinners/SyncLoader";

function Account() {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { updateProfile } = useUpdateProfile();
    const [loadingProfile, setLoadingProfile] = useState(true)

    
    const signout = useSignout()

    const handleSignout = () => {
        signout()
    }

    const [userState, setUserState] = useState([]);

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
            setLoadingProfile(false)
        };

        fetchFavorites();
    }, [])

    async function handleSubmit(e) {
        e.preventDefault();

        updateProfile(userName, email, password);
    }

    const override = {
        display: "block",
        margin: "2rem",
        textAlign: "center",
    };

    return (
        <>
        <Header />
        <Toaster position="top-center"/>
        <Title children={"Mon compte"}/>
        <div className="account__wrapper">
            {loadingProfile ? (
                <SyncLoader cssOverride={override} color={'#809D75'}/>
            ) : (
                <>
                {userState.map((user) => (
                    <form className="account__form" onSubmit={handleSubmit}>
                        <h3 className="account__form__title">Mes informations</h3>
                        <Label label={"Nom d'utilisateur"}/>
                        <Input type="text" name="name" defaultValue={user.userName} onChange={(e) => setUserName(e.target.value)}/>

                        <Label label={"Email"}/>
                        <Input type="email" name="email" defaultValue={user.email} onChange={(e) => setEmail(e.target.value)}/>

                        <Label label={"Mot de passe"}/>
                        <Input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        {/* <label htmlFor="password">confirmer le mot de passe</label>
                        <input type="password" name="password" /> */}

                        <button className="account__form__btn" type="submit">
                            <IconDeviceFloppy />
                            <div>Modifier</div>
                        </button>
                    </form>
                ))}
            <button className="account__logout" onClick={handleSignout}>
                <IconPower />
                <div>Déconnexion</div>
            </button>
            </>
        )}
        </div>
        </>
    )
}

export default Account
