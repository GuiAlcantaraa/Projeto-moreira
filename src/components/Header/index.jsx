import './styles.scss'
import { AuthGoogleContext } from '../../contexts/authGoogle';
import { useContext } from 'react';



export function Header() {

    const { handleSignOut } = useContext(AuthGoogleContext)

    const getInfo = sessionStorage.getItem("@AuthFirebase:user")
    const user = JSON.parse(getInfo)
    
    return (
        <header className="headerContainer">
            <div className="headerContent">
                <nav>
                    <a className='active' href="/Home">Home</a>
                </nav>

                <h4>Bem vindo, {user.displayName}🚀🚀</h4>
                
                <button onClick={() => handleSignOut()}>Sair</button>
            </div>
        </header>
    )
}