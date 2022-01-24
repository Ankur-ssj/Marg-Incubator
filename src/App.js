import React from 'react'
import Home from './Pages/Home';
import Vision from './Pages/Vision';
import WorkingSpace from './Pages/WorkingSpace';
import About from './Pages/About';
import {BrowserRouter as Router, Switch ,Route} from 'react-router-dom';
import Header from './Pages/Header';
import Footer from './Pages/Footer';

function App() {
  return (
      <Router>
      <div className="App">
      <Header/>
          <Switch>
            <Route path='/Home' component={Home}/>
            <Route path='/Vision' component={Vision}/>
            <Route path='/WorkingSpace' component={WorkingSpace}/>
            <Route path='/About' component={About}/>
            <Route path='/' component={Home}/>
          </Switch>
      <Footer/>
      </div>
    </Router>
  );
}

export default App;
