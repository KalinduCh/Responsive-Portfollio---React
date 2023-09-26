import { Col,Row } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorsharp from "../assets/img/color-sharp.png";




export const Skills = () =>
{   const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      return (
        <section className="skill" id="skills">
        <container>
            <Row>
                <Col>
                <div className="skill-bx">
    <h2>Skills</h2>
    <p>I'm adept in Front-End Development, translating designs into responsive websites, and UI/UX Design, crafting seamless user experiences.
      I thrive on continuous learning, staying up-to-date with the latest technologies.Collaboration is my strength, 
as I excel in teamwork and bring innovation to every project.</p>


                    <Carousel   responsive={responsive} infinite={true} className="skill-slider">
                        <div className="item">
                        <img src={meter1} alt="Image" />
                        <h5> UI/UX Design</h5>
                        </div>

                        <div className="item">
                        <img src={meter2} alt="Image" />
                        <h5>Front-End Development </h5>
                        </div>

                        <div className="item">
                        <img src={meter3} alt="Image" />
                        <h5> Web Designing </h5>
                        </div>

                        <div className="item">
                        <img src={meter1} alt="Image" />
                        <h5> Brand Identity </h5>
                        </div>
                    </Carousel>
                    </div> 
                </Col>
            </Row>
        </container>
        <img className="background-image-left" src={colorsharp} />
        
        </section>
         );
        };
        
        export default Skills;
       
        
        
        
        
        