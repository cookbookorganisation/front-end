import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles, Container, Typography, Button, TextField, Grid } from '@material-ui/core';
import Icon from '../Icon';
import ProgressBar from '../ProgressBar';
import cuid from 'cuid';
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
        minHeight: "50%",
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
        width: "35%"
    },
    button: {
        borderRadius: "2px",
        padding: "1% 15%",
    },
    fullWidth: {
        width: "100%"
    },
    form: {
        display: "flex",
        justifyContent: "space-between",
        width: "100%"
    },
    input: {
        marginRight: theme.spacing(2)
    },
    runningIngredient: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        borderRadius: "2px",
        backgroundColor: "#F1828D",
        color: "#FFFFFF",
        padding: theme.spacing(1),
        margin: theme.spacing(3),
        minWidth: "15%",
    }
}));

const UploadRecipe_ingredients = ({ handleCancel, setRecipeData, recipeData }) => {
    const history = useHistory();
    const classes = useStyles();
    const [ingredient, setIngredient] = useState({
        quantity: "",
        unit: "",
        name: "",
    });
    const [runningIngredients, setRunningIngredients] = useState([]);

    function handleChangeQuantity(e) {
        e.preventDefault();
        setIngredient({
            ...ingredient,
            quantity: e.target.value
        });
    };

    function handleChangeUnit(e) {
        e.preventDefault();
        setIngredient({
            ...ingredient,
            unit: e.target.value
        });
    };
    function handleChangeName(e) {
        e.preventDefault();
        setIngredient({
            ...ingredient,
            name: e.target.value
        });
    };

    function handleAdd(e) {
        e.preventDefault();
        setRunningIngredients([...runningIngredients, ingredient]);
        setIngredient({
            quantity: "",
            unit: "",
            name: "",
        });
    };

    function handleRemove(ri) {
        setRunningIngredients(runningIngredients.filter(ing => ing !== ri))
    };

    function handleNext(e) {
        e.preventDefault();
        setRecipeData({
            ...recipeData,
            ingredients: [...runningIngredients]
        })
        history.push('/uploadrecipe/directions')
    };

    return (
        <Container component="main" maxWidth="md">
            <Icon handleCancel={handleCancel}/>
            <Grid container className={classes.paper}>
                <Grid item className={classes.fullWidth}>
                    <Typography component="h5" variant="h5" className={classes.header}>
                        What are the ingredients?  
                        <span role="img" aria-label="spoon emoji" style={{ marginLeft: "3%" }}>🥄</span>
                    </Typography>
                </Grid>
                <Grid item className={classes.form}>
                    <TextField
                    className={classes.input}
                    onChange={handleChangeQuantity}
                    required
                    fullWidth
                    id="measurement_quantity"
                    label="Ex: 1"
                    name="measurement_quantity"
                    value={ingredient.quantity}
                    style={{ width: "15%" }}
                    />
                    <TextField
                    className={classes.input}
                    onChange={handleChangeUnit}
                    required
                    fullWidth
                    id="measurement_unit"
                    label="Ex: Cup"
                    name="measurement_unit"
                    value={ingredient.unit}
                    style={{ width: "20%" }}
                    />
                    <TextField
                    className={classes.input}
                    onChange={handleChangeName}
                    required
                    fullWidth
                    id="ingredient_name"
                    label="Ex: Sugar"
                    name="ingredient_name"
                    value={ingredient.name}
                    style={{ width: "30%" }}
                    />
                    <Button variant="contained" color="secondary" onClick={handleAdd}>
                        Add ingredient
                    </Button>
                </Grid>
                <Grid container item>
                    {runningIngredients.map((ri) => (
                        <div key={cuid()} className={classes.runningIngredient}>
                            <Typography component="h6" variant="subtitle1">{ri.quantity}</Typography> &nbsp;
                            <Typography component="h6" variant="subtitle1">{ri.unit}</Typography> &nbsp;
                            <Typography component="h6" variant="subtitle1">{ri.name}</Typography> &nbsp;
                            <Typography component="h6" variant="subtitle1" style={{ cursor: "pointer" }} onClick={()=>handleRemove(ri)}>X</Typography>
                        </div>
                    ))}
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
            <ProgressBar num={58.1}/>
            <CancelButton handleCancel={handleCancel}/>
        </Container>
    );
};

export default UploadRecipe_ingredients;