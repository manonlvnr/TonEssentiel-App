import { useState } from "react";
import { useSignup } from "../../../hooks/useSignup";
import Header from "../../organisms/Header/Header";
import { Toaster } from 'react-hot-toast';
import Title from "../../atoms/Title/Title";
import Input from "../../atoms/Input/Input";
import Label from "../../atoms/Label/Label";
import "./Signup.scss";

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
        <Toaster position="top-center"/>
        <Title children={"Création de compte"}/>
        <div className="signup__wrapper">
            <form onSubmit={handleSubmit}>
                <Label label={"Nom d'utilisateur"}/>
                <Input type="text" placeholder="Nom d'utilisateur" value={userName} onChange={(e) => setUserName(e.target.value)} />
                <Label label={"Email"}/>
                <Input type="email" placeholder="Example : test@test.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                <Label label={"Mot de passe"}/>
                <Input type="password" placeholder="Mot de passe" value={password} onChange={(e) => setPassword(e.target.value)} />

                <button disabled={loading} type="submit" className="signup__btn">Créer un compte</button>
                {/* {error && <div>{error}</div>} */}
            </form>
        </div>
        </>
    );
}

export default Signup;
