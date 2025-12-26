
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
        <li><a href="#research" class="nav-link scrollto"><i class="bx bx-article"></i> <span>Research</span></a></li>
  
      {/*  <li><a href="#services" class="nav-link scrollto"><i class="bx bx-server"></i> <span>Download CV</span></a></li> */}
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
   


        <a href="https://github.com/Louaykharouf26" class="google-plus"><i class="bx bxl-github"></i></a>
        <a href="https://www.linkedin.com/in/louay-k-77072083/" class="linkedin"><i class="bx bxl-linkedin"></i></a>
        <a href="https://medium.com/@louay.khrouf" class="medium"><i class="bi bi-medium"></i></a>
 
      </div>
    </div>
</section>
<main id="main">
<section id="about" className="about">
  <div className="container" data-aos="fade-up">
    <div className="section-title">
      <h2>About</h2>
      <p>
        <strong>R&amp;D Engineer at Berger-Levrault (France)</strong> and{" "}
        <strong>PhD Student at Inria Lille</strong>, working on optimizing the
        energy consumption of software systems through code transformation by
        analyzing the impact of code changes on software energy usage.
        <br />
        I also actively develop my expertise in{" "}
        <strong>DevOps and cloud technologies</strong>, and I am a{" "}
        <strong>cybersecurity enthusiast and CTF player</strong>.
      </p>
    </div>

    <div className="row">
      {/* Image */}
      <div className="col-lg-3 text-center">
        <img
          src={require("./linkedin1.png")}
          className="img-fluid"
          alt="Louay"
          style={{ maxWidth: "200px", borderRadius: "12px" }}
        />
      </div>

      {/* Content */}
      <div className="col-lg-9 pt-4 pt-lg-0 content">
        <h3>
          R&amp;D Engineer @ Berger-Levrault &amp; PhD Student @ Inria Lille | DevOps,
          Cloud &amp; Cybersecurity Enthusiast
        </h3>

        <p className="fst-italic">
          DevOps – GreenIT – Cloud – Backend – Frontend – Web Security – Forensics
        </p>

        <div className="row mt-4">
          {/* Research Interests */}
          <div className="col-lg-6">
            <h4>Research Interests</h4>
            <ul>
              <li>
                <i className="bi bi-chevron-right"></i> Software Sustainability
              </li>
              <li>
                <i className="bi bi-chevron-right"></i> Software Engineering
              </li>
              <li>
                <i className="bi bi-chevron-right"></i> GreenIT 
                
              </li>
                            <li>
                <i className="bi bi-chevron-right"></i> Energy-Aware Software Systems 
                
              </li>
            </ul>
          </div>

          {/* Details */}
          <div className="col-lg-6">
            <h4>Details</h4>
            <ul>
              <li>
                <i className="bi bi-chevron-right"></i>{" "}
                <strong>City:</strong>{" "}
                <span>Villeneuve-d&apos;Ascq, Hauts-de-France</span>
              </li>
              <li>
                <i className="bi bi-chevron-right"></i>{" "}
                <strong>Phone:</strong>{" "}
                <span>+33 6 35 02 70 13</span>
              </li>
              <li>
                <i className="bi bi-chevron-right"></i>{" "}
                <strong>Degree:</strong>{" "}
                <span>Engineer degree &amp; PhD Student</span>
              </li>
              <li>
                <i className="bi bi-chevron-right"></i>{" "}
                <strong>Availability:</strong>{" "}
                <span>Open to collaboration / Freelance</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



