import { useState } from "react";
import Header from "../../organisms/Header/Header";
import { toast, Toaster } from 'react-hot-toast';

function ForgotPassword() {
    const [email, setEmail] = useState();

    const handleEmail = async (e) => {
        e.preventDefault();
        
        const sendResetEmail = async () => {
        const response = await fetch(`/api/users/reset-password`, 
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email }),
        });
        if (response.ok) {
            toast.success('Email envoyé');
            const json = await response.json();
            console.log(json);
        } else {
            toast.error('Une erreur est survenue, l\'email n\'a pas été envoyé');
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
            <form onSubmit={handleEmail}>
                <label htmlFor="email">Email Address</label>
                <input type="email" placeholder="exemple@exemple.com" value={email || ""} onChange={(e) => setEmail(e.target.value)} required />
                <button type="submit">Envoyer</button>
            </form>
        </div>
        </>
    )
}

export default ForgotPassword
