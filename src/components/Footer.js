import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <section id="footer">
                <ul className="copyright">
                <ul className="icons">
                    <li><a href="mailto:dwina@uw.edu" className="icon alt fa-envelope"><span className="label">Gatsby.JS</span></a></li>
                    <li><a href="https://www.linkedin.com/in/dwinasolihin/" className="icon alt fa-linkedin"><span className="label">Sass</span></a></li>
                    <li><a href="https://github.com/dwinasolihin/" className="icon alt fa-github"><span className="label">React.JS</span></a></li>
                </ul>
                    <li>&copy; Dwina Solihin</li><li>Powered by:</li>
                </ul>
                <ul className="icons">
                    <li><a href="mailto:dwina@uw.edu" className="icon alt fa-envelope"><span className="label">Gatsby.JS</span></a></li>
                    <li><a href="https://www.linkedin.com/in/dwinasolihin/" className="icon alt fa-linkedin"><span className="label">Sass</span></a></li>
                    <li><a href="https://github.com/dwinasolihin/" className="icon alt fa-github"><span className="label">React.JS</span></a></li>
                </ul>
            </section>
        )
    }
}

export default Footer
