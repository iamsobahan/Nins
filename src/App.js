import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./Components/Shared/Header/Header";
import Home from "./Components/Home/Home/Home";
import Footer from "./Components/Shared/Footer/Footer";
import Authprovider from "./Components/AuthProvider/AuthProvider";
import Servicedetails from "./Components/Home/Servicedatails/Servicedetails";
import NotFound from "./Components/NotFound/NotFound";
import Login from "./Components/Login/Login";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";

import Performance from "./Components/Performation/Performance";
import Ourdoctor from "./Components/Ourdoctor/Ourdoctor";

function App() {
  return (
    <Authprovider>
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute path="/servicedetails/:id">
            <Servicedetails></Servicedetails>
          </PrivateRoute>

          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/performance">
            <Performance></Performance>
          </PrivateRoute>
          <PrivateRoute path="/doctors">
            <Ourdoctor></Ourdoctor>
          </PrivateRoute>

          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </Authprovider>
  );
}

export default App;
