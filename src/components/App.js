import React, { Component } from 'react';
import Navigation from './navigation';
import logo from './logo.svg';
import rcb from './RCB_logo.png';
import servPrinting from './serv-btn-printing_250h.jpg';
import servMailing from './serv-btn-mailing_250h.jpg';
import servMarketing from './serv-btn-marketing_250h.jpg';
import project1 from './01-Print-Design_290h.jpg';
import project2 from './02-Logo-Design_290h.jpg';
import project3 from './03-Large-Run_290h.jpg';
import project4 from './04-Branded-Items_290h.jpg';
import g7_logo from './g7-logo_65h.png';
import heidelberg from './heidelberg_65h.png';
import pine from './PINE_65h.png';
import ppia from './PPIA-65h.png';
import fsc from './FSCiwstBJ.jpg';
import asi from './ASI-logo-65h.png';

class App extends Component {

  // fires before component is mounted
  constructor(props) {
    // makes this refer to this component
    super(props);
  }

  render() {
    return (
      <div className="App">
      <div className="preheader">
        <div className="container">
          <ul className="navigation">
            <li className="navigation__item">(603) 456-3101</li>
            <li className="navigation__item">Contact Us</li>
          </ul>
          <ul className="navigation">
            <li className="navigation__item"><a href="#">About Us</a></li>
            <li className="navigation__item"><a href="#">Resources</a></li>
            <li className="navigation__item"><a href="#">Customer Tools</a></li>
            <li className="navigation__item"><a href="#">Send A File</a></li>
          </ul>
        </div>
      </div>
      <header className="header">
        <div className="navbar container">
          <a href="#"><img src={rcb} alt="" className="logo" /></a>
          <ul className="navigation">
            <li className="navigation__item"><a href="#"><span className="icon icon-spinner"></span>Design</a></li>
            <li className="navigation__item"><a href="#"><span className="icon icon-stack-overflow"></span>Printing</a></li>
            <li className="navigation__item"><a href="#"><span className="icon icon-cubes"></span>Mailing & Logistics</a></li>
            <li className="navigation__item"><a href="#"><span className="icon icon-sitemap"></span>Marketing</a></li>
            <li className="navigation__item"><a href="#"><span className="icon icon-flask"></span>Solutions</a></li>
          </ul>
        </div>
      </header>
      <section className="banner">

      </section>
      <section className="cta">
        <div className="container">
          <article className="cta__card">
            <a href="#"><img src={servPrinting} alt="" className="cta__card-icon" /></a>
            <a href="#"><h3 className="cta__card-title">Printing & Bindery</h3></a>
            <p>With the quality and consistency to truly represent your brand.</p>
          </article>
          <article className="cta__card">
            <a href="#"><img src={servMailing} alt="" className="cta__card-icon" /></a>
            <a href="#"><h3 className="cta__card-title">Mailing & Logistics</h3></a>
            <p>Personalized data and distribution solutions, on-time and on-budget.</p>
          </article>
          <article className="cta__card">
            <a href="#"><img src={servMarketing} alt="" className="cta__card-icon" /></a>
            <a href="#"><h3 className="cta__card-title">Marketing & Design</h3></a>
            <p>The perfect blend of strategy and creativity for measurable results.</p>
          </article>
        </div>
      </section>
      <section className="projects">
        <div className="container">
          <ul className="project__list">
            <li className="project__list-item">
              <article>
                <img src={project1} alt="" className="project__list-image" />
                <ul className="services__list">
                  <li className="services__list-item"><a href="#">Graphic Design</a></li>
                  <li className="services__list-item"><a href="#">Print Design</a></li>
                  <li className="services__list-item"><a href="#">advertisements</a></li>
                  <li className="services__list-item"><a href="#">Web Design</a></li>
                </ul>
              </article>
            </li>
            <li className="project__list-item">
              <article>
                <img src={project2} alt="" className="project__list-image" />
                <ul className="services__list">
                  <li className="services__list-item"><a href="#">Graphic Design</a></li>
                  <li className="services__list-item"><a href="#">Print Design</a></li>
                  <li className="services__list-item"><a href="#">advertisements</a></li>
                  <li className="services__list-item"><a href="#">Web Design</a></li>
                </ul>
              </article>
            </li>
            <li className="project__list-item">
              <article>
                <img src={project3} alt="" className="project__list-image" />
                <ul className="services__list">
                  <li className="services__list-item"><a href="#">Graphic Design</a></li>
                  <li className="services__list-item"><a href="#">Print Design</a></li>
                  <li className="services__list-item"><a href="#">advertisements</a></li>
                  <li className="services__list-item"><a href="#">Web Design</a></li>
                </ul>
              </article>
            </li>
            <li className="project__list-item">
              <article>
                <img src={project4} alt="" className="project__list-image" />
                <ul className="services__list">
                  <li className="services__list-item"><a href="#">Graphic Design</a></li>
                  <li className="services__list-item"><a href="#">Print Design</a></li>
                  <li className="services__list-item"><a href="#">advertisements</a></li>
                  <li className="services__list-item"><a href="#">Web Design</a></li>
                </ul>
              </article>
            </li>
          </ul>
        </div>
      </section>
      <section className="affiliations">
        <div className="container">
          <ul className="affiliations__list">
            <li className="affiliations__list-item"><a href="#"><img src={g7_logo} alt="" className="affiliations__logo" /></a></li>
            <li className="affiliations__list-item"><a href="#"><img src={heidelberg} alt="" className="affiliations__logo" /></a></li>
            <li className="affiliations__list-item"><a href="#"><img src={pine} alt="" className="affiliations__logo" /></a></li>
            <li className="affiliations__list-item"><a href="#"><img src={ppia} alt="" className="affiliations__logo" /></a></li>
            <li className="affiliations__list-item"><a href="#"><img src={fsc} alt="" className="affiliations__logo" /></a></li>
            <li className="affiliations__list-item"><a href="#"><img src={asi} alt="" className="affiliations__logo" /></a></li>
          </ul>
        </div>
      </section>
      <footer className="footer">
        <div className="container">
          <div className="widget-area">
            <h6 className="widget-area__title">Contact Us</h6>
            <div className="widget">
              <h5>R.C Brayshaw & Company Headquarters</h5>
              <p>45 Waterloo Street<br />Warner, NH 03278 </p>
              <p>P. 603-456-3101</p>
              <p>F. 603-456-3105</p>
            </div>
            <div className="widget">
              <h5>R.C BRAYSHAW & COMPANY DIGITAL FACILITY</h5>
              <p>11 Commerce Avenue<br />West Lebanon, NH 03784 </p>
              <p>P. 603-298-5057</p>
              <p>F. 603-276-7018</p>
            </div>
          </div>
          <div className="widget-area">
            <h6 className="widget-area__title">Menu</h6>
            <div className="widget">
              <ul className="widget__menu">
                <li>Design</li>
                <li>Printing</li>
                <li>Mailing & Logistics</li>
                <li>Marketing</li>
                <li>Solutions</li>
              </ul>
            </div>
          </div>
          <div className="widget-area">
            <h6 className="widget-area__title">Recent Posts</h6>
            <div className="widget">
              <ul className="widget__menu">
                <li>Design</li>
                <li>Printing</li>
                <li>Mailing & Logistics</li>
                <li>Marketing</li>
                <li>Solutions</li>
              </ul>
            </div>
          </div>
          <div className="widget-area">
            <h6 className="widget-area__title">E-Newsletter</h6>
            <div className="widget">
              <p>Sign up for our Newsletter Here!</p>
            </div>
          </div>
        </div>
      </footer>
      <section className="bottom-bar">
        <div className="container">
          <h6 className="copyright">R.C. BRAYSHAW & COMPANY, COPYRIGHT © 2019 | PRIVACY POLICY | CAREERS</h6>
          <span className="toTop">Back to Top</span>
        </div>
      </section>
      </div>
    );
  }
}

export default App;
