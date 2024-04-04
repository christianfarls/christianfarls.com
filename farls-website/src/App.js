import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Sidebar from "./components/Sidebar";
import {Box, createTheme, Stack, ThemeProvider} from "@mui/material";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Projects from "./components/pages/Projects";
import Thesis from "./components/pages/Thesis";
import Info from "./components/pages/Info";
import NotFound from "./components/pages/NotFound";
import {useState} from "react";

function App() {

    // Create dark theme and mode handler
    const [mode, setMode] = useState("light");
    const darkTheme = createTheme({
        palette: {
            mode: mode
        }
    })
    
    return (
        <Router>
            <ThemeProvider theme={darkTheme}>
                <Box bgcolor={"background.default"} color={"text.primary"}>
                    <Navbar mode={mode} setMode={setMode}/>
                    <Stack direction="row" spacing={2} justifyContent="flex-start">
                        <Sidebar/>
                        <Routes>
                            <Route exact path="/" element={<Home/>}/>
                            <Route path="/about" element={<About/>}/>
                            <Route path="/projects" element={<Projects/>}/>
                            <Route path="/thesis" element={<Thesis/>}/>
                            <Route path="/info" element={<Info/>}/>
                            <Route path="*" element={<NotFound/>}/>
                        </Routes>
                    </Stack>
                </Box>
            </ThemeProvider>
        </Router>
    );
}

export default App;
