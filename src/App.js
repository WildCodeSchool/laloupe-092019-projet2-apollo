import React from 'react';
import Identity from './components/Identity';    
import './App.css';
import { Switch, Route } from "react-router-dom";
// import '../src/components/css/reset.css';
// import '../src/components/css/style.css';
import Music from './components/Music';
// import Navbar from "./components/navbar/Navbar";
import Login from "./components/Login";
import Erreur404 from "./components/erreur404/Erreur404";
// import ContactForm from './components/contact/ContactForm';
// import Team from "./components/team/Team";
// import Footer from "./components/footer/Footer";
import Bg from "./components/background/Bg";


function App() {
  return (
    <div className="App">
      {/* <Music /> */}
      
      {/* <Navbar /> */}
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/erreur404" component={Erreur404} />
        {/* <Route path="/ContactUs" component={ContactForm} /> */}
        {/* <Route path="/Team" component={Team} /> */}
        <Route path="/belier" render={() => <Identity signe="0" />} />
        <Route path="/taureau" render={() => <Identity signe="1" />}/>
        <Route path="/gemeau" render={() => <Identity signe="2" />}/>
        <Route path="/cancer" render={() => <Identity signe="3" />}/>
        <Route path="/lion" render={() => <Identity signe="4" />}/>
        <Route path="/vierge" render={() => <Identity signe="5" />}/>
        <Route path="/balance" render={() => <Identity signe="6" />}/>
        <Route path="/scorpion" render={() => <Identity signe="7" />}/>
        <Route path="/sagittaire" render={() => <Identity signe="8" />}/>
        <Route path="/capricorne" render={() => <Identity signe="9" />}/>
        <Route path="/verseau" render={() => <Identity signe="10" />}/>
        <Route path="/poisson" render={() => <Identity signe="11" />}/>
      </Switch>
      {/* <Footer/> */}
      <Bg/>
    </div>
  );
}

export default App;