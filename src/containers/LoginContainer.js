import React from 'react';
import { connect } from 'react-redux';
import { login } from '../services/auth';
import lotus from '../../assets/images/lotus.png';
import styles from 'styled-components';
import {
  Link
} from 'react-router-dom';

const Lotus = styles.img`
@media (min-width: 375px) {
  display: block;
  margin-left: auto;
  margin-right: auto
  position: fixed;
  top: 35%;
  left: 22%;
}
@media (min-width: 700px) {
  display: block;
  margin-left: auto;
  margin-right: auto
  position: fixed;
  top: 30%;
  left: 42%;
}
@media (min-width: 1400px) {
  display: block;
  margin-left: auto;
  margin-right: auto
  position: fixed;
  top: 30%;
  left: 42%;
}
@media (min-width: 2000px) {
  display: block;
  margin-left: auto;
  margin-right: auto
  position: fixed;
  height: 30%;
  width: 15%;
  top: 30%;
  left: 45%;
}
`;

export class LoginContainer extends React.PureComponent {

  componentDidMount() {
    login();
  }

  render() {
    return (
      <>
        <Lotus src={lotus} alt="lotus icon picture in blue background"/><Link to='/auth'> </Link>
      </>
    );
  }
}

export default connect()(LoginContainer);
