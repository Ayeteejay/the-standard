import React, { useState } from 'react'
import styled from 'styled-components'
import { graphql, StaticQuery, Link } from 'gatsby'
import Logo from './navigation-logo'

const Desktop = styled.div`
background:${props => props.theme.colors.bronze};
position:fixed;
z-index:10;
top:0;
left:0;
display:flex;
justify-content:space-between;
align-items:center;
padding:0px 5px;
height:100%;
writing-mode: vertical-lr;
transform:rotate(-180deg);
.desktop-links{
    a{
        padding:2rem 0;
        color:${props => props.theme.colors.iron};
        text-transform:uppercase;
        font-size:0.75rem;
        font-weight:500;
        text-decoration:none;
        transition:500ms;
        &:hover{
            color:${props => props.theme.colors.smoke};
        }
    }
}
.desktop-logo{
    cursor: pointer;
    transform:rotate(180deg);
    path {
    transition: 0.3s;
    }
    :hover path {
    fill: ${props => props.theme.colors.smoke};
    }
}
@media (max-width:${props => props.theme.breakpoints.sm}){
display:none;
}
`

const Mobile = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  top: 0;
  left: 0;
  height: 50px;
  width: 100%;
  background:${props => props.theme.colors.bronze};
  overflow: hidden;
  -webkit-transition: all 0.5s ease-out, background 1s ease-out;
  transition: all 0.5s ease-out, background 1s ease-out;
  -webkit-transition-delay: 0.2s;
  transition-delay: 0.2s;
  z-index:999;
  position: fixed;
  &.mobile-menu-opened {
    height: 100% !important;
    background-color:${props => props.theme.colors.iron};
    -webkit-transition: all 0.3s ease-in, background 0.5s ease-in;
    transition: all 0.3s ease-in, background 0.5s ease-in;
    -webkit-transition-delay: 0.25s;
    transition-delay: 0.25s;
  }
  .mobile-logo{
    cursor: pointer;
    padding: 0 8px 0 0;
    path {
      transition: 0.3s;
    }
    &:hover path {
      fill: ${props => props.theme.colors.smoke};
    }
  }
  @media (min-width: ${props => props.theme.breakpoints.sm}) {
    display: none;
  }
`
const Coffin = styled.div`
  height: 90vh;
  width:100%;
  display: flex;
  align-items: flex-start;
  flex-flow: column;
  justify-content: flex-end;
  padding:0 0 0 1rem;
  -webkit-transform: translate(0px, -80px);
  transform: translate(0px, -80px);
  opacity: 0;
  -webkit-transition: opacity 0.6s cubic-bezier(0.4, 0.01, 0.165, 0.99),
    -webkit-transform 0.5s cubic-bezier(0.4, 0.01, 0.165, 0.99);
  transition: opacity 0.6s cubic-bezier(0.4, 0.01, 0.165, 0.99),
    -webkit-transform 0.5s cubic-bezier(0.4, 0.01, 0.165, 0.99);
  &.open {
    color: ${props => props.theme.colors.smoke};
    -webkit-transform: translateY(0px);
    transform: scale(1) translateY(0px);
    opacity: 1;
    -webkit-transition-delay: 0.5s;
    transition-delay: 0.5s;
  }
  .links{
    display: flex;
    flex-flow: column;
    justify-content: flex-start;
  }
`

const MobileLink = styled(Link)`
  color: ${props => props.theme.colors.smoke};
  font-size:2.25rem;
  font-family: ${props => props.theme.fontFamily.gotham};
  font-weight: 900; 
  text-transform: uppercase;
  text-decoration: none;
  transition: all 0.3s;
  padding:0.75rem 0 0 0;
    &:hover {
    color: ${props => props.theme.colors.bronze};
  }
`

const BrandGuideMobileLink = styled.a`
    color: ${props => props.theme.colors.smoke};
  font-size:2.25rem;
  font-family: ${props => props.theme.fontFamily.gotham};
  font-weight: 900; 
  text-transform: uppercase;
  text-decoration: none;
  transition: all 0.3s;
  padding:0.75rem 0 0 0;
    &:hover {
    color: ${props => props.theme.colors.bronze};
  }
`

const BoneContainer = styled.div`
  position: relative;
  display: inline-block;
  height: 50px;
  width: 50px;
  cursor: pointer;
  -webkit-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: all 0.3s cubic-bezier(0.4, 0.01, 0.165, 0.99);
  transition: all 0.3s cubic-bezier(0.4, 0.01, 0.165, 0.99);
  -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none;
  -webkit-tap-highlight-color: transparent;
  &.bone-container-opened {
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
  }
