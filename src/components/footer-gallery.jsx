import React from 'react'
import styled, { keyframes } from 'styled-components'
import Rings from '../images/homepage/ring-pop.jpg'
import Brushes from '../images/homepage/brushes.jpg'
import Sink from '../images/homepage/sink-or-swim.jpg'
import Hood from '../images/homepage/hoodz.jpg'
import Fire from '../images/homepage/flames.jpg'
import Shades from '../images/homepage/shades.jpg'
import Fish from '../images/homepage/fish.svg'
import Boozin from '../images/homepage/boozin.jpg'
import Juan from '../images/homepage/juan-torso.svg'

const desktopDiving = keyframes`
0%{
    transform:translate(0,50px);
}
50%{
    transform:translate(0,175px);
}
100%{
    transform:translate(0,50px);
}
`
const mobileDiving = keyframes`
0%{
    transform:translate(0,50px);
}
50%{
    transform:translate(0,125px);
}
100%{
    transform:translate(0,50px);
}
`

const sepia = keyframes`
0%{
    filter:saturate(1);
}
50%{
    filter:saturate(4);
}
100%{
    filter:saturate(1);
}
`
const Wrapper = styled.div`
`

const RowOne = styled.div`
display:grid;
grid-template-columns:25% 55% 20%;
align-items:end;
justify-content:center;
    .lord-of-the-rings{        
        position:relative;
        z-index:3;
    }
    .ring{
    border-bottom:25px solid ${props => props.theme.colors.bronze};
    border-left:25px solid ${props => props.theme.colors.bronze};
    transform:translate(50px,0);
    }
    .brushes{
        transform:translate(100px,0);
        max-width:75%;
    }
    .juan-diving{
        position:relative;
        z-index:2;
        text-align:center;
    }
    .sink{
        position:relative;
    }
    .juan-torso{        
        max-width:75%;
        animation:${desktopDiving} 10s infinite ease;
    }
@media(max-width:${props => props.theme.breakpoints.sm}){
   .ring{
    border-bottom:15px solid ${props => props.theme.colors.bronze};
    border-left:15px solid ${props => props.theme.colors.bronze};
   }
   .juan-torso{
       animation:${mobileDiving} 7s infinite ease;
   }
}
`

const RowTwo = styled.div`
display:grid;
grid-template-columns:20% 40% 40%;
position:relative;
z-index:2;
    .fire{
        animation:${sepia} 3s infinite ease;
    }
    .shades{
        transition:all 500ms;
        filter:sepia(100%);
        &:hover{
            filter:sepia(0%);
        }
    }
    .life-aquatic{
        transform:translate(-50px,0);
    }
    .jaws{
        max-width:35%;
        transition:all 500ms;
        &:hover{
            transform:rotate(-15deg) translate(-10px,15px);
        }
    }
`

const Gallery = () => {
    return (
        <Wrapper>
            <RowOne>
                <div className="lord-of-the-rings">
                    <img src={Brushes} className="brushes" alt="Artsy fartsy" />
                    <img src={Rings} className="ring img-fluid" alt="Anyone remember Ring Pops?" />
                </div>
                <div className="juan-diving">
                    <img src={Juan} className="juan-torso" alt="Juan knows" />
                    <img src={Sink} className="sink img-fluid" alt="Sink or swim dude" />
                </div>
                <img src={Hood} className="img-fluid" alt="Girl with the Dragon Tattoo" />
            </RowOne>
            <RowTwo>
                <img src={Fire} className="fire img-fluid" alt="Burn away to eternity" />
                <img src={Shades} className="shades img-fluid" alt="Prayers" />
                <div className="life-aquatic">
                    <img src={Boozin} className="img-fluid" alt="Ever pass out in a boat?" />
                    <a href="https://youtu.be/qb2ttbg0oy8" target="_blank" rel="noreferrer" ><img src={Fish} className="jaws" alt="Get fishy" /></a>
                </div>
            </RowTwo>
        </Wrapper>
    )
};
export default Gallery