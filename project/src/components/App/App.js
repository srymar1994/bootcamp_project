import React from 'react';
import './App.scss';
import {HashRouter, Route, Switch} from "react-router-dom";

import Navigation from "../Layouts/Navigation/Navigation";
import Main from "../Layouts/Main/Main";
import Bar from "../Layouts/Bar/Bar";
import About from "../Layouts/About/About";


const NotFound = () => <h2>error 404 , not found!</h2>


function App() {
    return (
<div className="background">
        <HashRouter>

                <Navigation/>
            <div className="container page">
                    <Switch>

                        <Route exact path="/" component={Main}/>
                        <Route path="/bar" component={Bar}/>
                        <Route path="/about" component={About}/>
                        <Route component={NotFound}/>

                    </Switch>
            </div>
        </HashRouter>
</div>
    );
}

export default App;