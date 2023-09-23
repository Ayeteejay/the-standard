import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { Container, Row, Col } from 'react-bootstrap'

const Wrapper = styled(Container)`
background:${props => props.theme.colors.iron};
`

const TopSection = styled(Row)`
display:flex;
justify-content:space-between;
border-bottom:1px solid ${props => props.theme.colors.stormGray};
`
const BottomSection = styled(Row)`
display:flex;
justify-content:space-between;
.map-link{
  font-size:1.25rem;
  color:${props => props.theme.colors.stormGray};
  font-family:${props => props.theme.fontFamily.harbour};
  letter-spacing:1px;
}
p.terms{
    font-size:0.8rem;
    text-transform:uppercase;
    text-align:right;
}
.location{
    transition:all 1s;
    &:hover{
        transform:rotate(10deg);
    }
}
@media (max-width:${props => props.theme.breakpoints.sm}){
    p.terms{
        padding:1rem 0 0 0;
        text-align:center;
    }
    .location{
        text-align:center;
    }
}
`

const Footer = () => {
    const getCurrentYear = () => {
        const date = new Date();
        const year = date.getFullYear();
        return year;
    }
    return (
        <Wrapper className="py-5 px-5 px-xl-0">
            <TopSection className="mb-5 pb-5 px-4">
                <Col md={4} className="p-0">
                    <p className="old-english">Our Manifesto</p>
                </Col>
                <Col md={{ span: 6, offset: 2 }} className="p-0">
                    <p>At VSSL (pronounced, “Vessel”), we don’t aimlessly drift the seas of modern marketing and advertising. This isn’t our first voyage; we have our sea legs and we know what it takes to be successful in today’s aggressive, digital-driven world.</p>
                </Col>
            </TopSection>
            <BottomSection className="px-4">
                <Col md={4} className="p-0">
                    <div className="location">
                        <a href="https://vsslagency.com/" target="_blank" rel="noopener noreferrer" className="map-link">Digital is Our Domain</a> · <a className="map-link" href="https://goo.gl/maps/FxvGBDvA91y" target="_blank" rel="noopener noreferrer">32.723625 -117.221491</a>
                    </div>
                </Col>
                <Col md={{ span: 4, offset: 4 }} className="p-0">
                    <p className="terms">
                        &#169; {getCurrentYear()} VSSL Agency. All rights reserved.
                        <br />
                        <Link to="/privacy-policy">Privacy Policy</Link> / <Link to="/terms-of-use">Terms of Use</Link>
                        <br />
                        <a href="mailto:operations@vsslagency.com">
                            operations@vsslagency.com
                        </a>
                    </p>
                </Col>
            </BottomSection>
        </Wrapper>
    )
};

export default Footer