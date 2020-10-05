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

const UploadRecipe_photo = ({ handleCancel, setRecipeData, recipeData }) => {
    const history = useHistory();
    const classes = useStyles();

    function handleChange(e) {
        e.preventDefault();
        setRecipeData({
            ...recipeData,
            photo: e.target.value 
        })
    };

    function handleNext(e) {
        history.push('/uploadrecipe/servings')
    };

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
                        What does the final dish look like?<br/> Share a picture! 
                        <span role="img" label="emoji-silverware" style={{ marginLeft: "3%" }}>📸</span>
                    </Typography>
                </Grid>

                {/* <Grid item style={{ width: "100%" }}>
                    <TextField
                    onChange={handleChange}
                    required
                    fullWidth
                    id="email"
                    label="Ex: NANA'S CHOCOLATE CAKE"
                    name="name"
                    value={recipeData.name}
                    />
                </Grid> */}

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
                    onClick={handleCancel}
                    >
                        Cancel
                    </Button>
                </Grid>
            </Grid>
        </Container>
    );
};

export default UploadRecipe_photo;