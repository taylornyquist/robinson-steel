import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar'
// import Cards from './components/Cards'
// import Hub from './components/Hub'
// import Signup from './components/Signup'
// import Login from './components/Login'
// import AddIdol from './components/AddIdol'
import About from './components/About'
import NoMatch from './components/NoMatch'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Router>
        <div className="min-vh-100 page-container">
            <Navbar />
            <div className="content-wrap">
              <Switch>
                {/* <Route exact path="/" component={About} />
                <Route exact path="/about" component={About} />
                <Route component={NoMatch} /> */}
              </Switch>
            </div>
            <Footer />
        </div>
      </Router>
  </>
  );
}

export default App;
