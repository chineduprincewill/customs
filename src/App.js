
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import PrivateRoute from './layout/PrivateRoute';
import DcgRoute from './layout/DcgRoute';

import Navbar from './layout/Navbar';
import Footer from './layout/Footer';

import Home from './pages/Home';
import Login from './pages/Login';
import Apply from './pages/Apply';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import Profile from './pages/customer/Profile';
import Messages from './pages/customer/Messages';
import Form41 from './pages/customer/Form41';
import Users from './pages/dcg/Users';
import Zones from './pages/dcg/Zones';
import NewZone from './pages/dcg/NewZone';
import UserDetail from './pages/dcg/UserDetail';
import NewUser from './pages/dcg/NewUser';
import Commands from './pages/dcg/Commands';
import NewCommand from './pages/dcg/NewCommand';
import Applications from './pages/dcg/Applications';

function App(props) {

  //const user = JSON.parse(localStorage.getItem("userData"));

  return (
    <div>
      <Router>
        <Navbar />
        <div className="container-fluid">  
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/apply" component={Apply} />
            <Route exact path="/sign-in" component={SignIn} />
            <Route exact path="/sign-up" component={SignUp} />
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <PrivateRoute exact path="/profile" component={Profile} />
            <PrivateRoute exact path="/messages" component={Messages} />
            <PrivateRoute exact path="/form" component={Form41} />
            <DcgRoute exact path="/users" component={Users} />
            <DcgRoute exact path="/user-detail/:id" component={UserDetail} />
            <DcgRoute exact path="/new-user" component={NewUser} />
            <DcgRoute exact path="/zones" component={Zones} />
            <DcgRoute exact path="/new-zone" component={NewZone} />
            <DcgRoute exact path="/commands" component={Commands} />
            <DcgRoute exact path="/new-command" component={NewCommand} />
            <DcgRoute exact path="/applications" component={Applications} />
          </Switch>
        </div>   
        <Footer /> 
      </Router> 
    </div>
  );
}

export default App;