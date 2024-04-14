import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        fontFamily: 'Poppins',
        variants: {
            'page-title': {
                fontWeight: 'bold',
                fontSize: '30rem',
                color: '#FFFFFF',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
            },
            'page-info': {
                fontSize: '1rem',
                color: '#FFFFFF',
                textAlign: 'center',
            },
        },
    },
});

export default theme;
