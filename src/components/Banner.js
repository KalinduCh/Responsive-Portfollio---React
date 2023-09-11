import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap"
import { ArrowRight } from 'react-bootstrap-icons';
import headerImg from "../assets/img/headerIMG.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { isVisible } from "@testing-library/user-event/dist/utils";


export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const[isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["UI Designer" ,"Web Developer", "Web Designer"];
    const [text, setText] = useState('');
    const [delta, setDelta]= useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => {clearInterval(ticker)};
    }, [text] ) 

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length -1) : fullText.substring(0,text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta/2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }


    return(
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                        {({ isVisible }) =>
                        <div className= {isVisible ? "animate_animated animate_fadeIn" : ""} >
                        <span className="tagline"> Welcome to my portfolio</span>
                        <h1>{"Hi I'm Kalindu" }<span className="wrap"> {text} </span> </h1>
                        <p>Hey there! I'm a student at SLIIT Academy, diving into the world of Computer Science and Software Engineering. I've got a knack for Front-End Development and UI/UX Design – crafting user-friendly digital experiences is right up my alley. 
                            But I've also set my sights on something bigger. I'm working towards becoming a Full-Stack Developer. 
                            Join me on this exciting journey as I navigate the tech realm, one step at a time.  </p>
                            <div className="rounded-box">
                               <button onClick={() => console.log('connect')} className="connect-button">
                                   Let's Connect <ArrowRight size={18} className="arrow-icon" />
                                </button>
                             </div>
                        </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img" />
                    </Col>
                </Row>
            </Container>
            
        </section>

    )
}