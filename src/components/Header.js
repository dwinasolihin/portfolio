import React from 'react'

class Header extends React.Component {
    render() {
        return (
            <section id="header">
                <div className="inner">
                    <span className="icon major fa-cloud"></span>
                    <h1><strong>Dwina Solihin</strong><br /></h1>
                    <p>Front-End Software Developer in Seattle</p>
                    <ul className="actions">
                        <li><a href="#one" className="button scrolly">About Me</a></li>
                    </ul>
                </div>
            </section>
        )
    }
}

export default Header
