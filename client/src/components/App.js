import React, {Component} from 'react';

import Tech from "./libraries/Tech.js";
import Header from "./libraries/Header.js";


import './App.scss';

const App = () => {
    return (
        <div>
            <div><Header/></div>
            <div><Tech/></div>
        </div>

    );

}

export default App;
