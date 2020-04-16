import React, { Component } from 'react'
import './carousel.css'
import $ from 'jquery'
import Logo1 from '../../Images/Logo1.svg'
import Logo2 from '../../Images/Logo2.svg'
import Logo3 from '../../Images/Logo3.svg'
import Logo4 from '../../Images/Logo4.svg'
import Logo5 from '../../Images/Logo5.svg'
import Logo6 from '../../Images/Logo6.svg'
import Logo7 from '../../Images/Logo7.svg'
import Logo8 from '../../Images/Logo8.svg'

import siema from 'siema'
class Carousel extends Component{
  
    render(){
        return(
            <div className="text-slider">
              <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={Logo1} className="logo1" alt="..." />
                            <p className="carousel-text">
                                "Responsive to communications & helpful in providing<br/>
                                insight toward business goals. They made the<br/>
                                overwhelming process of getting my business desgin<br/>
                                out of my head painless."
                            </p>
                        </div>
                        <div class="carousel-item">
                            <img src={Logo2} class="logo1" alt="..." />
                            <p className="carousel-text">
                                Rushbee Studios is an artistic and gifted organization who can<br/>
                                assist any business in developing an identity. would highly<br/> 
                                recommend Rushbee Studios for this  work, responsiveness,<br/>
                                value, and ability to implement client’s goals my business<br/> 
                                design out of my head painless.
                            </p>
                        </div>
                        <div class="carousel-item">
                            <img src={Logo3} className="logo1" alt="..." />
                            <p className="carousel-text">
                                Rushbee Studios was wonderful to work with. We asked for many<br/>
                                different variations during the design process of our logo and was<br/> 
                                very patient in working with us until we found the one that worked<br/>
                                best for us. They were very professional, easy to work with and<br/>
                                very responsive would highly recommend them to anyone<br/>
                                looking for design services.
                            </p>
                        </div>
                        <div class="carousel-item">
                            <img src={Logo4} className="logo1" alt="..." />
                            <p className="carousel-text">
                                I had a fantastic experience working with Rushbee Studios<br/>
                                throughout the process of designing my business website. I was<br/>
                                so taken aback at how many concepts they came up with, how<br/>
                                many revisions they made, and how patient they were with me<br/>
                                throughout it all.
                            </p>
                        </div>
                        <div class="carousel-item">
                            <img src={Logo5} className="logo1" alt="..." />
                            <p className="carousel-text">
                                We were impressed by how quickly Rushbee Studios understood<br/>
                                our brief, and responded to feedback so promptly and<br/>
                                accurately. We also really appreciated being presented with<br/>
                                options at every step of the way, which gave us an opportunity to<br/>
                                work collaboratively and generate some new ideas that we<br/>
                                hadn’t considered ourselves.
                            </p>
                        </div>
                        <div class="carousel-item">
                            <img src={Logo6} className="logo1" alt="..." />
                            <p className="carousel-text">
                                Where talent meets experience. Very professional service!  We<br/>
                                created the logo for our travelling company from scratch and<br/>
                                finished with the full responsive  and mobile friendly website<br/>
                                design. We felt that our wishes were heard and excelled with on <br/>
                                point insights. Would recommend!
                            </p>
                        </div>
                        <div class="carousel-item">
                            <img src={Logo7} className="logo1" alt="..." />
                            <p className="carousel-text">
                                Working with Rushbee Studios and there team is effortless - a quickly<br/>
                                grasp on concepts  and delivery of exceptional ideas with very little<br/>
                                revision required - and all  within the committed deadlines. I can't<br/>
                                recommend enough due the speed, the quality, the attention to <br/>
                                detail an the effectiveness of the finished product in  addition to post<br/>
                                production support. Big Thanks! We'll be in touch soon.
                            </p>
                        </div>
                        <div class="carousel-item">
                            <img src={Logo8} className="logo1" alt="..." />
                            <p className="carousel-text">
                                Really listens to the client's needs and delivers a high quality results.<br/>
                                Very satisfied with the speed, unique approach to  accurately<br/>
                                We also really appreciated being presented with options at every<br/>
                                step of the way, which gave us an opportunity business and friendly<br/>
                                yet professional communication. Highly recommended!
                            </p>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            
            </div>
        );
    }
}

export default Carousel

