import { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../organisms/Header/Header";


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
        const json = await response.json();
        console.log(json);
    }
    sendResetEmail();
    };

    return (
        <>
        <Header />
        <div>
            <h1>Forget Password</h1>
            <form onSubmit={handleNewPassword}>
                <label htmlFor="password">Entrez le nouveau mot de passe : </label>
                <input type="password" name="newPassword" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required />
                <label htmlFor="password">Confirmez le nouveau mot de passe : </label>
                <input type="password" name="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                <button type="submit">Enregistrer le nouveau mot de passe</button>
            </form>
            {/* ToDo afficher les message d'erreur ou de reussite */}
        </div>
        </>
    )
}

export default ResetPassword
