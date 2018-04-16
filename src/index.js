import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
console.disableYellowBox = true;
import Login from './login';
import Signup from './signup';
import Followfriend from './followfriend';
import Homefeed from './homefeed';
import Demo1 from './demo1';
import Demo2 from './demo2';
import Demo3 from './demo3';

const App = () => {
    return (
        <Router>
            <Scene key="root">
                <Scene key="login"
                    component={Login}
                    hideNavBar={true}
                    initial
                />
                <Scene key="signup"
                    component={Signup}
                    hideNavBar={true}
                />
                <Scene key="followfriend"
                    component={Followfriend}
                    hideNavBar={true}
                />
                <Scene key="homefeed"
                    component={Homefeed}
                    hideNavBar={true}
                />
                <Scene key="demo1"
                    component={Demo1}
                    hideNavBar={true}
                />
                <Scene key="demo2"
                    component={Demo2}
                    hideNavBar={true}
                />
                <Scene key="demo3"
                    component={Demo3}
                    hideNavBar={true}
                />
            </Scene>
        </Router>
    );
}

export default App;