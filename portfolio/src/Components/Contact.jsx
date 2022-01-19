import React, { Component } from 'react';
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import './Contact.css';
import phone from './phone.png';
import axios from 'axios';
class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: ''
        }
    }
    onNameChange(e) {
        this.setState({
            name: e.target.value
        });
    }

    onEmailChange(e) {
        this.setState({
            email: e.target.value
        });
    }

    onMessageChange(e) {
        this.setState({
            message: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        axios({
            method: "POST",
            url:"http://localhost:3002/send",
            data:  this.state
          }).then((response)=>{
            if (response.data.status === 'success') {
              alert("Message Sent.");
              this.resetForm()
            } else if (response.data.status === 'fail') {
              alert("Message failed to send.")
            }
          });
    }
    resetForm(){
        this.setState({name: '', email: '', message: ''})
      }
    render() {
        return (
            <div className='contact'>
                <img src={phone} className='phone' alt='phone_pic'></img>
                {/* <h1>Contact Me</h1> */}
                <form id="contact-form" className='contact-form' onSubmit={this.handleSubmit.bind(this)} method="POST">
                    <h1>Contact Me</h1>
                    <div className="heading">
                        <label htmlFor="name">Name: </label>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" value={this.state.name} onChange={this.onNameChange.bind(this)} />
                    </div>
                    <div className="heading">
                        <label htmlFor="name">Email: </label>
                    </div>
                    <div className="form-group">
                        <input type="email" className="form-control" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea className="form-control" rows="10" value={this.state.message} onChange={this.onMessageChange.bind(this)}></textarea>
                    </div>
                    <div className='form-group'>
                        <AwesomeButton type='primary'>Submit</AwesomeButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default Contact;