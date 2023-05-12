import { useState } from "react";
import { useSignin } from "../../../hooks/useSignin";
import { Link } from "react-router-dom";
import Header from "../../organisms/Header/Header";
import { Toaster } from 'react-hot-toast';
import Title from "../../atoms/Title/Title";
import Input from "../../atoms/Input/Input";
import Label from "../../atoms/Label/Label";
import "./Signin.scss";

function Signin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { signin, error, loading } = useSignin();

    const handleSubmit = async (e) => {
        e.preventDefault()

        // console.log(email, password)
        await signin(email, password)
    } 

    return (
        <>
        <Header />
        <Toaster position="top-center"/>
        <Title children={"Connexion"}/>
        <div className="signin__wrapper">
            <form onSubmit={handleSubmit}>
                <Label label={"Email"}/>
                <Input type="email" placeholder="Example : test@test.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                <Label label={"Mot de passe"}/>
                <Input type="password" placeholder="Mot de passe" value={password} onChange={(e) => setPassword(e.target.value)} />
                <Link to="/forgotPassword" className="signin__password">Mot de passe oublié ?</Link>
                <button disabled={loading} type="submit" className="signin__btn">Connexion</button>
                <Link to="/signup" className="signup">Créer un compte</Link>
            </form>

        </div>
        </>
    );
}

export default Signin;
