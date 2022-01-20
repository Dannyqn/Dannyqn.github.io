import React, { Component } from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import "./AppBar.css"
class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <AppBar position="static" style={{ background: 'transparent', boxShadow: 'none' }}>
                <Toolbar>
                    <Typography variant="h2" color="inherit">☁️</Typography>
                    <div className='toolbarButtons'>
                        <Button component = {Link} to ='/' color="inherit">Home</Button>
                        <Button component = {Link} to ='/about' color="inherit">About</Button>
                        <Button component = {Link} to ='/contact' color="inherit">Contact</Button>
                    </div>
                </Toolbar>
            </AppBar>
        );
    }
}

export default NavBar;