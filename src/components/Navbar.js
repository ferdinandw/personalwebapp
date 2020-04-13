import React, {Component} from 'react';
import './navbar.css'
class Navbar extends Component{
    render(){
        return(
            <div className="header">
                <a href="https://www.instagram.com/ferdinand.w.ng/" target="_blank">
                <h3>Ferdinand</h3>
                </a>
                <div class="header-right">
                    <a href="">Home</a>
                    <a href="">Contact</a>
                    <a href="">About</a>
                </div>
            </div>
        )
    }
}

export default Navbar