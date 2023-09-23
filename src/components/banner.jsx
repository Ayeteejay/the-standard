import React from 'react'
import styled, { keyframes } from 'styled-components'
import { Container } from 'react-bootstrap'

const floating = keyframes`
0%{
    transform:rotate(5deg)
}
50%{
    transform:rotate(-5deg)
}
100%{
    transform:rotate(5deg)
}
`;

const Quote = styled.section`
display:flex;
justify-content:center;
align-items:center;
    .quote-column{
    padding:0 0 0 2rem;
    animation:${floating} 7s infinite ease;
    width:35%;
        p{
            color:${props => props.theme.colors.bronze};
            line-height:0.8;
            text-align:center;
            font-size:3rem;
            font-family:${props => props.theme.fontFamily.harbour}
        }
    }
@media(max-width:${props => props.theme.breakpoints.sm}){
    flex-flow:column;
    .quote-column{
        padding:2rem 0 0 0;
        width:80%;
    }
}
`

const Lithographic = styled.section`
min-height:375px;
background-size:cover;
`

const Banner = (props) => {
    return (
        <Container fluid className="p-0">
            <Quote className="py-5">
                <img src={props.quoteIllustration.sourceUrl} alt={props.quoteIllustration.altText} />
                <div className="quote-column">
                    <p dangerouslySetInnerHTML={{ __html: `${props.quote}` }}></p>
                </div>
            </Quote>
            <Lithographic style={{ backgroundImage: `url(${props.banner.sourceUrl})`, display: props.banner === "skip" ? "none" : "block" }} className="mt-5" />
        </Container>
    )
};

export default Banner