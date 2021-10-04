import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import HowWeHelp from './components/HowWeHelp/HowWeHelp';
import Services from './components/Services/Services';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AboutUs from './components/AboutUs/AboutUs';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div className="App m-3">
      <Router>
        <Switch>
          <Route exact path="/">
            <Header></Header>
            <HowWeHelp></HowWeHelp>
            <Services></Services>
            <Footer></Footer>
          </Route>
          <Route path="/home">
            <Header></Header>
            <HowWeHelp></HowWeHelp>
            <Services></Services>
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
