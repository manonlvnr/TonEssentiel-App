import { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../organisms/Header/Header";
import { toast, Toaster } from 'react-hot-toast';

function ResetPassword() {
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const routeParams = useParams();

    const handleNewPassword = async (e) => {
        e.preventDefault();
        
        const sendResetEmail = async () => {
        const response = await fetch(`/api/users/reset-password/${routeParams.id}/${routeParams.token}`, 
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
    };

    return (
        <>
        <Header />
        <Toaster   position="top-center"/>
        <div>
            <h1>Forget Password</h1>
            <form onSubmit={handleNewPassword}>
                <label htmlFor="password">Entrez le nouveau mot de passe : </label>
                <input type="password" name="newPassword" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required />
                <label htmlFor="password">Confirmez le nouveau mot de passe : </label>
                <input type="password" name="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                <button type="submit">Enregistrer le nouveau mot de passe</button>
            </form>
        </div>
        </>
    )
}

export default ResetPassword
