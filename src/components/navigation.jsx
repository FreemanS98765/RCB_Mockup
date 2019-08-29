import React, { Component } from "react";
import ReactDom from "react-dom";

class Navigation extends Component {
  render() {
    return (
      <div className="navbar">
        <ul className="navigation">
          <li className="navigation__item">Design</li>
          <li className="navigation__item">Printing</li>
          <li className="navigation__item">Mailing & Logistics</li>
        </ul>
      </div>
    );
  }
}

export default Navigation;
