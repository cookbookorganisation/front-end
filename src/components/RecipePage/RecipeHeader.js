import React from 'react';
import { makeStyles, Button, Grid, Avatar } from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

const useStyles = makeStyles((theme) => ({
    header: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        color: "#666666",
    },
    h1: {
        fontWeight: 700,
        fontSize: "2.4rem",
        marginRight: theme.spacing(3),
    },
    editDiv: {
        display: "flex",
        justifyContent: "flex-start",
        marginTop: theme.spacing(-4),
        marginLeft: theme.spacing(-2)
    },
    edit: {
        width: "50px",
        fontStyle: "italic",
    },
    chefDiv: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "flex-end",
        fontStyle: "italic",
        marginTop: theme.spacing(2)
    },
    nameDiv: {
        display: "flex",
        alignItems: "center"
    },
    firstName: {
        color: "#a4a4a4",
        marginRight: theme.spacing(3)
    },
    lastName: {
        color: "#D96704",
        fontSize: "1.2rem"
    },
    avatar: {
        height: "130px",
        width: "100px",
        marginLeft: theme.spacing(3)
    }
}));

const dummyData = {
    name: "Sourdough Blueberry Muffins",
    directions: "",
    photo: "",
    servings: "", 
    ingredients: [],
    temperature: "",  //optional
    tradeSecrets: "",  //optional
    pairings: "", // optional
    collections: [], // my recipes req, the rest is optional
    oven: true,

    firstName: "Joey",
    lastName: "Nevarez",  // optional
    personalPhoto: "https://unsplash.com/photos/rDEOVtE7vOs", // optional,
}

const RecipeHeader = ({ selectedRecipe }) => {
    const classes = useStyles();

    return (
        <Grid container item>
            <Grid item xs={9}>
                <div className={classes.header}>
                    <h1 className={classes.h1}>{dummyData.name}</h1>
                    {/* conditionally render the icon to be filled if user has favorited it*/}
                    <span><FavoriteBorderIcon fontSize="large"/></span>
                </div>

                {/* conditionally render the edit button if user has admin access */}
                <div className={classes.editDiv}>
                    <Button className={classes.edit}>edit</Button>
                </div>
            </Grid>

            <Grid item xs={3} className={classes.chefDiv}>
                <div className={classes.nameDiv}>
                    <h3 className={classes.firstName}>{dummyData.firstName}</h3>
                    {/* conditionally render last name AND avatar separately */}
                    <h3 className={classes.lastName}>{dummyData.lastName}</h3>
                </div>
                <Avatar alt="chef photo" src={dummyData.personalPhoto} className={classes.avatar}/>
            </Grid>
        </Grid>
    );
};

export default RecipeHeader;