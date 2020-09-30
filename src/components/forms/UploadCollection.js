import React from 'react';
import { makeStyles, Container, CssBaseline, Typography } from '@material-ui/core'
import GoHomeIcon from '../GoHomeIcon';
import RestaurantIcon from '@material-ui/icons/Restaurant';


const useStyles = makeStyles((theme) => ({
    paper: {
        // marginTop: theme.spacing(12),
        marginTop: "15%",
        marginLeft: "0%",
        padding: theme.spacing(2, 6),
        textAlign: "left",
        display: "flex",
        flexDirection: "column",
        border: "1px solid black",
        boxShadow: "3px 3px 8px #888888",
        backgroundColor: "#f8f8ff",
        borderRadius: "5px",
        height: "60%"
    },
}));

const UploadCollection = () => {
    const classes = useStyles();

    return (
        <div className="formBackground">
            <GoHomeIcon/>
            <Container component="main" maxWidth="md">
                <CssBaseline/>
                <div className={classes.paper}>

                    <Typography component="h5" variant="h5">
                        What is your recipe called?
                        <RestaurantIcon/>
                    </Typography>
                </div>
            </Container>
        </div>
    );
};

export default UploadCollection;