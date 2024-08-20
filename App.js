import Login from "./login";
import Signup from "./signup";
import Home from "./home";
import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
class App extends React.Component {
  render() {
    return (
      <>
        <BrowserRouter>
         <Routes>
         <Route path="dist/index.html" element={<Home/>}/>
         <Route path="/signup" element={<Signup/>}/>
         <route path="/login" element={<Login/>}/>
         </Routes>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
