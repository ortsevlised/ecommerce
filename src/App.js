import React, {Component} from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Homepage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-up/sign-in-and-up.component";
import {auth} from "./firebase/firebase.utils";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: null
        }
    }

    unsubscribeFromUser = null;

    componentDidMount() {
        this.unsubscribeFromUser = auth.onAuthStateChanged(user => {
                this.setState({currentUser: user})
            }
        )
    }

    componentWillUnmount() {
        this.unsubscribeFromUser();
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                    <Header currentUser={this.state.currentUser}/>
                    <Switch>
                        <Route exact path='/' component={Homepage}/>
                        <Route path='/shop' component={ShopPage}/>
                        <Route path='/signin' component={SignInAndSignUpPage}/>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }


}

export default App;
