import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import {Box, Switch} from "@mui/material";

const ModeSwitch = ({ mode, setMode }) => {
    const handleModeChange = () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
    };

    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {mode === 'light' ? <Brightness7Icon /> : <Brightness4Icon />}
            <Switch 
                checked={mode === 'dark'} 
                onChange={e=> setMode(mode === "light" ? "dark" : "light")} 
            />
        </Box>
    );
};

export default ModeSwitch;