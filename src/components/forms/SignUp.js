import React from "react";
import { useHistory } from 'react-router-dom';
import { Avatar, Button, Link, Grid, CssBaseline, TextField, Box, Typography, Container, makeStyles } from "@material-ui/core";
// import SVG JS component
import CookBookIcon from "../../images/icons/cookBookIcon.js";

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {"Copyright © "}
            <Link color="inherit" href="https://material-ui.com/">
                CookBook Organisation
            </Link>{" "}
            {new Date().getFullYear()}{"."}
        </Typography>
    );
};

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(12),
        padding: theme.spacing(3),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        border: "1px solid black",
        boxShadow: "3px 3px 8px #888888",
        backgroundColor: "#f8f8ff",
        borderRadius: "5px"
    },
    avatar: {
        margin: theme.spacing(-9, 1, 1, 1),
        padding: theme.spacing(3),
        backgroundColor: "#f8f8ff",
        height: "100px",
        width: "100px",
        borderTop: "1px solid black",
    },
    title: {
        fontWeight: "600",
        fontSize: "1.9rem",
    },
    form: {
        width: "100%", // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(6, 0, 0),
        padding: theme.spacing(0),
        width: "80%",
        fontWeight: "900",
        fontSize: "1.2rem",
        letterSpacing: ".1rem",
        backgroundColor: "#D96704",
        "&:hover": {
        backgroundColor: "#000",
        },
    },
}));

const SignUp = () => {
    const classes = useStyles();
    const history = useHistory();

    return (
        <div className="formBackground">
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                    <div className={classes.paper}>
                        <Avatar className={classes.avatar}>
                            <CookBookIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5" className={classes.title}>
                            Sign up
                        </Typography>
                        <form className={classes.form} noValidate>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="fname"
                                    name="firstName"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    autoFocus/>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="lname"/>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                        fullWidth
                                        id="email"
                                        label="Email"
                                        name="email"
                                        autoComplete="email"/>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"/>
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            className={classes.submit}>
                            Sign Up
                        </Button>
                        <Grid container justify="flex-end">
                            <Grid item>
                                <p onClick={()=>history.push('/login')} variant="body2" style={{ color: "#590E07" }}>
                                    Already have an account? Log In
                                </p>
                            </Grid>
                        </Grid>
                    </form>
                    <Box mt={5}>
                        <Copyright />
                    </Box>
                </div>
            </Container>
        </div>
    );
};

export default SignUp;