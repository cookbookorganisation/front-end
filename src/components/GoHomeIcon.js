import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles, IconButton } from '@material-ui/core';

// import SVG JS component
import CookBookIcon from "../images/icons/cookBookIcon.js";

const useStyles = makeStyles((theme) => ({
    paper: {
        height: "75px",
        width: "75px",
        background: "white",
        "&:hover": {
            backgroundColor: "white",
        },
    },
}));

const GoHomeIcon = () => {
    const classes = useStyles();
    const history = useHistory();

    return (
        <IconButton onClick={()=>history.push('/mycollections')} className={classes.paper}>
            <CookBookIcon  />
        </IconButton>
    );
};

export default GoHomeIcon;