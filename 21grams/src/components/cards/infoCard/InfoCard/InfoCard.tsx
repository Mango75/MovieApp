import {Card,CardMedia,CardContent, CardHeader, Typography, Divider} from '@mui/material';
import { iMovie } from '../../../../types/types';
import CardSubHeader from '../../cardSubHeader/CardSubHeader';
import InfoDrawer from '../../../drawer/infoDrawer/InfoDrawer';


const InfoCard:React.FC<iMovie> = ({
    Title,
    Year,
    Rated,
    Released,
    Runtime,
    Genre,
    Director,
    Writer,
    Actors,
    Plot,
    Language,
    Country,
    Awards,
    Poster,
    Metascore,
    imdbRating,
    imdbVotes,
    imdbId,
    Type}) =>{
     
     const drawerProps={
        Title,
        Year,
        Rated,
        Released,
        Runtime,
        Genre,
        Director,
        Writer,
        Actors,
        Plot,
        Language,
        Country,
        Awards,
        Poster,
        Metascore,
        imdbRating,
        imdbVotes,
        imdbId,
        Type
     }

    return(
        <Card variant='outlined'>
           <CardMedia component="img" image={Poster} sx={{height:'420px',objectFit: 'cover'}} alt={`Poster for ${Title}`} />
           <CardContent sx={{height: 220}}> 
                <CardHeader gap={20} title={Title} subheader={<CardSubHeader Year={Year} Runtime={Runtime} ImdbRating={imdbRating} Metascore={Metascore} Genre={Genre} Released={Released}/>}><Typography>{Title}</Typography></CardHeader>
                <Typography  mb={2} variant='body1'>{Language}</Typography>
                <Divider/>
                <InfoDrawer  {...drawerProps} />
            </CardContent>
        </Card>
    )
}

export default InfoCard;