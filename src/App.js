import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import './App.css';
import Home from './components/home/Home'
import About from './components/about/About'
import Login from './components/login/Login'
import Trip from './components/trip/Trip'
import Register from './components/register/Register'

function App() {
  return (
    <div Name="App">
      <Router>
      <nav>
      <div className="left-links">
      <Link className="links" to="/"> MyTrip</Link>    
<Link className="links" to="/"> <i class="fa fa-fw fa-home"></i>Home</Link>
<Link className="links" to="/about"> <i class="fa fa-fw fa-envelope"></i> Contact_Us</Link>
<Link className="links" to="/trip"><i class="fa fa-fw fa-car"></i> Trip Packages</Link>
</div>
<div className="right-links">
<Link className="links" to="/login"> <i class="fa fa-fw fa-user"></i> Login</Link>
<Link className="links" to="/register"> <i class="fa fa-fw fa-user"></i>Register</Link>
</div>
</nav>
<switch>
        <Route  exact path="/" component={Home}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/trip" component={Trip}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/register" component={Register}></Route>
        </switch>
</Router>
    </div>
  );
}

export default App;