<section id="skills" className="skills section-bg">
  <div className="container" data-aos="fade-up">
    <div className="section-title">
      <h2>Skills</h2>
      <p>
        Here is a highlight of the tools I use for cloud and DevOps automation and
        energy consumption measurement.
      </p>
    </div>

    {/* Tools marquee */}
    <div className="tech-slider">
      <div className="tech-track">
        {[
          "terraform-svgrepo-com.svg",
          "sonarqube.png",
          "react-javascript-js-framework-facebook-svgrepo-com.svg",
          "Prometheus.svg",
          "nestjs-svgrepo-com.svg",
          "neoload.png",
          "mysql-svgrepo-com.svg",
          "mysql-logo-svgrepo-com.svg",
          "microsoft-azure-svgrepo-com.svg",
          "linux-svgrepo-com.svg",
          "laravel-svgrepo-com.svg",
          "kubernetes-svgrepo-com.svg",
          "jenkins.svg",
          "java-svgrepo-com.svg",
          "javascript-svgrepo-com.svg",
          "html-svgrepo-com.svg",
          "html5-01-svgrepo-com.svg",
          "Grafana.svg",
          "Google Cloud.svg",
          "gitlab.png",
          "Dynatrace.png",
          "docker-svgrepo-com.svg",
          "css-3-svgrepo-com.svg",
          "css3-01-svgrepo-com.svg",
          "carbon-impact.png",
          "aws.png",
          "Argo CD.svg",
          "Ansible_logo.svg.png",
        ]
          .concat([
            "terraform-svgrepo-com.svg",
            "sonarqube.png",
            "react-javascript-js-framework-facebook-svgrepo-com.svg",
            "Prometheus.svg",
            "nestjs-svgrepo-com.svg",
            "neoload.png",
            "mysql-svgrepo-com.svg",
            "mysql-logo-svgrepo-com.svg",
            "microsoft-azure-svgrepo-com.svg",
            "linux-svgrepo-com.svg",
            "laravel-svgrepo-com.svg",
            "kubernetes-svgrepo-com.svg",
            "jenkins.svg",
            "java-svgrepo-com.svg",
            "javascript-svgrepo-com.svg",
            "html-svgrepo-com.svg",
            "html5-01-svgrepo-com.svg",
            "Grafana.svg",
            "Google Cloud.svg",
            "gitlab.png",
            "Dynatrace.png",
            "docker-svgrepo-com.svg",
            "css-3-svgrepo-com.svg",
            "css3-01-svgrepo-com.svg",
            "carbon-impact.png",
            "aws.png",
            "Argo CD.svg",
            "Ansible_logo.svg.png",
          ])
          .map((icon, idx) => (
            <img
              key={idx}
              src={`/icons/${icon}`}
              alt={icon.replace(/[-_]/g, " ").replace(/\.(png|svg)$/i, "")}
              loading="lazy"
            />
          ))}
      </div>
    </div>

    {/* Certifications */}
    <div className="mt-5 text-center">
      <h3>Certifications</h3>

      <div className="certifications">
        <img
          src="/icons/gcp_certif.png"
          alt="Google Cloud Certification"
          className="certification-logo"
          loading="lazy"
        />
      </div>
    </div>
  </div>
</section>


      {/*  <section id="skills" class="skills section-bg">
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
        </section> */}
        <section id="resume" class="resume">
      <div class="container" data-aos="fade-up">
      <div class="section-title">
          <h2>Resume</h2>
<a
  href={require("./LouaykharoufCV.pdf")}
  download
  className="btn btn-outline-dark"
>
  Download my resume for more details
</a>



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
    {/*  <section id="services" class="services">
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
     */}
     <section id="research" className="research">
  <div className="container" data-aos="fade-up">
    <div className="section-title">
      <h2>Research</h2>
      <p>
        Selected publications grouped by type. Click “Abstract” to expand details,
        and use the PDF button to access the paper.
      </p>
    </div>

    {/* ===================== JOURNAL ARTICLES ===================== */}
    <div className="research-group">
      <h3 className="research-group-title">Journal Articles</h3>

      <div className="research-item">
        <div className="research-header">
          <div className="research-meta">
            <h4 className="research-title">Energy Consumption of Web Applications: Measurement Challenges in Practice
</h4>
            <div className="research-authors">Louay Khrouf, Anas Shatnawi, Romain Rouvoy, Benoit Verhaeghe, Boubou Thiam Niang</div>
            <div className="research-venue">
              <span className="research-editor">IEEE Software </span>
              <span className="research-sep"> • </span>
              <span className="research-year">2025</span>
            </div>
          </div>

          <div className="research-actions">
            <a
              href="https://inria.hal.science/hal-05388914v1/file/Energy_Consumption_of_Web_Applications__Measurement_Challenges_in_Practice___Revision__.pdf"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline-primary btn-sm"
            >
              PDF
            </a>

            <button
              className="btn btn-outline-secondary btn-sm ms-2"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#abs-j-1"
              aria-expanded="false"
              aria-controls="abs-j-1"
            >
              Abstract
            </button>
          </div>
        </div>

        <div id="abs-j-1" className="collapse research-abstract">
          <div className="research-abstract-inner">
            <p className="mb-0">
              Software systems consume about 6% of global energy, and new
