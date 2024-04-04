import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import { Box, Stack } from "@mui/material";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Info from "./components/pages/Info";
import NotFound from "./components/pages/NotFound";

function App() {
    return (
        <Router>
            <Box>
                <Navbar />
                <Stack direction="row" spacing={2} justifyContent="flex-start">
                    <Box sx={{ width: 1/4 }}>
                        <Sidebar />
                    </Box>
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/info" element={<Info />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                    { /* <Rightbar /> */ }
                </Stack>
            </Box>
        </Router>
    );
}

export default App;
