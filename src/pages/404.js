import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import {Container, Row, Col} from 'react-bootstrap'
import {Link} from 'gatsby'
import Seo from '../components/seo'
import Sea from '../images/404/lost-at-sea.jpg'
import Sinking from '../images/404/sinking.jpg'
import Leviathan from '../images/404/leviathan.svg'

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

const Floatie = styled(Link)`
background:${props=>props.theme.colors.bronze};
padding:1.25rem;  
width:350px;       
transition:all 500ms;
text-align:center;
text-transform:uppercase;
font-size:1.25rem;
letter-spacing:1px;
font-family:${props=>props.theme.fontFamily.gothamCondensedBook};            
  &:hover{
      color:${props=>props.theme.colors.smoke} !important;
      transform:rotate(15deg);
      background:${props=>props.theme.colors.stormGray};
  }
`

const Lithographic = styled.section`
min-height:375px;
background-size:cover;
`

const Lost = () => {
  return (
    <Layout>     
    <Seo title={"Bogus 404"}/>
      <Container className="py-5 px-3 px-sm-2">       
            <Main>
                <h1 className="page-title">Bogus 404</h1>
                <img src={Sea} className="img-fluid mt-5 mt-sm-0" alt="Lost at sea?" />
            </Main>
            <Row className="d-flex justify-content-center">
                <Col md={4} className="d-flex flex-column align-items-center">
                 <img src={Leviathan} className="img-fluid mb-5 px-5 mx-5 mx-sm-0 px-sm-0" alt="Megashark"/>
                <Floatie to="/">Come with me if you want to live</Floatie>
                </Col>
              </Row>
      </Container>
      <Lithographic style={{ backgroundImage:`url(${Sinking})` }} className="mt-5" />
    </Layout>
  )
};
export default Lost 