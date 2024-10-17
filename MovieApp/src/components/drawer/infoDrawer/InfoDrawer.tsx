import { Box, Button, Container, Drawer } from "@mui/material";
import Grid from '@mui/material/Grid2'
import { iMovie } from "../../../types/types";
import { Close } from "@mui/icons-material";
import { useState } from "react";
import DrawerContentText from "../drawerContentText/DrawerContentText";

const InfoDrawer:React.FC<iMovie> = ({
Actors,
Awards,
Country,
Director,
Genre,
imdbId,
imdbRating,
imdbVotes,
Language,
Metascore,
Plot,
Poster,
Rated,
Released,
Runtime,
Title,
Type,
Writer,
Year
}) =>{
    const [isOpen,setIsOpen] = useState<boolean>(false);
    const drawerContentTextProps ={
        Actors,
        Awards,
        Country,
        Director,
        Genre,
        imdbId,
        imdbRating,
        imdbVotes,
        Language,
        Metascore,
        Plot,
        Poster,
        Rated,
        Released,
        Runtime,
        Title,  
        Writer,
        Year
    }

    return(
        <>
        {
            !isOpen &&(
            <Box sx={{display: 'flex',alignItems:'center'}} my={2}>    
                <Button variant="contained" onClick={()=>{setIsOpen(!isOpen)}} >More info</Button>
            </Box> 
            )
        }        
        <Drawer anchor="bottom" onClose={()=>setIsOpen(false)} open={isOpen} sx={{borderRadius:'10px'}}>
            <Container sx={{flexGrow:1}}>
            <Button sx={{position:'absolute',top:20,right:20}}onClick={()=>setIsOpen(false)}><Close/></Button>
            <Grid container spacing={2} columns={12} my={3}>
                <Grid size={{md:6,sm:12}}>
                    <Box>
                     <img src={Poster}style={{width:'100%'}} alt={`Poster for ${Title}`} />
                    </Box>
                </Grid>
                <Grid size={{md:6,sm:12}} color="secondary" pl={2}>
                    <DrawerContentText {...drawerContentTextProps} />                                               
                </Grid>
            </Grid>
        </Container>
      </Drawer>
        
        </>

    )
}


export default InfoDrawer;