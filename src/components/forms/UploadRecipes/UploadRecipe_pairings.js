import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles, Container, Typography, Button, TextField, Grid } from '@material-ui/core';
import GoHomeIcon from '../../GoHomeIcon';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(5),
        padding: theme.spacing(3, 6),
        border: "1px solid black",
        boxShadow: "3px 3px 8px #888888",
        backgroundColor: "#f8f8ff",
        borderRadius: "5px",
        height: "50%",
    },
    buttons: {
        display: "flex",
        flexDirection: "row",
        alignSelf: "flex-end",
        margin: theme.spacing(3),
    },
}));

const UploadRecipe_pairings = ({ handleCancel, setRecipeData, recipeData }) => {
    const history = useHistory();
    const classes = useStyles();

    function handleChange(e) {
        e.preventDefault();
        setRecipeData({
            ...recipeData,
            pairings: e.target.value 
        })
    };

    function handleNext(e) {
        // history.push('/uploadrecipe/pairings');
    };

    function handleSkip(e) {
        e.preventDefault();
        setRecipeData({
            ...recipeData,
            pairings: ""
        });
        // history.push('/uploadrecipe/pairings');
    }
    
    return (
        <Container component="main" maxWidth="md">
            <div 
            onClick={handleCancel}
            style={{ display: "flex", alignSelf: "flex-start", marginTop: "8%", marginLeft: "-1.5%" }}>
                <GoHomeIcon/>
            </div>
            <Grid container direction="column" justify="space-between" alignItems="flex-start" className={classes.paper}>
                <Grid item style={{ width: "40%" }}>
                    <Typography component="h5" variant="h5">
                        Does the chef recommend pairing this dish with something special?
                        <span role="img" label="emoji-silverware" style={{ marginLeft: "3%" }}>🍷</span>
                    </Typography>
                </Grid>

                <Grid item style={{ width: "100%" }}>
                    <TextField
                    onChange={handleChange}
                    fullWidth
                    id="pairings"
                    label="Ex: WHITE WINE"
                    name="pairings"
                    value={recipeData.pairings}
                    />
                </Grid>

                <Grid item className={classes.buttons}>
                    <Button 
                    variant="contained" 
                    color="primary" 
                    style={{
                        borderRadius: "2px",
                        padding: "1% 11%",
                    }}
                    onClick={handleNext}>
                        Next
                    </Button>
                    <Button
                    variant="contained"
                    color="default"
                    style={{
                        borderRadius: "2px",
                        padding: "1% 11%",
                        marginLeft: "3%"
                    }}
                    onClick={handleSkip}>
                        Skip
                    </Button>
                    <Button 
                    variant="outlined" 
                    color="secondary"
                    style={{ 
                        borderRadius: "2px",
                        padding: "1% 11%",
                        marginLeft: "3%"
                    }}
                    onClick={handleCancel}>
                        Cancel
                    </Button>
                </Grid>
            </Grid>
        </Container>
    );
};

export default UploadRecipe_pairings;