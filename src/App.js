import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Homepage from "./components/homepage/homepage.component";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Homepage}/>
                    <Route path='/firstpage' component={FirstPage}/>
                </Switch>
            </BrowserRouter>
        </div>
    );
}


const FirstPage = () =>
    (<div><h1>hi</h1></div>);


export default App;
