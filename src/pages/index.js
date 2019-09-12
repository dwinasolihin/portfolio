import React from "react";
import Helmet from "react-helmet";
import Layout from '../components/layout';

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'

class Homepage extends React.Component {
    render() {
        const siteTitle = "Dwina Solihin";

        return (
            <Layout>
                <Helmet title={siteTitle} />

                <section id="one" className="main style1">
                    <div className="grid-wrapper">
                        <div className="col-6">
                            <header className="major">
                                <h2>About Me</h2>
                            </header>
                            <p>I'm a software development engineer with a passion for creating beautiful, intuitive interfaces. 
                                I offer the skills and ability to assist an organization’s needs and create a strong web applications 
                                using my experience in the stages of front-end development such as: information gathering, planning, design 
                                and wireframes, implementation and testing. I am passionate about new technologies and ways to improve 
                                people's quality of life.
                            </p>
                        </div>
                        <div className="col-6">
                            <span className="image fit"><img src={pic01} alt="" /></span>
                        </div>
                    </div>
                </section>

                <section id="two" className="main style2">
                    <div className="grid-wrapper">
                        <div className="col-6">
                            <ul className="major-icons">
                                <li><span className="icon style1 major fa-code"></span></li>
                                <li><span className="icon style2 major fa-bolt"></span></li>
                                <li><span className="icon style3 major fa-camera-retro"></span></li>
                                <li><span className="icon style4 major fa-cog"></span></li>
                                <li><span className="icon style5 major fa-desktop"></span></li>
                                <li><span className="icon style6 major fa-calendar"></span></li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <header className="major">
                                <h2>Skills include:</h2>
                            </header>
                            <h3>Technologies</h3>
                            <p>Experience in:
                                <ul className="skills-list"> 
                                Technologies
                                    <li>HTML5 &amp; CSS3</li>
                                    <li>JavaScript</li>
                                    <li>VueJS</li>
                                    <li>GeoSpatial - Mapbox</li>
                                    <li>Data Visualization - Plotly</li>
                                </ul>
                                <ul className="skills-list"> Micellaneous Technologies
                                    <li>Adobe Experience Design (XD)</li>
                                    <li>Adobe Illustrator</li>
                                    <li>Git</li>
                                    <li>Sass</li>
                                </ul>
                            </p>
                            <h3>Soft</h3>
                            <p>Experience in:
                                <ul className="skills-list">
                                    <li>Information gathering</li>
                                    <li>Research and Plannning of web page layouts, colors, and designs</li>
                                    <li>Design and Wireframing</li>
                                    <li>Testing (e.g. use case testing)</li>
                                    <li>Maintenance of web pages</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </section>

                <section id="three" className="main style1 special">
                    <div className="grid-wrapper">
                        <div className="col-12">
                            <header className="major">
                                <h2>Experience</h2>
                            </header>
                            <p>Here are a few projects I have worked on</p>
                        </div>

                        <div className="col-4">
                            <span className="image fit"><img src={pic02} alt="" /></span>
                            <h3>Magna feugiat lorem</h3>
                            <p>Adipiscing a commodo ante nunc magna lorem et interdum mi ante nunc lobortis non amet vis sed volutpat et nascetur.</p>
                            <ul className="actions">
                                <li><a href="https://app.interactiveoceans.washington.edu/" className="button">Web Application</a></li>
                            </ul>
                        </div>
                        <div className="col-4">
                            <span className="image fit"><img src={pic03} alt="" /></span>
                            <h3>Magna feugiat lorem</h3>
                            <p>Adipiscing a commodo ante nunc magna lorem et interdum mi ante nunc lobortis non amet vis sed volutpat et nascetur.</p>
                            <ul className="actions">
                                <li><a href="https://cerdasfoundation.org/" className="button">Website</a></li>
                            </ul>
                        </div>
                        <div className="col-4">
                            <span className="image fit"><img src={pic04} alt="" /></span>
                            <h3>Magna feugiat lorem</h3>
                            <p>Adipiscing a commodo ante nunc magna lorem et interdum mi ante nunc lobortis non amet vis sed volutpat et nascetur.</p>
                            <ul className="actions">
                                <li><a href="https://dwinas.com/" className="button">Website</a></li>
                            </ul>
                        </div>

                    </div>
                </section>

                <section id="four" className="main style2 special">
                    <div className="container">
                        <header className="major">
                            <h2>Education</h2>
                        </header>
                        <p>Sed lacus nascetur ac ante amet sapien.</p>
                        <ul className="actions uniform">
                            <li><a href="#" className="button special">Sign Up</a></li>
                            <li><a href="#" className="button">Learn More</a></li>
                        </ul>
                    </div>
                </section>
            </Layout>
        );
    }
}

export default Homepage;