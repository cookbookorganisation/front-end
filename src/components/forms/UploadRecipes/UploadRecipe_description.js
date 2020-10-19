import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles, Container, Typography, Button, TextField, Grid } from '@material-ui/core';
import Icon from '../Icon';
import ProgressBar from '../ProgressBar';
import CancelButton from './CancelButton';

const useStyles = makeStyles((theme) => ({
    paper: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "flex-start", 
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
    subtitle: {
        display: "flex", 
        justifyContent: "flex-start", 
        fontWeight: 300,
        color: "#22A7F0"
    },
    emoji: {
        marginLeft: "3%" 
    },
    buttons: {
        display: "flex",
        flexDirection: "row",
        alignSelf: "flex-end",
        justifyContent: "space-between",
        margin: theme.spacing(3, 0, 3, 3),
        width: "50%"
    },
    button: {
        borderRadius: "2px",
        padding: "1% 15%",    
        marginLeft: theme.spacing(2)
    },
    fullWidth: {
        width: "100%" 
    },
}));

const UploadRecipe_description = ({ handleCancel, setRecipeData, recipeData }) => {
    const history = useHistory();
    const classes = useStyles();
    
    function handleChange(e) {
        e.preventDefault();
        setRecipeData({
            ...recipeData,
            description: e.target.value 
        })
    };

    function handleNext(e) {
        history.push('/uploadrecipe/photo');
    };

    function handleSkip(e) {
        e.preventDefault();
        setRecipeData({
            ...recipeData,
            description: ""
        });
        history.push('/uploadrecipe/servings');
    }
   
    return (
        <Container component="main" maxWidth="md">
            <Icon handleCancel={handleCancel}/>
            <Grid container className={classes.paper}>
                <Grid item className={classes.fullWidth}>
                    <Typography component="h5" variant="h5" className={classes.header}>
                        Tell us a bit about the recipe!
                        <span role="img" aria-label="happy face emoji" className={classes.emoji}>😃</span>
                    </Typography>
                    <Typography component="h6" variant="h6" className={classes.subtitle}>
                        How is it meaningful to you? Who taught you the recipe? Where does it come from?
                    </Typography>
                </Grid>
                <Grid item className={classes.fullWidth}>
                    <TextField
                    onChange={handleChange}
                    fullWidth
                    id="description"
                    label="Ex: NANA WOULD MAKE THIS CAKE FOR MY BRITHDAY. SHE TAUGHT ME WHEN I WAS 10 YEARS OLD."
                    name="name"
                    value={recipeData.description}/>
                </Grid>
                <Grid item className={classes.buttons}>
                    <Button variant="outlined" color="primary" className={classes.button} onClick={()=>history.goBack()}>
                        Back
                    </Button>
                    <Button variant="contained" color="default" className={classes.button} onClick={handleSkip}>
                        Skip
                    </Button>
                    <Button variant="contained" color="primary" className={classes.button} onClick={handleNext}>
                        Next
                    </Button>
                </Grid>
            </Grid>
            <ProgressBar num={18}/>
            <CancelButton handleCancel={handleCancel}/>
        </Container>
    );
};

export default UploadRecipe_description;