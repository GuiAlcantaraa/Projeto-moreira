import { GoogleLogo } from 'phosphor-react'
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthGoogleContext } from '../../contexts/authGoogle';
import './styles.scss';
import girl from '../../assets/avatar.svg'

export function Login() {

    const { handleGoogleSignin, signed } = useContext(AuthGoogleContext);

    async function handleLogin() {
        await handleGoogleSignin();
    }

    if (!signed) {
        return (
            <main className='contentContainer'>

                <section className='hero'>
                    <h1>Ola, <span>Bem vindo!!</span></h1>
                    <h1>Tudo sobre Gestão de TI está aqui</h1>
                    <p>
                        Entre utilizando sua conta Google<br />
                    </p>
                    <button type="button" className="button" onClick={handleLogin}>
                        <GoogleLogo />
                        Entrar com Google
                    </button>
                </section>

                <img src={girl} alt="Girl coding" />
            </main >
        )
    }
    else {
        return <Navigate to="/Home" />
    };

};