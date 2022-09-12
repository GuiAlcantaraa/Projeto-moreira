import './styles.scss'
import { AuthGoogleContext } from '../../contexts/authGoogle';
import { useContext } from 'react';



export function Header({ name }) {

    const { handleSignOut } = useContext(AuthGoogleContext)

    return (
        <header className="headerContainer">
            <div className="headerContent">
                <nav>
                    <a className='active' href="/Home">Home</a>
                    <a href="#">Entrevista</a>
                </nav>


                <button onClick={() => handleSignOut()}>Sair</button>
            </div>
        </header>
    )
}