regulations promote energy efficiency. However, developers face challenges like
standardized measurement tools, integrating energy monitoring, and interpreting
data meaningfully, which hinders informed decisions balancing energy efficiency
and performance metrics.
While most studies focus on small-scale projects, we addressed this gap with an
industrial case study. We developed a methodology to assess energy impact
using Dynatrace Carbon Impact and NeoLoad, enabling the evaluation of
technology-driven design decisions under production-like conditions. This enabled
the evaluation of technology-driven design decisions, such as frontend
frameworks (Java Swing vs. Angular), backend stacks (legacy Java vs. Spring
Boot), and serialization formats (JSON vs. Protobuf) under production-like
conditions. Our insights highlight several design recommendations for
energy-efficient software in industrial contexts.
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* ===================== CONFERENCE ARTICLES ===================== */}
    <div className="research-group mt-5">
      <h3 className="research-group-title">Conference Articles</h3>

      <div className="research-item">
        <div className="research-header">
          <div className="research-meta">
            <h4 className="research-title">On the energy consumption of web applications: An empirical study of their design solutions</h4>
            <div className="research-authors">Louay Khrouf, Anas Shatnawi, Benoit Verhaeghe, Boubou Thiam Niang</div>
            <div className="research-venue">
              <span className="research-editor">2025 IEEE/ACM 9th international workshop on green and sustainable software (GREENS)</span>
              <span className="research-sep"> • </span>
              <span className="research-year">2025</span>
            </div>
          </div>

          <div className="research-actions">
            <a
              href="https://hal.science/hal-05127336v1/file/2024_On_the_Energy_Consumption_of_Web_Applications__An_Industrial_Case_Study_Based_on_Their_Design_Decisions_and_Usages__Copy_.pdf"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline-primary btn-sm"
            >
              PDF
            </a>

            <button
              className="btn btn-outline-secondary btn-sm ms-2"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#abs-c-1"
              aria-expanded="false"
              aria-controls="abs-c-1"
            >
              Abstract
            </button>
          </div>
        </div>

        <div id="abs-c-1" className="collapse research-abstract">
          <div className="research-abstract-inner">
            <p className="mb-0">
             Recent studies show that software systems account for approximately 6% of global energy consumption.
Coupled with new regulations urging French organizations to
adopt energy-efficient practices, this has increased the need
for energy-conscious development methods. However, a key
challenge remains the lack of detailed data on the impact of
design solutions on software energy consumption, complicating
efforts for software architects who must balance performance
and energy efficiency. Without clear data on how design decisions—such as architectural styles, frameworks, and serialization
methods—affect energy use, optimizing both performance and
sustainability is difficult. Most existing studies on software energy consumption focus on small-scale projects and technologies
irrelevant to Berger-Levrault’s environment, where this study
was conducted. To address this, we propose a methodology to
evaluate the energy consumption of alternative design solutions
using the Dynatrace Carbon Impact module, chosen for its
compatibility with virtualized and cloud-based environments,
and NeoLoad performance testing, selected for its compatibility
with Berger-Levrault’s specific technologies. Using this approach,
we compared two versions of the same application: a legacy
version built with Citrix, Java Swing, and RPC, and a modern
version using Angular, Spring Boot, and REST. We also evaluated
Protobuf versus JSON serialization. Our findings show that
adopting Angular for the frontend and Spring Boot for the
backend reduces overall energy consumption by approximately
70%. The Angular frontend uses 30 times less energy than Java
Swing. Furthermore, Protobuf serialization reduces energy usage
by 33% compared to JSON, due to its faster processing and lower
memory requirements. These results highlight the energy-saving
potential of modern web technologies and optimized data formats
for sustainable software development
            </p>
          </div>
        </div>
      </div>

      {/* Add more conference items: abs-c-2, abs-c-3, ... */}
    </div>
  </div>
</section>

<section id="contact" className="contact">
  <div className="container" data-aos="fade-up">
    <div className="section-title">
      <h2>Contact</h2>
      <p>
        Feel free to reach out for collaboration, research discussions, or
        professional opportunities.
      </p>
    </div>

    <div className="row">
      {/* Left: Contact Information */}
      <div className="col-lg-4">
        <div className="info">
          <div className="address">
            <i className="bi bi-geo-alt"></i>
            <h4>Location:</h4>
            <p>Villeneuve-d&apos;Ascq, Hauts-de-France</p>
          </div>

          <div className="email">
            <i className="bi bi-envelope"></i>
            <h4>Email:</h4>
            <p>louaykharouf@gmail.com</p>
          </div>

          <div className="phone">
            <i className="bi bi-phone"></i>
            <h4>Call:</h4>
            <p>+33 6 35 02 70 13</p>
          </div>
        </div>
      </div>

      {/* Right: Netlify Contact Form */}
      <div className="col-lg-8 mt-5 mt-lg-0">
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          className="php-email-form"
        >
          {/* Netlify required hidden input */}
          <input type="hidden" name="form-name" value="contact" />

          {/* Honeypot field */}
          <p style={{ display: "none" }}>
            <label>
              Don’t fill this out if you’re human:{" "}
              <input name="bot-field" />
            </label>
          </p>

          <div className="row">
            <div className="col-md-6 form-group">
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Your Name"
                required
              />
            </div>

            <div className="col-md-6 form-group mt-3 mt-md-0">
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Your Email"
                required
              />
            </div>
          </div>

          <div className="form-group mt-3">
            <input
              type="text"
              name="subject"
              className="form-control"
              placeholder="Subject"
              required
            />
          </div>

          <div className="form-group mt-3">
            <textarea
              name="message"
              rows="5"
              className="form-control"
              placeholder="Message"
              required
            ></textarea>
          </div>

          <div className="text-center mt-4">
            <button type="submit">Send Message</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>


  </main>
    </div>
  );
}

export default App;
