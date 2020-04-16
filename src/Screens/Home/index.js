import React, { Component } from 'react'
import './home.css'
import logo from '../../Images/logo.png'
import $ from 'jquery'
import banner1 from '../../Images/banner1.png'
import banner2 from '../../Images/banner2.svg'
import banner3 from '../../Images/banner3.svg'
import banner4 from '../../Images/banner4.svg'
import banner5 from '../../Images/banner5.svg'
import banner6 from '../../Images/banner6.svg'
import whyusVector from '../../Images/whyusVector.svg'
import member1 from '../../Images/member1.png'
import Card1 from '../../Images/Card1.jpg'
import Card2 from '../../Images/Card2.jpg'
import Card3 from '../../Images/Card3.jpg'
import Card4 from '../../Images/Card4.jpg'
import Card5 from '../../Images/Card5.jpg'
import Card6 from '../../Images/Card6.jpg'
import Card7 from '../../Images/Card7.jpg'
import Card8 from '../../Images/Card8.jpg'

import Carousel from '../../components/Carousel'
import Project1 from '../../Images/Project1.png'
import Project2 from '../../Images/Project2.png'
import Project3 from '../../Images/Project3.png'
import Project4 from '../../Images/Project4.png'
import Project5 from '../../Images/Project5.png'
import Project6 from '../../Images/Project6.png'
import Project7 from '../../Images/Project7.png'
import Project8 from '../../Images/Project8.png'
import Phone from '../../Images/Phone.png'
import mapApp from '../../Images/mapApp.png'

import siema from 'siema'
import Projects from '../../components/Projects'

