import React,{useEffect,useContext,useState,Suspense,lazy} from 'react'
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {ReactQueryDevtools} from 'react-query/devtools'
import {
    QueryClient,
    QueryClientProvider,
} from "react-query";
import AuthContext from "./Context/auth/authContext";
import Sidebar from "./Components/Navbar/Sidebar/Sidebar";
const ProfilePage=lazy(()=>import('./Components/pages/Profile/ProfilePage'))
const Requests=lazy(()=>import('./Components/pages/requests/Requests'))
const FAQPage=lazy(()=>import('./Components/pages/FAQ/FAQPage'))
const UserPage=lazy(()=>import('./Components/pages/Profile/UserPage'))
const ListOfRequests=lazy(()=>import('./Components/pages/LoggedIn/ListOfRequests'))
const Donors=lazy(()=>import('./Components/pages/donors/Donors'))
const ChangeImage=lazy(()=>import('./Components/pages/ChangeImage/ChangeImage'))
const RequestBloodForm=lazy(()=>import('./Components/pages/bloodRequest/RequestBloodForm'))
const ListOfDonors=lazy(()=>import('./Components/pages/LoggedIn/ListOfDonors'))
const Auth=lazy(()=>import('./Components/Auth/Auth'))

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
                        <Suspense fallback={<div>. </div>}>
                      <Route exact path='/'  component={Requests}/>
                        </Suspense>
                        <Suspense fallback={<div>. </div>}>
                        <Route path='/login' exact component={Auth}/>
                        </Suspense>
                        <Suspense fallback={<div>. </div>}>
                        <Route path={'/request'} exact component={RequestBloodForm}/>
                        </Suspense>
                        <Suspense fallback={<div>. </div>}>
                        <Route path={'/donors'} exact component={Donors}/>
                        </Suspense>
                        <Suspense fallback={<div>. </div>}>
                        <Route path={'/faq'} exact component={FAQPage}/>
                        </Suspense>
                        <Suspense fallback={<div>. </div>}>
                        <Route path={'/help/:id'} exact component={ProfilePage}/>
                        </Suspense>
                        <Suspense fallback={<div>. </div>}>
                        <Route path={'/user/:id'} exact component={UserPage}/>
                        </Suspense>
                        <Suspense fallback={<div>. </div>}>
                        <Route path={'/requests'} exact component={ListOfRequests}/>
                        <Route path={'/requests/:id'} exact component={ListOfDonors}/>
                        </Suspense>
                        <Suspense fallback={<div>. </div>}>
                        <Route path={'/ChangePhoto/:id'} exact component={ChangeImage}/>
                        </Suspense>
                    </Switch>
                </Router>
                <ReactQueryDevtools initialIsOpen={false}/>

            </div>

        </QueryClientProvider>

    );
}


export default App;
