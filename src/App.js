import './App.css';
import NavMenu from './components/NavMenu/NavMenu'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './components/Home/Home'
import Projects from './components/Projects/Projects'
import About from './components/About/About'
import Contact from './components/Contact/Contact'

function App() {
  return (
    <div className="App">
      <div  className="header">      
      <Router>
        <NavMenu />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
      </div>


    </div>
  );
}

export default App;
