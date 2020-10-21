import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles, Container, Typography, Button, Grid, InputLabel, MenuItem, FormControl, ListItemText, Select, Checkbox, Chip, Input } from '@material-ui/core';
import Icon from '../Icon';
import ProgressBar from '../ProgressBar';
import RecipeModal from './RecipeModal';
import CancelButton from './CancelButton';
import { connect } from "react-redux";
import { postRecipe } from '../../actions/recipes/PostRecipe';

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

const UploadRecipe_collections = ({ handleCancel, recipeData, setRecipeData, postRecipe }) => {
    const history = useHistory();
    const classes = useStyles();
    const [collectionName, setCollectionName] = useState([]);
    const [open, setOpen] = useState(false);

    const handleChange = (event) => {
        setCollectionName(event.target.value);
    };

    function handleSubmit(e) {
        e.preventDefault();
        setRecipeData({
            ...recipeData,
            collections: [...collectionName]
        });
        postRecipe(recipeData); 
        setOpen(true);
    };

    return (
        <Container component="main" maxWidth="md">
            <Icon handleCancel={handleCancel}/>
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
            <ProgressBar num={100}/>
            <CancelButton handleCancel={handleCancel}/>
            <RecipeModal open={open} />
        </Container>
    );
};

export default connect(null, { postRecipe })(UploadRecipe_collections);