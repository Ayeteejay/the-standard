import React from 'react'
import styled from 'styled-components'
import Modal from 'react-bootstrap/Modal'
import Flag from '../images/the-crew/flag.svg'
import ThreeYear from '../images/the-crew/3-years.png'
import FiveYear from '../images/the-crew/5-years.png'

const Wrapper = styled.div`
display:grid;
grid-template-columns:1fr 2fr;
    .secondary-image{
    }
@media(max-width:${props => props.theme.breakpoints.lg}){
    grid-template-columns:1fr;
    .secondary-image{
        display:none;
    }
}
`

const Bio = styled.div` 
padding:4rem;
    h5{        
        font-size:3rem;
        font-family: ${props => props.theme.fontFamily.gotham};
        font-weight:900;
        text-transform:uppercase;
        color:${props => props.theme.colors.iron};        
    }
    p{
        font-family:${props => props.theme.fontFamily.gotham};
        font-weight:300;  
        margin:0;      
        padding:0 0 1rem 0;
    }
    .crew-title{
        color:${props => props.theme.colors.bronze};
        font-weight:600;
        text-transform:uppercase;
        padding:0 0 0.5rem 0;
    }
    .additional-info{
        border-top:1px solid ${props => props.theme.colors.iron};
        border-bottom:1px solid ${props => props.theme.colors.iron};
    }
    .question{
        font-weight:900;
    }
    .vssl-three-year{
        max-width:50px; 
    }
    .vssl-five-year{
        max-width:60px;
    }
@media(min-width:${props => props.theme.breakpoints.xl}){
    padding:6rem;
}    
@media(max-width:${props => props.theme.breakpoints.sm}){
    padding:2rem;
    h5{
        font-size:2rem;
    }
}
`

const CrewModal = (props) => {
    const serviceYears = (years) => {
        let counter = Number(years);
        if (counter >= 3 && counter < 5) {
            return <img src={ThreeYear} alt="You've stood the test of time." className="vssl-three-year" />
        } else if (counter >= 5) {
            return <img src={FiveYear} alt="You are a living legend." className="vssl-five-year" />
        } else {
            const arr = [];
            while (counter !== 0) {
                counter--;
                arr.push(<img src={Flag} alt="Years of service flag" key={counter} />)
            };
            return arr
        }
    }
    return (
        <Modal
            {...props}
            size="xl"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            contentClassName="mondo-modal"
        >
            <Wrapper>
                <div className="secondary-image" style={{ background: `url(${props.crewbio.verticalImage})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}></div>
                <Bio>
                    <h5 className="m-0">{props.crewbio.name}</h5>
                    <p className="crew-title">{props.crewbio.title}</p>
                    <div dangerouslySetInnerHTML={{ __html: `${props.crewbio.description}` }}></div>
                    <div className="additional-info pt-4 pb-3 my-4" dangerouslySetInnerHTML={{ __html: `${props.crewbio.questions}` }}></div>
                    <div>{serviceYears(props.crewbio.years)}</div>
                </Bio>
            </Wrapper >
        </Modal >
    )
};
export default CrewModal