import './App.css';
import Auth from "./Components/Auth/Auth";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import RequestBloodForm from "./Components/FormComponent/RequestBloodForm";
import HomePage from "./Components/HomePage";
import BloodState from "./Context/blood/BloodState";
import {ToastContainer} from "react-toastify";
import Donors from "./Components/Donors/Donors";
import 'react-toastify/dist/ReactToastify.css';
import { ReactQueryDevtools } from 'react-query/devtools'
import {
    QueryClient,
    QueryClientProvider,
} from "react-query";
const queryClient = new QueryClient()
function App() {
  return (
      <QueryClientProvider client={queryClient}>

      <div className="App">
        <BloodState>
        <Router>
            <Navbar />
            <ToastContainer/>
            <Switch>
                <Route path='/' exact component={HomePage} />
                <Route path='/login' exact component={Auth} />
                <Route path={'/request'} exact component={RequestBloodForm}/>
                <Route path={'/donors'} exact component={Donors}/>
            </Switch>
        </Router>
                <ReactQueryDevtools initialIsOpen={false} />
        </BloodState>

    </div>
      </QueryClientProvider>

  );
}


export default App;
