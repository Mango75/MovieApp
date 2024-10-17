import { Box, Chip } from "@mui/material";
import { iGenreBadges } from "../../../types/types";

const GenreChips:React.FC<iGenreBadges> = ({genres,filteredGenres,onClick=()=>{}})=>{


    return(
        <Box my={1}>
        {
            genres?.map((genre, i)=>{
                    return <Chip key={i} variant={filteredGenres?.includes(genre)===true?'filled':'outlined'} onClick={()=>onClick(genre)} label={genre}/>
            })
        }
        
        </Box>
    )
}

export default GenreChips;