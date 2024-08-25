import React from "react";
import Login from "./login";
import Signup from "./signup";
import Account from "./account";
import About from "./about";
import {Link} from "react-router-dom";
export default function Sidebar(){
  return(
    <>
    <div style={{display:"inline-block",width:"10%", height:"40%",backgroundColor:"pink"}}>
    <h4><Link to="/login">Login</Link></h4><br/>
  <h4><Link to="/signup">signup</Link></h4><br/>
  <h4><Link to="/dashboard">Dashboard</Link></h4><br/>
<h4><Link to="/about">About</Link></h4><br/>
<h4><Link to="/account">Account</Link></h4><br/>
    </div>
    </>
    )
}