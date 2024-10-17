import Grid from '@mui/material/Grid2';
import { iMovie, iMovieGrid } from "../../../types/types"
import InfoCard from "../../cards/infoCard/InfoCard/InfoCard"
import { Box } from '@mui/material';

export const FilmGrid:React.FC<iMovieGrid> = ({
    movies
})=>{

    return(
    <Box sx={{flexGrow: 1}} py={12}>
        <Grid container spacing={2} columns={12}>
            {movies.map((movie:iMovie,i)=>{
            return (
                <Grid size={{ lg:4, md: 4, sm:6,xs:12}} key={i}>
                    <InfoCard {...movie} />
                </Grid>
                )
                })
            }
        </Grid>
    </Box> 
    )
}