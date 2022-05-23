import React from 'react';
import { Link } from "react-router-dom";
import SearchComponent from'../Search/SearchComponent'
const Header = () => {
    return (    <div
        style={{
          width: "100%",
          height: "100px",
          background: "rgba(0,0,0,0.25)",
         
        
        }}
      >
        
        <div>
        <Link to={`/`} style={{color:"black " , fontSize:"27px", fontFamily:"Poppins",marginRight:"40px"}}>Home</Link>
        <Link to={`/login`} style={{color:"black " , fontSize:"27px", fontFamily:"Poppins",marginRight:"40px"}}>login</Link>
        <Link to={`/register`}  style={{color:"black " , fontSize:"27px", fontFamily:"Poppins"}}>register</Link>
       <SearchComponent/>
          </div>
      </div>  );
}
 
export default Header;