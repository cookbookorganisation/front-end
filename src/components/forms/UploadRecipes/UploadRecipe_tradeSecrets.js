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
}));

const UploadRecipe_tradeSecrets = ({ handleCancel, setRecipeData, recipeData }) => {
    const history = useHistory();
    const classes = useStyles();
    
    function handleChange(e) {
        e.preventDefault();
        setRecipeData({
            ...recipeData,
            tradeSecrets: e.target.value 
        })
    };

    function handleNext(e) {
        history.push('/uploadrecipe/pairings');
    };

    function handleSkip(e) {
        e.preventDefault();
        setRecipeData({
            ...recipeData,
            tradeSecrets: ""
        });
        history.push('/uploadrecipe/pairings');
    }

    return (
        <Container component="main" maxWidth="md">
            <div onClick={handleCancel} className={classes.icon}>
                <GoHomeIcon/>
            </div>
            <Grid container className={classes.paper}>
                <Grid item className={classes.fullWidth}>
                    <Typography component="h5" variant="h5" className={classes.header}>
                        How is it meaningful to you?
                        <span role="img" label="bacon emoji" className={classes.emoji}>🥓</span>
                    </Typography>
                    <Typography component="h5" variant="h5" className={classes.header}>
                        Who taught you the recipe? Where does it come from?
                    </Typography>
                </Grid>
                <Grid item className={classes.fullWidth}>
                    <TextField
                    onChange={handleChange}
                    fullWidth
                    id="tradeSecrets"
                    label="Ex: Add bacon pieces for a richer dish."
                    name="tradeSecrets"
                    value={recipeData.tradeSecrets}
                    />
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

export default UploadRecipe_tradeSecrets;