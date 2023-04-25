import { useSignout } from "../../../hooks/useSignout"

function Account() {

    const signout = useSignout()

    const handleclick = () => {
        signout()
    }

    return (
        <div>
            <h1>Account</h1>
            <button onClick={handleclick}>Déconnexion</button>
        </div>
    )
}

export default Account
