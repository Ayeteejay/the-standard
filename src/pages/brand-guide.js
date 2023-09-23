import React from 'react'
import styled from 'styled-components'
import {graphql, StaticQuery} from 'gatsby'
import {Container, Row, Col} from 'react-bootstrap'
import Layout from '../components/layout'
import Hero from '../components/hero'
import Banner from '../components/banner'
import Seo from '../components/seo'

const Main = styled(Container)`
padding:0 5rem;
@media (max-width: ${props => props.theme.breakpoints.sm}) {
  padding:0 3rem;
}
`

const BorderRow = styled(Row)`
border-top:1px solid ${props=>props.theme.colors.stormGray};
`

const Colors = styled.div`
background:${props=>props.theme.colors.fogGray};
padding:3rem;
`

const Fonts = styled.div`
p.letters{
    font-size:1.6rem;
    line-height:1.5;
    letter-spacing:2px;
    overflow-wrap:break-word;
}
`

const Assets = styled.div`
    .single-image{
    display:grid;
    grid-template-columns:40% 60%;
    @media(max-width:${props=>props.theme.breakpoints.sm}){
        grid-template-columns:1fr 1fr;
    }
    }
    .gallery-image{
    }
`

const BrandGuide = () =>{
    return (
        <StaticQuery query={graphql`
        {
            allWpPage(filter: {title: {eq: "Brand Guide"}}) {
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
                  brandGuide {
                    typographyTitle
                    typographyDescription
                    logos {
                      title
                      image {
                        altText
                        sourceUrl
                      }
                    }
                    logoTitle
                    logoDescription
                    fontFamilies {
                      fontFamily
                      title
                    }
                    downloadButton {
                      sourceUrl
                      title
                    }
                    colorsTitle
                    colorsDescription
                    colors {
                      description
                      hexcode
                      image {
                        altText
                        sourceUrl
                      }
                    }
                    assetsTitle
                    assetsDescription
                    assets {
                      assetType
                      title
                      gallery {
                        altText
                        sourceUrl
                      }
                      image {
                        altText
                        sourceUrl
                      }
                    }
                  }
                  template {
                    ... on WpDefaultTemplate {
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
            <Seo title={props.allWpPage.edges[0].node.title}/>
                <Hero pageTitle={props.allWpPage.edges[0].node.title} mainImage={props.allWpPage.edges[0].node.heroContent.mainImage} secondaryImage={"props.allWpPage.edges[0].node.heroContent.secondaryImage"} introductionContent={props.allWpPage.edges[0].node.heroContent.introductionContent}/>
                <Main>
                    <BorderRow className="py-5">
                        <Col md={6}>
                            <h5 className="smoke fatty uppercut">{props.allWpPage.edges[0].node.brandGuide.logoTitle}</h5>
                            <div className="indent">
                                <div>
                                    <div dangerouslySetInnerHTML={{__html:`${props.allWpPage.edges[0].node.brandGuide.logoDescription}`}}></div>
                                    <a style={{display: props.allWpPage.edges[0].node.brandGuide.downloadButton !== null ? "block" : "none"}} href={props.allWpPage.edges[0].node.brandGuide.downloadButton !== null ? props.allWpPage.edges[0].node.brandGuide.downloadButton.sourceUrl : ""}>Download</a>
                                </div>
                            </div>
                        </Col>
                        <Col md={6} className="d-flex flex-column align-items-center mt-5 mt-sm-0">
                            {props.allWpPage.edges[0].node.brandGuide.logos.map((value,index)=>{
                                return(
                                    <div key={index} className="pb-5">
                                        <p className="bronze thick uppercut">{value.title}</p>
                                        <img src={value.image.sourceUrl} alt={value.image.altText}/>
                                    </div>
                                )
                            })}
                        </Col>
                    </BorderRow>
                    <BorderRow className="py-5">
                        <Col md={6}>
                            <h5 className="smoke fatty uppercut">{props.allWpPage.edges[0].node.brandGuide.colorsTitle}</h5>
                            <div className="indent">
                                    <div dangerouslySetInnerHTML={{__html:`${props.allWpPage.edges[0].node.brandGuide.colorsDescription}`}}></div>
                            </div>
                        </Col>
                        <Col md={6} className="mt-5 mt-sm-0">
                            <Colors>
                                {props.allWpPage.edges[0].node.brandGuide.colors.map((value,index)=>{
                                    return(
                                        <div key={index} className="pb-5">
                                            <img src={value.image.sourceUrl} alt={value.image.altText}/>
                                            <p style={{color: value.hexcode}} className="fatty">{value.hexcode}</p>
                                            <div dangerouslySetInnerHTML={{__html:`${value.description}`}}/>
                                        </div>
                                    )
                                })}
                            </Colors>
                        </Col>
                    </BorderRow>
                    <BorderRow className="py-5">
                        <Col md={6}>
                            <h5 className="smoke fatty uppercut">{props.allWpPage.edges[0].node.brandGuide.typographyTitle}</h5>
                            <div className="indent">
                                    <div dangerouslySetInnerHTML={{__html:`${props.allWpPage.edges[0].node.brandGuide.typographyDescription}`}}></div>
                            </div>
                        </Col>
                        <Col md={6} className="mt-3 mt-sm-0">
                            {props.allWpPage.edges[0].node.brandGuide.fontFamilies.map((value,index)=>{
                                return (
                                    <Fonts key={index} className="pb-4 pb-sm-5">
                                        <p className="bronze thick uppercut">{value.title}</p>
                                        <p className="letters" style={{fontFamily:value.fontFamily}}>AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz</p>
                                    </Fonts>
                                )
                            })}
                        </Col>
                    </BorderRow>
                    <BorderRow className="py-5">
                        <Col md={6}>
                            <h5 className="smoke fatty uppercut">{props.allWpPage.edges[0].node.brandGuide.assetsTitle}</h5>
                            <div className="indent">
                                    <div dangerouslySetInnerHTML={{__html:`${props.allWpPage.edges[0].node.brandGuide.assetsDescription}`}}></div>
                            </div>
                        </Col>
                        <Col md={6} className="mt-5 mt-sm-0">
                            <Assets>
                                <div className="single-image">
                                    {props.allWpPage.edges[0].node.brandGuide.assets.filter((value)=> value.assetType === "single").map((value,index)=>{
                                      return (
                                        <div key={index}>
                                            <p className="bronze thick uppercut pb-3">{value.title}</p>
                                            <img src={value.image.sourceUrl} alt={value.image.altText} className="img-fluid"/>                                      
                                        </div>
                                    )
                                    })}
                                </div>
                                <div className="gallery-image pt-4">
                                    {props.allWpPage.edges[0].node.brandGuide.assets.filter((value)=>value.assetType === "gallery").map((value,index)=>{
                                        return (
                                          <div key={index}>
                                              <p className="bronze thick uppercut pb-3">{value.title}</p>
                                              {value.gallery.map((value,index)=>{
                                                  return(
                                                      <img key={index} src={value.sourceUrl} alt={value.altText} className="pb-5 img-fluid"/>
                                                  )
                                              })}                                   
                                          </div>
                                      )
                                    })}
                                </div>
                            </Assets>
                        </Col>
                    </BorderRow>
                </Main>
                <Banner quoteIllustration={props.allWpPage.edges[0].node.template.footerContent.quoteContent.illustration} quote={props.allWpPage.edges[0].node.template.footerContent.quoteContent.quote} banner={props.allWpPage.edges[0].node.template.footerContent.banner}/>
        </Layout>
    )}/>
    )
};
export default BrandGuide