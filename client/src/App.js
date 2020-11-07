import './App.css';
import Auth from "./Components/Auth/Auth";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AuthState from "./Context/auth/AuthState";
function App() {
  return (
    <div className="App">
        <AuthState>
        <Router>
            <Navbar />
            <Switch>
                <Route path='/login' exact component={Auth} />
            </Switch>
        </Router>
        </AuthState>

    </div>
  );
}

export default App;
