import { NavLink } from 'react-router-dom'
import './styles.scss'
import { AuthGoogleContext } from '../../contexts/authGoogle';
import { useContext } from 'react';

import { SignOut } from 'phosphor-react'
import uni from '../../assets/uniaraxa.png'


export function Header() {

    const { handleSignOut } = useContext(AuthGoogleContext)

    const getInfo = sessionStorage.getItem("@AuthFirebase:user")
    const user = JSON.parse(getInfo)

    return (
        <header className="headerContainer">
            <div className="headerContent">
                <img src={uni} alt="uni" />

                {/* <nav>
                    <NavLink to="/Itil" title="Sobre Itil">
                        <button>Sobre itil</button>
                    </NavLink>
                </nav> */}
                <div className='logout'>
                    <h4><small>Bem vindo, </small>
                        {user.displayName}
                    </h4>

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