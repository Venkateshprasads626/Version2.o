import React, { Component } from 'react'
import './home.css'
import logo from '../../Images/logo.png'
import $ from 'jquery'
import banner1 from '../../Images/banner1.svg'
import banner21 from '../../Images/banner21.svg'
import banner31 from '../../Images/banner31.svg'
import banner41 from '../../Images/banner41.svg'
import banner51 from '../../Images/banner51.svg'
import banner61 from '../../Images/banner61.svg'
import banner71 from '../../Images/banner71.svg'
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
    
      
          setInterval(() => mySiema.next(), 5000)
          setInterval(() => myInnerSiema.next(), 7000)
        
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
                    <div className="home-page" id="home" >
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
                                    <div><img src={banner21} alt="" /></div>
                                    <div><img src={banner31} alt="Siema image" /></div>
                                    <div><img src={banner41} alt="Siema image" /></div>
                                    <div><img src={banner51} alt="Siema image" /></div>
                                    <div><img src={banner61} alt="Siema image" /></div>
                                    <div><img src={banner71} alt="Siema image" /></div>
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
                            <div className="whySection">
                            <div class="leftSvg"  data-aos-easing="linear" data-aos-duration="1200">
                                <svg id="bigCirclesSvg" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns="xlink=https://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 780 1560" enable-background="new 0 0 780 1560" xml="space=preserve">
                                    <path className="lineBig" stroke-dasharray="1000 1000" stroke-dashoffset="1000" fill="none" stroke="#F7B500" stroke-width="2" d="M0,6c427.5,0,774,341.5,774,769S427.5,1554,0,1554"></path>
                                    <path className="lineMedium" fill="none" stroke="#F7B500" stroke-width="2" stroke-miterlimit="10" d="M0,199.5c320.6,0,580.5,254.9,580.5,575.5S320.6,1360.5,0,1360.5"></path>
                                </svg>
                            </div>
                            </div>
                            <div className="Rightphoto">
                                <img src={whyusVector} className="whyusvector"/>
                            </div>
                           
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
                        <div class="elfsight-app-3a82b3fb-3eaf-4bcc-9b75-02b10159b77b"></div>
                    </div>
                    <div className="home-page" id="whoweare">
                       <div className="Team-cards">
                           <h1 style={{color: "#4B4B4B"}} className="contact-header">Team on Strike</h1>
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

                                <div class="card"  data-aos="fade-up" style={{width: "18rem"}}>
                                    <img src={Card4} class="card-img-top" alt="..." />
                                    <img src={member1} class="profile-img" alt="..." />
                                    <div class="card-body">
                                        <p className="title">
                                            Rushianjam M <br/> Founder<br/>&<br/>Creative Head
                                        </p>
                                    </div>
                                </div>
                                <div class="card" data-aos="fade-up"  style={{width: "18rem"}}>
                                    <img src={Card5} class="card-img-top" alt="..." />
                                    <img src={member1} class="profile-img" alt="..." />
                                    <div class="card-body">
                                        <p className="title">
                                            Rushianjam M <br/> Founder<br/>&<br/>Creative Head
                                        </p>
                                    </div>
                                </div>

                                <div class="card" data-aos="fade-up"  data-aos-delay="800" style={{width: "18rem"}}>
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
                    <div className="" id="contact">
                        <div className="contact-content">
                            <h1 style={{color:"#4B4B4B"}} className="contact-header">Stay In Touch</h1>
                            <div className="row row51">
                                <div className="col-md-4 map-image">
                                    <img src={mapApp} alt="" />
                                </div>
                                <div className="col-md-4">
                                    <form name="contact" method="POST" data-netlify="true">
                                    <div className="form-box">
                                        <div className="row row41">
                                            <div className="col">
                                                <div className="textboxtop">
                                                    <input type="text" placeholder="Name*" name="name" />
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="textboxtop">
                                                    <input type="email" placeholder="Email*" name="email" />
                                                </div>
                                            </div>
                                            <div className="textbox">
                                                <input type="text" placeholder="Message*" name="message"/>
                                            </div>
                                            <button type="submit" className="contact-button" value="submit">Submit</button> 
                                        </div>
                                    </div>
                                    </form>
                                </div>
                                <div className="col-md-4" >
                                    <div className="address-text">
                                    <p className="contact-text"><i class="fa fa-map-marker" aria-hidden="true"></i><span></span>
                                                No 12, 3rd cross, Patel Narayan<br/>
                                                Reddy Layout, Ejipura, 6th Block,<br/>
                                                Koramangala, Bengaluru, 560095
                                    </p>
                                    <p className="contact-text"><i class="fa fa-envelope-o" aria-hidden="true"></i><span></span>
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
            </div>
                <img src={Phone} className="error-image" />
                <h6>Please Turn your Phone into Landscapemode. We will not support Portriate Mode</h6>
            </div>
          
        );
    }
}

export default Home


