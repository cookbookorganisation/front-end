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
        margin: theme.spacing(3, 0, 3, 3),
    },
}));

const UploadRecipe_temperature = ({ handleCancel, setRecipeData, recipeData }) => {
    const history = useHistory();
    const classes = useStyles();

    function handleChange(e) {
        e.preventDefault();
        setRecipeData({
            ...recipeData,
            temperature: e.target.value 
        })
    };

    function handleNext(e) {
        history.push('/uploadrecipe/ingredients')
    };

    return (
        <Container component="main" maxWidth="md">
            <div
            onClick={handleCancel}
            style={{ display: "flex", alignSelf: "flex-start", marginTop: "8%", marginLeft: "-1.5%" }}>
                <GoHomeIcon/>
            </div>
            
            <Grid container direction="column" justify="space-between" alignItems="flex-start" className={classes.paper}>

                <Grid item style={{ width: "100%" }}>
                    <Typography component="h5" variant="h5" className={classes.header}>
                        How hot?  
                        <span role="img" aria-label="emoji-silverware" style={{ marginLeft: "3%" }}>🤔</span>
                    </Typography>
                </Grid>

                <Grid item style={{ width: "25%" }}>
                    <TextField
                    onChange={handleChange}
                    required
                    fullWidth
                    id="temperature"
                    label="Ex: 400 oF"
                    name="name"
                    value={recipeData.temperature}/>
                </Grid>

                <Grid item className={classes.buttons}>
                    <Button 
                    variant="contained" 
                    color="primary" 
                    style={{ 
                        borderRadius: "2px",
                        padding: "1% 18%",
                    }}
                    onClick={handleNext}>
                        Next
                    </Button>
                    <Button 
                    variant="outlined" 
                    color="secondary"
                    style={{ 
                        borderRadius: "2px",
                        padding: "1% 18%",
                        marginLeft: "5%"
                    }}
                    onClick={handleCancel}>
                        Cancel
                    </Button>
                </Grid>
            </Grid>
        </Container>
    );
};

export default UploadRecipe_temperature;