import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import PrtImg from '../Portfolio/portImg.png'
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";


const Portfolio = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const [portfolio] = useState([]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => {
            clearTimeout(timer);
        }
    });

    

    

    console.log(portfolio);

    const renderPortfolio = (portfolio) => {
        return (
            <div className="images-container">
                {
                    portfolio.map((port, idx) => {
                        return (
                            <div className="image-box" key={idx}>
                                <img
                                    src={PrtImg}
                                    className="portfolio-image"
                                    alt="portfolio" />
                                <div className="content">
                                    <p className="title">{port.name}</p>
                                    <h4 className="description">{port.description}</h4>

                                    <button
                                        className="btn"
                                        onClick={() => window.open(port.url)}
                                    >View</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        );
    }


    return (
        <>
            <div className="container portfolio-page">
                <h1 className="page-title">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={"Portfolio".split("")}
                        idx={15}
                    />
                </h1>
                <h2 className="page-title"><b><AnimatedLetters
                    letterClass={letterClass}
                    strArray={"Full Stack Developer @Cognizant".split("")}
                    idx={15}
                /></b>
                    </h2>
                <p className="skills">
                    Role : Fix Defects, Add New Features, Unit Test Newly Added Modules </p>
                    <p>Technologies Used: HTML, CSS, Javascript, C#, ASP.NET MVC, ASP.NET Core Web API, API Microservices, Entity Framework</p>
                   <p> Domain: .NET (Full Stack Development)</p>
                   <p> Project Done :  
                    <a href="https://github.com/sayantanibarman98/AuditManagementSystem"> Automating the auditing process, to make management
                    scalable for a large-scale supply management organization.
                    It takes user details and lets them know their audit status. Through the client portal, the user can login and perform
different actions.</a>
                </p>


                <h2 className="page-title"><b><AnimatedLetters
                    letterClass={letterClass}
                    strArray={"Android App Developer Intern @ThinkerLab".split("")}
                    idx={15}
                /></b>
                </h2>
                <p className="skills">
                    Role : Developed an Android Tutorial Application from scratch which had login, registration , Google SignIn Integration, Reset Password, Upload File, Search Filter, UPI payment Integration, pdf
viewer etc displaying different course </p>
                <p>Technologies Used: XML for Front End and Java and Firebase for Back End Development. </p>
                <p> Domain: .NET (Full Stack Development)</p>
                <p> Links :
                    <a href="https://github.com/sayantanibarman98/ThinkerLab"> View Code in Github</a>
                    <a href="https://drive.google.com/file/d/1_rmOxxwgcCQGq1df3ZGPBBDwiM9R5Oka/view"> View APK File </a>

                </p>


                <h2 className="page-title"><b><AnimatedLetters
                    letterClass={letterClass}
                    strArray={"A Blockchain-Based Approach to Secure Electronic Health Records using Fuzzy Commitment Scheme".split("")}
                    idx={15}
                /></b>
                </h2>
                <p className="skills">
                    Role : Blockchain-based approach for securing electronic health records using Elliptic Curve Cryptography (ECC) and a biometric-based fuzzy
                    commitment scheme. The proposed approach addresses common
issues of blockchain, namely scalability, integrity, confidentiality and decentralization of the ledger.  </p>
                <p>Technologies Used: Blockchain, Python, Cryptography </p>
                <p>  Published Conference Paper :
                    <a href="https://onlinelibrary.wiley.com/doi/abs/10.1002/spy2.231"> View Paper</a>
                    
                </p>

                <h2 className="page-title"><b><AnimatedLetters
                    letterClass={letterClass}
                    strArray={"Blind Source Camera Identification of Online Social Network Images Using Adaptive Thresholding Technique.".split("")}
                    idx={15}
                /></b>
                </h2>
                <p className="skills">
                    Role : Downloaded images from Facebook, WhatsApp etc,lose their original quality, resolution due to compression leading to false
                    source camera detection, which is solved in this project, using
Adaptive Thresholding Technique, which gives an accuracy of over 95 percentage.  </p>
                <p>Technologies Used: Image Processing, Cryptography, MATLAB</p>
                <p> Published Conference Paper  :
                    <a href="https://link.springer.com/chapter/10.1007/978-981-15-7834-2_59"> View Paper</a>
                    <a href="https://drive.google.com/file/d/1cUphLpsfj6vaw3RUgc2m5Rn6fPQqwZ6b/view?usp=sharing"> View Presenter Certificate </a>

                </p>
                
                <div>{renderPortfolio(portfolio)}</div>
            </div>
            <Loader type="pacman" />
        </>
    );
}

export default Portfolio;
