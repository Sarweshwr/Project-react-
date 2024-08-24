import React from "react";
import DropdownProfile from "./dropdown";
export default function Header(){
  return(
    <>
    <div id="company_logo" style={{backgroundColor:"black"}}><img src="logo.jpg" style={{borderRadius:"50%",width:"90px",position:"relative",top:"10px",left:"50px"}}/>
    <h3 style={{color:"white", backgroundColor:"black"}}>THE CODERS</h3>
    <button style={{position:"relative",left:"92%",bottom:"30px",color:"white", backgroundColor:"black"}}><DropdownProfile/></button>
    </div>
    </>
)}