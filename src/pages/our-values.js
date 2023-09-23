import React from 'react'
import styled, {keyframes} from 'styled-components'
import {graphql, StaticQuery} from 'gatsby'
import 'pure-react-carousel/dist/react-carousel.es.css';
import {Container, Row, Col} from 'react-bootstrap'
import Layout from '../components/layout'
import Hero from '../components/hero'
import Banner from '../components/banner'
import Seo from '../components/seo'
import Kailey from '../images/our-values/kailey-adam.jpg'
import Ship from '../images/our-values/black-sails.svg'
import Cat from '../images/our-values/cat.jpg'
import Bars from '../images/our-values/bars.jpg'
import Beanie from '../images/our-values/beanie.jpg'
import Mountain from '../images/our-values/rocky-mountains.svg'
import Sharkz from '../images/our-values/street-shark.svg'
import Avery from '../images/our-values/avery.jpg';
import ScurvysWatch from '../images/our-values/scurvys-watching-you.png'
import Navigation from '../images/our-values/north-star.png'
import Sparks from '../images/our-values/sparks.jpg'
import Work from '../images/our-values/hardwork.jpg'
import Bummer from '../images/our-values/bummer-high.jpg'
import BoneThugs from '../images/our-values/bone-thugs.png'
import Moons from '../images/our-values/moons.png'
import AllHandsBackground from '../images/our-values/all-hands-on-deck.jpg'
import Beers from '../images/our-values/boozin.jpg'
import Skeletor from '../images/our-values/skeletor.svg'
import Sparklers from '../images/our-values/kings-of-the-beach.jpg'
import Kindled from '../images/our-values/kindled.jpg'
import Sunblast from '../images/our-values/sun-blast.jpg'
import Pirates from '../images/our-values/cruisin-boozin.jpg'
import Absinthe from '../images/our-values/absinthe.svg'

const floating = keyframes`
0%{
    transform:rotate(2deg)
}
50%{
    transform:rotate(-2deg)
}
100%{
    transform:rotate(2deg)
}
`;

const swim = keyframes`
0%{
transform:translate(0,0);
}
50%{
    transform:translate(0,25px);
}
100%{
    transform:translate(0,0);
}
`

const spin = keyframes`
0%{
    transform:rotate(0deg)
}
100%{
    transform:rotate(360deg)
}
`

const WeAreOneCrewGallery = styled.div`
padding:2rem;
.kailey{
    max-width:80%;
}
.ship{
    max-width:25%;
    transform:translate(0,-75px);
    background:${props=>props.theme.colors.bronze};
    transition:all 250ms;
    &:hover{
        background:${props=>props.theme.colors.stormGray};
    }
}
.cat{
    max-width:75%;
}
.bars{
    max-width:45%;
    transform:translate(0,-50px);
}
.beanie{
    max-width:40%;
}
.sharkz{
    max-width:15%;
    animation:${swim} 5s infinite;
}
.mountain{
    max-width:25%;
}
`

const ScurvysNest = styled.div`
position:relative;
top:-200px;
    .avery{
        position:absolute;
        top:0;
        left:0;
        z-index:2;
        border-right:2rem solid ${props=>props.theme.colors.bronze};
    }
    .scurvys-watch{
        max-width:50%;
        position:absolute;
        z-index:1;
        transition:all 700ms;
        transform:translate(50px,-70px) rotate(15deg);
        &:hover{
            transform:translate(100px,-200px) rotate(-10deg);
        }        
    }
    @media(max-width:${props=>props.theme.breakpoints.xxl}){
        top:-75px;
            .avery{
                max-width:400px;                
            }              
    }
    @media(max-width:${props=>props.theme.breakpoints.xl}){
            display:none;
    }
`
const CommunicationIsOurCompassContainer = styled(Container)`
        background:url(${Moons});
        background-size:contain;
        background-repeat:no-repeat;
`

