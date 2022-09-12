import { GoogleLogo } from 'phosphor-react'
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthGoogleContext } from '../../contexts/authGoogle';
import ti from '../../assets/ti.jpg'
import './styles.scss';


export function Login() {

    const { handleGoogleSignin, signed } = useContext(AuthGoogleContext);

    async function handleLogin() {
        await handleGoogleSignin();
    }

    if (!signed) {
        return (

            <div className='areaLogin'>
                <div className='login'>
                    <div>
                        <img src="" alt="" />
                    </div>

                    <button type="button" className="button" onClick={handleLogin}>
                        <GoogleLogo />
                        Entrar com Google
                    </button>
                </div>
            </div>


        )
    }
    else {
        return <Navigate to="/Home" />
    };

};