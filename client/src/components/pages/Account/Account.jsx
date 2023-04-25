import { useEffect, useState } from "react"
import { useSignout } from "../../../hooks/useSignout"
import "./Account.scss"
import { useUpdateProfile } from "../../../hooks/useUpdateProfile";

function Account() {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {updateProfile, error, loading} = useUpdateProfile();
    
    const signout = useSignout()

    const handleSignout = () => {
        signout()
    }

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

    async function handleSubmit(e) {
        e.preventDefault();

        updateProfile(userName, email, password);
    }

    return (
        <div>
            <h1>Mon compte</h1>
                {userState.map((user) => (
                    <form className="infos" onSubmit={handleSubmit}>
                        <h3>Mes informations</h3>
                        <label htmlFor="name">nom d'utilisateur</label>
                        <input type="text" name="name" defaultValue={user.userName} onChange={(e) => setUserName(e.target.value)}/>
                        
                        <label htmlFor="email">email</label>
                        <input type="email" name="email" defaultValue={user.email} onChange={(e) => setEmail(e.target.value)}/>

                        <label htmlFor="password">mot de passe</label>
                        <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        {/* <label htmlFor="password">confirmer le mot de passe</label>
                        <input type="password" name="password" /> */}

                        <button type="submit">Modifier</button>
                    </form>
                    ))}
            <button onClick={handleSignout}>Déconnexion</button>
        </div>
    )
}

export default Account
