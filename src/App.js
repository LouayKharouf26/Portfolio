
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
        <li><a href="#home" class="nav-link scrollto "><i class="bx bx-home"></i> <span>Home</span></a></li>
        <li><a href="#about" class="nav-link scrollto"><i class="bx bx-user"></i> <span>About</span></a></li>
        <li><a href="#resume" class="nav-link scrollto"><i class="bx bx-file-blank"></i> <span>Resume</span></a></li>
        <li><a href="#portfolio" class="nav-link scrollto"><i class="bx bx-book-content"></i> <span>Projects</span></a></li>
        <li><a href="#services" class="nav-link scrollto"><i class="bx bx-server"></i> <span>Download CV</span></a></li>
        <li><a href="#contact" class="nav-link scrollto"><i class="bx bx-envelope"></i> <span>Contact</span></a></li>
      </ul>
    </nav>
  </header>
  <section id="home" class="d-flex flex-column justify-content-center">
    <div class="container" data-aos="zoom-in" data-aos-delay="100">
      <h1>Louay Khrouf</h1>
      <p class="typewriter "> R&D Engineer @Berger-Levrault | PhD Student @INRIA Lille   </p>
       <p class="typewriter "> Graduated from @INSAT </p>
      <p  class="typewriter "> DevOps&Cloud enthusiast | Web Developer | CTF Player</p>
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
          <p>
            Currently an R&D Intern in the GreenIT field at Berger-Levrault the office of Montpellier .
            I am a Network Engineering Student in National Institute of Applied Science and Technology and a devops enthusiast. I have some skills on web developpment. I'm also a cybersecurity enthusiast with some skills on web security and forensics.
          </p>
        </div>
        <div class="row">
          <div class="col-lg-4">
           <img src={require("./linkedin1.png")} class="img-fluid" alt='louay'></img>
          </div>
          <div class="col-lg-8 pt-4 pt-lg-0 content">
          <h3>Network Engineering Student &amp; R&D Intern @Berger-Levrault &amp; Devops & Cloud Enthusiast &amp;Web Developer &amp; Cybersecurity Enthusiast &amp; CTF player .</h3>
          <p class="fst-italic ">
          Devops - GreenIT - Frontend - Backend - Web security - Forensics 
            </p>
          <div class="row">
              <div class="col-lg-6">
                <ul>
                  <li><i class="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>26 January 2000</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+33 6 35 02 70 13 </span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>City:</strong> <span>Montpellier, France</span></li>
                </ul>
              </div>
              <div class="col-lg-6">
                <ul>
                  <li><i class="bi bi-chevron-right"></i> <strong>Age:</strong> <span>25</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Engineer degree and currently PhD student</span></li>
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
    <span class="skill">Dynatrace<i class="val">50%</i></span>
    <ProgressBar completed={50} />
  </div>
  <div class="progress">
    <span class="skill">Neoload<i class="val">50%</i></span>
    <ProgressBar completed={50} />
  </div>
