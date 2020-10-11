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
        margin: theme.spacing(3, 0, 3, 3),
    },
    next: {
        borderRadius: "2px",
        padding: "1% 18%",
    },
    cancel: {
        borderRadius: "2px",
        padding: "1% 18%",
        marginLeft: "5%"
    },
}));

const UploadRecipe_ingredients = ({ handleCancel, setRecipeData, recipeData }) => {
    const history = useHistory();
    const classes = useStyles();

    function handleChange(e) {
        e.preventDefault();
        setRecipeData({
            ...recipeData,
            ingredients: e.target.value 
        })
    };

    function handleNext(e) {
        history.push('/uploadrecipe/directions')
    };
    
    return (
        <Container component="main" maxWidth="md">
             <div onClick={handleCancel} className={classes.icon}>
                <GoHomeIcon/>
            </div>
            <Grid container className={classes.paper}>
                <Grid item style={{ width: "100%" }}>
                    <Typography component="h5" variant="h5" className={classes.header}>
                        What are the ingredients?  
                        <span role="img" aria-label="spoon emoji" style={{ marginLeft: "3%" }}>🥄</span>
                    </Typography>
                </Grid>

                {/* <Grid item style={{ width: "100%" }}>
                    <TextField
                    onChange={handleChange}
                    required
                    fullWidth
                    id="name"
                    label="Ex: NANA'S CHOCOLATE CAKE"
                    name="name"
                    value={recipeData.name}
                    />
                </Grid> */}

                <Grid item className={classes.buttons}>
                    <Button variant="contained" color="primary" className={classes.next} onClick={handleNext}>
                        Next
                    </Button>
                    <Button variant="outlined" color="secondary" className={classes.cancel} onClick={handleCancel}>
                        Cancel
                    </Button>
                </Grid>
            </Grid>
        </Container>
    );
};

export default UploadRecipe_ingredients;