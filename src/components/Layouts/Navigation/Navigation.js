import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import "./Navigation.scss";

class Navigation extends Component {
render() {
    const selectedStyle = {
        color: "#abf4fd",
};
    const style = {textDecoration:"none", color: "rgb(28, 63, 118)"};
    
    return (
<div className={"navigation"}>
        <nav className={"container"}>
            <div className="logo"></div>
            <ul>
               <li> <NavLink style={style} exact to="/" activeStyle={selectedStyle}>Main</NavLink> </li>
               <li> <NavLink style={style} to="/bar" activeStyle={selectedStyle}>Bar</NavLink > </li>
               <li> <NavLink style={style} to="/about" activeStyle={selectedStyle}>About</NavLink > </li>
            </ul>
         </nav>
</div>
    )
  }
}

export default Navigation;