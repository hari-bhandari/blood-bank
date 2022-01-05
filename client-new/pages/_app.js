import '../components/assets/css/flaticon.css';
import AuthState from "../components/Context/auth/AuthState";

function MyApp({Component, pageProps}) {
    return (
        <AuthState>
            <Component {...pageProps} />
        </AuthState>
    )
}

export default MyApp
