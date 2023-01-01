import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import MachineNames from "./context/machines/MachineNames";
import Header from "./components/Header";
function App() {
  document.body.style.backgroundColor = "#504d4d47";
  return (
    <>
      <MachineNames>
        <Router>
          <Navbar />
          <div>
            <Switch>
              <Route exact path="/">
                <Header />
                <Home />
              </Route>
              <Route exact path="/about">
                <About />
              </Route>
              <Route exact path="/login">
                <Login />
              </Route>
              <Route exact path="/signup">
                <SignUp />
              </Route>
            </Switch>
          </div>
        </Router>
      </MachineNames>
    </>
  );
}

export default App;
