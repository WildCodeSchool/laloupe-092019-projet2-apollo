import React from 'react';
import './App.css';

import ContactForm from './components/contact/ContactForm';
function App() {
    return (
        <div className="App">
          <Switch>
        <Route path="/ContactUs" component={ContactForm} />
      </Switch>
        
        </div>
    );
}
export default App;
