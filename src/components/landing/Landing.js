import 'normalize.css';
import React from 'react';
import {
  Link
} from 'react-router-dom';
import styles from 'styled-components';
import styled from 'styled-components';
import lotusIcon from '../../../assets/images/lotusIcon.png';
import logo from '../../../assets/images/logo.png';
import LandingModal from '../home/HomeModal';



import homeImage from '../../../assets/images/home-image.jpg';

const HomeImage = styles.main`
@media (min-width: 375px) {
  background-image: url(${homeImage}); 
  height: 100vh; 
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100vw 100vh;
  z-index: 99
  text-align: center;
}
@media (min-width: 700px) {
  background-image: url(${homeImage}); 
  height: 100vh;
  background-size: 50vw 100vh;
  background-color:  #47B1CD
}

`;

const StyledLink = styled(Link)`
@import url('https://fonts.googleapis.com/css?family=Muli:300,700');
  font-family: 'Muli', sans-serif;
  text-decoration: none;
  color: #47B1CD;
  font-size: 1.3em;
  font-weight: bold;
  border: 1px solid #47B1CD;
  border-radius: .3em;
  background-color: rgba(255, 255, 255, 0.9);
  padding: .8em .5em .5em .5em;
  width: 80%; 
  z-index: 1;
`;

const StyledDiv = styles.div`
  margin-top: 5em;
  display: grid;
  grid-row-gap: 2em;
  grid-template-rows: 50% 50%;
  margin-left: 2em;
`;

const StyledLogo = styles.img `
  margin-top: 2em;
  width: 20vw;
  height: 10vh;
  justify-self: center;
`;

export default class Landing extends React.PureComponent {
  render() {
    return (
      <>
        <LandingModal/>
        <HomeImage>
          <StyledLogo src={lotusIcon}/>
          <StyledDiv>
            <StyledLink to='/auth'> Sign-up </ StyledLink>
            <StyledLink to='/login'> Sign-in </ StyledLink>
          </StyledDiv>
        </HomeImage>
      </>
    );
  }
}
