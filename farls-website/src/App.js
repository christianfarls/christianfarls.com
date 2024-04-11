import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {Box, Stack} from "@mui/material";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Projects from "./components/pages/Projects";
import Thesis from "./components/pages/Thesis";
import Contact from "./components/pages/Contact";
import NotFound from "./components/pages/NotFound";
import './components/Navbar.css';

function App() {
    return (
        <Router>
            <Box display="flex" flexDirection="column">
                <Navbar className="navbar"/>
                <Stack direction="column" spacing={2} justifyContent="center">
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
        </Router>
    );
}

export default App;
