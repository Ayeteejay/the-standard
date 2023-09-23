import React from 'react'
import styled from 'styled-components'
import {graphql, StaticQuery} from 'gatsby'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import {Container, Row, Col} from 'react-bootstrap'
import Layout from '../components/layout'
import Hero from '../components/hero'
import Banner from '../components/banner'
import Seo from '../components/seo'
import NextArrow from '../images/next-arrow.svg'
import PreviousArrow from '../images/previous-arrow.svg'
import Dranks from '../images/about-vssl/happy-hour.jpg'
import CoinCheck from '../images/about-vssl/coin-check-yo-self.jpg'
import Pieces from '../images/about-vssl/pieces-of-eight.jpg'
import Doubloon from '../images/about-vssl/coinage.svg'
import Coin from '../images/about-vssl/challenge-coin-legit.png'

const Main = styled(Container)`
padding:0 5rem;
@media (max-width: ${props => props.theme.breakpoints.sm}) {
  padding:0 3rem;
}
`

const Coins = styled.div`
position:relative;
.dranks{
    max-width:75%;
}
.pieces{
    max-width:75%;
    transform:translate(25%,0);
}
.coin-check{
    max-width:40%;
    transform:translate(15%,-25%);
}
.doubloon{
    max-width:25%;
    transform:translate(-75%,125%);
}
.coin{
    position:absolute;
    left:0;
    top:45%;
    width:20%;
    transition:all 3s ease;
    &:hover{
        transform:translate(250px,-250px) rotate(360deg);
    }
}
`

const About = () =>{
    return (
        <StaticQuery query={graphql`
        {
            allWpPage(filter: {title: {eq: "About VSSL"}}) {
              edges {
                node {
                  title
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
                  aboutVssl {
                    aboutDescription
                    aboutTitle
                    coinDescription
                    coinTitle
                    pitchDescription
                    pitchTitle
                    aboutImage {
                      altText
                      sourceUrl
                    }
                    pitchGallery {
                      altText
                      sourceUrl
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
                }
              }
            }
          }   
            `} render={props=>(              
                <Layout>
                  <Seo title={props.allWpPage.edges[0].node.title}/>
                    <Hero pageTitle={props.allWpPage.edges[0].node.title} mainImage={props.allWpPage.edges[0].node.heroContent.mainImage} secondaryImage={props.allWpPage.edges[0].node.heroContent.secondaryImage} introductionContent={props.allWpPage.edges[0].node.heroContent.introductionContent}/>
                    <Main>
                        <Row>
                            <Col md={6}>
                            <h5 className="smoke fatty uppercut">{props.allWpPage.edges[0].node.aboutVssl.pitchTitle}</h5>
                            <div className="indent">
                                    <div dangerouslySetInnerHTML={{__html:`${props.allWpPage.edges[0].node.aboutVssl.pitchDescription}`}}></div>
                            </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12}> 
                                <CarouselProvider naturalSlideWidth={100} naturalSlideHeight={75} totalSlides={props.allWpPage.edges[0].node.aboutVssl.pitchGallery.length} visibleSlides={2} infinite={true}>
                                    <ButtonBack className="arrow previous"><img src={PreviousArrow} alt="Previous arrow"/></ButtonBack>
                                    <ButtonNext className="arrow next"><img src={NextArrow} alt="Next arrow"/></ButtonNext>
                                    <Slider>
                                        {props.allWpPage.edges[0].node.aboutVssl.pitchGallery.map((value,index)=>{
                                            return (
                                                <Slide key={index} index={index}>
                                                    <img src={value.sourceUrl} className="img-fluid" alt={value.altText}/>
                                                </Slide>
                                            )
                                        })}
                                    </Slider>                       
                                </CarouselProvider>
                            </Col>
                        </Row>
                        <Row className="pt-5">
                            <Col md={6} className="pb-sm-5">
                                <img src={props.allWpPage.edges[0].node.aboutVssl.aboutImage.sourceUrl} alt={props.allWpPage.edges[0].node.aboutVssl.aboutImage.altText} className="img-fluid"/>
                            </Col>
                            <Col md={{span:5,offset:1}} className="pt-5 pt-sm-0">
                                <h5 className="smoke fatty uppercut">{props.allWpPage.edges[0].node.aboutVssl.aboutTitle}</h5>
                                <div className="indent">
                                        <div dangerouslySetInnerHTML={{__html:`${props.allWpPage.edges[0].node.aboutVssl.aboutDescription}`}}></div>
                                </div>
                            </Col>
                        </Row>
                        <Row className="py-5">
                            <Col md={6}>
                                <h5 className="smoke fatty uppercut">{props.allWpPage.edges[0].node.aboutVssl.coinTitle}</h5>
                                <div className="indent">
                                        <div dangerouslySetInnerHTML={{__html:`${props.allWpPage.edges[0].node.aboutVssl.coinDescription}`}}></div>
                                </div>
                            </Col>
                            <Col md={{span:5,offset:1}}>
                                <Coins className="p-5">
                                    <img src={Dranks} alt="Forget your coin?" className="dranks"/>                               
                                    <img src={Pieces} alt="Earn your keep!" className="pieces"/>   
                                    <img src={CoinCheck} alt="What is the true value of VSSL Challenge Coin?" className="coin-check"/>                         
                                    <img src={Doubloon} alt="Pirate's booty" className="doubloon"/>
                                    <img src={Coin} alt="Coinbase" className="coin"/> 
                                </Coins>
                            </Col>
                        </Row>
                    </Main>
                        <Banner quoteIllustration={props.allWpPage.edges[0].node.template.footerContent.quoteContent.illustration} quote={props.allWpPage.edges[0].node.template.footerContent.quoteContent.quote} banner={props.allWpPage.edges[0].node.template.footerContent.banner}/>
                        
                </Layout>
            )}/>
    )
};
export default About