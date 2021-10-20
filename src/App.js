import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./Components/Shared/Header/Header";
import Home from "./Components/Home/Home/Home";
import Footer from "./Components/Shared/Footer/Footer";
import Authprovider from "./Components/AuthProvider/AuthProvider";
import Servicedetails from "./Components/Home/Ourservice/Servicedatails/Servicedetails";
import NotFound from "./Components/NotFound/NotFound";
import Login from "./Components/Login/Login";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Ourdoctors from "./Components/Ourdoctor/Ourdoctors/Ourdoctors";
import Depchart from "./Components/OurDepartments/DepChart/Depchart";
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
          <PrivateRoute path="/departments">
            <Depchart></Depchart>
          </PrivateRoute>
          <PrivateRoute path="/doctors">
            <Ourdoctors></Ourdoctors>
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
