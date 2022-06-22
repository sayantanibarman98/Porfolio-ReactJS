import { useEffect, useState } from 'react'
import {
    faAngular,
    faCss3,
    faGitAlt,
    faHtml5,
    faJsSquare,
    faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <>
            <div className="container about-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        I am an ambitious Full Stack Developer, Competitive Coding Enthusiast (Codechef 4*), and I also have published
                        conference papers in Springer on Digital Forensics and Blockchain. I am in search of a SDE Full-time Offer with the opportunity to work with the latest
                        technologies on challenging and diverse projects.
          </p>
                    <p align="LEFT">
                        I'm currently working at Cognizant as a Full Stack Engineer (.NET Domain).
                        My Experience : 10+ months
                        Coding Languages I Prefer : C, C++, Java
          </p>
                    <p><b>Coding Profiles:</b></p>
                    <p><b>  <a href="https://leetcode.com/sammy98/" >LeetCode</a></b></p>
                    <p><b>   <a href="https://www.codechef.com/users/sammy98">CodeChef</a></b></p>
                    <p><b>  <a href="https://www.hackerrank.com/tanibarman98" >HackerRank</a></b></p>
                    <p><b>   <a href="https://www.hackerearth.com/@sayantani13">HackerEarth</a></b></p>
                        
                </div>

                <div className="stage-cube-cont">
                    <div className="cubespinner">
                        <div className="face1">
                            <FontAwesomeIcon icon={faAngular} color="#DD0031" />
                        </div>
                        <div className="face2">
                            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                        </div>
                        <div className="face3">
                            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                        </div>
                        <div className="face4">
                            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                        </div>
                        <div className="face5">
                            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                        </div>
                        <div className="face6">
                            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                        </div>
                    </div>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default About