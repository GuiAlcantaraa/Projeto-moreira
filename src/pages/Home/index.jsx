
import { Header } from '../../components/Header';
import './styles.scss';
import { Navigate } from 'react-router-dom';
import { AuthGoogleContext } from '../../contexts/authGoogle';
import { useContext } from 'react';
import { ContentGestao } from '../../components/ContentGestao';
import { ContentEntrevista } from '../../components/ContentEntrevista';



export function Home() {

    const { signed } = useContext(AuthGoogleContext);

    if (signed) {
        return (
            <main>
                <Header />
                <ContentGestao />
                <ContentEntrevista />
            </main>

        )
    } else {
        return <Navigate to="/Login" />
    }
}