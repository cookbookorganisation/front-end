import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles, Container, Typography, Button, TextField, Grid } from '@material-ui/core';
import GoHomeIcon from '../../GoHomeIcon';

const UploadRecipe_directions = ({ handleCancel, setRecipeData, recipeData }) => {
    return (
        <Container component="main" maxWidth="md">
            <C 
            onClick={handleCancel}
            style={{ display: "flex", alignSelf: "flex-start", marginTop: "8%", marginLeft: "-1.5%" }}>
                <GoHomeIcon/>
            </C>
        </Container>
    );
};

export default UploadRecipe_directions;