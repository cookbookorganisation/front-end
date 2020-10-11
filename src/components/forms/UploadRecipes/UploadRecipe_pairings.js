import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles, Container, Typography, Button, TextField, Grid } from '@material-ui/core';
import GoHomeIcon from '../../GoHomeIcon';

const useStyles = makeStyles((theme) => ({
    icon: {
        display: "flex", 
        alignSelf: "flex-start", 
        marginTop: "8%", 
        marginLeft: "-1.5%", 
        width: "8%"
    },
    paper: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "flex-start", 
        marginTop: theme.spacing(5),
        padding: theme.spacing(3, 6),
        border: "1px solid black",
        boxShadow: "3px 3px 8px #888888",
        backgroundColor: "#f8f8ff",
        borderRadius: "5px",
        height: "50%",
    },
    header: {
        display: "flex", 
        justifyContent: "flex-start", 
        fontSize: "2.0rem",
        fontWeight: 300
    },
    buttons: {
        display: "flex",
        flexDirection: "row",
        alignSelf: "flex-end",
        justifyContent: "flex-end",
        margin: theme.spacing(3, 0, 3, 3),
        width: "60%"
    },
    fullWidth: {
        width: "100%"
    },
    emoji: {
        marginLeft: "3%"
    },
    next: {
        borderRadius: "2px",
        padding: "1% 18%",
    },
    skipAndCancel: {
        borderRadius: "2px",
        padding: "1% 18%",
        marginLeft: "5%"
    },
    form: {
        width: "50%"
    }
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
            <div onClick={handleCancel} className={classes.icon}>
                <GoHomeIcon/>
            </div>
            <Grid container className={classes.paper}>
                <Grid item className={classes.fullWidth}>
                    <Typography component="h5" variant="h5" className={classes.header}>
                        Does the chef recommend pairing <br/> this dish with something special?
                        <span role="img" aria-label="wine emoji" className={classes.emoji}>🍷</span>
                    </Typography>
                </Grid>
                <Grid item className={classes.form}>
                    <TextField
                    onChange={handleChange}
                    fullWidth
                    id="pairings"
                    label="Ex: WHITE WINE"
                    name="pairings"
                    value={recipeData.pairings}/>
                </Grid>
                <Grid item className={classes.buttons}>
                    <Button variant="contained" color="primary" className={classes.next} onClick={handleNext}>
                        Next
                    </Button>
                    <Button variant="contained" color="default" className={classes.skipAndCancel} onClick={handleSkip}>
                        Skip
                    </Button>
                    <Button variant="outlined" color="secondary" className={classes.skipAndCancel} onClick={handleCancel}>
                        Cancel
                    </Button>
                </Grid>
            </Grid>
        </Container>
    );
};

export default UploadRecipe_pairings;