import { Box, Button,FormControl, FormHelperText, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import Grid from "@mui/material/Grid2"
import { iFilterMenuItem } from "../../../types/types";


const FilterMenuItem:React.FC<iFilterMenuItem>=({genrefilter,languagefilter,resetAction})=>{
        const handleFilterChange=(e:SelectChangeEvent<unknown>,type:"Genre"|"Language")=>{
            genrefilter.filterAction(e.target.value as string,type)

        }

        return(
        <Box sx={{flexGrow:1}}>
            <Grid container columns={12} gap={2} p={2} sx={{alignItems:'center'}}>
                <Grid spacing={4}>
                    <FormControl>
                        <InputLabel color="info" id="language-filter">
                            Language
                        </InputLabel>
                        <Select 
                        color="info" 
                        labelId="language-filter"
                        label="Language" 
                        onChange={(e)=>{ handleFilterChange(e,"Language")}}
                        value={languagefilter.filterValue}
                        >
                            {languagefilter.filterArray.map((filter,i)=>{
                                    return <MenuItem value={filter} key={i}>{filter}</MenuItem>
                                })}
                        </Select>
                        <FormHelperText>Filter on Language</FormHelperText>
                    </FormControl>
                </Grid>
                <Grid spacing={4}>
                <FormControl>
                    <InputLabel color="info" id="genre-filter">
                            Genre
                    </InputLabel>
                    <Select 
                        color="info" 
                        labelId="genre-filter"
                        label="Genre"
                        value={genrefilter.filterValue} 
                        onChange={(e)=>{ handleFilterChange(e,"Genre")}}
                        >
                            {genrefilter.filterArray.map((filter,i)=>{
                            return <MenuItem value={filter} key={i}>{filter}</MenuItem>
                            })}
                    </Select>
                    <FormHelperText>Filter on genre</FormHelperText>
                    </FormControl>
                </Grid>
                <Grid spacing={4} pb={5}>
                    <FormControl>
                        <Button 
                            color="secondary"
                            component="button" 
                            onClick={resetAction} 
                            variant="contained">
                                Reset
                        </Button>
                    </FormControl>
                </Grid>
            </Grid>
         </Box>
        )

}

export default FilterMenuItem