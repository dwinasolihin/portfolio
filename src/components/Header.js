import React from 'react'

class Header extends React.Component {
    render() {
        return (
            <section id="header">
                <div className="inner">
                    <span className="icon major fa-cloud"></span>
                    <h1>Hi, I'm <strong>Dwina</strong><br /></h1>
                    <p>Front-end Software Development Engineer at University of Washington. 
Let’s connect!</p>
                    <ul className="actions">
                        <li><a href="#one" className="button scrolly">Get to know me :)</a></li>
                    </ul>
                </div>
            </section>
        )
    }
}

export default Header
