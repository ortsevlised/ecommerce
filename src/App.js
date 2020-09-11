import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Homepage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Homepage}/>
                    <Route path='/shop' component={ShopPage}/>
                </Switch>
            </BrowserRouter>
        </div>
    );
}


const FirstPage = () =>
    (<div><h1>hi</h1></div>);


export default App;
