import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles, Container, Typography, Button, TextField, Grid } from '@material-ui/core';
import GoHomeIcon from '../../GoHomeIcon';

const UploadRecipe_description = ({ handleCancel, setRecipeData, recipeData }) => {
    return (
        <Container component="main" maxWidth="md">
            testing  - description
            <div 
            onClick={handleCancel}
            style={{ display: "flex", alignSelf: "flex-start", marginTop: "8%", marginLeft: "-1.5%" }}>
                <GoHomeIcon/>
            </div>
        </Container>
    );
};

export default UploadRecipe_description;