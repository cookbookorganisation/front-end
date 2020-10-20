import React from 'react';

const RecipeCard = ({ selectedRecipe }) => {
    console.log("selectedRecipe in CARD: ", selectedRecipe)
    return (
        <div>
            hi
            <h1>{selectedRecipe.id}</h1>
        </div>
    );
};

export default RecipeCard;