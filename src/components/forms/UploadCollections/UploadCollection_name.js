import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles, Container, Typography, Button, TextField, Grid } from '@material-ui/core';
import Icon from '../Icon';
import ProgressBar from '../ProgressBar';
import CancelButton from './CancelButton';

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
        fontWeight: 300
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
    form: {
        width: "50%" 
    },
}));

const UploadCollection_name = ({ collectionData, setCollectionData, handleCancel }) => {
    const history = useHistory();
    const classes = useStyles();

    function handleChange(e) {
        e.preventDefault();
        setCollectionData({
            ...collectionData,
            name: e.target.value
        });
    };

    function handleNext(e) {
        history.push('/uploadcollection/description')
    };
    
    return (
        <Container component="main" maxWidth="md">
            <Icon handleCancel={handleCancel}/>
            <Grid container className={classes.paper}>
                <Grid item className={classes.fullWidth}>
                    <Typography component="h5" variant="h5" className={classes.header}>
                        What will this collection be called?  
                        <span role="img" aria-label="computer emoji" className={classes.emoji}>👩🏽‍💻</span>
                    </Typography>
                </Grid>
                <Grid item className={classes.form}>
                    <TextField
                    onChange={handleChange}
                    required
                    fullWidth
                    id="name"
                    label="Ex: Christmas party"
                    name="name"
                    value={collectionData.name}/>
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
            <ProgressBar num={33}/>
            <CancelButton handleCancel={handleCancel}/>
        </Container>
    );
};

export default UploadCollection_name;