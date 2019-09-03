import React,{Component} from 'react';
import "./Bar.scss";

class Bar extends Component {
    render() {
        return (
            <div className="bar">
                <div className={"bartender"}></div>
                <div className={"list"}></div>
            </div>
        )
    }
}

export default Bar;