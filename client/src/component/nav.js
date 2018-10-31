import React, { Component } from 'react';
import AuthService from './utils/AuthService';

const Auth = new AuthService();

class Navbar extends Component {
    constructor(){
        super();
        this.state = {
            loggedIn: false
        }
    }

    componentDidMount(){
        if(Auth.loggedIn()){
            this.setState({loggedIn: true});
        }
    }

    handleLogout(){
        Auth.logout();
        this.props.history.replace("/");
    }

    render() {
        if(!this.state.loggedIn){
            return (
                <div style={{ paddingTop: "50px", paddingBottom: "0px", marginBottom: "0px" }}>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item active">
                                    <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/login">Login</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            );
        }
        else {
            return (
                <div style={{ paddingTop: "50px", paddingBottom: "0px", marginBottom: "0px" }}>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item active">
                                    <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" onClick={this.handleLogout} href="/">Logout</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            );
        }
        
    }
}

export default Navbar;