import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { graphql, StaticQuery } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import NextArrow from "../images/next-arrow.svg";
import PreviousArrow from "../images/previous-arrow.svg";
import NextArrowIron from "../images/next-arrow-iron.svg";
import PreviousArrowIron from "../images/previous-arrow-iron.svg";
import CrewModal from "../components/crew-modal";
import Layout from "../components/layout";
import Hero from "../components/hero";
import Banner from "../components/banner";
import Seo from "../components/seo";
import Teams from "../images/the-crew/team-members.jpg";
import Benji from "../images/the-crew/benji.jpg";
import Laptops from "../images/the-crew/laptops.jpg";
import Palms from "../images/the-crew/palm-trees.jpg";
import Compass from "../images/the-crew/compass.svg";
import Beach from "../images/the-crew/lifes-a-beach.jpg";
import Nerd from "../images/the-crew/nerd.jpg";
import Dude from "../images/the-crew/dude.jpg";
import Carve from "../images/the-crew/carve.jpg";
import Key from "../images/the-crew/key.svg";
import Foilage from "../images/the-crew/foilage.jpg";

const glitching = keyframes`
0%{
  background:none;
}
50%{
  background:#9B794E;
  -webkit-box-shadow: 0px 0px 16px 5px #9B794E95; 
  box-shadow: 0px 0px 16px 5px #9B794E95;
  transform:rotate(360deg) scale(1.2);
}
100%{
  background:none;
}
`;

const BorderRow = styled(Row)`
  border-top: 1px solid ${(props) => props.theme.colors.stormGray};
`;

const Leadership = styled.div`
  background: ${(props) => props.theme.colors.bronze};
`;

const ClientManagementGallery = styled.div`
  display: grid;
  grid-template-areas:
    "teamCollab teamCollab teamCollab benji"
    "palms palms laptops laptops"
    ". compass . .";
  .team-collaboration {
    grid-area: teamCollab;
  }
  .benji {
    grid-area: benji;
    align-self: end;
  }
  .remote-laptops {
    grid-area: laptops;
    border-bottom: 1rem solid ${(props) => props.theme.colors.bronze};
    border-left: 1rem solid ${(props) => props.theme.colors.bronze};
  }
  .compass-drawing {
    grid-area: compass;
    max-width: 75%;
    transition: all 500ms;
    cursor: pointer;
    &:hover {
      transform: scale(1.2) rotate(-45deg);
    }
  }
  .palm-trees {
    grid-area: palms;
  }
`;

const MarketingDemandContainer = styled(Container)`
  background: url(${Beach});
  background-size: cover;
  background-repeat: no-repeat;
  .smoke-block {
    background: ${(props) => props.theme.colors.smoke};
  }
  .indent {
    &:before {
      background: ${(props) => props.theme.colors.iron};
    }
  }
`;

const CreativeGallery = styled.div`
  display: grid;
  grid-template-areas:
    "nerd nerd dude dude dude"
    "carve carve carve key leeanna";
  .nerd {
    grid-area: nerd;
  }
  .dude {
    grid-area: dude;
    border-right: 1rem solid ${(props) => props.theme.colors.bronze};
    border-bottom: 1rem solid ${(props) => props.theme.colors.bronze};
    transform: translate(0, -50px);
    z-index: 2;
  }
  .carve {
    grid-area: carve;
    transform: translate(0, -125px);
    z-index: 1;
  }
  .key {
    grid-area: key;
  }
  .leeanna-pixel {
    grid-area: leeanna;
    height: 5px;
    width: 5px;
    cursor: pointer;
    transition: all 250ms;
    animation: ${glitching} 3s infinite;
  }
`;

const CreativeContainer = styled(Container)`
  background: url(${Foilage});
  background-size: cover;
  background-repeat: no-repeat;
`;

