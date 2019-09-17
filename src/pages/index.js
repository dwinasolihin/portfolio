import React from "react";
import Helmet from "react-helmet";
import Layout from '../components/layout';

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.png'
import pic03 from '../assets/images/pic03.png'
import pic04 from '../assets/images/pic04.png'

class Homepage extends React.Component {
    render() {
        const siteTitle = "Dwina Solihin";

        return (
            <Layout>
                <Helmet title={siteTitle} />

                <section id="one" className="main style1">
                    <div className="grid-wrapper">
                        <div className="col-4">
                            <header className="major">
                                <h2>About me</h2>
                            </header>
                            <p> I am a software development engineer with a passion for creating beautiful, intuitive interfaces. 
                                I offer the skills and ability to assist an organization’s needs and create strong web applications 
                                using my experience in the stages of front-end development such as: information gathering, planning, design 
                                and wireframes, implementation and testing. I am passionate about new technologies and ways to improve 
                                people's quality of life.
                            </p>
                        </div>
                        <div className="col-4">
                            <span className="image fit"><img src={pic01} alt="" /></span>
                        </div>
                        <div className="col-4">
                            <header className="major">
                                <h2>Details</h2>
                            </header>
                            <div>
                                <h5 style={{margin: `0 0 0 0`}}><strong>Name:</strong></h5>
                                <p>Dwina Solihin</p>
                            </div>
                            <div>
                                <h5 style={{margin: `0 0 0 0`}}><strong>Location:</strong></h5>
                                <p>Seattle, WA</p>
                            </div>
                            <div>
                                <h5 style={{margin: `0 0 0 0`}}><strong>Hobbies include:</strong></h5>
                                <p>Traveling the world, going to cool concerts, reading all sorts of books</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="two" className="main style2">
                    <div className="grid-wrapper">
                        {/* <div className="col-6">
                            <ul className="major-icons">
                                <li><span className="icon style1 major fa-code"></span></li>
                                <li><span className="icon style2 major fa-bolt"></span></li>
                                <li><span className="icon style3 major fa-camera-retro"></span></li>
                                <li><span className="icon style4 major fa-cog"></span></li>
                                <li><span className="icon style5 major fa-desktop"></span></li>
                                <li><span className="icon style6 major fa-calendar"></span></li>
                            </ul>
                        </div> */}
                        <div className="col-6">
                            <header className="major">
                                <h2>Software &amp; Platform Proficiencies</h2>
                            </header>
                            <p>
                                <ul className="skills-list"> 
                                    <li>Vue</li>
                                    <li>React</li>
                                    <li>JavaScript</li>
                                    <li>HTML5 &amp; CSS3</li>
                                    <li>GeoSpatial Tools - Mapbox</li>
                                    <li>Data Visualization Tools - Plotly</li>
                                    <li>Adobe Experience Design (XD)</li>
                                    <li>Git</li>
                                    <li>Sass</li>
                                </ul>
                            </p>
                        </div>
                        <div className="col-6">
                            <header className="major">
                                <h2>Areas of Expertise</h2>
                            </header>
                            <p>
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
                            <span className="image fit"><img src={pic04} alt="" /></span>
                            <h3>Personal Website</h3>
                            <h4>November 2018 - present</h4>
                            <p> The purpose of this personal website was to improve my skills in working with different Javascript technologies 
                                such as React and Bootstrap. For this website, I utilize GatsbyJS which is a React-based, GraphQL powered, modern 
                                front-end framework. This allows me to customize my personal website with my own development skills.  

                            </p>
                            <ul className="actions">
                                <li><a href="https://dwinas.com/" className="button">Website</a></li>
                            </ul>
                        </div>
                        <div className="col-4">
                            <span className="image fit"><img src={pic02} alt="" /></span>
                            <h3>Interactive Oceans Data Portal</h3>
                             <h4>October 2018 - present</h4>
                            <p> The purpose of this data portal is to enhance the scientific and public use of these large and complex data 
                                sets by implementing an interactive map interface using MapBox for data discovery and utilizing Plotly to 
                                implement a data visualization application for data exploration.
                                The data sets are highly complex - collected from over 30 different sensors located at spatial scales 
                                from less than 1 meter to over 400 kilometers apart, with sampling frequencies ranging from microseconds to
                                days.</p>
                            <ul className="actions">
                                <li><a href="https://app.interactiveoceans.washington.edu/" className="button">Web Application</a></li>
                            </ul>
                        </div>
                        <div className="col-4">
                            <span className="image fit"><img src={pic03} alt="" /></span>
                            <h3>CERDAS Foundation</h3>
                            <h4>July 2017 - September 2018</h4>
                            <p> The purpose of the website redesign was to 
                                draw a wider audience into our cause and increase donations. During my time on this team, I worked closely 
                                with the Board of Directors and other designers to gather information and research other non-profits to create 
                                various wireframes to determine what the main functionality of their website should and move forward with a design 
                                plan. Also, I developed use case testing plans for interviewing focus groups.</p>
                            <ul className="actions">
                                <li><a href="https://cerdasfoundation.org/" className="button">Website</a></li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section id="four" className="main style2 special">
                    <header className="major">
                            <h2>Education</h2>
                        </header>
                    <div className="grid-wrapper">
                    <div className="col-6">
                            <h5>University of Washington - Professional and Continuing Education</h5>
                            <h6>Issued August 2018</h6>
                            <p>Certificate in Front-end Development with HTML, CSS, and Javascript</p>
                            <a href="https://www.pce.uw.edu/certificates/front-end-development-with-html-css-and-javascript" className="button">Learn More</a>
                        </div>

                        <div className="col-6">
                            <h5>University of Washington - Bothell</h5>
                            <h6>September 2014 - June 2017</h6>
                            <p>Bachelor of Science in Computer Science and Software Engineering</p>
                            <a href="https://www.uwb.edu/bscss" className="button">Learn More</a>
                            <br/><br/>
                            <h6>Activities: Co-director and operations manager of H[app]iness Development, an on-campus club dedicated to help 
                                students learn how to build apps on an iOS and Android platform from 2015-2016.</h6>
                        </div>
                    </div>
                </section>
            </Layout>
        );
    }
}

export default Homepage;