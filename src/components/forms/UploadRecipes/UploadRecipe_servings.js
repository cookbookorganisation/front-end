import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles, Container, Typography, Button, TextField, Grid, Box } from '@material-ui/core';
import GoHomeIcon from '../../GoHomeIcon';
import BorderLinearProgress from '../BorderLinearProgress';

const useStyles = makeStyles((theme) => ({
    bar: {
        display: "flex", 
        flexGrow: 1,
        margin: theme.spacing(3, 0)
    },
    icon: {
        display: "flex", 
        alignSelf: "flex-start", 
        margin: theme.spacing(4, 0, 4, -2), 
        width: "8%"
    },
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
    emoji: {
        marginLeft: "3%"
    },
    buttons: {
        display: "flex",
        flexDirection: "row",
        alignSelf: "flex-end",
        justifyContent: "space-between",
        margin: theme.spacing(3, 0, 3, 3),
        width: "35%"
    },
    fullWidth: {
        width: "100%"
    },
    form: {
        width: "30%" 
    },
    button: {
        borderRadius: "2px",
        padding: "1% 15%",
    },
    cancelDiv: {
        display: "flex",
        justifyContent: "flex-end",
    },
    cancel: {
        borderRadius: "2px",
        padding: "1% 5%",
        backgroundColor: "#f8f8ff",
        boxShadow: "3px 3px 8px #888888",
        "&:hover": {
            backgroundColor: "#fcf5f5"
        },
    },
}));

const UploadRecipe_servings = ({ handleCancel, setRecipeData, recipeData }) => {
    const history = useHistory();
    const classes = useStyles();
 
    function handleChange(e) {
        e.preventDefault();
        setRecipeData({
            ...recipeData,
            servings: e.target.value 
        })
    };

    function handleNext(e) {
        history.push('/uploadrecipe/oven')
    };

    return (
        <Container component="main" maxWidth="md">
            <div onClick={handleCancel} className={classes.icon}>
                <GoHomeIcon/>
            </div>

            <Grid container className={classes.paper}>
                <Grid item className={classes.fullWidth}>
                    <Typography component="h5" variant="h5" className={classes.header}>
                        How many servings does this recipe make?
                        <span role="img" aria-label="cookie emoji" className={classes.emoji}>🍪</span>
                    </Typography>
                </Grid>

                <Grid item className={classes.form}>
                    <TextField
                    onChange={handleChange}
                    required
                    fullWidth
                    id="servings"
                    label="Ex: 12-14 COOKIES"
                    name="name"
                    value={recipeData.servings}
                    />
                </Grid>
                <Grid item className={classes.buttons}>
                    <Button variant="outlined" color="primary" className={classes.button} onClick={()=>history.goBack()}>
                        Back
                    </Button>
                    <Button variant="contained" color="primary" className={classes.button} onClick={handleNext}>
                        Next
                    </Button>
                </Grid>
            </Grid>
            <Box className={classes.bar}>
                <Box className={classes.fullWidth} mr={1}>
                    <BorderLinearProgress variant="determinate" value={36} />
                </Box>
            </Box>
            <div className={classes.cancelDiv}>
                <Button variant="outlined" color="secondary" className={classes.cancel} onClick={handleCancel}>
                    Cancel
                </Button>
            </div>
        </Container>
    );
};

export default UploadRecipe_servings;