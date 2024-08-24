import React from "react";
import Header from "./header";
import Footer from "./footer";
import Signup from "./signup";
import Sidebar from "./sidebar";
export default function Home(){
  const userName=this.promps("name");
  return(
    <>
    <Header/>
    <div>
    <Sidebar/>
    <div style={{display:"inline-block",position:"relative",left:"30%"}}>
    about home page..
    hello{userName}
    </div>
    </div>
    <Footer/>
    </>
    )
}