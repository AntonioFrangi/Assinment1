import './App.css';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import CarDetails from './pages/CarDetails/CarDetails'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

const App = () => {
  return (
    <Router>
      <Switch>
        <ProtectedRoute exact path="/" />
        <ProtectedRoute exact path="/home" component={Home} />
        <ProtectedRoute exact path="/login" component={Login} />
        <ProtectedRoute exact path="/SignUp" component={SignUp} />
        <ProtectedRoute exact path="/CarDetails" component={CarDetails} />
      </Switch>
    </Router>
  )
}

export default App
