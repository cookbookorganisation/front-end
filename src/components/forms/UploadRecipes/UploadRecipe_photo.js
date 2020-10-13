import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles, Container, Typography, Button, Grid, Avatar, Box  } from '@material-ui/core';
import GoHomeIcon from '../../GoHomeIcon';
import PublishRoundedIcon from '@material-ui/icons/PublishRounded';
import BorderLinearProgress from '../BorderLinearProgress';

const useStyles = makeStyles((theme) => ({
    bar: {
        display: "flex", 
        alignItems: "center",
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
        height: "60%"
    },
    header: {
        display: "flex", 
        justifyContent: "flex-start", 
        fontSize: "2.0rem",
        fontWeight: 300,
        marginBottom: theme.spacing(1.5)
    },
    emoji: {
        marginLeft: "3%" 
    },
    innerBox: {
        border: "2px dashed grey",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: theme.spacing(3, 0),
    },
    avatar: {
        width: "140px", 
        height: "140px"
    },
    innerBoxButtons: {
        width: "60%", 
        display: "flex", 
        justifyContent: "space-between",
        margin: theme.spacing(3, 0),
    },
    innerBoxSubtitle: {
        color: "gray"
    },
    buttons: {
        display: "flex",
        flexDirection: "row",
        alignSelf: "flex-end",
        justifyContent: "space-between",
        margin: theme.spacing(2, 0, 2, 0),
        width: "35%"
    },
    button: {
        borderRadius: "2px",
        padding: "1% 15%",
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
    fullWidth: {
        width: "100%"
    },
    uploadIcon: {
        fontSize: 115
    },
    uploadButton: {
        backgroundColor: "#00E640", 
        color: "white"
    },
    stockButton: {
        backgroundColor: "gray", 
        color: "white"
    }
}));

const UploadRecipe_photo = ({ handleCancel, setRecipeData, recipeData }) => {
    const history = useHistory();
    const classes = useStyles();

    function handleNext(e) {
        e.preventDefault();
        history.push('/uploadrecipe/servings')
    };

    function handleUpload(e) {
        e.preventDefault();
        // setRecipeData({
        //     ...recipeData,
        //     photo: e.target.value 
        // });
    };

    function handleStock(e) {
        e.preventDefault();
        // setRecipeData({
        //     ...recipeData,
        //     photo: e.target.value 
        // });
    };

    return (
        <Container component="main" maxWidth="md">
             <div onClick={handleCancel} className={classes.icon}>
                <GoHomeIcon/>
            </div>
            <Grid container className={classes.paper}>
                <Grid item className={classes.fullWidth}>
                    <Typography component="h5" variant="h5" className={classes.header}>
                        What does the final dish look like? Share a picture!
                        <span role="img" aria-label="camera emoji" className={classes.emoji}>📸</span>
                    </Typography>
                </Grid>
                <Grid container item className={classes.innerBox}>
                    <Grid item>
                        <Avatar className={classes.avatar}>
                            <PublishRoundedIcon color="action" className={classes.uploadIcon}/>
                        </Avatar>
                    </Grid>
                    <Grid item className={classes.innerBoxButtons}>
                        <Button variant="contained" className={classes.uploadButton} onClick={handleUpload}>
                            Choose file to upload
                        </Button>
                        <Button variant="outlined" className={classes.stockButton} onClick={handleStock}>
                            Choose a stock photo
                        </Button>
                    </Grid>
                    <Grid item>
                        <Typography component="h6" variant="subtitle1" className={classes.innerBoxSubtitle}>
                            or drag and drop inside the dotted line
                        </Typography>
                    </Grid>
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
            <Box className={classes.bar}>
                <Box className={classes.fullWidth} mr={1}>
                    <BorderLinearProgress variant="determinate" value={30} />
                </Box>
                <Box minWidth={35}>
                    <Typography variant="body2" color="textSecondary">
                        30%
                    </Typography>
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

export default UploadRecipe_photo;