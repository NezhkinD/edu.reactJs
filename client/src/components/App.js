import React, {Component} from 'react';

import './App.scss';

import Header from "./layouts/Header";
import Navbar from "./layouts/Navbar";
import Profile from "./layouts/Profile";

const App = () => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <Profile/>
        </div>
    );

}

export default App;
