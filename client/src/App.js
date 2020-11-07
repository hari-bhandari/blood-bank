import './App.css';
import Auth from "./Components/Auth/Auth";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
        <Router>
            <Navbar />
            <Switch>
                <Route path='/login' exact component={Auth} />
            </Switch>
        </Router>

      <Auth/>
    </div>
  );
}

export default App;
