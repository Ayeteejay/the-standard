import React from 'react'
import styled, { keyframes } from 'styled-components'
import { Container } from 'react-bootstrap'
import Fade from 'react-reveal/Fade'

const spinning = keyframes`
0%{
    transform:rotate(0deg)
}
100%{
    transform:rotate(360deg)
}
`

const Main = styled.div`
position:relative;
display:flex;
justify-content:center;
align-items:center;
flex-flow:column;
height:1000px;
    .page-title{
        position:absolute;
        bottom:50%;
        text-align:center;
    }
    img{
        width:50%;
    }
&::after{
    content:"";
    height:250px;
    background:${props => props.theme.colors.bronze};
    width:1px;
}
@media (max-width:${props => props.theme.breakpoints.sm}){
    height:700px;
    img{
        width:75%;
    }
}
@media (min-width:${props => props.theme.breakpoints.xl}){
    img{
        width:35%;
    }
}
`

const Secondary = styled.img`
position:absolute;
top:65%;
left:30%;
max-width:80px;
animation:${spinning} 10s infinite ease;
@media(max-width:${props => props.theme.breakpoints.sm}){
    display:none;
}
`

const Introduction = styled.section`
display:flex;
justify-content:center;
p{
    text-align:center;
    width:700px;
}
@media (max-width:${props => props.theme.breakpoints.sm}){
    p{
        width:100%;
        padding:1.5rem;
    }
}
`

const Hero = (props) => {
    return (
        <Fade>
            <Container className="py-5 px-3 px-sm-2">
                <Main>
                    <h1 className="page-title" dangerouslySetInnerHTML={{ __html: `${props.pageTitle}` }}></h1>
                    <img src={props.mainImage.sourceUrl} className="img-fluid mt-5 mt-sm-0" alt={props.mainImage.altText} />
                    <Secondary src={props.secondaryImage.sourceUrl} alt={props.secondaryImage.altText}></Secondary>
                </Main>
                <Introduction style={{ display: props.introductionContent === null ? "none" : "flex" }}>
                    <p dangerouslySetInnerHTML={{ __html: `${props.introductionContent}` }}></p>
                </Introduction>
            </Container>
        </Fade>
    )
};

export default Hero