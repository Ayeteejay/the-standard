import React from 'react'
import styled, { keyframes } from 'styled-components'
import Docks from '../images/homepage/plundering-docks.jpg'
import Captain from '../images/homepage/captain.jpg'
import Booty from '../images/homepage/booty.jpg'
import Beached from '../images/homepage/beached.jpg'
import Drink from '../images/homepage/day-drinking.jpg'
import Deathlens from '../images/homepage/deathlens.jpg'
import Drown from '../images/homepage/drowning.jpg'
import Spell from '../images/homepage/magic-spell.jpg'
import Waves from '../images/homepage/no-waves.svg'
import Piranha from '../images/homepage/piranha.jpg'
import Doom from '../images/homepage/surf-doom.jpg'
import Swords from '../images/homepage/swords.svg'
import Shark from '../images/homepage/shark.svg'

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

const Wrapper = styled.div`
background:url(${Docks}) no-repeat;
background-size:cover;
height:500px;
padding:3rem 2rem;
@media(max-width:${props => props.theme.breakpoints.md}){
    margin: 0 0 22rem 0;
}
`
const RowOne = styled.div`
display:grid;
grid-template-columns:25% 35% 35%;
align-items:end;
.swords{
    transform:translate(25%,-50%);
}
.captain{
    position:relative;
    border-bottom:20px solid ${props => props.theme.colors.bronze};
}
.booty{
    transform:translate(0,-25%);
}
@media(max-width:${props => props.theme.breakpoints.md}){
    grid-template-columns:repeat(2,1fr);
}
`
const RowTwo = styled.div`
padding:2rem 0 0 0;
display:grid;
grid-template-columns:1fr 1.5fr 1.5fr;
.doom{
    animation:${floating} 10s infinite ease;
}
.spell{
    transform:translate(0,25%);
}
.piranha{
    border-right:15px solid ${props => props.theme.colors.bronze};
    transform:translate(-25%,10%);
}
@media(max-width:${props => props.theme.breakpoints.md}){
    grid-template-columns:repeat(2,1fr);
    .spell{
        transform:translate(0,-75%);
    }
    .piranha{
        display:none;
    }
}
`
const RowThree = styled.div`
padding:2rem 0 0 0;
display:grid;
grid-template-columns:1fr 2fr 2fr;
.drink{
    border-left:15px solid ${props => props.theme.colors.bronze};
    transform:translate(25%,75%);
}
@media(max-width:${props => props.theme.breakpoints.md}){
    .drink{
        transform:translate(25%,0);
    }
    .deathlens{
        transform:translate(0,-45%);
    }
}
`
const RowFour = styled.div`
display:grid;
grid-template-columns:2fr 3fr 1fr;
align-items:end;
.waves{
    transform:translate(25%,50%);
}
.drown{
    animation:${floating} 10s infinite ease;    
}
.beached{
    transform:translate(-25%,25%);
}
@media(max-width:${props => props.theme.breakpoints.md}){
display:none;
}
@media(min-width:${props => props.theme.breakpoints.xl}){
    grid-template-columns:1fr 2fr 1fr;
    .drown{
        opacity:0;
    }
}
`


const Gallery = () => {
    return (
        <Wrapper>
            <RowOne>
                <img src={Swords} alt="You call that a sword?" className="swords img-fluid" />
                <img src={Captain} alt="Captain says drink up!" className="captain img-fluid" />
                <img src={Booty} alt="Booty handler" className="booty img-fluid" />
            </RowOne>
            <RowTwo>
                <img src={Doom} alt="King of the beach" className="doom img-fluid" />
                <img src={Spell} alt="Spellz" className="spell img-fluid" />
                <img src={Piranha} alt="Bite it you scum" className="piranha img-fluid" />
            </RowTwo>
            <RowThree>
                <img src={Shark} alt="Jaws" className="img-fluid" />
                <img src={Drink} alt="Our drinking team has a creative problem" className="drink img-fluid" />
                <img src={Deathlens} alt="Shoot or be shot" className="deathlens img-fluid" />
            </RowThree>
            <RowFour>
                <img src={Waves} alt="Son of a beach" className="waves img-fluid" />
                <img src={Drown} alt="Bathe in radness" className="drown img-fluid" />
                <img src={Beached} alt="Gloom and doom" className="beached img-fluid" />
            </RowFour>
        </Wrapper>
    )
};
export default Gallery