<div class="progress">
    <span class="skill">Docker<i class="val">50%</i></span>
    <ProgressBar completed={50} />
  </div>
  <div class="progress">
    <span class="skill">Terraform<i class="val">50%</i></span>
    <ProgressBar completed={50} />
  </div>
  <div class="progress">
    <span class="skill">Ansible<i class="val">50%</i></span>
    <ProgressBar completed={50} />
  </div>
  <div class="progress">
    <span class="skill">Jenkins<i class="val">50%</i></span>
    <ProgressBar completed={50} />
  </div>
  <div class="progress">
    <span class="skill">ArgoCD<i class="val">50%</i></span>
    <ProgressBar completed={50} />
  </div>
  <div class="progress">
    <span class="skill">Prometheus<i class="val">50%</i></span>
    <ProgressBar completed={50} />
  </div>
  <div class="progress">
    <span class="skill">Grafana<i class="val">50%</i></span>
    <ProgressBar completed={50} />
  </div>
  <div class="progress">
    <span class="skill">K8S<i class="val">50%</i></span>
    <ProgressBar completed={50} />
  </div>
  <div class="progress">
    <span class="skill">Gitlab<i class="val">30%</i></span>
    <ProgressBar completed={30} />
  </div>
  <div class="progress">
    <span class="skill">AWS<i class="val">30%</i></span>
    <ProgressBar completed={30} />
  </div>
  <div class="progress">
    <span class="skill">AKS<i class="val">50%</i></span>
    <ProgressBar completed={50} />
  </div>
  <div class="progress">
    <span class="skill">Azure<i class="val">60%</i></span>
    <ProgressBar completed={60} />
  </div>
  <div class="progress">
    <span class="skill">GCP<i class="val">50%</i></span>
    <ProgressBar completed={50} />
  </div>


  </div>
  <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
  <div class="progress">
    <span class="skill">Web Security<i class="val">30%</i></span>
    <ProgressBar completed={30} />
  </div>
  <div class="progress">
    <span class="skill">Dynatrace Carbon module <i class="val">40%</i></span>
    <ProgressBar completed={40} />
  </div>
  <div class="progress">
    <span class="skill">JoularJX , Intel PCM , Scaphandre , PowerJoular<i class="val">50%</i></span>
    <ProgressBar completed={40} />
  </div>
  <div class="progress">
    <span class="skill">Laravel <i class="val">70%</i></span>
    <ProgressBar completed={70} />
  </div>
  <div class="progress">
    <span class="skill">JavaScript <i class="val">70%</i></span>
    <ProgressBar completed={70} />
  </div>
  <div class="progress">
    <span class="skill">SpringBoot <i class="val">50%</i></span>
    <ProgressBar completed={50} />
  </div>
  <div class="progress">
    <span class="skill">Maven<i class="val">50%</i></span>
    <ProgressBar completed={50} />
  </div>

  <div class="progress">
    <span class="skill">NodeJS<i class="val">70%</i></span>
    <ProgressBar completed={70} />
  </div>
  <div class="progress">
    <span class="skill">React JS <i class="val">70%</i></span>
    <ProgressBar completed={70} />
  </div>
  <div class="progress">
    <span class="skill">NestJS<i class="val">50%</i></span>
    <ProgressBar completed={50} />
  </div>
  <div class="progress">
    <span class="skill">MySQL<i class="val">70%</i></span>
    <ProgressBar completed={70} />
  </div>
  <div class="progress">
    <span class="skill">Web Security<i class="val">50%</i></span>
    <ProgressBar completed={50} />
  </div>

  <div class="progress">
    <span class="skill">SonarQube<i class="val">50%</i></span>
    <ProgressBar completed={50} />
  </div>


  <div class="progress">
    <span class="skill">Forensics<i class="val">50%</i></span>
    <ProgressBar completed={50} />
  </div>
  <div class="progress">
    <span class="skill">Linux<i class="val">70%</i></span>
    <ProgressBar completed={70} />
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
              <h4>Louay Khrouf</h4>
              <p><em>
              PhD student @INRIA Lille , R&D Engineer @Berger-Levrault , DevOps and Cloud Enthusiast , Cybersecurity Enthusiast and CTF Player 
                </em></p>
              <ul>
                <li>Montpellier , France</li>
                <li>+33 6 35 02 70 13</li>
                <li>louaykharouf@gmail.com</li>
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
              <h5>2021 - 2024</h5>
              <p><em>National Institute of Applied Sciences Technology (INSAT)</em></p>
              <p>
              I choose to study the Network and Telecommunication Engineering course to get the engineering diplomate 
                </p>
            </div>
                        <div class="resume-item">
              <h4>PhD Student </h4>
              <h5>2025 - now</h5>
              <p><em>Inria - Lille University </em></p>
              <p>
              To continue with the GreenIT internship i joined INRIA as a PhD student in order to investigate deeper the field of GreenIT and to work on the identification of energy hotspots to be more specific identify the energy consumption related to code changes. 
                </p>
            </div>
            <h3 class="resume-title">Certificates</h3>
            <div class="resume-item">
            
              <p>
              GCP Associate Cloud Engineer

                </p>
            </div>
            </div>
            <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 class="resume-title">Professional Experience</h3>
                        <div class="resume-item">
              <h4>R&D Engineer </h4>
              <h5>February 2025 - Present</h5>
              <p><em>Berger-Levrault , Montpellier, France </em></p>
              •PhD thesis Cifre <br></br>
