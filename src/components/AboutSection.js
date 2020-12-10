import React from "react"
import home1 from "../img/home1.png"
import styled from "styled-components"
import {StyledAbout,StyledDescription,StyledImage,StyledHide} from "../styles"
const AboutSection = () =>{
return(
    <StyledAbout>
        <StyledDescription>
            <div className="title">
                <StyledHide>
                    <h2>We work to make</h2>
                </StyledHide>
                <StyledHide>
                <h2>your <span>dreams</span> come</h2>
                </StyledHide>
                <StyledHide>
                <h2>true</h2>
                </StyledHide>
            </div>
            <p> 
                Reprehenderit irure esse velit cupidatat mollit adipisicing sint eu cillum.In pariatur aliqua cupidatat do Lorem laborum in proident exercitation.
            </p>
            <button>Contact Us</button>
        </StyledDescription>
        <StyledImage>
            <img src={home1} alt="portfolio img"/>
        </StyledImage>

    </StyledAbout>
)
}




export default AboutSection;