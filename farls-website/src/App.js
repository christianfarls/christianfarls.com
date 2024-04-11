import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {Box, Stack, ThemeProvider} from "@mui/material";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Projects from "./components/pages/Projects";
import Thesis from "./components/pages/Thesis";
import Contact from "./components/pages/Contact";
import NotFound from "./components/pages/NotFound";
import {theme} from "./theme.js";

function App() {
    
    return (
        <Router>
            <ThemeProvider theme={theme}>
                <Box bgcolor={"background.default"} color={"text.primary"}>
                    <Navbar />
                    <Stack direction="row" spacing={2} justifyContent="flex-start">
                        <Routes>
                            <Route exact path="/" element={<Home/>}/>
                            <Route path="/about" element={<About/>}/>
                            <Route path="/projects" element={<Projects/>}/>
                            <Route path="/thesis" element={<Thesis/>}/>
                            <Route path="/contact" element={<Contact/>}/>
                            <Route path="*" element={<NotFound/>}/>
                        </Routes>
                    </Stack>
                </Box>
            </ThemeProvider>
        </Router>
    );
}

export default App;