const CommunicationIsOurCompass = styled.div`
position:relative;
.north-star{
    position:absolute;
    top:-20%;
    left:0;
    right:0;
    max-width:350px;
    animation:${spin} 10s infinite ease;
    z-index:0;
}
.bronze-block{
    z-index:2;
    background:${props=>props.theme.colors.bronze};
    position:relative;
}
.indent{
    &:before{
        background:${props=>props.theme.colors.smoke};
    }
}
li.coin-bullets{
    &:before{
        background:${props=>props.theme.colors.iron};
    }
}
.number{
    border-bottom:1px solid ${props=>props.theme.colors.iron};
}
@media(max-width:${props=>props.theme.breakpoints.sm}){
     .north-star{
         max-width:200px;
         top:-10%;
     }
}
`

const QualityIsOurCourseGallery = styled.div`
    .sparks{
        max-width:75%;
    }
    .work{
        max-width:50%;
        transform:translate(175px,-75px);
    }
    .surf-gem{
        position:relative;
        max-width:50%;
        background:url(${BoneThugs});
        background-size:contain;
        transform:translate(100px,-100px);
        img{
            transition:all 500ms;
            &:hover{
                transform:translate(0,50px);
                opacity:0;
            }
        }
    }
`
const AllHandsOnDeckContainer = styled(Container)`
background:url(${AllHandsBackground});
background-size:cover;
background-repeat:no-repeat;
`

const UpSpiritsGallery = styled.div`
display:grid;
grid-template-areas:
'beerMe beerMe beerMe getLit getLit'
'. . heMan getLit getLit'
'kindles kindles kindles kindles absintheDrink'
'. sunsOut sunsOut pirateDrink pirateDrink'
;
a{
    grid-area:heMan;
}
.beer-me{
    grid-area: beerMe;
}
.skeletor{
    background:${props=>props.theme.colors.bronze};
    padding:1.5rem;
    transition:all 250ms;
    &:hover{
        transform:rotate(45deg);
    }
}
.sparklers{
    grid-area: getLit;
    transform:translate(0,175px);
}
.kindled{
    grid-area: kindles;
}
.absinthe{
    grid-area: absintheDrink;
    transform:translate(-25px,-25px);
    transition:all 1s;
    cursor:pointer;
    &:hover{
        transform:translate(0,0) rotate(100deg);
    }
    @media(max-width:${props=>props.theme.breakpoints.sm}){
        transform:translate(-100px,200px);
        max-width:50px;
        &:hover{
            transform:translate(-100px,200px) rotate(100deg);
        }
    }
}
.sunblast{
    grid-area: sunsOut;
    border-bottom:1rem solid ${props=>props.theme.colors.bronze};
    border-left:1rem solid ${props=>props.theme.colors.bronze};
    z-index:0;
}
.pirates{
    grid-area: pirateDrink;
    transform:translate(-50px,50px);
    z-index:1;
}
`
const UpSpirits = styled.div`
background:${props=>props.theme.colors.smoke};
p{
    color:${props=>props.theme.colors.iron};
}
.number{
    border-bottom:1px solid ${props=>props.theme.colors.iron};
}
.indent{
    &:before{
        background:${props=>props.theme.colors.iron};
    }
}
li{
    color:${props=>props.theme.colors.bronze};
}
@media(min-width:${props=>props.theme.breakpoints.lg}){
    animation:${floating} 6s infinite ease;
}
`

