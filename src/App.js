import NavBar from './Components/AppBar'
import ParticleBackground from './ParticleBackground';
import Home from './Components/Home';
import "./App.css";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './Components/About';
import Contact from './Components/Contact';
function App() {
  return (
    <BrowserRouter>
    <ParticleBackground ></ParticleBackground>
      <NavBar></NavBar>
      <Switch>
        <Route exact path='/' component ={Home} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
