import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    photo: {

    }
}));

const RecipeInfo = () => {
    const classes = useStyles();
    
    return (
        <Grid container item >
            Recipe Info here
        </Grid>
    );
};

export default RecipeInfo;