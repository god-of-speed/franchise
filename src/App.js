import React, {Component} from "react";
import Logo from "./assets/img/logo.png";
import AppCss from "./assets/css/app.css";
import IntroBg from "./assets/img/intro_bg.png";
import MenuIcon from "@material-ui/icons/Menu";
import ClearIcon from '@material-ui/icons/Clear';
import AboutImg from "./assets/img/aboutImg.png";
import Serv1 from "./assets/img/serv1.png";
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import Serv2 from "./assets/img/serv2.png";
import Serv3 from "./assets/img/serv3.png";
import LocationImg from "./assets/img/location.png";
import IntroBg1 from "./assets/img/intro_bg1.png";

class App extends Component {
    constructor(prop) {
        super(prop);
        this.showSidebar = this.showSidebar.bind(this);
    }

    state={
        showSidebar:false,
        testimonial:{
            testimony:"Thank you franchise you made my day",
            testifier:"lucy"
        }
    }

    componentWillMount() {
        setInterval(()=>{
            var arr = [
                {
                    testimony:"Thank you franchise you made my day",
                    testifier:"lucy"
                },
                {
                    testimony:'Your burger tastes great',
                    testifier:'hannah'
                },
                {
                    testimony:'delicious',
                    testifier:"Gabriel"
                }
            ];

            return this.setState((state,props)=>{
                return {
                    testimonial:arr[Math.floor(Math.random() * (2 - 0 + 1)) + 0]
                }
            });
        },7000);
    }

    showSidebar = function(){
        return this.setState((state,props)=>{
            return {
                showSidebar: !state.showSidebar
            }
        });
    }

    render(){
        return (
            <div id="con">
                <header>
                    <nav>
                        <div id="img-holder">
                            <a href="#intro"><img src={Logo} width="200" height="80" /></a>
                        </div>
                        <div id="menu-holder">
                        <ul>
                            <li><a href="#intro">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                        <MenuIcon onClick={this.showSidebar} style={this.state.showSidebar == true ? {"display":"none"} : {}} id="menu-icon"/>
                        <ClearIcon onClick={this.showSidebar} style={this.state.showSidebar == true ? {} : {"display":"none"}} id="clear-icon" />
                        </div>
                    </nav>
                </header>
                <div id="sidebar" style={this.state.showSidebar == true ? {} : {"display":"none"}}>
                    <ul>
                    <li><a href="#intro">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <div name="intro" id="intro">
                    <img id="desktop-intro-bg" src={IntroBg}></img>
                    <img id="mobile-intro-bg" src={IntroBg1}></img>
                </div>
                <div id="main">
                    <h1>Who we are</h1>
                    <div id="divider">
                        <div id="divider-rule"></div>
                    </div>
                    <div id="about" name="about">
                        <img src={AboutImg} id="about-img"/>
                        <div>
                            <p>
                            The Franchise is a fast food business designed to make you happy and add uncommon value to:
                            </p>
                            <ul>
                                <li>
                                Young and growing people
                                </li>
                                <li>
                                Working class families and individuals who desire food and
                                </li>
                                <li>
                                Retirees looking to stay active.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <h1>Our Menu</h1>
                    <div id="divider">
                        <div id="divider-rule"></div>
                    </div>
                    <div id="services" name="services">
                        <img src={Serv1}/>
                        <img src={Serv2}/>
                        <img src={Serv3}/>
                    </div>
                    <div id="testimonials">
                        <p id="testimony">
                            <FormatQuoteIcon/>
                            {this.state.testimonial.testimony}
                            <FormatQuoteIcon/>
                        </p>
                        <p>{this.state.testimonial.testifier}</p>
                    </div>
                    <div id="contact" name="contact">
                            <form id="contact-form">
                                <input type="text" placeholder="Name"/>
                                <input type="email" placeholder="Email" />
                                <textarea placeholder="write ....."></textarea>
                                <button>Send</button>
                            </form>
                        <a target="_blank" href="https://goo.gl/maps/pYq25wvw2gASa1qu7">
                            <img src={LocationImg} width="400" height="270"/>
                        </a>
                    </div>
                    <footer>
                        Designed by Ubah Ebuka
                    </footer>
                </div>
            </div>
        );
    }
}

export default App;