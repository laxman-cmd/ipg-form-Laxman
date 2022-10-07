import React from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from 'react-router-dom';
import SummaryPage from './Pages/SummaryPage';
import Home from './Pages/Home';


function App() {
  return (
    <div className="app">
      <Router>
        <header></header>
        <div className="container">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path='/SummaryPage' component={SummaryPage} />
          </Switch>
        </div>
        <footer></footer>
      </Router>
    </div>
  )
}

export default App