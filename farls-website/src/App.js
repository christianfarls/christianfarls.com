import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Box, Stack, ThemeProvider } from '@mui/material';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Projects from './components/pages/Projects';
import Thesis from './components/pages/Thesis';
import Contact from './components/pages/Contact';
import NotFound from './components/pages/NotFound';
import theme from './theme'; // Import your custom theme
import './App.css';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <Navbar className="navbar"/>
                <Box className="app-box">
                    <Stack className="pages">
                        <Home/>
                        <About/>
                        <Projects/>
                        <Thesis/>
                        <Contact/>
                    </Stack>
                </Box>
            </Router>
        </ThemeProvider>
    );
}

export default App;

/*                    <Routes>
                        <Route exact path="/" element={<Home/>}/>
                        <Route path="/about" element={<About/>}/>
                        <Route path="/projects" element={<Projects/>}/>
                        <Route path="/thesis" element={<Thesis/>}/>
                        <Route path="/contact" element={<Contact/>}/>
                        <Route path="*" element={<NotFound/>}/>
                      </Routes>
*/