import '../styles/globals.css';
import AuthState from "../components/Context/auth/AuthState";
import Head from "next/head";

function MyApp({Component, pageProps}) {
    return (
        <AuthState>
            <Head>
                <link rel="shortcut icon" href="/favicon.ico" />
            </Head>
            <Component {...pageProps} />
        </AuthState>
    )
}

export default MyApp
