import { useState } from "react";
import { useSignin } from "../../../hooks/useSignin";

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
        <div>
            <h1>Signin</h1>
            <form onSubmit={handleSubmit}>
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
    );
}

export default Signin;