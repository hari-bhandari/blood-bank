import React,{useEffect,useContext} from 'react'
import './App.css';
import Auth from "./Components/Auth/Auth";
import Navbar from "./Components/Navbar/Navbar";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import RequestBloodForm from "./Components/FormComponent/RequestBloodForm";
import {ToastContainer} from "react-toastify";
import Donors from "./Components/Donors/Donors";
import 'react-toastify/dist/ReactToastify.css';
import {ReactQueryDevtools} from 'react-query/devtools'
import {
    QueryClient,
    QueryClientProvider,
} from "react-query";
import ProfilePage from "./Components/Profile/ProfilePage";
import Requests from "./Components/Request/Requests";
import AuthContext from "./Context/auth/authContext";
import About from "./Components/About/About";


const queryClient = new QueryClient()

function App() {
    const authContext=useContext(AuthContext);
    const {loadUser}=authContext;

    useEffect(()=>{
        loadUser()
    },[])//fires load user evertime the page relaods
    return (
        <QueryClientProvider client={queryClient}>
                <div className="App">
                    <Router>
                        <Navbar/>
                        <ToastContainer/>
                        <Switch>
                            <Route path='/' exact component={Requests}/>
                            <Route path='/login' exact component={Auth}/>
                            <Route path={'/request'} exact component={RequestBloodForm}/>
                            <Route path={'/donors'} exact component={Donors}/>
                            <Route path={'/about'} exact component={About}/>
                            <Route path={'/help/:id'} exact component={ProfilePage}/>
                        </Switch>
                    </Router>
                    <ReactQueryDevtools initialIsOpen={false}/>

                </div>

        </QueryClientProvider>

    );
}


export default App;
