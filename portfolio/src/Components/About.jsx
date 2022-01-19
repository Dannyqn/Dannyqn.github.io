import React, { Component } from 'react';
import './About.css'
import picture from './cloud.jpg';
class About extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <div className='about'>
                <img src = {picture} alt = 'personal2' className='cloud'></img>
                <div className='content2'>
                   <h4>Danny began his Computer Science background back in 2017. 
                       He took a Computer Science course and then went on to study Computer Science at California State University, Long Beach.
                       He has recently acquired a passion for Front-end development and would like to make it his career.</h4>
                    <br/>
                    <h4>He is never afraid to tackle a challenge or afraid to put in the work. Danny enjoys watching sports and TV shows, going on hikes,
                        and playing video games in his free time. He would also like to travel more and try all kinds of different foods. 
                    </h4>
                    <br/>
                    <h4>Danny is currently looking for a job that will expand on his Front-end knowledge and create a meaningful project under mentorship.</h4>
                </div>
            </div>
        );
    }
}
 
export default About;