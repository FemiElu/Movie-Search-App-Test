import React from 'react'; 
import styled from 'styled-components';

const MovieComponent = (props) => {
  const {Title, Year, imbID, Type, Poster } = props.movie
  return (
           <MovieContainer onClick={()=>props.setSelectedMovie(imbID)}>
            <CoverImage src={Poster} />
            <MovieName>{Title}</MovieName>
            <InfoColumn>
              <MovieInfo> Year: {Year}</MovieInfo>
              <MovieInfo>Type: {Type}</MovieInfo>
            </InfoColumn>
           </MovieContainer>
  )
}

const MovieContainer = styled.div`
  display: flex;
  border-radius: 12px;
  flex-direction: column;
  padding: 10px; 
  gap: 24px; 
  width: 300px; 
  height: 320px;
  box-shadow: 0 3px 10px 0 #aaa; 
  cursor: pointer;
`
const CoverImage = styled.img`
  height: 280px; 
  object-fit: cover;
`; 

const MovieName = styled.span`
  font-size: 18px; 
  font-weight: 600; 
  color: black; 
  margin: 15px 0; 
  white-space: nowrap;
  text-overflow:ellipsis;
  overflow: hidden;
`; 
const InfoColumn = styled.div`
  display: flex;
  flex-direction: row; 
  justify-content: space-between;
`; 
const MovieInfo = styled.span`
  font-size: 16px; 
  font-weight: 500; 
  color: black; 
  white-space: nowrap;
  overflow: hidden; 
  text-transform: capitalize; 
  text-overflow: ellipse;
`;


export default MovieComponent