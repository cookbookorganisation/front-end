import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles, Container, Typography, Button, TextField, Grid } from '@material-ui/core'
import GoHomeIcon from '../GoHomeIcon';
import RestaurantIcon from '@material-ui/icons/Restaurant';

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

const UploadCollection = () => {
    const history = useHistory();
    const classes = useStyles();
    const [recipeData, setRecipeData] = useState({
        name: "",
        directions: "",
        photo: "",
        oven: false,
        temperature: "",
        description: "",
        tradeSecrets: "",
        pairings: ""
    });

    function handleChange(e) {
        setRecipeData({
            ...recipeData,
            name: e.target.value 
        })
    };

    function handleNext(e) {
        //how do I pass props to RecipeDescriptionForm, which would be the child component?
        // is there a more simple solution that updating the redux store throughout each form?

        //need to make a dynamic route for the forms in app.js
        history.push('/')
    };

    function handleCancel(e) {
        setRecipeData({
            name: "",
            directions: "",
            photo: "",
            oven: false,
            temperature: "",
            description: "",
            tradeSecrets: "",
            pairings: ""
        })
        history.push('/mycollections')
    };
    
    return (
        <div className="formBackground">
            <Container component="main" maxWidth="md">
                <div style={{ display: "flex", alignSelf: "flex-start", marginTop: "8%", marginLeft: "-1.5%" }}>
                    <GoHomeIcon/>
                </div>

                <Grid container direction="column" justify="space-between" alignItems="flex-start" className={classes.paper}>
                    <Grid item style={{ width: "40%", }}>
                        <Typography component="h5" variant="h5">
                            What is your recipe called?
                            <RestaurantIcon style={{ marginLeft: "3%" }}/>
                        </Typography>
                    </Grid>

                    <Grid item style={{ width: "100%" }}>
                        <TextField
                        onChange={handleChange}
                        required
                        fullWidth
                        id="email"
                        label="Ex: NANA'S CHOCOLATE CAKE"
                        name="name"/>
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
        </div>
    );
};

export default UploadCollection;