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
import FAQPage from "./Components/About/FAQPage";
import UserPage from "./Components/Profile/UserPage";
import ListOfRequests from "./Components/LoggedIn/ListOfRequests";
import ListOfDonors from "./Components/LoggedIn/ListOfDonors";


const queryClient = new QueryClient()

function App() {
    const authContext=useContext(AuthContext);
    const {loadUser}=authContext;

    useEffect(()=>{
        loadUser()
    },[])//fires load user everytime the page reloads
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
                            <Route path={'/faq'} exact component={FAQPage}/>
                            <Route path={'/help/:id'} exact component={ProfilePage}/>
                            <Route path={'/user/:id'} exact component={UserPage}/>
                            <Route path={'/requests'} exact component={ListOfRequests}/>
                            <Route path={'/requests/:id'} exact component={ListOfDonors}/>
                        </Switch>
                    </Router>
                    <ReactQueryDevtools initialIsOpen={false}/>

                </div>

        </QueryClientProvider>

    );
}


export default App;
