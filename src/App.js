
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import PrivateRoute from './layout/PrivateRoute';
import DcgRoute from './layout/DcgRoute';
import CacRoute from './layout/CacRoute';

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
import Form41List from './pages/cac/Form41List';
import Form41Detail from './pages/cac/Form41Detail';
import MyForms from './pages/customer/MyForms';
import MyformDetail from './pages/customer/MyformDetail';
import Assignments from './pages/cac/Assignments';
import AllocDetail from './pages/cac/AllocDetail';
import InsAssignments from './pages/inspector/InsAssignments';
import Pay from './pages/customer/Pay';
import License from './pages/dcg/License';
import ProvisionalLicense from './pages/cac/ProvisionalLicense';
import Form41Report from './pages/dcg/Form41Report';
import LicenseList from './pages/dcg/LicenseList';

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
            <PrivateRoute exact path="/myforms" component={MyForms} />
            <PrivateRoute exact path="/myform-detail/:id" component={MyformDetail} />
            <PrivateRoute exact path="/pay" component={Pay} />
            <PrivateRoute exact path="/license/:id" component={License} />
            <PrivateRoute exact path="/pr-license/:id" component={ProvisionalLicense} />
            <DcgRoute exact path="/users" component={Users} />
            <DcgRoute exact path="/user-detail/:id" component={UserDetail} />
            <DcgRoute exact path="/new-user" component={NewUser} />
            <DcgRoute exact path="/zones" component={Zones} />
            <DcgRoute exact path="/new-zone" component={NewZone} />
            <DcgRoute exact path="/commands" component={Commands} />
            <DcgRoute exact path="/new-command" component={NewCommand} />
            <DcgRoute exact path="/applications" component={Applications} />
            <DcgRoute exact path="/form41-report" component={Form41Report} />
            <DcgRoute exact path="/license-list" component={LicenseList} />
            <CacRoute exact path="/form41-list" component={Form41List} />
            <CacRoute exact path="/form41-detail/:id" component={Form41Detail} />
            <CacRoute exact path="/assignments" component={Assignments} />
            <PrivateRoute exact path="/alloc-detail/:id" component={AllocDetail} />
            <PrivateRoute exact path="/ins-assignments" component={InsAssignments} />
          </Switch>
        </div>   
        <Footer /> 
      </Router> 
    </div>
  );
}

export default App;
