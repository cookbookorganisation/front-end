import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles, Container, Typography, Button, TextField, Grid } from '@material-ui/core';
import GoHomeIcon from '../../GoHomeIcon';

const UploadRecipe_photo = ({ handleCancel, setRecipeData, recipeData }) => {
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

    return (
        <Container component="main" maxWidth="md">
            <div 
            onClick={handleCancel}
            style={{ display: "flex", alignSelf: "flex-start", marginTop: "8%", marginLeft: "-1.5%" }}>
                <GoHomeIcon/>
            </div>
        </Container>
    );
};

export default UploadRecipe_photo;