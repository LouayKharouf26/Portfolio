
import './App.css';
import Aos from 'aos';
import React, { useState } from 'react';
import './linkedin1.png';
import ProgressBar from "@ramonak/react-progress-bar";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import CloseButton from 'react-bootstrap/CloseButton';
function App() {
  Aos.init();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="App">
     <i class="bi bi-list mobile-nav-toggle d-lg-none"></i>
 
  <header id="header" class="d-flex flex-column justify-content-center">

    <nav id="navbar" class="navbar nav-menu">
      <ul>
        <li><a href="#hero" class="nav-link scrollto "><i class="bx bx-home"></i> <span>Home</span></a></li>
        <li><a href="#about" class="nav-link scrollto"><i class="bx bx-user"></i> <span>About</span></a></li>
        <li><a href="#resume" class="nav-link scrollto"><i class="bx bx-file-blank"></i> <span>Resume</span></a></li>
        <li><a href="#portfolio" class="nav-link scrollto"><i class="bx bx-book-content"></i> <span>Projects</span></a></li>
        <li><a href="#services" class="nav-link scrollto"><i class="bx bx-server"></i> <span>Download CV</span></a></li>
        <li><a href="#contact" class="nav-link scrollto"><i class="bx bx-envelope"></i> <span>Contact</span></a></li>
      </ul>
    </nav>
  </header>
  <section id="hero" class="d-flex flex-column justify-content-center">
    <div class="container" data-aos="zoom-in" data-aos-delay="100">
      <h1>Louay Kharouf</h1>
      <p class="typewriter ">Network Engineering Student | Web Developer | DevOps&Cloud enthusiast </p>
      <div class="social-links">
        <a href="https://www.facebook.com/louay.kharouf/" class="facebook"><i class="bx bxl-facebook"></i></a>
        <a href="https://github.com/Louaykharouf26" class="google-plus"><i class="bx bxl-github"></i></a>
        <a href="https://www.linkedin.com/in/louay-k-77072083/" class="linkedin"><i class="bx bxl-linkedin"></i></a>
        <a href="https://medium.com/@louay.khrouf" class="medium"><i class="bi bi-medium"></i></a>
 
      </div>
    </div>
  </section>
  <main id="main">
  <section id="about" class="about">
      <div class="container" data-aos="fade-up">
      <div class="section-title">
          <h2>About</h2>
          <p>I m a Network Engineering Student in National Institute of Applied Science and Technology . I have some 
            skills on the web developpment . I m also cybersecurity enthusiast with some skills on the web security and forensics .
            and also devops enthusiast .
          </p>
        </div>
        <div class="row">
          <div class="col-lg-4">
           <img src={require("./linkedin1.png")} class="img-fluid" alt='louay'></img>
          </div>
          <div class="col-lg-8 pt-4 pt-lg-0 content">
          <h3>Network Engineering Student &amp; Web Developer &amp; Cybersecurity Enthusiast &amp; CTF player &amp; Devops Enthusiast.</h3>
          <p class="fst-italic ">
              Frontend - Backend - Web security - Forensics - Devops
            </p>
          <div class="row">
              <div class="col-lg-6">
                <ul>
                  <li><i class="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>26 January 2000</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+216 29 302 491 </span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>City:</strong> <span>Tunis, Tunisia</span></li>
                </ul>
              </div>
              <div class="col-lg-6">
                <ul>
                  <li><i class="bi bi-chevron-right"></i> <strong>Age:</strong> <span>22</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>2nd year bachelor degree</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                </ul>
              </div>
              </div>
          </div>
          </div>
      </div>
        </section>
        <section id="skills" class="skills section-bg">
      <div class="container" data-aos="fade-up">
        <div class="section-title">
        <h2>Skills</h2>
        <p>Summary of my Skills</p>
        </div>
        <div class="row skills-content">

<div class="col-lg-6">

  <div class="progress">
    <span class="skill">HTML <i class="val">100%</i></span>
    <ProgressBar completed={100} />
  </div>
  <div class="progress">
    <span class="skill">CSS <i class="val">100%</i></span>
    <ProgressBar completed={100} />
  </div>
  <div class="progress">
    <span class="skill">JavaScript <i class="val">50%</i></span>
    <ProgressBar completed={50} />
  </div>
  <div class="progress">
    <span class="skill">Forensics<i class="val">50%</i></span>
    <ProgressBar completed={50} />
  </div>
  </div>
  <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
  <div class="progress">
    <span class="skill">Laravel <i class="val">50%</i></span>
    <ProgressBar completed={50} />
  </div>
  <div class="progress">
    <span class="skill">React JS <i class="val">50%</i></span>
    <ProgressBar completed={50} />
  </div>
  <div class="progress">
    <span class="skill">MySQL<i class="val">50%</i></span>
    <ProgressBar completed={50} />
  </div>
  <div class="progress">
    <span class="skill">Web Security<i class="val">30%</i></span>
    <ProgressBar completed={30} />
  </div>
  </div>
        </div>
        </div>
        </section>
        <section id="resume" class="resume">
      <div class="container" data-aos="fade-up">
      <div class="section-title">
          <h2>Resume</h2>
          <p>
            Here is a quick representation of my resume 
          </p>
          </div>
          <div class="row">
          <div class="col-lg-6" data-aos="fade-up">
            <h3 class="resume-title">Summary</h3>
            <div class="resume-item pb-0">
              <h4>Louay Kharouf</h4>
              <p><em>
              Network Engineering Student , Web developper with some frontend skills and backend basics 
              Cybersecurity enthusiast and CTF player 
                </em></p>
              <ul>
                <li>Tunis , Tunisia</li>
                <li>+216 29 302 491</li>
                <li>louaykharouf@gmail</li>
              </ul>
            </div>
            <h3 class="resume-title">Education</h3>
            <div class="resume-item">
              <h4>Integrated preparatory course</h4>
              <h5>2018 - 2021</h5>
              <p><em>National Institute of Applied Sciences Technology (INSAT)</em></p>
              <p>
              I study the pre-engineering courses in the field MPI 
                </p>
            </div>
            <div class="resume-item">
              <h4>Engineering Course </h4>
              <h5>2021 - Now</h5>
              <p><em>National Institute of Applied Sciences Technology (INSAT)</em></p>
              <p>
              I choose to study the Network and Telecommunication Engineering course to get the engineering diplomate 
                </p>
            </div>
            <h3 class="resume-title">Certificates</h3>
            <div class="resume-item">
            
              <p>
              CCNA Routing and Switching: Introduction to Networks

                </p>
            </div>
            </div>
            <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 class="resume-title">Professional Experience</h3>
            <div class="resume-item">
              <h4>Web development Intern</h4>
              <h5>July 2022 - Auguest 2022</h5>
              <p><em>Tmkiin dev Informatique ,Gabes, Tunisia </em></p>
              <p>The development of a web application for car and health insurance using laravel  </p>
            </div>
            <h3 class="resume-title">Organisations</h3>
            <div class="resume-item">
              <h4>Securinets  INSAT</h4>
              <h5>2018 - Present</h5>
              <p><em>Member</em></p>
              <h4>Google Developer Student Clubs INSAT</h4>
              <h5>2021 - Present</h5>
              <p><em>Member</em></p>
              <h4>ACM INSAT</h4>
              <h5>2021 - Present</h5>
              <p><em>Member</em></p>
              
            </div>
            </div>
            </div>
            
        </div>
        </section>
        <section id="portfolio" class="portfolio section-bg">
      <div class="container" data-aos="fade-up">
      <div class="section-title">
          <h2>Projects</h2>
          <p>Here is some of my projects the code of each project is in my github</p>
          </div>
          <div class="row portfolio-container" data-aos="fade-up" data-aos-delay="200">
          <div class="container">
  <div class="row align-items-start">
    <div class="col">
    <img src={require("./background2.jpg")} class="ctfprojet" alt='louay'></img>
    <h3>CTF Plateform</h3>
    <p>Link for the project :</p>
    
    <p>Example of a CTF plateform </p>
    <p>Technology Used : Laravel</p>
    </div>
    <div class="col">
    <img src={require("./Tmkiin.png")} class="tmkiinprojet" alt='louay'></img>
    <h3>Tmkiin Insurance</h3>
    <p>This project is to manage the health insurance and the car insurance for the users </p>
    <p>Technology Used : Laravel</p>
   </div>
    <div class="col">
    <img src={require("./winn.png")} class="wiinprojet" alt='louay'></img>
    <h3 class="wiin">WiiN</h3>
    <p class="desc">This project is to propose services that exists near to the location of the user  </p>
    <p p class="tech">Technology Used : Laravel</p>
    </div>
    <div class="row">
    <img src={require("./OnlineTest.png")} class="testinyprojet" alt='louay'></img>
    <h3 class="testiny">Testiny</h3>
    <p class="testinydesc">Web application for recruiters to test the devolopers  </p>
    <p p class="tech2">Technology Used : ReactJS NestJS MySQL</p>
    </div>
  </div>

              
                
              </div>
              </div>
        
    </div>
      </section>
      <section id="services" class="services">
      <div class="container">

        <div class="section-title">
          <h2>Download CV</h2>
          <p>Here u can Download my CV for more details </p>
        </div>
<center>
        
          <div class="col-lg-4 col-md-6 icon-box" data-aos="fade-up">
          <a href={require("./LouaykharoufCV.pdf")}  download>
  <img src={require("./portfoliodownload.png")} alt="CV" width="104" height="142"></img>
          </a>
          </div>
          </center>
          </div>
          
    </section>
     
      <section id="contact" class="contact">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>Contact</h2>
        </div>

        <div class="row mt-1">

          <div class="col-lg-4">
            <div class="info">
              <div class="address">
                <i class="bi bi-geo-alt"></i>
                <h4>Location:</h4>
                <p>Tunis , Tunisia </p>
              </div>

              <div class="email">
                <i class="bi bi-envelope"></i>
                <h4>Email:</h4>
                <p>louaykharouf@gmail.com</p>
              </div>

              <div class="phone">
                <i class="bi bi-phone"></i>
                <h4>Call:</h4>
                <p>+216 29302491</p>
              </div>

            </div>

          </div>


        </div>

      </div>
    </section>

      
  </main>
    </div>
  );
}

export default App;
