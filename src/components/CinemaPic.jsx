import React from 'react'; 
import cinemapic from '../assets/people-watching-movie.jpg';
import styled from 'styled-components';

const CinemaPic = () => {
  return (
    <Container className='background'>
        <img src={cinemapic} alt='cinema' />
    </Container>
  )
}

const Container = styled.div`
    
    img {
      height: 100vh;
      width: 100vw;
      object-fit: cover;
    }
    `
export default CinemaPic