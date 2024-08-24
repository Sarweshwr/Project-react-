import React from "react";
import Header from "./header";
import Footer from "./footer";
import Sidebar from "./sidebar";
import Home from "./home"
import {Link} from "react-router-dom";
export default function Login(){
  function handleLogin(){
    const name=document.getElementById("name").value;
    const email=document.getElementById("email").value;
    const password= document.getElementById("password").value;
    
    const Lval={"name":name,"email":email, "password":password};
    for (var i=0;i<localStorage.length;++i) {
      const val=localStorage.getItem(localStorage.key(i))
    if(Lval===val){
      alert("loggedin",name)
      console.log(email)
      return(
        <>
        <Home/>
        </>
        )
    }
    else{
      alert("wrong credentials")
    }
  }
  }
  return(
    <>
    <Header/>
    <Sidebar/>
       <div style={{textAlign:"center", position:"relative",left:"35%",top:"10px", backgroundColor:"red",color:"white",width:"40%",borderRadius:"7%",display:"inline-block"}}>
       <div style={{backgroundColor:"magenta",marginTop:"18px",padding:"10px",display:"flex",justifyContent:"space-around"}}>
            <Link to="/signup" style={{color:"white"}}>Signup</Link>
            <Link to="/login" style={{color:"white"}}>Login</Link>
            <Link to="/account" style={{color:"white"}}>account</Link>
        </div>
         <h1>Login Page</h1><br/>
    <form onSubmit={handleLogin}>
    <b>Enter Name:</b><br/>
    <input id="name" type="text"/><br/>
     <b>Enter Email:</b><br/>
     <input id="email" type="email"/><br/>
     <b>Enter Password:</b><br/>
     <input id="password" type="password" /><br/>
     <input type="submit"/><br/>
     </form>
     </div>
    <Footer/>
    </>
    )
}