import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import errorImg from '../../assets/Error.png';

const ErrorPage = () => {
  return (
    <Wrapper>
      <StyledErrorImg src={errorImg} alt="Error-Image" />
      <StyledH2>An unknown error has occurred.</StyledH2>
      <p>please try refreshing the page, or <Link to='/support'> contact support </Link> if the problem persists.</p>
    </Wrapper>
  )
}

export default ErrorPage;

const Wrapper = styled.div`
  width: fit-content;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
`;

const StyledErrorImg = styled.img`
  margin: 1rem 0;
  width: 17rem;
  height:11rem;
`;

const StyledH2 = styled.h2`

`;