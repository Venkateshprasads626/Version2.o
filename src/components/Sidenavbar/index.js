import React, { Component } from 'react'
import './sidenavbar.css'

class Sidenavbar extends Component{
    render() {
        return(
            <div className="">
                <div class="sidenav">
                    <li>
                        <a href="#home">Home</a>
                    </li>
                    <li>
                    <a href="#whyus">Why US ?</a>
                    </li>
                    <li>
                        <a href="clients">Our Clients</a>
                    </li>
                    <li>
                        <a href="#projects">Our Projects</a>
                    </li>
                    <li>
                        <a href="#socialmedia">We in Social Media</a>
                    </li>
                    <li>
                        <a href="#whoweare">Who we are ?</a>
                    </li>
                    <li>
                        <a href="#contact">Contact us</a>
                    </li>
                </div> 
            </div>
        );
    }
}

export default Sidenavbar