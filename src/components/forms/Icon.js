import React from 'react';
import { makeStyles } from '@material-ui/core';
import GoHomeIcon from '../../images/icons/cookBookIcon';

const useStyles = makeStyles((theme) => ({
    icon: {
        display: "flex", 
        alignSelf: "flex-start", 
        margin: theme.spacing(4, 0, 4, -2),
        width: "8%"
    },
}));

const Icon = ({ handleCancel }) => {
    const classes = useStyles();

    return (
        <div onClick={handleCancel} className={classes.icon}>
            <GoHomeIcon/>
         </div>
    );
};

export default Icon;