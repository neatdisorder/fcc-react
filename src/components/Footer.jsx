import React from 'react';
import './footer-style.css';

class Footer extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <footer>
        <div id="footer-container">
          <ul>
            <li>
              Ignacio Castillo
            </li>
            <li className="separator">
              //
            </li>
            <li>
              <a href="https://www.linkedin.com/in/nachocast92" target="_blank">
                💼 Linkedin
              </a>
            </li>
            <li className="separator">
              //
            </li>
            <li>
              <a href="https://github.com/neatdisorder" target="_blank">
                🚀 Github
              </a>
            </li>
            <li className="separator">
              //
            </li>
            <li>
              <a href="https://www.freecodecamp.org/nachocast" target="_blank">
                🔥 freeCodeCamp
              </a>
            </li>
          </ul>
        </div>
      </footer>
    );
  };
};

export default Footer;