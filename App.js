
import React from "react";
import Login from "./login";
import Account from "./account";
import About from "./about";
import Dashboard from "./dashboard";
import {HashRouter,Routes,Route} from "react-router-dom";
import Home from "./home";
import Signup from "./signup";
class App extends React.Component {
  render() {
    return (
      <>
      <HashRouter>
      <Routes>
        <Route path="/dist/index.html" element={<Home/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/account" element={<Account/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
      </HashRouter>
      </>
    );
  }
}

export default App;
