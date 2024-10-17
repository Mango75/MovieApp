import { createTheme, Theme } from '@mui/material/styles';
import { colors } from "@mui/material";
 const theme:Theme = createTheme({
    typography:{
        fontFamily:[
            "sans-serif",
            "Afacad Flux",
            "Noto Serif Display"
        ].join(',')
    },
    palette:{
        primary:{
            main: colors.grey[300],
        },
        secondary:{
            main: colors.grey[200],
        },
        common:{
            white:'white',
        },
        info:{
            main: colors.grey[900]
        }
        
    },
    components:{
        MuiButton:{
            styleOverrides:{
                'root':{
                    color: 'black',
                },
                'contained':{
                    background: 'gray',
                    color: 'white'
                }
            }
        },
        MuiCard:{
            styleOverrides:{
                root:{
                    color: 'black',
                    background: 'white',
                }
            }
        },
        MuiCardHeader:{
            styleOverrides:{
                root:{
                    padding: "1rem 0",
                    fontFamily: "Noto Serif Display",
                    maxWidth:'230px',
                    textOverflow:'ellipsis',
                    overflow:'hidden',
                    whiteSpace:'nowrap',
                }
            }
        },
        MuiChip:{
            styleOverrides:{
                root:{
                    color: 'primary',
                    fontFamily: 'Afacad Flux',
                    fontSize:'.8rem',
                    padding: '1px 3px',
                }
            }
        },
        MuiDivider:{
            styleOverrides:{
                root:{
                    color: 'black',
                    borderColor: 'black',
                }
            }
        },
        MuiTypography:{
            styleOverrides:{
                body1:{
                    fontFamily:"Afacad Flux",
                    fontSize: '1rem'
                },
                body2:{
                    fontFamily:"Afacad Flux",
                    fontWeight:600,
                    fontSize: '1rem',
                },
                h1:{
                    fontFamily:"Noto Serif Display"
                },
                h2:{
                    fontFamily:"Noto Serif Display",
                    fontWeight:"bold",
                },
                h3:{
                    fontFamily:"Noto Serif Display",
                    fontWeight:"bold",
                },
                subtitle1:{
                    fontFamily:"Afacad Flux",
                    fontSize: "1.2rem",
                    fontWeight:'bold'
                }
            }

        }
    }
})

export default theme;