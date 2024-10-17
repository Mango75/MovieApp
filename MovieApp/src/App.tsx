import movies from './movies.json';
import {AppBar,Box,Button,Container,FormControl,FormHelperText,Typography,ThemeProvider, TextField, colors, GlobalStyles} from "@mui/material";
import Grid from "@mui/material/Grid2"
import { FilmGrid } from './components/grid/filmGrid/FilmGrid';
import theme from './theme/theme';
import { ChangeEvent, useEffect, useState } from 'react';
import { SearchableKeys, iMovie } from './types/types';
import { filterArrayCreation, filterFunction, searchFunction } from './utils/functions';
import FilterMenuItem from './components/filter/filterMenyItem/FilterMenuItem';
import debounce from '@mui/material';
const genres= filterArrayCreation(movies.Movies,"Genre");

const languages= filterArrayCreation(movies.Movies,"Language");

function App() {
 const [movieList,setMovieList] = useState<iMovie[]>([]);
 const [genreFilterValue,setGenreFilterValue] = useState<string>("");
 const [langFilterValue,setLangFilterValue] = useState<string>("");

  useEffect(()=>{
    setMovieList(movies.Movies.sort((a,b)=>{return a.Title.localeCompare(b.Title)}))
  },[])

  const handleFilter =(filter:string,type:"Genre"|"Language")=>{
    if(type==="Genre"){
      setLangFilterValue("")
      setGenreFilterValue(filter);
    }else{
      setGenreFilterValue("");
      setLangFilterValue(filter);
    }
    let filteredMovies = filterFunction(filter,movies.Movies,type)
    setMovieList(filteredMovies);
    
  }
  const handleResetFilter= ()=>{
    setGenreFilterValue("");
    setLangFilterValue("");
    setMovieList(movies.Movies);
  }
  const handleSearch= (e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
    const keysToSearch: SearchableKeys[] = ['Title', 'Actors','Director','Plot'];
      e.preventDefault();
      let results=searchFunction(e.currentTarget.value,keysToSearch,movies.Movies);
      setMovieList(results);
  }

  return (
    <div className="App" style={{background: colors.blueGrey[50],}}>
      <ThemeProvider theme={theme}>
      <GlobalStyles styles={{body:{background: colors.grey[50]}}} />
      <Box sx={{flexGrow:1}}>  
      <AppBar sx={{background:colors.common.white}}>
        <Container>
          <Box  sx={{flexGrow:1}} pb={1}>
              <Grid container columns={12} gap={2} sx={{justifyContent:'center',alignItems:'center'}}>
                  <Grid spacing={3} flexGrow={1}>
                      <Typography variant="h1" color={colors.grey[900]} sx={{flexGrow:1}}>Movie List</Typography>
                  </Grid>
                  <Grid spacing={1} flexGrow={1}>
                    <FilterMenuItem 
                      genrefilter={{filterAction:handleFilter,filterArray:genres,filterValue:genreFilterValue}} 
                      languagefilter={{filterAction:handleFilter,filterArray:languages,filterValue:langFilterValue}}
                      resetAction={handleResetFilter}
                      />
                  </Grid>
                  <Grid spacing={5} flexGrow={1}>
                      <FormControl>
                          <TextField  
                            color="info" 
                            variant="outlined"
                             label="Search"
                            onChange={(e)=>{handleSearch(e)}}/>
                            <FormHelperText>Search Actors, Director, Plot or Title</FormHelperText>
                      </FormControl>
                  </Grid>
                </Grid>
              </Box>
            </Container>
        </AppBar>
        </Box>
        <Container>
          <Box color="secondary">
          <Button component="button" onClick={()=>{handleFilter("Action","Genre")}}>Filter on Action</Button>
          <Button component="button" onClick={handleResetFilter}>Reset</Button>
          {/* <GenreFilter filterArray={genres} filterAction={handleFilter} />
          <LanguageFilter filterArray={languages} filterAction={handleFilter} /> */}
          <FilmGrid movies={movieList} />
          </Box>  
        </Container>
      </ThemeProvider>    
    </div>
  );
}

export default App;
