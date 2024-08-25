import React from "react";
import Header from "./header";
import Footer from "./footer";
import Sidebar from "./sidebar";
import Login from "./login";
import Account from "./account"
import {Link} from "react-router-dom"
export default function Signup(){
  function handleSignup(){
    const name=document.getElementById("name").value;
    const email=document.getElementById("email").value;
    const password= document.getElementById("password").value;
    const cnf_password=document.getElementById("cnf_password").value;
    const val={"name":name,"email":email,"password":password};
    if(password===cnf_password){
   localStorage.setItem("user",val)
   alert("logging in")
   return(
     <>
     <Login/>
     </>
     )
    } else{
      alert("password and cnf_password are not matched..")
    }
  }
  return(
    <>
    <Header/>
    <Sidebar/>
    <div style={{textAlign:"center", position:"relative",left:"35%",top:"10px", backgroundColor:"red",color:"white",width:"60%",borderRadius:"7%",display:"inline-block"}}>
    <div style={{backgroundColor:"magenta",marginTop:"18px",padding:"10px",display:"flex",justifyContent:"space-around"}}>
            <Link to="/signup" style={{color:"white"}}>Signup</Link>
            <Link to="/login" style={{color:"white"}}>Login</Link>
            <Link to="/account" style={{color:"white"}}>account</Link>
        </div>
    <h1>Signup Page</h1><br/>
    <form onSubmit={handleSignup}>
     <b>Enter Name:</b><br/>
     <input id="name" type="text"/><br/>
     <b>Enter Email:</b><br/>
     <input id="email" type="email"/><br/>
     <b>Enter Password:</b><br/>
     <input id="password" type="password" /><br/>
     <b>Enter confirm password:</b><br/>
     <input id="cnf_password" type="password"/><br/>
     <input type="submit" style={{borderRadius:"10%"}}/>
    </form>
    </div>
    <Footer/>
    </>
    )
}