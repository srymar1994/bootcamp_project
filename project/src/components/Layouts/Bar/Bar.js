import React,{Component} from 'react';
import "./Bar.scss";

class Bar extends Component {

    render() {
        return (
            <div className={"bar"}>
                <div className={"box"}>
                    <h2>Click on the shaker!</h2>
                    <Shaker />
                </div>
                <div className={"bartender"}></div>
            </div>
        )
    }
}


class Shaker extends Component {
constructor(props) {
    super(props);
    this.state = {
        className: "shaker"
    };
    this.myRef = React.createRef();
}
    handleOnClick = () => {
        this.myRef.current.classList.toggle("shake-horizontal");
    };

    render() {
        return <div ref={this.myRef} onClick={this.handleOnClick} className={"shaker"}></div>
    }
}


export default Bar;