import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles, Container, CssBaseline, Typography, Grid, TextField, InputAdornment } from "@material-ui/core";
import LocalDiningIcon from '@material-ui/icons/LocalDining'
import { Search } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    container: {
        margin: theme.spacing(3, "auto"),
    },
    cookbook: {
        fontWeight: "700",
        fontSize: "2.3rem",
        color: "#A4A4A4",
        fontFamily: "Montserrat",
        cursor: "pointer"
    },
    logout: {
        color: "#A4A4A4",
        fontWeight: "700",
        fontFamily: "Montserrat",
        cursor: "pointer",
        textAlign: "right"
    }, 
}));

const HeroNavBar = () => {
    const classes = useStyles();
    const history = useHistory();

    function handleChange(){

    };

    return (
        <Container component="main" maxWidth="xl" className={classes.container}>
            <CssBaseline/>
            <Grid container  alignItems="center">
                <Grid 
                container item 
                sm={3} 
                alignItems="center"
                spacing={1} 
                onClick={()=>history.push('/mycollections')}>
                    <Grid item>
                       <LocalDiningIcon className={classes.cookbook}/>
                    </Grid>
                    <Grid item>
                        <Typography component="h1" className={classes.cookbook}>
                            CookBook
                        </Typography>
                    </Grid>
                </Grid>

                <Grid container item sm={6} justify="center">
                    <TextField
                    onChange={handleChange}
                    style={{ width: "70%" }}
                    variant="outlined"
                    id="search"
                    label="Search"
                    name="Search"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <Search style={{ color: "#A4A4A4" }}/>
                            </InputAdornment>
                        )}}/>
                </Grid>

                <Grid item sm={3}>
                    <Typography 
                    component="p"
                    variant="subtitle1" 
                    className={classes.logout} 
                    onClick={()=>history.push('/')}>
                        Log Out
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    );
};

export default HeroNavBar;