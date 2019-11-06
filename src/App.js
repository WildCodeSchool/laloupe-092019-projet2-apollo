import React from 'react';
import Login from './components/Login';
import { Switch, Route} from 'react-router-dom';
import Identity from './components/Identity';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component = {Login} />
        <Route path="/identity" component = {Identity}/>
      </Switch>
      
    </div>
  );
}

export default App;
