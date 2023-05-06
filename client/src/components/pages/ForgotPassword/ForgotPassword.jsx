import { useState } from "react";

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
        const json = await response.json();
        console.log(json);
    }
    sendResetEmail();
    };

    return (
        <div>
            <h1>Forget Password</h1>
            <form onSubmit={handleEmail}>
                <label htmlFor="email">Email Address</label>
                <input type="email" placeholder="exemple@exemple.com" value={email || ""} onChange={(e) => setEmail(e.target.value)} required />
                <button type="submit">Envoyer</button>
            </form>
            {/* ToDo afficher les message d'erreur ou de reussite */}
        </div>
    )
}

export default ForgotPassword
