import React from 'react';
import { makeStyles, Container, Typography, Button, TextField, Grid } from '@material-ui/core';



const dummyData = {
    name: "Timothy",
    directions: "",
    photo: "",
    servings: "", 
    ingredients: [],
    temperature: "",  //optional
    description: "",  // optional
    tradeSecrets: "",  //optional
    pairings: "", // optional
    collections: [], // my recipes req, the rest is optional
    oven: true,

    firstName: "",
    lastName: "",  // optional
    personalPhoto: "", // optional,
}

const RecipeCard = ({ selectedRecipe }) => {
   
    return (
        <div>
            <h1>{dummyData.name}</h1>
        </div>
    );
};

export default RecipeCard;