const OurValues = () =>{
    const faded = () =>{
        console.log("%cYou really do like drinking don't you?", "color:#9B794E; font-size:16px; font-weight:bold; text-shadow: 3px 3px 0 rgb(0,0,0,0.4)");
        const allImages = document.querySelectorAll("div");
        allImages.forEach(image=>{
            image.classList.toggle("img-faded");
        });
    }
    return (
        <StaticQuery query={graphql`
        {
            allWpPage(filter: {title: {eq: "Our Values"}}) {
              edges {
                node {
                  title
                  ourValues {
                    values {
                      description
                      image {
                        altText
                        sourceUrl
                      }
                    }
                  }
                  template {
                    ... on WpDefaultTemplate {
                      templateName
                      footerContent {
                        quoteContent {
                          quote
                          illustration {
                            altText
                            sourceUrl
                          }
                        }
                        banner {
                          altText
                          sourceUrl
                        }
                      }
                    }
                  }
                  heroContent {
                    introductionContent
                    mainImage {
                      altText
                      sourceUrl
                    }
                    secondaryImage {
                      altText
                      sourceUrl
                    }
                  }
                }
              }
            }
          }          
            `} render={props=>(
        <Layout>
              <Seo title={props.allWpPage.edges[0].node.title}/>
               <Hero pageTitle={props.allWpPage.edges[0].node.title} mainImage={props.allWpPage.edges[0].node.heroContent.mainImage} secondaryImage={""} introductionContent={props.allWpPage.edges[0].node.heroContent.introductionContent}/>
                {/* We Are One Crew */}
                <Container className="pb-lg-5 mb-lg-5 px-5">
                    <Row>
                        <Col md={6}>
                            <p className="number bronze">No. 1</p>
                            <img src={props.allWpPage.edges[0].node.ourValues.values[0].image.sourceUrl} className="img-fluid py-4" alt={props.allWpPage.edges[0].node.ourValues.values[0].sourceUrl}/>
                            <div className="indent">
                                <div dangerouslySetInnerHTML={{__html:`${props.allWpPage.edges[0].node.ourValues.values[0].description}`}}></div>
                            </div>
                        </Col>
                        <Col md={6}>
                            <WeAreOneCrewGallery>
                                <img src={Kailey} className="kailey" alt="Happy Hour for champions"/>
                                <a href="https://youtu.be/tuENFR-9phU" target="_blank" rel="noreferrer"><img src={Ship} className="ship" alt="One Eyed Willy's Ship"/></a>
                                <img src={Cat} className="cat" alt="Cat Leewaye"/>                        
                                <img src={Bars} className="bars" alt="Last call"/>
                                <img src={Beanie} className="beanie" alt="Beards and beanies"/>
                                <img src={Sharkz} className="sharkz" alt="Remember Street Sharks?"/>
                                <img src={Mountain} className="mountain" alt="Coors sucks balls"/>
                            </WeAreOneCrewGallery>
                        </Col>
                    </Row>
                    <Row className="my-5 pb-5">
                        <Col md={5}>
                            <ScurvysNest>
                                <img src={Avery} alt="nba.com" className="avery img-fluid"/>
                                <img src={ScurvysWatch} alt="Look out!" className="scurvys-watch"/>
                            </ScurvysNest>                            
                        </Col>
                    </Row>
                    </Container>
                    {/* Communication Is Our Compass */}
                    <CommunicationIsOurCompassContainer fluid className="py-5">
                    <Row className="d-flex justify-content-center">
                        <Col md={7} lg={5}>
                        <CommunicationIsOurCompass>    
                            <img src={Navigation} className="north-star img-fluid mx-auto" alt="True North sucks!"/>                    
                            <div className="bronze-block p-5 m-sm-5 m-md-0">
                                <p className="number smoke">No. 2</p>
                                <img src={props.allWpPage.edges[0].node.ourValues.values[1].image.sourceUrl} className="img-fluid py-4" alt={props.allWpPage.edges[0].node.ourValues.values[1].sourceUrl}/>
                                <div className="indent">
                                    <div dangerouslySetInnerHTML={{__html:`${props.allWpPage.edges[0].node.ourValues.values[1].description}`}}></div>
                                </div>                                
                            </div>                        
                        </CommunicationIsOurCompass>
                        </Col>
                    </Row>
                    </CommunicationIsOurCompassContainer>
                    {/* Quality Is Our Course */}
                    <Container className="px-5">
                    <Row className="my-5">
                        <Col md={6}>
                            <QualityIsOurCourseGallery>
                                <img src={Sparks} alt="Grinding is all we know" className="sparks"/>
                                <img src={Work} alt="Crushing it all day" className="work"/>
                                <div className="surf-gem">
                                    <img src={Bummer} alt="Beach Fossils" className="img-fluid"/>
                                </div>
                            </QualityIsOurCourseGallery>
                        </Col>
                        <Col md={6}>
                            <p className="number bronze">No. 3</p>
                            <img src={props.allWpPage.edges[0].node.ourValues.values[2].image.sourceUrl} className="img-fluid py-4" alt={props.allWpPage.edges[0].node.ourValues.values[2].sourceUrl}/>
                            <div className="indent">
                                <div dangerouslySetInnerHTML={{__html:`${props.allWpPage.edges[0].node.ourValues.values[2].description}`}}></div>
                            </div>
                        </Col>
                    </Row>
                </Container>
                {/* All Hands On Deck */}
                <AllHandsOnDeckContainer fluid className="py-5 px-5">
                    <Row className="d-flex justify-content-center">
                        <Col md={10} xxl={7}>
                            <p className="number bronze">No. 4</p>
                            <img src={props.allWpPage.edges[0].node.ourValues.values[3].image.sourceUrl} className="img-fluid py-4" alt={props.allWpPage.edges[0].node.ourValues.values[3].sourceUrl}/>
                            <div className="indent">
                                <div dangerouslySetInnerHTML={{__html:`${props.allWpPage.edges[0].node.ourValues.values[3].description}`}}></div>
                            </div>
                        </Col>
                    </Row>
                </AllHandsOnDeckContainer>
                {/* Up Spirits */}
                <Container className="py-5 my-5">
                      <Row>
                        <Col md={6}>
                                <UpSpiritsGallery>
                                  <img src={Beers} alt="Don't be a square" className="beer-me img-fluid"/>
                                  <img src={Sparklers} alt="Nothing says fun like stock images of people on the beach" className="sparklers img-fluid"/>
                                  <a href="https://youtu.be/rmFZqbh7TaU" target="_blank" rel="noreferrer"><img src={Skeletor} alt="This could be an easter egg" className="skeletor img-fluid"/></a>
                                  <img src={Kindled} alt="La Jolla is the go to place for bonfires" className="kindled img-fluid"/>
                                  <button onClick={faded} className="absinthe easter-egg"><img src={Absinthe} alt="The Holy Trinity" className=" img-fluid"/></button>
                                  <img src={Sunblast} alt="Greenflash" className="sunblast img-fluid" />
                                  <img src={Pirates} alt="Drinkin' and crushin'" className="pirates img-fluid"/>
                                </UpSpiritsGallery>
                            </Col>
                            <Col md={{span:5,offset:1}}>
                                <UpSpirits className="p-5 mt-5 mt-sm-0">
                                    <p className="number bronze">No. 5</p>
                                    <img src={props.allWpPage.edges[0].node.ourValues.values[4].image.sourceUrl} className="img-fluid py-4" alt={props.allWpPage.edges[0].node.ourValues.values[4].sourceUrl}/>
                                    <div className="indent">
                                        <div dangerouslySetInnerHTML={{__html:`${props.allWpPage.edges[0].node.ourValues.values[4].description}`}}></div>
                                    </div>
                                </UpSpirits>
                            </Col>
                      </Row>
                </Container>
               <Banner quoteIllustration={props.allWpPage.edges[0].node.template.footerContent.quoteContent.illustration} quote={props.allWpPage.edges[0].node.template.footerContent.quoteContent.quote} banner={props.allWpPage.edges[0].node.template.footerContent.banner}/>
        </Layout>
            )}/>
    )
};
export default OurValues