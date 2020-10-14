import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles, Container, Typography, Button, TextField, Grid, Box, useTheme, Input, InputLabel, MenuItem, FormControl, ListItemText, Select, Checkbox, Chip } from '@material-ui/core';
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
        fontWeight: 300,
    },
    subtitle: {
        display: "flex", 
        justifyContent: "flex-start", 
        fontWeight: 300,
        color: "#22A7F0"
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
        marginLeft: theme.spacing(2)
    },
    fullWidth: {
        width: "100%"
    },
    emoji: {
        marginLeft: "3%"
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
    formControl: {
        margin: theme.spacing(1),
        minWidth: "40%",
    },
    chips: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    chip: {
        margin: 2,
    },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const collections = [
    "Dad's birthday surprise",
    'Camping',
    'Holidays',
];

const UploadRecipe_collections = ({handleCancel, recipeData, setRecipeData}) => {
    const history = useHistory();
    const classes = useStyles();
    const [collectionName, setCollectionName] = useState([]);

    const handleChange = (event) => {
        setCollectionName(event.target.value);
    };

    function handleSubmit(e) {
        e.preventDefault();

        // setRecipeData({
        //     ...recipeData,
        //     collections: [...collectionName]
        // }) 
        // collectionName is an array that needs to be added to recipeData (the code above doesn't work)...
        // ...and then sent to the redux store. 
        // push to recipe card

        console.log(recipeData)
    };

    return (
        <Container component="main" maxWidth="md">
            <div onClick={handleCancel} className={classes.icon}>
                <GoHomeIcon/>
            </div>
            <Grid container className={classes.paper}>
                <Grid item className={classes.fullWidth}>
                    <Typography component="h5" variant="h5" className={classes.header}>
                        Which recipe collection would you like to add this to?
                        <span role="img" aria-label="note emoji" className={classes.emoji}>📝</span>
                    </Typography>
                    <Typography component="h6" variant="h6" className={classes.subtitle}>
                        This recipe will be stored to MY RECIPES by default. <br/> Tell us which collections should also have this recipe.
                    </Typography>
                </Grid>
                <Grid container item>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="demo-mutiple-checkbox-label">Collections</InputLabel>
                        <Select
                        labelId="demo-mutiple-checkbox-label"
                        id="demo-mutiple-checkbox"
                        multiple
                        value={collectionName}
                        onChange={handleChange}
                        input={<Input />}
                        MenuProps={MenuProps}
                        renderValue={(selected) => (
                            <div className={classes.chips}>
                              {selected.map((value) => (
                                <Chip key={value} label={value} className={classes.chip} />
                              ))}
                            </div>
                          )}>
                        {collections.map((name) => (
                            <MenuItem key={name} value={name}>
                            <Checkbox checked={collectionName.indexOf(name) > -1} />
                            <ListItemText primary={name} />
                            </MenuItem>
                        ))}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item className={classes.buttons}>
                    <Button variant="outlined" color="primary" className={classes.button} onClick={()=>history.goBack()}>
                        Back
                    </Button>
                    <Button variant="contained" color="primary" className={classes.button} onClick={handleSubmit}>
                        submit
                    </Button>
                </Grid>
            </Grid>
            <Box className={classes.bar}>
                <Box className={classes.fullWidth} mr={1}>
                    <BorderLinearProgress variant="determinate" value={100} />
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

export default UploadRecipe_collections;