import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles, Container, Typography, Button, Grid, Avatar } from '@material-ui/core';
import GoHomeIcon from '../../GoHomeIcon';
import PublishRoundedIcon from '@material-ui/icons/PublishRounded';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(5),
        padding: theme.spacing(3, 6),
        border: "1px solid black",
        boxShadow: "3px 3px 8px #888888",
        backgroundColor: "#f8f8ff",
        borderRadius: "5px",
        height: "75%",
    },
    header: {
        display: "flex", 
        justifyContent: "flex-start", 
        fontSize: "2.0rem",
        fontWeight: 300
    },
    innerBox: {
        width: "100%",
        border: "2px dashed grey",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: theme.spacing(5, 0)
    },
    buttons: {
        display: "flex",
        flexDirection: "row",
        alignSelf: "flex-end",
        margin: theme.spacing(3, 0, 3, 3),
    },
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
            <div 
            onClick={handleCancel}
            style={{ display: "flex", alignSelf: "flex-start", marginTop: "8%", marginLeft: "-1.5%", width: "8%" }}>
                <GoHomeIcon/>
            </div>
            <Grid container direction="column" justify="space-between" alignItems="flex-start" className={classes.paper}>
                <Grid item style={{ width: "100%" }}>
                    <Typography component="h5" variant="h5" className={classes.header}>
                        What does the final dish look like?  
                    </Typography>
                    <Typography component="h5" variant="h5" className={classes.header}>
                        Share a picture!
                        <span role="img" aria-label="emoji-silverware" style={{ marginLeft: "3%" }}>📸</span>
                    </Typography>
                </Grid>

                <Grid container item className={classes.innerBox}>
                    <Grid item>
                        <Avatar style={{ width: "140px", height: "140px"}}>
                            <PublishRoundedIcon color="action" style={{ fontSize: 115 }} />
                        </Avatar>
                    </Grid>
                    <Grid item 
                        style={{ 
                            width: "60%", 
                            display: "flex", 
                            justifyContent: "space-between",
                            margin: "5% 0"
                        }}>
                        <Button
                        variant="contained"
                        onClick={handleUpload}
                        style={{ backgroundColor: "#00E640", color: "white"}}>
                            Choose file to upload
                        </Button>
                        <Button
                        variant="outlined"
                        onClick={handleStock}
                        style={{ backgroundColor: "gray", color: "white"}}>
                            Choose a stock photo
                        </Button>
                    </Grid>
                    <Grid item>
                        <Typography component="h6" variant="subtitle1" style={{ color: "gray" }}>
                            or drag and drop inside the dotted line
                        </Typography>
                    </Grid>
                </Grid>

                <Grid item className={classes.buttons}>
                    <Button 
                    variant="contained" 
                    color="primary" 
                    style={{ borderRadius: "2px", padding: "1% 18%" }}
                    onClick={handleNext}>
                        Next
                    </Button>
                    <Button 
                    variant="outlined" 
                    color="secondary"
                    onClick={handleCancel}
                    style={{ 
                        borderRadius: "2px",
                        padding: "1% 18%",
                        marginLeft: "5%"
                    }}>
                        Cancel
                    </Button>
                </Grid>
            </Grid>
        </Container>
    );
};

export default UploadRecipe_photo;