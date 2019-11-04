import React from 'react';
import './App.css';







import ContactForm from './components/contact/ContactForm';
function App() {
    return (
        <div className="App">
           <ContactForm />
        </div>
    );
}
export default App;










<div>
    <Route path="/ContactUs" component={ContactForm} /> 
</div>