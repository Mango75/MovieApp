import { iCardSubHeader } from "../../../types/types";
import {Box, Typography} from'@mui/material'
import { createArrayFromString } from "../../../utils/functions";
import GenreChips from "../../chip/genreChip/GenreChips";
export const CardSubHeader:React.FC<iCardSubHeader> = ({Year,Runtime,Genre,ImdbRating,Metascore,filterFunction,filterGenres})=>{

    const genres= createArrayFromString(Genre)

    return(
                <Box>
                    <Typography variant="body1">{`${Year}, ${Runtime}`}</Typography>
                    <GenreChips genres={genres} filteredGenres={filterGenres} />
                </Box>
            )

}

export default CardSubHeader;