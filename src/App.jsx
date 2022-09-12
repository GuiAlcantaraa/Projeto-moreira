import { AuthGoogleProvider } from "./contexts/authGoogle"
import { AppRoutes } from "./routes/routes"
import './styles/global.scss'


export function App() {
  


  return (
    <AuthGoogleProvider>
      <AppRoutes />
    </AuthGoogleProvider>
  )

}