class Home extends Component{
    componentDidMount = () =>{
        // outer
        const mySiema = new siema();
        const prev = document.querySelector('.prev');
        const next = document.querySelector('.next');

        prev.addEventListener('click', () => mySiema.prev());
        next.addEventListener('click', () => mySiema.next());

        // inner
        const myInnerSiema = new siema({
        selector: '.innersiema',
        perPage: 1
        });
        const innerprev = document.querySelector('.innerprev');
        const innernext = document.querySelector('.innernext');

        innerprev.addEventListener('click', () => myInnerSiema.prev());
        innernext.addEventListener('click', () => myInnerSiema.next());
      
        $(document).on('click', 'ul li', function(){
            $(this).addClass('active').siblings().removeClass('active')
        })
         
    }
    render() {
        return(
            <div className="Complete-page">
            <div className="Full-page">
               <div class="sidenav">
                   <div className="logo">
                       <img src={logo} alt="" className="logo"/>
                   </div>
                   <ul>
                    <li>
               
                        <a href="#home">Home</a>
                    </li>
                    <li>
                  
                        <a href="#whyus">Why US ?</a>
                    </li>
                    <li>
                       
                        <a href="#clients">Our Clients</a>
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
                    </ul>
                </div>
                <div class="main">
                    <div className="home-page" id="home">
                    <div className="Carousel-slider">
                               
                                <button className="prev btn btn-primary" data-aos-delay="100"  data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1300"><i class="fa fa-arrow-left" aria-hidden="true"></i></button>
                                <button className="next btn btn-primary" data-aos-delay="100"  data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1300"><i class="fa fa-arrow-right" aria-hidden="true"></i></button>
                        <div className="siema" data-aos-delay="100"  data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1300">
                               
                                <div>
                                    <p className="slide1-text" style={{color: "white"}}>
                                        We focus on Creating your Ideas look Visually<br/>
                                        Appealing and strive to get your Designs<br/>
                                        attract in Every Dimensions
                                    </p>
                                    <img src={banner1} alt="Siema image" />
                                </div>
                            
                            <div>
                                <div className="innersiema">
                             
                                    <div><img src={banner2} alt="Siema image" /></div>
                                    <div><img src={banner3} alt="Siema image" /></div>
                                    <div><img src={banner4} alt="Siema image" /></div>
                                    <div><img src={banner5} alt="Siema image" /></div>
                                    <div><img src={banner6} alt="Siema image" /></div>
                                </div>
                                <button className="innerprev btn btn-primary"><i class="fa fa-arrow-left" aria-hidden="true"></i></button>
                                <button className="innernext  btn btn-primary"><i class="fa fa-arrow-right" aria-hidden="true"></i></button>
                            </div>
                        </div>
            
                    </div>

                       
                    </div>

                    {/* this is why us page  */}

                    <div className="home-page" id="whyus">
                        <div className="whyus">
                            <div className="leftSvg">
                                <svg height="300" width="300">
                                    <circle className="circle" cx="0" cy="120" r="180" stroke="orange" stroke-width="2" fill="#151F2D" />
                                    <circle className="circle" cx="0" cy="100" r="100" stroke="orange" stroke-width="2" fill="#151F2D" />
                                </svg> 
                            </div>
                  
                            <img src={whyusVector} className="whyusvector"/>
                        </div>
                    </div>
                   {/* This is client page */}
                    <div className="home-page" id="clients" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1200">
                        <div className="clients-content">
                            <div className="client-headers">
                                <h3 className="client-header1">Over</h3>
                                <h1 className="client-header2">150+</h1>
                                <p className="client-header3">satisfied users!</p>
                            </div>
                            <div className="text-slider">
                                <Carousel />
                            </div>
                        </div>
                    </div>
                        {/* This is projects page */}

                    <div className="Projects-page" id="projects" data-aos="fade-up" data-aos-duration="3000">>
                    <div id="carouselExampleControls1" class="carousel slide" data-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src={Project1} class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src={Project2} class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src={Project3} class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src={Project4} class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src={Project5} class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src={Project6} class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src={Project7} class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src={Project8} class="d-block w-100" alt="..." />
                            </div>
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleControls1" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleControls1" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                        </div>
                    </div>
                    <div className="home-page" id="socialmedia">
                        {/* <div class="elfsight-app-3a82b3fb-3eaf-4bcc-9b75-02b10159b77b"></div> */}
                    </div>
                    <div className="home-page" id="whoweare">
                       <div className="Team-cards">
                           <h1 style={{color: "#4B4B4B"}}>Team on Strike</h1>
                           <div className="cards ">
                            <div class="card" data-aos="flip-down" style={{width: "18rem"}}>
                                    <img src={Card1} class="card-img-top" alt="..." />
                                    <img src={member1} class="profile-img" alt="..." />
                                    <div class="card-body">
                                        <p className="title">
                                            Rushianjan M <br/> Founder<br/>&<br/> Creative Head
                                        </p>
                                    </div>
                                </div>

                                <div class="card" data-aos="flip-down" data-aos-delay="800" style={{width: "18rem"}}>
                                    <img src={Card2} class="card-img-top" alt="..." />
                                    <img src={member1} class="profile-img" alt="..." />
                                    <div class="card-body">
                                        <p className="title">
                                            Venkatesh <br/><br/> Tecnical<br/> Developer
                                        </p>
                                    </div>
                                </div>

                                <div class="card" data-aos="flip-down" data-aos-delay="1200" style={{width: "18rem"}}>
                                    <img src={Card3} class="card-img-top" alt="..." />
                                    <img src={member1} class="profile-img" alt="..." />
                                    <div class="card-body">
                                        <p className="title">
                                            Seshan <br/><br/> UI/UX<br/> Designer
                                        </p>
                                    </div>
                                </div>

                                <div class="card"  style={{width: "18rem"}}>
                                    <img src={Card4} class="card-img-top" alt="..." />
                                    <img src={member1} class="profile-img" alt="..." />
                                    <div class="card-body">
                                        <p className="title">
                                            Rushianjam M <br/> Founder<br/>&<br/>Creative Head
                                        </p>
                                    </div>
                                </div>
                                <div class="card" style={{width: "18rem"}}>
                                    <img src={Card5} class="card-img-top" alt="..." />
                                    <img src={member1} class="profile-img" alt="..." />
                                    <div class="card-body">
                                        <p className="title">
                                            Rushianjam M <br/> Founder<br/>&<br/>Creative Head
                                        </p>
                                    </div>
                                </div>

                                <div class="card" data-aos="fade-up" style={{width: "18rem"}}>
                                    <img src={Card6} class="card-img-top" alt="..." />
                                    <img src={member1} class="profile-img" alt="..." />
                                    <div class="card-body">
                                        <p className="title">
                                            Rushianjam M <br/> Founder<br/>&<br/>Creative Head
                                        </p>
                                    </div>
                                </div>
                        </div>
                       </div>
                    </div>
                    <div className="home-page" id="contact">
                        <div className="contact-content">
                            <h1 style={{color:"#4B4B4B"}} className="contact-header">Stay In Touch</h1>
                            <div className="row row12">
                                <div className="map-image col-md-4">
                                    <img src={mapApp} alt="" />
                                </div>
                                <div className="col-md-4">
                                    <div className="textbox">
                                        <input type="text" placeholder="Username" name="" value="" />
                                    </div>
                                    <div className="textbox">
                                        <input type="text" placeholder="Username" name="" value="" />
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <p className="contact-text"><i class="fa fa-map-marker" aria-hidden="true"></i>
                                        No 12, 3rd cross, Patel Narayan<br/>
                                        Reddy Layout, Ejipura, 6th Block,<br/>
                                        Koramangala, Bengaluru, 560095
                                    </p>
                                    <p className="contact-text"><i class="fa fa-envelope-o" aria-hidden="true"></i>
                                        reachus@rushbeestudios.com
                                    </p>
                                    <p className="phone-number"><i class="fa fa-phone" aria-hidden="true"></i>
                                        +91 8296503397
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
                <img src={Phone} className="error-image" />
                <h6>Please Turn your Phone into Landscapemode. We will not support Portriate Mode</h6>
            </div>
          
        );
    }
}

export default Home