`
const Bones = styled.div`
  width: 18px;
  height: 8px;
  position: relative;
  display: block;
  margin: -4px auto 0;
  top: 50%;
  .femur{
    width: 100%;
    height: 1px;
    display: block;
    position: relative;
    background: ${props => props.theme.colors.smoke};
    -webkit-transition: all 0.3s cubic-bezier(0.4, 0.01, 0.165, 0.99);
    transition: all 0.3s cubic-bezier(0.4, 0.01, 0.165, 0.99);
    -webkit-transition-delay: 0s;
    transition-delay: 0s;
  }
  .top-bone{
    -webkit-transform: translateY(0px) rotate(0deg);
    transform: translateY(0px) rotate(0deg);
  }
  .top-opened{
        -webkit-transform: translateY(4px) rotate(45deg);
        transform: translateY(4px) rotate(45deg);
        -webkit-transition: all 0.4s cubic-bezier(0.4, 0.01, 0.165, 0.99);
        transition: all 0.4s cubic-bezier(0.4, 0.01, 0.165, 0.99);
        -webkit-transition-delay: 0.2s;
        transition-delay: 0.2s;
  }
  .bottom-bone{
    -webkit-transform: translateY(6px) rotate(0deg);
    transform: translateY(6px) rotate(0deg);
  }
  .btm-opened{
    -webkit-transform: translateY(3px) rotate(-45deg);
    transform: translateY(3px) rotate(-45deg);
    -webkit-transition: all 0.4s cubic-bezier(0.4, 0.01, 0.165, 0.99);
    transition: all 0.4s cubic-bezier(0.4, 0.01, 0.165, 0.99);
    -webkit-transition-delay: 0.2s;
    transition-delay: 0.2s;
}
`

const Navigation = () => {
  const [openCoffin, setOpenCoffin] = useState(false);
  return (
    <StaticQuery query={graphql`
                    {
                      allWpPage {
                        edges {
                          node {
                            uri
                            title
                          }
                        }
                      }
                    }                      
            `} render={props => (
        <React.Fragment>
          <Desktop>
            <div className="desktop-links">
              {props.allWpPage.edges.filter((value) => value.node.title !== "Homepage").map((value, index) => {
                if(value.node.title === "Brand Guide"){
                  return (                    
                    <a key={index} href="https://brand.vsslagency.com/" target="_blank" rel="noreferrer">{value.node.title}</a>
                  )
                }else{
                  return (
                    <Link key={index} to={value.node.uri}>{value.node.title}</Link>
                  )
                }
              })}
            </div>
            <div className="desktop-logo">
              <Link to="/">
                <Logo styledFill="black" width={40} height={40}></Logo>
              </Link>
            </div>
          </Desktop>
          <Mobile className={openCoffin ? "mobile-menu-opened" : ""}>
            <BoneContainer onClick={() => { setOpenCoffin(!openCoffin) }} className={openCoffin ? "bone-container-opened" : ""}>
              <Bones>
                <div className={openCoffin ? "femur top-bone top-opened" : "femur top-bone"}></div>
                <div className={openCoffin ? "femur bottom-bone btm-opened" : "femur bottom-bone"}></div>
              </Bones>
            </BoneContainer>
            <Coffin className={openCoffin ? "open" : ""}>
              {props.allWpPage.edges.map(((value, index) => {
                if (value.node.title === "Brand Guide") {
                  return (
                    <BrandGuideMobileLink href="https://brand.vsslagency.com/" target="_blank" rel="noreferrer">
                      {value.node.title}
                    </BrandGuideMobileLink>
                  )
                }
                else if(value.node.title !== "Homepage"){
                  return (
                    <MobileLink key={index} to={value.node.uri}>
                      {value.node.title}
                    </MobileLink>
                  )
                }
                else {
                  return (
                    <MobileLink key={index} to="/">
                      {value.node.title}
                    </MobileLink>
                  )
                }
              }))}
            </Coffin>
            <div className="mobile-logo">
              <Link to="/">
                <Logo styledFill="black" width={45}></Logo>
              </Link>
            </div>
          </Mobile>
        </React.Fragment>
      )}
    />
  )
};
export default Navigation;

