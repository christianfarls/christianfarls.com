import { Link } from 'react-router-dom';
import { ListItem, ListItemButton, ListItemText, ListItemIcon } from "@mui/material";

const CustomListItem = ({ icon, primary, to }) => {
    return (
        <ListItem disablePadding>
            <ListItemButton component={Link} to={to}>
                <ListItemIcon>
                    {icon}
                </ListItemIcon>
                <ListItemText primary={primary} />
            </ListItemButton>
        </ListItem>
    );
};

export default CustomListItem;
