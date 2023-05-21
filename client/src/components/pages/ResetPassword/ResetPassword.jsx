import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../../organisms/Header/Header";
import { toast, Toaster } from 'react-hot-toast';
import "./ResetPassword.scss";
import Title from "../../atoms/Title/Title";
import Input from "../../atoms/Input/Input";
import Label from "../../atoms/Label/Label";
import API_URL from "../../../config";

function ResetPassword() {
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();

    const routeParams = useParams();

    const handleNewPassword = async (e) => {
        e.preventDefault();
        
        const sendResetEmail = async () => {
        const response = await fetch(`${API_URL}/api/users/reset-password/${routeParams.id}/${routeParams.token}`, 
        {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ newPassword, confirmPassword }),
        });
        if (response.ok) {
            toast.success('Mot de passe modifié');
            const json = await response.json();
            console.log(json);
        } else {
            toast.error('Une erreur est survenue, le mot de passe n\'a pas été modifié');
        }
    }
    sendResetEmail();
    navigate("/");
    };

    return (
        <>
        <Header />
        <Toaster position="top-center"/>
        <Title children={"Réinitialisation du mot de passe"}/>
        <div className="reset-password__wrapper">
            <form onSubmit={handleNewPassword}>
                <Label label={"Entrez le nouveau mot de passe :"}/>
                <Input type="password" name="newPassword" placeholder="Nouveau mot de passe" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required />
                <Label label={"Confirmez le nouveau mot de passe :"}/>
                <Input type="password" name="confirmPassword" placeholder="Confirmez le nouveau mot de passe" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                <button type="submit" className="reset-password__btn">Enregistrer le nouveau mot de passe</button>
            </form>
        </div>
        </>
    )
}

export default ResetPassword
