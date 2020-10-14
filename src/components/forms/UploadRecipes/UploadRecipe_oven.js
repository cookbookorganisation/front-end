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
    emoji: {
        marginLeft: "3%"
    },
}));

const UploadRecipe_oven = ({ handleCancel, setRecipeData, recipeData }) => {
    const history = useHistory();
    const classes = useStyles();

    function handleYes(e) {
        e.preventDefault();
        setRecipeData({
            ...recipeData,
            oven: true 
        });
        history.push('/uploadrecipe/temperature')
    };

    function handleNo(e) {
        e.preventDefault();
        history.push('/uploadrecipe/ingredients');
    };

    return (
        <Container component="main" maxWidth="md">
            <div onClick={handleCancel} className={classes.icon}>
                <GoHomeIcon/>
            </div>
            <Grid container className={classes.paper}>
                <Grid item className={classes.fullWidth}>
                    <Typography component="h5" variant="h5" className={classes.header}>
                        Do you need to pre-heat an oven?
                        <span role="img" aria-label=" fire emoji" className={classes.emoji}>🔥</span>
                    </Typography>
                </Grid>
                <Grid item className={classes.buttons}>
                    <Button variant="outlined" color="primary" className={classes.button} onClick={()=>history.goBack()}>
                        Back
                    </Button>
                    <Button variant="contained" color="default" className={classes.button} onClick={handleNo}>
                        No
                    </Button>
                    <Button variant="contained" color="primary" className={classes.button} onClick={handleYes}>
                        Yes
                    </Button>
                </Grid>
            </Grid>
            <Box className={classes.bar}>
                <Box className={classes.fullWidth} mr={1}>
                    <BorderLinearProgress variant="determinate" value={45} />
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

export default UploadRecipe_oven;