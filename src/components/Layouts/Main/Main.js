import React,{Component} from 'react';
import "./Main.scss";
import {NavLink} from "react-router-dom";

class Main extends Component {
    render() {
        const style = {textDecoration:"none", color: "rgb(171, 244, 253)"};

        return (
            <div className="main">
                <h1>Welcome in MyCoctail App!</h1>
                <span>CREATE YOUR COCKTAIL</span>
                <button><NavLink style={style} to="/bar">GO TO BAR</NavLink ></button>
            </div>
        )
    }
}

export default Main;