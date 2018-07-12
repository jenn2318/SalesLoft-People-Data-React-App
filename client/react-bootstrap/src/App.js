import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import Search from './components/Search';
import './App.css';
import Navbar from './components/CustomNavbar';
import './components/CustomNavbar.css';



class App extends Component {
    render() {
        return (

            <Router>
            <div>
            <Navbar />

            <Route exact path="/" component={Home} />
        <Route path="/Search" component={Search} />
        </div>
        </Router>



    );
    }
}

export default App;
