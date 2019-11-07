import React from 'react';
import Login from './components/Login';
import { Switch, Route} from 'react-router-dom';
import Identity from './components/Identity';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component = {Login} />
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
      
    </div>
  );
}

export default App;


