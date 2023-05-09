import { useState } from "react";
import { useSignup } from "../../../hooks/useSignup";
import Header from "../../organisms/Header/Header";
import { Toaster } from 'react-hot-toast';

function Signup() {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {signup, error, loading} = useSignup();

    async function handleSubmit(e) {
        e.preventDefault();

        // console.log(userName, email, password)
        await signup(userName, email, password);
    } 

    return (
        <>
        <Header />
        <Toaster   position="top-center"/>
        <div>
            <h1>Signup</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="userName">UserName</label>
                <input
                    type="text"
                    name="userName"
                    placeholder="Nom d'utilisateur"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                />
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    name="email"
                    placeholder="Example : test@test.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    name="password"
                    placeholder="Mot de passe"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button disabled={loading} type="submit">Signup</button>
                {error && <div>{error}</div>}
            </form>
        </div>
        </>
    );
}

export default Signup;
