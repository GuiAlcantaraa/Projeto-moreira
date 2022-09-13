import './styles.scss'
import { AuthGoogleContext } from '../../contexts/authGoogle';
import { useContext } from 'react';

import { SignOut } from 'phosphor-react'



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

                <div className='logout'>
                    <h3><small>Bem vindo, </small>
                        {user.displayName}
                    </h3>

                    <span>|</span>

                    <SignOut
                        onClick={() => handleSignOut()}

                        size={25}
                    />
                </div>
            </div>
        </header>
    )
}