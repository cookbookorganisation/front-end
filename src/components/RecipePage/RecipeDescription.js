import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    description: {
        display: "flex",
        alignContent: "center",
        fontStyle: "italic",
    },
}));

const dummyData = {
    description: "This recipe is so good! I learned it from my mom when I was little and it’s been a staple in our household ever since!",  // optional
};

const RecipeDescription = () => {
    const classes = useStyles();

    return (
        <Grid item className={classes.description}>
            <p>{dummyData.description}</p>
        </Grid>
    );
};

export default RecipeDescription;