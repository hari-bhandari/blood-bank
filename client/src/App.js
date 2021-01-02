import React,{useEffect,useContext,useState} from 'react'
import './App.css';
import Auth from "./Components/Auth/Auth";
import Navbar from "./Components/Navbar/Navbar";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import RequestBloodForm from "./Components/pages/bloodRequest/RequestBloodForm";
import {toast, ToastContainer} from "react-toastify";
import Donors from "./Components/pages/donors/Donors";
import 'react-toastify/dist/ReactToastify.css';
import {ReactQueryDevtools} from 'react-query/devtools'
import {
    QueryClient,
    QueryClientProvider,
} from "react-query";
import ProfilePage from "./Components/pages/Profile/ProfilePage";
import Requests from "./Components/pages/requests/Requests";
import AuthContext from "./Context/auth/authContext";
import FAQPage from "./Components/pages/FAQ/FAQPage";
import UserPage from "./Components/pages/Profile/UserPage";
import ListOfRequests from "./Components/pages/LoggedIn/ListOfRequests";
import ListOfDonors from "./Components/pages/LoggedIn/ListOfDonors";
import Sidebar from "./Components/Navbar/Sidebar/Sidebar";


const queryClient = new QueryClient()

function App() {
    const authContext=useContext(AuthContext);
    const {loadUser,logout}=authContext;
    const[isOpen,setIsOpen]=useState(false)
    const toggle=()=>{
        setIsOpen(isOpen=>!isOpen)
    }

    useEffect(()=>{
        loadUser()
    },[])//fires load user everytime the page reloads
    return (
        <QueryClientProvider client={queryClient}>
            <div className="App">
                <Router>
                    <Sidebar isOpen={isOpen} toggle={toggle}/>
                    <Navbar toggle={toggle} />
                    <ToastContainer/>
                    <Switch>
                        <Route exact path='/'  component={Requests}/>
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
