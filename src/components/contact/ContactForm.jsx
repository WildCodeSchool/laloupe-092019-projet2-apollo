import React from 'react';
import './ContactForm.css';

class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: '', email: '', message: '' };
    }

    handleChange = (event) => {
        if (event.target.name === 'name') {
            this.setState({ name: event.target.value });
        }
        else if (event.target.name === 'email') {
            this.setState({ email: event.target.value });
        }
        else if (event.target.name === 'subject') {
            this.setState({ subject: event.target.value });
        }
        else if (event.target.name === 'message') {
            this.setState({ message: event.target.value });
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        alert('Your message has been transmitted to the staff ');
    }

    render() {
        return (
            <form className="contactForm" onSubmit={this.handleSubmit}>
                
                    <div className="contactName">
                        <label htmlFor="name">
                            <i className="far fa-address-card"></i> 
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Name"
                            size="50"
                            value={this.state.name}
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                
                    <div className="contactEmail">
                        <label htmlFor="email">
                            <i className="far fa-envelope"></i>
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email adress"
                            size="50"
                            value={this.state.email}
                            onChange={this.handleChange}
                            required
                            />
                    </div>
                
                    <div className="contactSubject">
                        <label htmlFor="subject">Subject: </label>
                        <select
                            type="menu"
                            name="subject"
                            id="subject"
                            value={this.state.subject}
                            onChange={this.handleChange}
                            required
                        >
                            <option value="" defaultValue disabled>Choose a subject</option>
                            <option value="Additional information">Additional information</option>
                            <option value="Problems on the website">Problems on the website</option>
                            <option value="Others">Others</option>
                        </select>
                    </div>
                
                    <div className="contactMessage">
                        <label htmlFor="message">
                            <i className="fas fa-comment-alt"></i>
                        </label>
                        <textarea
                            name="message"
                            id="message"
                            cols="50"
                            rows="5"
                            placeholder="Enter your message here"
                            value={this.state.message}
                            onChange={this.handleChange}
                            required
                        >
                        </textarea>
                    </div>
                
                    <div className="contactSubmit">
                        <label htmlFor="submit"></label>
                        <input
                            type="submit"
                            value="Send"
                        />
                    </div>

            </form>
        )
    }
}

export default ContactForm;