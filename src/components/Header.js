import React from 'react'

class Header extends React.Component {
    render() {
        return (
            <section id="header">
                <div className="inner">
                    <span className="icon major fa-cloud"></span>
                    <h1><strong>Hi, I'm Dwina</strong><br /></h1>
                    <p>Front-End Software Development Engineer based in Seattle, WA</p>
                    <ul className="actions">
                        <li><a href="#one" className="button scrolly">About Me</a></li>
                    </ul>
                </div>
            </section>
        )
    }
}

export default Header
