import React, { Component } from 'react';
import "./Home.css";
import picture from './picture.jpg';
import { SocialIcon } from 'react-social-icons';
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
                // <MuiThemeProvider>
                <div className='Home'>
                    <div className='content'>
                        <h1 className='Name'>Hi! I'm Danny Nguyen</h1>
                        <p><b>Front End Developer</b></p>
                        <img src={picture} className='picture' alt='personal' />
                        <div>
                            <AwesomeButton type = 'primary'>Download Resume</AwesomeButton>
                            <span className='icons'>
                                <SocialIcon bgColor='#3498DB' fgColor='#FFFFFF' url="https://www.linkedin.com/in/danny-nguyen-4bb064151/" target="_blank"/> <SocialIcon bgColor='#3498DB' fgColor='#FFFFFF' url="https://github.com/Dannyqn" target="_blank"/>
                            </span>
                        </div>
                    </div>
                </div>
            //  </MuiThemeProvider>
        );
    }
}

export default Home;