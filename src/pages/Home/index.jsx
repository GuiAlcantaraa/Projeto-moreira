
import { useContext } from 'react';
import { Navbar } from '../../components/Navbar';
import { AuthGoogleContext } from '../../contexts/authGoogle';
import './styles.scss';

export function Home() {

    const { user, handleSignOut } = useContext(AuthGoogleContext)


    return (
        <>
                    <Navbar />

        <div className="container">
            <h1>Bem vindo !! {user.displayName}</h1>


            <button onClick={() => handleSignOut()}>Sair</button>
        </div>
        </>

    )
}