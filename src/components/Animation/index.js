import React, { Component } from 'react'
import Particles from 'react-particles-js';

class Animation extends Component{
  
    render(){
        return (
            <Particles
    params={{
	    "particles": {
	        "number": {
	            "value": 8,
	            "density": {
	                "enable": true,
	                "value_area": 800
	            }
	        },
	        "line_linked": {
	            "enable": false
	        },
	        "move": {
	            "speed": 3,
	            "out_mode": "out"
	        },
	        "shape": {
	            "type": [
	                "images",
	                "circle"
	            ],
	            "images": [
	                {
	                    "src": "https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
	                    "height": 20,
	                    "width": 23
	                },
	                {
	                    "src": "/k8s.2d579d24.svg",
	                    "height": 20,
	                    "width": 20
	                },
	                {
	                    "src": "/code.b3b4c4f4.png",
	                    "height": 20,
	                    "width": 20
	                }
	            ]
	        },
	        "color": {
	            "value": "#CCC"
	        },
	        "size": {
	            "value": 30,
	            "random": false,
	            "anim": {
	                "enable": true,
	                "speed": 4,
	                "size_min": 10,
	                "sync": false
	            }
	        }
	    },
	    "retina_detect": false
	}} />
        );
    };

}

export default Animation