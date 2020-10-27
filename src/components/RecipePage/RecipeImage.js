import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    photo: {

    }
}));

const dummyData = {
    photo: "photo here"
};

const RecipeImage = () => {
    const classes = useStyles();

    return (
        <Grid item className={classes.photo}>
            <p>{dummyData.photo}</p>
        </Grid>
    );
};

export default RecipeImage;