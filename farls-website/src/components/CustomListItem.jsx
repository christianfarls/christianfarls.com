import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';

const CustomListItem = ({ icon, primary, to, external }) => {
    const ListItemComponent = external ? 'a' : Link;

    const listItemProps = external
        ? { href: to, target: '_blank', rel: 'noopener noreferrer' }
        : { to };

    return (
        <ListItem button component={ListItemComponent} {...listItemProps}>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={primary} />
        </ListItem>
    );
};

export default CustomListItem;
