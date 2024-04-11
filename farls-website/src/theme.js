import {createTheme} from "@mui/material";

export const theme = createTheme({
    palette:{
        primary:{
            main: "#1760a5",
            light: "skyblue"
        },
        secondary:{
            main: "#893",
        },
        otherColor:{
            main: "#143"
        }
    },
    typography:{
        fontFamily: 'Poppins',
        fontWeightLight: '400',
        fontWeightRegular: '500',
        fontWeightMedium: '600',
        fontWeightBold: '700',
    }
})