import React, {Component} from 'react';
import './App.css';
import {Redirect, Route, Switch} from "react-router-dom";
import Homepage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-up/sign-in-and-up.component";
import {auth, createUserProfileDocument} from "./firebase/firebase.utils";
import {connect} from "react-redux";
import {setCurrentUser} from "./redux/user/user.actions";

class App extends Component {

    unsubscribeFromUser = null;

    componentDidMount() {
        const {setCurrentUser} = this.props;
        this.unsubscribeFromUser = auth.onAuthStateChanged(async userAuth => {

                if (userAuth) {
                    const userRef = createUserProfileDocument(userAuth);
                    (await userRef).onSnapshot(snapshot => {
                        setCurrentUser({
                            uid: snapshot.id,
                            ...snapshot.data()
                        })
                    })
                }
                setCurrentUser(userAuth)
            }
        )
    }

    componentWillUnmount() {
        this.unsubscribeFromUser();
    }

    render() {
        return (
            <div>
                <Header/>
                <Switch>
                    <Route exact path='/' component={Homepage}/>
                    <Route path='/shop' component={ShopPage}/>
                    <Route exact path='/signin' render={() => this.props.currentUser ?
                        (<Redirect to='/'/>) : <SignInAndSignUpPage/>}/>
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = ({user}) => ({
    currentUser: user.currentUser
})
const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
})
export default connect(mapStateToProps, mapDispatchToProps)(App);

