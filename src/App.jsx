import { useState, useEffect } from 'react'; 
import axios from 'axios';
import styled from 'styled-components';
import MovieComponent from './components/MovieComponent'; 
import MovieInfoComponent from './components/MovieInfoComponent'; 
import CinemaPic from './components/CinemaPic';


export const API_KEY = "84cd8e1f";


function App() {
  
  const [searchQuery, setSearchQuery] = useState(""); 
  const [movieList, setMovieList] = useState([]); 
  const [selectedMovie, setSelectedMovie] = useState("");
  const [timeoutId, setTimeOutId] = useState("");

  const fetchMovies = async(searchString) =>{
    const response = await axios.get(`https://www.omdbapi.com/?s=${searchString}&apikey=${API_KEY}`)
    setMovieList(response.data.Search); 
    console.log(response.data.Search);
    
  }

  useEffect(()=>{
    fetchMovies(); 
  },[])
  const onTextChange = (e) => { 
    setSelectedMovie("")
    clearTimeout(timeoutId); 
    setSearchQuery(e.target.value); 
    const timeout = setTimeout(()=>fetchMovies(e.target.value), 500);
    setTimeOutId(timeout); 
  };

  return (
    <>
    <Container>
      <Header>
        <h2>MyTestApp</h2>
        </Header>
        <CinemaPic/>
        <h3>Watch <br/>Something <br/> Incredible.</h3>
        <SearchBox>
         <SearchInput
           placeholder='search movies'
           value={searchQuery}
           onChange={onTextChange} 
           />
        </SearchBox>
        
        {selectedMovie && <MovieInfoComponent selectedMovie={selectedMovie} setSelectedMovie={setSelectedMovie}/>}
      <MovieListContainer>
        {movieList?.length ? (
          movieList.map((movie, index) => (
            <MovieComponent
              key={index}
              movie={movie}
               setSelectedMovie={setSelectedMovie}
            />
          ))
        ) : (
          <Placeholder src="/react-movie-app/movie-icon.svg" />
        )}
      </MovieListContainer>
    </Container>
    </>
  )
}



const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  h3{
    position:absolute; 
    top:235px;
    left:70px; 
    color: white; 
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 60px;

  }
`; 

const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #292929;
  font-family: Times, 'Times New Roman', serif;
  color: white; 
  padding: 10px;
  font-size: 25px; 
  font-weight:bold; 
  box-shadow: 0 3px 6px 0 #555;
  position: absolute;
  width: 1440px;
  height: 140px;
  left: 0px;
  top: 0px;
  h2 {
    border: 1px solid; 
    padding: 10px; 
    margin-left: 20px;
  }  
`

const SearchBox = styled.div`
  display: flex;
  flex-direction: row; 
  align-items: center;
  padding: 10px 10px; 
  border: 1px solid;
  margin-left: 20px; 
  margin-top: 40px; 
  width: 95%;
  height: 40px;
`
const AppName = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
const SearchIcon = styled.img`
  width: 32px;
  height: 32px;
`;
const MovieImage = styled.img`
  width: 48px;
  height: 48px;
  margin: 15px;
`;
const SearchInput = styled.input`
  color: black;
  font-size: 16px;
  font-weight: bold;
  border: none;
  outline: none;
  margin-left: 15px;
`;
const MovieListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 30px;
  gap: 25px;
  justify-content: space-evenly;;
`;
const Placeholder = styled.img`
  width: 120px;
  height: 120px;
  margin: 150px;
  opacity: 50%;
`;




export default App
