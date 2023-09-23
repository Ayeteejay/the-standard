import * as React from "react"
import styled, {keyframes} from 'styled-components'
import {graphql, StaticQuery, Link} from 'gatsby'
import Layout from '../components/layout'
import Banner from '../components/banner'
import Seo from '../components/seo'
import HeaderGallery from '../components/homepage-gallery'
import FooterGallery from '../components/footer-gallery'
import { Container, Row, Col } from 'react-bootstrap'
import Scurvy from '../images/homepage/scurvy.png'
import Dagger from '../images/homepage/dagger.svg'
import Palms from '../images/homepage/palms.svg'
import Flag from '../images/homepage/vssl-flag.svg'
import Artfart from '../images/homepage/artfart.jpg'
import Juan from '../images/homepage/sailor-juan.jpg'
import Surf from '../images/homepage/surf-goth.jpg'
import Fade from 'react-reveal/Fade'

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

const Main = styled(Container)`
padding:0 4rem;
a:hover{
  color:${props=>props.theme.colors.smoke} !important;
}
.small{
  width:75px;
}
.medium{
  width:150px;
}
.large{
 width:350px;
}
.hero-content{
  display:flex;
  align-items:center;
  height:100%;
  p{
    font-size:2rem;
    line-height:1;
  }
}
.masthead{
  &::before{
    height:50px;
    width:50px;
    display:inline-block;
    background:url(${Flag}) no-repeat;
    content:"";
  }
}
.culture-content{
  position:relative;
  padding:5rem 0;
}
.gold-block{
  background:${props=>props.theme.colors.bronze};
  padding:4rem;
  @media(min-width:${props=>props.theme.breakpoints.md}){
    animation:${floating} 10s infinite ease;
  }
}
.hearts-of-palm{
  position:absolute;
  left:-5%;
  bottom:10%;
}
.juan{
  margin: 200px 0 0 0;
  position: sticky;
  top: 70%;
  @media(max-width:${props=>props.theme.breakpoints.md}){
    display:none;
  }
}
.surf{
  margin: 100px 0 0 0;
  position: sticky;
  top: 50vh;
  animation:${floating} 10s infinite ease;
  @media(max-width:${props=>props.theme.breakpoints.md}){
    display:none;
  }
}
.artsy{
  @media(max-width:${props=>props.theme.breakpoints.md}){
    display:none;
  }
}
.navigation-background{
  background-size:cover;
  position:relative;
  height:250px;
  &::before{
    content:"";
    position:absolute;
    inset:0;
    background:${props=>props.theme.colors.iron};
    opacity:1;
    transition:all 500ms ease;
  };
  &:hover::before{
    opacity:0.5;
  }
}
.navigation-content{
  padding:5rem;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-flow:column;
  text-align:center;
  inset:0;
  position:absolute;
  z-index:1;
}
@media (max-width: ${props => props.theme.breakpoints.sm}) {
  padding:0 1rem;
}
`

const Index = () =>{
  return(
         <StaticQuery query={graphql`
        {
          allWpPage(filter: {title: {eq: "Homepage"}}) {
            edges {
              node {
                title
                homepage {
                  cultureContent
                  heroContent
                  introductionContent
                  navigationLinks {
                    description
                    backgroundImage {
                      altText
                      sourceUrl
                    }
                    link {
                      title
                      url
                    }
                  }
                }
                template {
                  ... on WpDefaultTemplate {
                    templateName
                    footerContent {
                      banner {
                        altText
                        sourceUrl
                      }
                      quoteContent {
                        quote
                        illustration {
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
        }                  
            `} render={props=>(
              <Layout>     
                <Fade>
                  <Seo title={"Welcome Aboard"}/>                                    
                    <Main>
                      <Row>
                        <Col md={5} className="my-5 pt-5 my-md-0 pt-md-0">
                          <div className="hero-content">                            
                              <div className="masthead" dangerouslySetInnerHTML={{__html:`${props.allWpPage.edges[0].node.homepage.heroContent}`}}></div>                               
                          </div>                    
                        </Col>
                        <Col md={7}>
                            <HeaderGallery></HeaderGallery>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={6}>
                          <img className="large" src={Scurvy} alt="Scurvy says get bent"/>
                          <div dangerouslySetInnerHTML={{__html:`${props.allWpPage.edges[0].node.homepage.introductionContent}`}}></div>
                        </Col>
                      </Row>
                      <Row className="d-flex justify-content-center py-3 my-3 py-md-0 my-md-0">
                        <Col md={6}>
                          <div className="culture-content">
                              <div className="gold-block m-4 m-md-0">
                                  <img src={Dagger} alt="Scurvy's dagger" className="medium"/>
                                    <div dangerouslySetInnerHTML={{__html:`${props.allWpPage.edges[0].node.homepage.cultureContent}`}}></div>
                              </div>
                              <img src={Palms} alt="Dune" className="small hearts-of-palm"/>
                          </div>
                        </Col>
                      </Row>
                      <Row className="d-flex justify-content-center">
                        <Col md={2}>
                          <img src={Artfart} className="artsy img-fluid" alt="Artsy fartys"/>
                          <img src={Juan} className="juan img-fluid" alt="Juan knows"/>
                        </Col>
                        <Col md={8}>
                          <Row>
                                {props.allWpPage.edges[0].node.homepage.navigationLinks.map((value,index)=>{
                                  if(value.link.url === "/brand-guide"){
                                    return(
                                      <Col md={12} key={index} className="my-5 py-3 py-sm-0 my-sm-4">
                                        <a href="https://brand.vsslagency.com/" target="_blank" rel="noreferrer">
                                          <div className="navigation-background" style={{backgroundImage:`url(${value.backgroundImage.sourceUrl})`}}> 
                                            <div className="navigation-content" dangerouslySetInnerHTML={{__html:`${value.description}`}}></div>
                                          </div>      
                                        </a>                            
                                      </Col>
                                  )
                                  }else{
                                    return(
                                      <Col md={12} key={index} className="my-5 py-3 py-sm-0 my-sm-4">
                                        <Link to={value.link.url}>
                                          <div className="navigation-background" style={{backgroundImage:`url(${value.backgroundImage.sourceUrl})`}}> 
                                            <div className="navigation-content" dangerouslySetInnerHTML={{__html:`${value.description}`}}></div>
                                          </div>      
                                        </Link>                            
                                      </Col>
                                  )
                                  }
                              })}   
                          </Row>
                        </Col>     
                          <Col md={2}>
                          <img src={Surf} className="surf img-fluid" alt="Surfs up nerd!"/>
                          </Col>              
                      </Row>
                      <Row className="d-flex justify-content-center">
                        <Col md={10}>
                          <FooterGallery></FooterGallery>
                        </Col>
                      </Row>
                    </Main>
                  <Banner quoteIllustration={props.allWpPage.edges[0].node.template.footerContent.quoteContent.illustration} quote={props.allWpPage.edges[0].node.template.footerContent.quoteContent.quote} banner={"skip"}/>
                  </Fade>
            </Layout>  
            )}  
            />
  )
};

export default Index;