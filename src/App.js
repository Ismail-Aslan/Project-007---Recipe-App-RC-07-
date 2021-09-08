import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './components/login/Login';
import Navbar from './components/navbar/Navbar';
import Recipe from './components/recipe/Recipe';

function App() {
  return (
    <div className="app">
      <Navbar />
      {/* <Router>
        <Switch>
          <Route path="/login">
            <Login/>
          </Route>
          <Route>
            
          </Route>
        </Switch>
      </Router> */}
      <Recipe/>
      
    </div>
  );
}

export default App;