const TheCrew = () => {
  const [showModal, setShowModal] = useState(false);
  const [bio, setBio] = useState({
    verticalImage: "",
    name: "",
    title: "",
    description: "",
    questions: "",
    years: "",
  });

  // Removing functionality for now as it causes issues in production.
  // If desktop show maximum number of visible slides; if on mobile only show 1 visible slide. Prevents server side rendering error throw by checking if window is a browser first.
  // const isBrowser = typeof window !== "undefined";
  // let width = 0;
  // if (isBrowser) {
  //   width = window.innerWidth;
  // }
  // const slideCheck = (num) => {
  //   // const width = window.innerWidth;
  //   if (width < 576) {
  //     return 1;
  //   } else {
  //     return num;
  //   }
  // };

  // Easter Egg stuff
  const [questionCount, setQuestionCount] = useState(0);
  const compassEasterEgg = () => {
    setQuestionCount(questionCount + 1);
    const responseArr = [
      "This probably was supposed to be some rad easter egg.",
      "You probably don't need to keep clicking this.",
      "I promise there really isn't anything hidden here.",
      "You are pretty insistent on this huh?",
      "Keep clicking, I'm not going to do anything.",
      "You're annoying.",
      "Seriously though. There isn't anything here.",
      "Fine you want an easter egg? Go to https://yourethemannowdog.ytmnd.com/",
    ];
    if (questionCount > 6) {
      console.log(responseArr[7]);
    } else {
      console.log(responseArr[questionCount]);
    }
  };
  const leeAnnaEasterEgg = () => {
    console.log(
      `
    %cHow in the world did you find this? (Mega props to you for being a pro clicker.)
     ______________
    /             /|
   /             / |
  /____________ /  |
 | ___________ |   |
 || LeeAnna   ||   |
 || Rulez  !! ||   |
 ||           ||   |
 ||___________||   |
 |   _______   |  /
/|  (_______)  | /
( |_____________|/
\
.=======================.
| ::::::::::::::::  ::: |
| ::::::::::::::[]  ::: |
|   -----------     ::: |
-----------------------'
    `,
      "color:#9B794E; font-size:16px; font-weight:bold; text-shadow: 3px 3px 0 rgb(0,0,0,0.4)"
    );
  };
  return (
    <StaticQuery
      query={graphql`
        {
          allWpPage(filter: { title: { eq: "The Crew" } }) {
            edges {
              node {
                title
                theCrew {
                  leadershipDescription
                  leadershipTitle
                  title
                  numbers {
                    title
                    number
                    description
                  }
                  leadershipCrew {
                    title
                    name
                    image {
                      altText
                      sourceUrl
                    }
                    biography {
                      description
                      years
                      questions
                      image {
                        altText
                        sourceUrl
                      }
                    }
                  }
                  technologyTitle
                  technologyDescription
                  technologyCrew {
                    title
                    name
                    image {
                      altText
                      sourceUrl
                    }
                    biography {
                      description
                      questions
                      years
                      image {
                        altText
                        sourceUrl
                      }
                    }
                  }
                  creativeTitle
                  creativeDescription
                  creativeCrew {
                    title
                    name
                    image {
                      altText
                      sourceUrl
                    }
                    biography {
                      description
                      questions
                      years
                      image {
                        altText
                        sourceUrl
                      }
                    }
                  }
                  accountingTitle
                  accountingDescription
                  accountingCrew {
                    title
                    name
                    image {
                      altText
                      sourceUrl
                    }
                    biography {
                      description
                      questions
                      years
                      image {
                        altText
                        sourceUrl
                      }
                    }
                  }
                  ghostCrewTitle
                  ghostCrewDescription
                  ghostCrew {
                    title
                    name
                    image {
                      altText
                      sourceUrl
                    }
                    biography {
                      description
                      questions
                      years
                      image {
                        altText
                        sourceUrl
                      }
                    }
                  }
                  cultureCrewTitle
                  cultureCrewDescription
                  cultureCrew {
                    title
                    name
                    image {
                      altText
                      sourceUrl
                    }
                    biography {
                      description
                      questions
                      years
                      image {
                        altText
                        sourceUrl
                      }
                    }
                  }
                  marketingOpsDemandGenTitle
                  marketingOpsDemandGenDescription
                  marketingOpsDemandGenCrew {
                    title
                    name
                    image {
                      altText
                      sourceUrl
                    }
                    biography {
                      description
                      questions
                      years
                      image {
                        altText
                        sourceUrl
                      }
                    }
                  }
                  clientManagementTitle
                  clientManagementDescription
                  clientManagementCrew {
                    title
                    name
                    image {
                      altText
                      sourceUrl
                    }
                    biography {
                      description
                      questions
                      years
                      image {
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
                template {
                  ... on WpDefaultTemplate {
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
      `}
      render={(props) => (
        <Layout>
          <Seo title={props.allWpPage.edges[0].node.title} />
          <Hero
            pageTitle={props.allWpPage.edges[0].node.title}
            mainImage={props.allWpPage.edges[0].node.heroContent.mainImage}
            secondaryImage={
              props.allWpPage.edges[0].node.heroContent.secondaryImage
            }
            introductionContent={
              props.allWpPage.edges[0].node.heroContent.introductionContent
            }
          />
          <Container className="px-5 ">
            <BorderRow className="py-5">
              <Col md={6}>
                <h5 className="smoke fatty uppercut">
                  {props.allWpPage.edges[0].node.theCrew.title}
                </h5>
              </Col>
              <Col md={6}>
                <Row>
                  {props.allWpPage.edges[0].node.theCrew.numbers.map(
                    (value, index) => {
                      return (
                        <Col
                          sm={6}
                          key={index}
                          className="pt-4 pt-sm-0 pb-sm-5 px-sm-4"
                        >
                          <p className="bronze thick uppercut">{value.title}</p>
                          <h5 className="smoke fatty uppercut">
                            {value.number}
                          </h5>
                          <p
                            dangerouslySetInnerHTML={{
                              __html: `${value.description}`,
                            }}
                          ></p>
                        </Col>
                      );
                    }
                  )}
                </Row>
              </Col>
            </BorderRow>
            {/* Leadership */}
            <Row className="d-flex justify-content-center my-5">
              <Col md={7}>
                <Row>
                  <Col sm={12}>
                    <Leadership className="p-4 pb-2 p-sm-5">
                      <h5 className="iron fatty uppercut">
                        {props.allWpPage.edges[0].node.theCrew.leadershipTitle}
                      </h5>
                      <div className="indent">
                        <div
                          dangerouslySetInnerHTML={{
                            __html: `${props.allWpPage.edges[0].node.theCrew.leadershipDescription}`,
                          }}
                        ></div>
                      </div>
                    </Leadership>
                  </Col>
                </Row>
                <Row>
                  {props.allWpPage.edges[0].node.theCrew.leadershipCrew.map(
                    (value, index) => {
                      return (
                        <Col sm={6} key={index} className="pb-5 pb-sm-0">
                          <button
                            className="modal-opener easter-egg"
                            onClick={() => {
                              setShowModal(true);
                              setBio({
                                verticalImage: `${value.biography.image.sourceUrl}`,
                                verticalImageAlt: `${value.biography.image.altText}`,
                                name: `${value.name}`,
                                title: `${value.title}`,
                                description: `${value.biography.description}`,
                                questions: `${value.biography.questions}`,
                                years: `${value.biography.years}`,
                              });
                            }}
                          >
                            <img
                              src={value.image.sourceUrl}
                              alt={value.image.altText}
                              className="img-fluid"
                            />
                          </button>
                          <p className="smoke thick uppercut crew-name">
                            {value.name}
                          </p>
                          <p className="bronze crew-title">{value.title}</p>
                        </Col>
                      );
                    }
                  )}
                </Row>
              </Col>
            </Row>
            {/* Client Management*/}
            <Row className="pt-3 pt-sm-5 pb-2 d-flex align-items-center">
              <Col md={6}>
                <ClientManagementGallery className="p-5 pt-0">
                  <img
                    src={Teams}
                    alt="Collaboration. What a buzz word."
                    className="team-collaboration img-fluid"
                  />
                  <img
                    src={Benji}
                    alt="Whats that Stephen King movie about a dog?"
                    className="benji img-fluid"
                  />
                  <img
                    src={Laptops}
                    alt="Remote life we never knew."
                    className="remote-laptops img-fluid"
                  />
                  <button
                    className="compass-drawing easter-egg"
                    onClick={compassEasterEgg}
                  >
                    <img
                      src={Compass}
                      alt="This most definitely could be an easter egg."
                      className="img-fluid"
                    />
                  </button>
                  <img
                    src={Palms}
                    alt="Cali has way too many of these."
                    className="palm-trees img-fluid"
                  />
                </ClientManagementGallery>
              </Col>
              <Col md={6}>
                <h5 className="smoke fatty uppercut">
                  {props.allWpPage.edges[0].node.theCrew.clientManagementTitle}
                </h5>
                <div className="indent">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: `${props.allWpPage.edges[0].node.theCrew.clientManagementDescription}`,
                    }}
                  ></div>
                </div>
              </Col>
            </Row>
            <Row className="pb-5">
              <Col md={12}>
                <CarouselProvider
                  naturalSlideWidth={100}
                  naturalSlideHeight={100}
                  isIntrinsicHeight={true}
                  totalSlides={
                    props.allWpPage.edges[0].node.theCrew.clientManagementCrew
                      .length
                  }
                  visibleSlides={4}
                  infinite={true}
                >
                  <ButtonBack className="arrow previous">
                    <img src={PreviousArrow} alt="Previous arrow" />
                  </ButtonBack>
                  <ButtonNext className="arrow next">
                    <img src={NextArrow} alt="Next arrow" />
                  </ButtonNext>
                  <Slider>
                    {props.allWpPage.edges[0].node.theCrew.clientManagementCrew.map(
                      (value, index) => {
                        return (
                          <Slide
                            key={index}
                            index={index}
                            onClick={() => {
                              setShowModal(true);
                              setBio({
                                verticalImage: `${value.biography.image.sourceUrl}`,
                                verticalImageAlt: `${value.biography.image.altText}`,
                                name: `${value.name}`,
                                title: `${value.title}`,
                                description: `${value.biography.description}`,
                                questions: `${value.biography.questions}`,
                                years: `${value.biography.years}`,
                              });
                            }}
                          >
                            <img
                              src={value.image.sourceUrl}
                              alt={value.image.altText}
                              className="img-fluid modal-opener"
                            />
                            <p className="smoke thick uppercut crew-name">
                              {value.name}
                            </p>
                            <p className="bronze crew-title">{value.title}</p>
                          </Slide>
                        );
                      }
                    )}
                  </Slider>
                </CarouselProvider>
              </Col>
            </Row>
          </Container>
          {/* Marketings Operations & Demand Generation */}
          <MarketingDemandContainer fluid className="py-5 px-5 ">
            <Row className="d-flex justify-content-center my-5">
              <Col md={8}>
                <div className="smoke-block p-4 p-sm-5">
                  <Row>
                    <Col md={12}>
                      <h5 className="iron fatty uppercut">
                        {
                          props.allWpPage.edges[0].node.theCrew
                            .marketingOpsDemandGenTitle
                        }
                      </h5>
                      <div className="indent">
                        <div
                          dangerouslySetInnerHTML={{
                            __html: `${props.allWpPage.edges[0].node.theCrew.marketingOpsDemandGenDescription}`,
                          }}
                        ></div>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={12}>
                      <CarouselProvider
                        naturalSlideWidth={100}
                        naturalSlideHeight={100}
                        isIntrinsicHeight={true}
                        totalSlides={
                          props.allWpPage.edges[0].node.theCrew
                            .marketingOpsDemandGenCrew.length
                        }
                        visibleSlides={3}
                        infinite={true}
                      >
                        <ButtonBack className="arrow previous">
                          <img src={PreviousArrowIron} alt="Previous arrow" />
                        </ButtonBack>
                        <ButtonNext className="arrow next">
                          <img src={NextArrowIron} alt="Next arrow" />
                        </ButtonNext>
                        <Slider>
                          {props.allWpPage.edges[0].node.theCrew.marketingOpsDemandGenCrew.map(
                            (value, index) => {
                              return (
                                <Slide
                                  key={index}
                                  index={index}
                                  onClick={() => {
                                    setShowModal(true);
                                    setBio({
                                      verticalImage: `${value.biography.image.sourceUrl}`,
                                      verticalImageAlt: `${value.biography.image.altText}`,
                                      name: `${value.name}`,
                                      title: `${value.title}`,
                                      description: `${value.biography.description}`,
                                      questions: `${value.biography.questions}`,
                                      years: `${value.biography.years}`,
                                    });
                                  }}
                                >
                                  <img
                                    src={value.image.sourceUrl}
                                    alt={value.image.altText}
                                    className="img-fluid modal-opener"
                                  />
                                  <p className="iron thick uppercut crew-name">
                                    {value.name}
                                  </p>
                                  <p className="bronze crew-title">
                                    {value.title}
                                  </p>
                                </Slide>
                              );
                            }
                          )}
                        </Slider>
                      </CarouselProvider>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </MarketingDemandContainer>
          {/* Technology */}
          <Container className="px-5 px-sm-2 ">
            <Row className="d-flex justify-content-center my-5 py-5">
              <Col md={8}>
                <div className="smoke-block">
                  <Row>
                    <Col md={12}>
                      <h5 className="smoke fatty uppercut">
                        {props.allWpPage.edges[0].node.theCrew.technologyTitle}
                      </h5>
                      <div className="indent">
                        <div
                          dangerouslySetInnerHTML={{
                            __html: `${props.allWpPage.edges[0].node.theCrew.technologyDescription}`,
                          }}
                        ></div>
                      </div>
                    </Col>
                  </Row>
                  <Row className="pt-3">
                    <Col md={12}>
                      <CarouselProvider
                        naturalSlideWidth={100}
                        naturalSlideHeight={100}
                        isIntrinsicHeight={true}
                        totalSlides={
                          props.allWpPage.edges[0].node.theCrew.technologyCrew
                            .length
                        }
                        visibleSlides={3}
                        infinite={true}
                      >
                        <ButtonBack className="arrow previous">
                          <img src={PreviousArrow} alt="Previous arrow" />
                        </ButtonBack>
                        <ButtonNext className="arrow next">
                          <img src={NextArrow} alt="Next arrow" />
                        </ButtonNext>
                        <Slider>
                          {props.allWpPage.edges[0].node.theCrew.technologyCrew.map(
                            (value, index) => {
                              return (
                                <Slide
                                  key={index}
                                  index={index}
                                  onClick={() => {
                                    setShowModal(true);
                                    setBio({
                                      verticalImage: `${value.biography.image.sourceUrl}`,
                                      verticalImageAlt: `${value.biography.image.altText}`,
                                      name: `${value.name}`,
                                      title: `${value.title}`,
                                      description: `${value.biography.description}`,
                                      questions: `${value.biography.questions}`,
                                      years: `${value.biography.years}`,
                                    });
                                  }}
                                >
                                  <img
                                    src={value.image.sourceUrl}
                                    alt={value.image.altText}
                                    className="img-fluid modal-opener"
                                  />
                                  <p className="smoke thick uppercut crew-name">
                                    {value.name}
                                  </p>
                                  <p className="bronze crew-title">
                                    {value.title}
                                  </p>
                                </Slide>
                              );
                            }
                          )}
                        </Slider>
                      </CarouselProvider>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
            {/* Creative */}
            <Row className="d-flex justify-content-center mt-3 pt-5">
              <Col md={6}>
                <CreativeGallery>
                  <img
                    src={Nerd}
                    alt="Don't be a nerd. Nerd."
                    className="nerd img-fluid"
                  />
                  <img src={Dude} alt="Spiccoli?" className="dude img-fluid" />
                  <img
                    src={Carve}
                    alt="Wood carving is a hipster's favorite trend"
                    className="carve img-fluid"
                  />
                  <img src={Key} alt="Skeleton key" className="key img-fluid" />
                  <button
                    aria-label="Easter Egg"
                    className="leeanna-pixel easter-egg"
                    onClick={leeAnnaEasterEgg}
                  ></button>
                </CreativeGallery>
              </Col>
              <Col md={{ span: 5, offset: 1 }}>
                <h5 className="smoke fatty uppercut">
                  {props.allWpPage.edges[0].node.theCrew.creativeTitle}
                </h5>
                <div className="indent">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: `${props.allWpPage.edges[0].node.theCrew.creativeDescription}`,
                    }}
                  ></div>
                </div>
              </Col>
            </Row>
          </Container>
          <CreativeContainer fluid className="p-5">
            <Row className="d-flex justify-content-center my-3">
              <Col md={9}>
                <CarouselProvider
                  naturalSlideWidth={100}
                  naturalSlideHeight={100}
                  isIntrinsicHeight={true}
                  totalSlides={
                    props.allWpPage.edges[0].node.theCrew.creativeCrew.length
                  }
                  visibleSlides={4}
                  infinite={true}
                >
                  <ButtonBack className="arrow previous">
                    <img src={PreviousArrow} alt="Previous arrow" />
                  </ButtonBack>
                  <ButtonNext className="arrow next">
                    <img src={NextArrow} alt="Next arrow" />
                  </ButtonNext>
                  <Slider>
                    {props.allWpPage.edges[0].node.theCrew.creativeCrew.map(
                      (value, index) => {
                        return (
                          <Slide
                            key={index}
                            index={index}
                            onClick={() => {
                              setShowModal(true);
                              setBio({
                                verticalImage: `${value.biography.image.sourceUrl}`,
                                verticalImageAlt: `${value.biography.image.altText}`,
                                name: `${value.name}`,
                                title: `${value.title}`,
                                description: `${value.biography.description}`,
                                questions: `${value.biography.questions}`,
                                years: `${value.biography.years}`,
                              });
                            }}
                          >
                            <img
                              src={value.image.sourceUrl}
                              alt={value.image.altText}
                              className="img-fluid modal-opener"
                            />
                            <p className="smoke thick uppercut crew-name">
                              {value.name}
                            </p>
                            <p className="bronze crew-title">{value.title}</p>
                          </Slide>
                        );
                      }
                    )}
                  </Slider>
                </CarouselProvider>
              </Col>
            </Row>
          </CreativeContainer>
          {/* Accounting */}
          <Container className="px-5 ">
            <Row className="d-flex flex-row align-items-center justify-content-center mt-4 pt-5">
              <Col md={{ span: 5, offset: 1 }}>
                <h5 className="smoke fatty uppercut">
                  {props.allWpPage.edges[0].node.theCrew.accountingTitle}
                </h5>
                <div className="indent">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: `${props.allWpPage.edges[0].node.theCrew.accountingDescription}`,
                    }}
                  ></div>
                </div>
              </Col>
              <Col md={{ span: 3, offset: 2 }}>
                <CarouselProvider
                  naturalSlideWidth={100}
                  naturalSlideHeight={100}
                  isIntrinsicHeight={true}
                  totalSlides={
                    props.allWpPage.edges[0].node.theCrew.accountingCrew.length
                  }
                  visibleSlides={1}
                  infinite={true}
                >
                  <div
                    style={{
                      display:
                        props.allWpPage.edges[0].node.theCrew.accountingCrew
                          .length === 1
                          ? "none"
                          : "block",
                    }}
                  >
                    <ButtonBack className="arrow previous">
                      <img src={PreviousArrow} alt="Previous arrow" />
                    </ButtonBack>
                    <ButtonNext className="arrow next">
                      <img src={NextArrow} alt="Next arrow" />
                    </ButtonNext>
                  </div>
                  <Slider>
                    {props.allWpPage.edges[0].node.theCrew.accountingCrew.map(
                      (value, index) => {
                        return (
                          <Slide
                            key={index}
                            index={index}
                            onClick={() => {
                              setShowModal(true);
                              setBio({
                                verticalImage: `${value.biography.image.sourceUrl}`,
                                verticalImageAlt: `${value.biography.image.altText}`,
                                name: `${value.name}`,
                                title: `${value.title}`,
                                description: `${value.biography.description}`,
                                questions: `${value.biography.questions}`,
                                years: `${value.biography.years}`,
                              });
                            }}
                          >
                            <img
                              src={value.image.sourceUrl}
                              alt={value.image.altText}
                              className="img-fluid modal-opener"
                            />
                            <p className="smoke thick uppercut crew-name">
                              {value.name}
                            </p>
                            <p className="bronze crew-title">{value.title}</p>
                          </Slide>
                        );
                      }
                    )}
                  </Slider>
                </CarouselProvider>
              </Col>
            </Row>
            {/* Ghost Crew */}
            <Row className="d-flex flex-row align-items-center justify-content-center my-4">
              <Col md={{ span: 5, offset: 1 }}>
                <h5 className="smoke fatty uppercut">
                  {props.allWpPage.edges[0].node.theCrew.ghostCrewTitle}
                </h5>
                <div className="indent">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: `${props.allWpPage.edges[0].node.theCrew.ghostCrewDescription}`,
                    }}
                  ></div>
                </div>
              </Col>
              <Col md={{ span: 3, offset: 2 }}>
                <CarouselProvider
                  naturalSlideWidth={100}
                  naturalSlideHeight={100}
                  isIntrinsicHeight={true}
                  totalSlides={
                    props.allWpPage.edges[0].node.theCrew.ghostCrew.length
                  }
                  visibleSlides={1}
                  infinite={true}
                >
                  <div
                    style={{
                      display:
                        props.allWpPage.edges[0].node.theCrew.ghostCrew
                          .length === 1
                          ? "none"
                          : "block",
                    }}
                  >
                    <ButtonBack className="arrow previous">
                      <img src={PreviousArrow} alt="Previous arrow" />
                    </ButtonBack>
                    <ButtonNext className="arrow next">
                      <img src={NextArrow} alt="Next arrow" />
                    </ButtonNext>
                  </div>
                  <Slider>
                    {props.allWpPage.edges[0].node.theCrew.ghostCrew.map(
                      (value, index) => {
                        return (
                          <Slide
                            key={index}
                            index={index}
                            onClick={() => {
                              setShowModal(true);
                              setBio({
                                verticalImage: `${value.biography.image.sourceUrl}`,
                                verticalImageAlt: `${value.biography.image.altText}`,
                                name: `${value.name}`,
                                title: `${value.title}`,
                                description: `${value.biography.description}`,
                                questions: `${value.biography.questions}`,
                                years: `${value.biography.years}`,
                              });
                            }}
                          >
                            <img
                              src={value.image.sourceUrl}
                              alt={value.image.altText}
                              className="img-fluid modal-opener"
                            />
                            <p className="smoke thick uppercut crew-name">
                              {value.name}
                            </p>
                            <p className="bronze crew-title">{value.title}</p>
                          </Slide>
                        );
                      }
                    )}
                  </Slider>
                </CarouselProvider>
              </Col>
            </Row>
            {/* Culture Crew */}
            <Row className="d-flex flex-row align-items-center justify-content-center my-4">
              <Col md={{ span: 5, offset: 1 }}>
                <h5 className="smoke fatty uppercut">
                  {props.allWpPage.edges[0].node.theCrew.cultureCrewTitle}
                </h5>
                <div className="indent">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: `${props.allWpPage.edges[0].node.theCrew.cultureCrewDescription}`,
                    }}
                  ></div>
                </div>
              </Col>
              <Col md={{ span: 3, offset: 2 }}>
                <CarouselProvider
                  naturalSlideWidth={100}
                  naturalSlideHeight={100}
                  isIntrinsicHeight={true}
                  totalSlides={
                    props.allWpPage.edges[0].node.theCrew.cultureCrew.length
                  }
                  visibleSlides={1}
                  infinite={true}
                >
                  <div
                    style={{
                      display:
                        props.allWpPage.edges[0].node.theCrew.cultureCrew
                          .length === 1
                          ? "none"
                          : "block",
                    }}
                  >
                    <ButtonBack className="arrow previous">
                      <img src={PreviousArrow} alt="Previous arrow" />
                    </ButtonBack>
                    <ButtonNext className="arrow next">
                      <img src={NextArrow} alt="Next arrow" />
                    </ButtonNext>
                  </div>
                  <Slider>
                    {props.allWpPage.edges[0].node.theCrew.cultureCrew.map(
                      (value, index) => {
                        return (
                          <Slide
                            key={index}
                            index={index}
                            onClick={() => {
                              setShowModal(true);
                              setBio({
                                verticalImage: `${value.biography.image.sourceUrl}`,
                                verticalImageAlt: `${value.biography.image.altText}`,
                                name: `${value.name}`,
                                title: `${value.title}`,
                                description: `${value.biography.description}`,
                                questions: `${value.biography.questions}`,
                                years: `${value.biography.years}`,
                              });
                            }}
                          >
                            <img
                              src={value.image.sourceUrl}
                              alt={value.image.altText}
                              className="img-fluid modal-opener"
                            />
                            <p className="smoke thick uppercut crew-name">
                              {value.name}
                            </p>
                            <p className="bronze crew-title">{value.title}</p>
                          </Slide>
                        );
                      }
                    )}
                  </Slider>
                </CarouselProvider>
              </Col>
            </Row>
          </Container>
          <Banner
            quoteIllustration={
              props.allWpPage.edges[0].node.template.footerContent.quoteContent
                .illustration
            }
            quote={
              props.allWpPage.edges[0].node.template.footerContent.quoteContent
                .quote
            }
            banner={props.allWpPage.edges[0].node.template.footerContent.banner}
          />
          {/* Crew member modal */}
          <CrewModal
            crewbio={bio}
            show={showModal}
            onHide={() => setShowModal(false)}
          />
        </Layout>
      )}
    />
  );
};

export default TheCrew;
