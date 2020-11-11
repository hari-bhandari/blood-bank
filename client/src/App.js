import './App.css';
import Auth from "./Components/Auth/Auth";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from "./Components/HomePage";
import BloodState from "./Context/blood/BloodState";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
        <BloodState>
        <Router>
            <Navbar />
            <ToastContainer/>
            <Switch>
                <Route path='/' exact component={HomePage} />
                <Route path='/login' exact component={Auth} />
            </Switch>
        </Router>
        </BloodState>

    </div>
  );
}

export default App;