•Identifying energy hotspots<br></br>
•Drift Analysis<br></br>
•Identifying energy consumption of code changes based on the developer's tests<br></br>
•Gitlab, Java, SpringBoot, Linux ...  <br></br>

            </div>
            <div class="resume-item">
              <h4>R&D in the GreenIT Field </h4>
              <h5>April 2024 - September 2024</h5>
              <p><em>Berger-Levrault , Montpellier, France </em></p>
              •Instrumentation for energy consumption analysis <br></br>
•Identifying energy hotspots<br></br>
•Comparing alternative desing solutions (e.g., RPC vs Rest, Mono vs Microservices)<br></br>
•Perfomance load testing for energy measrument<br></br>
•Application deployment on cloud and on premise<br></br>
•PowerJoular , Intel PCM , Neoload , Dynatrace , Java , SpringBoot , Docker , AWS , Gitlab , Scrum  
            </div>
            <div class="resume-item">
              <h4>FullStack , Devops Engineer </h4>
              <h5>July 2023 - September 2023</h5>
              <p><em>Tmkiin dev Informatique ,Gabes, Tunisia </em></p>
              <p>•Development of a payment system <br></br>
                 •Design of a CI/CD pipeline <br></br>
                 •Laravel , Docker , Scrum , Jenkins , Github , AKS (Azure Kubernetes Service) , K8S , MySQL</p>
            </div>
            <div class="resume-item">
              <h4>Web developper</h4>
              <h5>July 2022 - Auguest 2022</h5>
              <p><em>Tmkiin dev Informatique ,Gabes, Tunisia </em></p>
              <p>Development of a web application for managing car and health insurance. <br></br>
•Development of the Frontend website and the backend API to be used for the flutter mobile application <br></br>
•Laravel , MySQL , Scrum </p>
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
          <div class="row">
          <div class="col-lg-6" data-aos="fade-up">
            <div class="project-item pb-0">
              <h4>CTF Plateform </h4>
              <p><em>
              This project consists on developing a CTF plateform <br></br>
              The app is already Dockerized <br></br>
              technology used : Laravel , MySQL , Docker <br></br>
              Github Repo :<a href='https://github.com/Louaykharouf26/CTF-plateform.git'>CTF-plateform Repo</a> 
                </em></p>
            </div>
            <div class="project-item">
              <h4>TODO-app</h4>
              <p><em>
              This project consists on developing a TODO app where user can add tasks , update and delete tasks  
               <br></br>
              The app is already Dockerized and hosted in a k8s cluster<br></br>
              technology used : Laravel , MySQL , Docker , minikube  <br></br>
              Github Repo :<a href='https://github.com/Louaykharouf26/ToDo-APP.git'>TODO_APP Repo</a> 
                </em></p>
            </div>
            <div class="project-item">
              <h4>Testiny APP  </h4>
          
              <p><em>
              This project consists on developing a web application where we have recruiters and developpers 
              the recruiters can add tasks , update and delete tasks and propose quizs to the Developer
              the plateform contains also a fraud detection modal developed with the help of my teammate  
               <br></br>
              The app is already Dockerized<br></br>
              technology used : ReactJS , NestJS , MySQL , Docker , Flask   <br></br>
              Github Repo :<a href='https://github.com/Louaykharouf26/Testiny-app.git'>TESTINY_APP Repo</a> 
                </em></p>
              
            </div>
            <div class="project-item">
              <h4>CloudiVops  </h4>
          
              <p><em>
              This project was made as our end of year project it is about a web application that gives the hand to the user 
              to create the desired infrastructure in azure then it gives him the possibility to configure , monitor and even delete the 
              ressources 
               <br></br>
  
              technology used : ReactJS , ExpressJS , MongoDB , Docker , Ansible , Terraform , Jenkins ,Azure   <br></br>
              Github Repo :<a href='https://github.com/Louaykharouf26/CloudiVops-App.git'>CloudiVops-App Repo</a>
                </em></p>
              
            </div>
            <div class="project-item">
              <h4>BNPL System  </h4>
          
              <p><em>
              
