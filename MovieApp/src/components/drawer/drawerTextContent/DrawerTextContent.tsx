import { iMovie } from "../../../types/types";
import Grid from "@mui/material/Grid2"
import { Divider,Rating,Typography } from "@mui/material";
import { createArrayFromString } from "../../../utils/functions";
import GenreChips from "../../chip/genreChip/GenreChips";

export const DrawerTextContent:React.FC<iMovie>=({
    Actors,
    Awards,
    Country,
    Director,
    Genre,
    imdbRating,
    Language,
    Metascore,
    Plot,
    Rated,
    Released,
    Runtime,
    Title,
    Writer,
    Year
})=>{

    const genreArray= createArrayFromString(Genre);

    return(
            <>                    
            <Grid container columns={12} spacing={2} >
                <Grid size={12}>
                    <Typography variant="h3" my={2}>{Title}</Typography>
                        </Grid>
                <Grid size={12}>
                        <Typography variant="body2">{`${Country}, ${Year} `}</Typography>
                </Grid>
                <Grid size={12}>
                <Grid container>
                    <Grid size={6}>
                        {imdbRating&&<Typography variant="body1"><Rating precision={0.5} max={5} value={parseFloat(imdbRating)/2} /> Imdb rating</Typography>}
                            
                    </Grid>
                        <Grid size={6}>
                                    {
                                        Metascore&&<Typography variant="body1"><Rating precision={0.5} max={5}  value={parseInt(Metascore)/20} /> Metascore</Typography>
                                    }
                        </Grid> 
                    </Grid>  
                    </Grid>
                    <Grid size={2}>
                        <Typography> Rated:</Typography>
                    </Grid>
                    <Grid size={10}>
                         <Typography variant="body2"> {Rated}</Typography>
                    </Grid>
                    <Grid size={2}>
                        <Typography> Released:</Typography>
                    </Grid>
                    <Grid size={10}>
                         <Typography variant="body2"> {Released}</Typography>
                    </Grid>   
                    <Grid size={2}>
                        <Typography> Language:</Typography>
                         </Grid>
                         <Grid size={10}>
                         <Typography variant="body2"> {Language}</Typography>
                    </Grid>   
                    <Grid size={12}>
                        <GenreChips genres={genreArray} /> 
                    </Grid>
                    <Grid size={2}>
                        <Typography> Runtime:</Typography>
                    </Grid>
                    <Grid size={10}>
                         <Typography variant="body2"> {Runtime}</Typography>
                    </Grid> 
                    <Grid size={12}>  
                        <Divider />
                    </Grid>
                    <Grid size={2}>
                        <Typography> Director:</Typography>
                    </Grid>
                    <Grid size={10}>
                         <Typography variant="body2"> {Director}</Typography>
                    </Grid>
                    <Grid size={2}>
                        <Typography> Writer</Typography>
                    </Grid>
                    <Grid size={10}>
                         <Typography variant="body2"> {Writer}</Typography>
                    </Grid>   
                    <Grid size={2}>
                        <Typography> Actors:</Typography>
                    </Grid>
                    <Grid size={10}>
                         <Typography variant="body2"> {Actors}</Typography>
                    </Grid>   
                    <Grid size={2}>
                        <Typography> Awards:</Typography>
                    </Grid>
                    <Grid size={10}>
                         <Typography variant="body2"> {Awards}</Typography>
                    </Grid>   
                    <Grid size={2}>
                        <Typography> Plot:</Typography>
                    </Grid>
                         <Grid size={10}>
                         <Typography variant="body2"> {Plot}</Typography>
                    </Grid>   
                    </Grid>
  </>                                                  

    )
}
export default DrawerTextContent;