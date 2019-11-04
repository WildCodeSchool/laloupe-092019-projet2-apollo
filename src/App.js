import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import '../src/components/css/reset.css';
import '../src/components/css/style.css';
import Music from './components/music/Music';
import Navbar from "./components/navbar/Navbar";
import Login from "./components/logincard/Login";
import Erreur404 from "./components/erreur404/Erreur404"
import ContactForm from './components/contact/ContactForm';
import Team from "./components/team/Team"
import Footer from "./components/footer/Footer"
import Bg from "./components/background/Bg";
function App() {
  return (
    <div className="App">
      <Music />
      
      <Navbar />
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/erreur404" component={Erreur404} />
        <Route path="/ContactUs" component={ContactForm} />
        <Route path="/Team" component={Team} />
      </Switch>
      <Footer/>
      <Bg/>
    </div>
  );
}

export default App;

