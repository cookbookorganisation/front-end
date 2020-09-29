import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { makeStyles, Grid, Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    links: {
        textDecoration: "none",
        fontSize: "1.1rem",
    }
}));

const TopLinks = () => {
    const classes = useStyles();
    const match = useRouteMatch();

    const urls = ['/mycollections', '/myfavorites', '/publiccollections', '/uploadcollection', '/uploadrecipe'];

    function selectColor(num){
        return match.url === urls[num] ? "#D96704" : "#898989"
    };

    return (
        <Container component="main" maxWidth="lg">
            <Grid container justify="center" spacing={1}>
                <Grid item md={2}  xs={12}>
                    <Link className={classes.links} style={{ color: `${selectColor(0)}` }} to={`${urls[0]}`}>
                        My collections
                    </Link>
                </Grid>
                <Grid item md={2}  xs={12}> 
                    <Link className={classes.links} style={{ color: `${selectColor(1)}` }} to={`${urls[1]}`}>
                        My favorites
                    </Link>
                </Grid>
                <Grid item md={2}  xs={12}>
                    <Link className={classes.links} style={{ color: `${selectColor(2)}` }} to={`${urls[2]}`}>
                        Public collections
                    </Link>
                </Grid>
                <Grid item md={2}  xs={12}>
                    <Link className={classes.links} style={{ color: `${selectColor(3)}` }} to={`${urls[3]}`}>
                        Start a collection
                    </Link>
                </Grid>
                <Grid item md={2}  xs={12}>
                    <Link className={classes.links} style={{ color: `${selectColor(4)}` }} to={`${urls[4]}`}>
                        Upload a recipe
                    </Link>
                </Grid>
            </Grid>
        </Container>
    );
};

export default TopLinks;