Development of a BNPL (Buy Now Pay Later) payment system that allows purchasing services and paying for
them in installments later. <br></br>
•The application is developed using Laravel and is compatible with all e-commerce websites. <br></br>
•Participation in meetings for task planning and design, as we adopted the SCRUM methodology.<br></br>
•Design of a CI/CD pipeline for deploying the system to a Kubernetes cluster (AKS).<br></br>
               
  
              technology used : Laravel  , MySQL , Docker , ArgoCD  , Jenkins ,AKS  <br></br>
              Github Repo :<a href='https://github.com/Louaykharouf26/BNPL-System.git'>BNPL-System Repo</a>
                </em></p>
              
            </div>
            </div>
            <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            
            <div class="project-item">
              <h4>Tmkiin Insurance</h4>
              
              <p><em>
              Development of a web application for managing car and health insurance.<br></br>
              • We adopted the SCRUM methodology. <br></br>
              • I collaborated with the entire team (project manager, designer, a Flutter developer, and a Laravel developer) for
the planning and design phases of the application.<br></br>
• Conducted meetings with the Flutter developer to design the backend part to align it with the mobile
application.
               <br></br>
              technology used : Laravel , MySQL    <br></br>
              Github Repo :<a href='https://github.com/Louaykharouf26/Tmkiin-Insurance-.git'>Tmkiin_Insurance Repo</a> 
                </em></p>
              
            </div>
            
            <div class="project-item">
            <h4>WiiN App</h4>
            <p><em>
             WiiN App is a web application that consists on dveloping a web application to regroup some services 
              and propose to the user the services that he desire and near to him   <br></br>
              The app is already Dockerized<br></br>
              
              technology used : Laravel , MySQL , Docker   <br></br>
              Github Repo :<a href='https://github.com/Louaykharouf26/WiiN-APP.git'>WiiN_APP Repo</a> 
                </em></p>
              
            </div>
            <div class="project-item">
            <h4>Zabbix Deployment </h4>
            <p><em>
            In this project we managed to deploy Zabbix for the monitoring of a network architecture  <br></br>
              
               <br></br>
              technology used : Zabbix , Linux , GNS3 , Networking basics   <br></br>
             
                </em></p>
              
            </div>
            <div class="project-item">
            <h4>FilesRepo App</h4>
            <p><em>
             FilesRepo App is a web application that consists on dveloping a web application to manage the storage account
             made by the user by adding and deleting files   <br></br>
              The app is already Dockerized<br></br>
              
              technology used : ReactJS , MongoDB , ExpressJS , Azure , Docker , Terraform , K8S , Jenkins   <br></br>
              Github Repo :<a href='https://github.com/Louaykharouf26/FilesReposProject.git'>FilesRepo Repo</a> 
                </em></p>
              
            </div>
            <div class="project-item">
            <h4>Monitoring of k8s Multi-cluster Architecture  App</h4>
            <p><em>
              Provision 2 AKS clusters using Terraform,
              Configure the clusters by a Jenkins Pipeline (installing prometheus inside both of them)
              Provision a virtual machine where i added prometheus server and grafana 
              monitor the clusters using grafana 
                 <br></br>
              
              technology used : Azure , Terraform , K8S , Jenkins , AKS  <br></br>
              Github Repo :<a href='https://github.com/Louaykharouf26/Multi-Cluster-Monitoring.git'>Multi-Cluster Monitoring Repo</a> 
                </em></p>
              
            </div>
                        <div class="project-item">
            <h4>Dynatrace deployment</h4>
            <p><em>
              Provision EKS cluster using Terraform, 
Deployment of Dynatrace on the EKS and fetching metrics, 
Automate the process of provisionning and deployment and metrics fetching using Gitlab CI 
                 <br></br>
              
              technology used : Gitlab CI , Terraform , K8S , EKS , Dynatrace  <br></br>
              Github Repo :<a href='https://github.com/LouayKharouf26/Dynatrace-Deployment'>Dynatrace Deployment</a> 
                </em></p>
              
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
                <p>Montpellier , France </p>
              </div>

              <div class="email">
                <i class="bi bi-envelope"></i>
                <h4>Email:</h4>
                <p>louaykharouf@gmail.com</p>
              </div>

              <div class="phone">
                <i class="bi bi-phone"></i>
                <h4>Call:</h4>
                <p>+33 6 35 02 70 13</p>
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
