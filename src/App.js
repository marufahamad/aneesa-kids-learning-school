import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import HowWeHelp from './components/HowWeHelp/HowWeHelp';
import Services from './components/Services/Services';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AboutUs from './components/AboutUs/AboutUs';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App mx-2">
      <Router>
        <Switch>
          <Route exact path="/">
            <Header></Header>
            <Home></Home>
            <Footer></Footer>
          </Route>
          <Route path="/home">
            <Header></Header>
            <Home></Home>
            <Footer></Footer>
          </Route>
          <Route path="/services">
            <Header></Header>
            <Services></Services>
            <Footer></Footer>
          </Route>
          <Route path="/support">
            <Header></Header>
            <HowWeHelp></HowWeHelp>
            <Footer></Footer>
          </Route>
          <Route path="/about">
            <Header></Header>
            <AboutUs></AboutUs>
            <Footer></Footer>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
