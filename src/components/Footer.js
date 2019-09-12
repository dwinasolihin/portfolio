import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <section id="footer">
                <ul className="copyright">
                <ul className="icons">
                    <li><a href="mailto:dwinasolihin@gmail.com" className="icon alt fa-envelope"><span className="label">Gatsby.JS</span></a></li>
                    <li><a href="https://www.linkedin.com/in/dwinasolihin/" className="icon alt fa-linkedin"><span className="label">Sass</span></a></li>
                    <li><a href="https://github.com/dwinasolihin/" className="icon alt fa-github"><span className="label">React.JS</span></a></li>
                </ul>
                    <li>&copy; 2019, Created by Dwina Solihin</li>
                    <li><span id="siteseal"><script async type="text/javascript" src="https://seal.godaddy.com/getSeal?sealID=vgqh6GxqRlbBWqUP9Dh5GvzGgNDen2IZZh55sKjX58SOj50avDiZK7cMuTt0"></script></span></li>
                </ul>
            </section>
        )
    }
}

export default Footer
