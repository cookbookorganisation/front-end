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
        justifyContent: "flex-end",
        margin: theme.spacing(3, 0, 3, 3),
        width: "60%"
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
        history.push('/uploadrecipe/ingredients');
    };

    return (
        <Container component="main" maxWidth="md">
            <div 
            onClick={handleCancel}
            style={{ display: "flex", alignSelf: "flex-start", marginTop: "8%", marginLeft: "-1.5%", width: "8%" }}>
                <GoHomeIcon/>
            </div>

            <Grid container direction="column" justify="space-between" alignItems="flex-start" className={classes.paper}>
                <Grid item style={{ width: "100%" }}>
                    <Typography component="h5" variant="h5" className={classes.header}>
                        Do you need to pre-heat an oven?
                        <span role="img" aria-label="emoji-silverware" style={{ marginLeft: "3%" }}>🔥</span>
                    </Typography>
                </Grid>

                {/* <Grid item style={{ width: "100%" }}>
                    <TextField
                    onChange={handleChange}
                    required
                    fullWidth
                    id="oven"
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
                    onClick={handleYes}>
                        Yes
                    </Button>
                    <Button
                    variant="contained"
                    color="default"
                    style={{
                        borderRadius: "2px",
                        padding: "1% 18%",
                        marginLeft: "3%"
                    }}
                    onClick={handleNo}>
                        No
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

export default UploadRecipe_oven;