import { useState } from "react";
import Header from "../../organisms/Header/Header";
import { toast, Toaster } from 'react-hot-toast';
import "./ForgotPassword.scss";
import Title from "../../atoms/Title/Title";
import Input from "../../atoms/Input/Input";
import Label from "../../atoms/Label/Label";
import API_URL from "../../../config";

function ForgotPassword() {
    const [email, setEmail] = useState();

    const handleEmail = async (e) => {
        e.preventDefault();
        
        const sendResetEmail = async () => {
        const response = await fetch(`${API_URL}/api/users/reset-password`, 
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email }),
        });
        if (response.ok) {
            const json = await response.json();
            console.log(json);
        } else {
            toast.error('Une erreur est survenue, l\'email n\'a pas été envoyé');
        }
    }
    toast.success('Email envoyé');
    sendResetEmail();
    };

    return (
        <>
        <Header />
        <Toaster position="top-center"/>
        <Title children={"Mot de passe oublié"}/>
        <div className="forgot-password__wrapper">
            <form onSubmit={handleEmail}>
                <Label label={"Entrez votre adresse email :"}/>
                <Input type="email" name="email" placeholder="exemple@exemple.com" value={email || ""} onChange={(e) => setEmail(e.target.value)} required />
                <button type="submit" className="forgot-password__btn">Recevoir le lien de résiliation</button>
            </form>
        </div>
        </>
    )
}

export default ForgotPassword
