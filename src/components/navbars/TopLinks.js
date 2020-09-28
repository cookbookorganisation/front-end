import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > * + *': {
        marginLeft: theme.spacing(8),
      },
    },
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
        <Typography className={classes.root}>
            <Link className={classes.links} style={{ color: `${selectColor(0)}` }} to={`${urls[0]}`}>
                My collections
            </Link>
            <Link className={classes.links} style={{ color: `${selectColor(1)}` }} to={`${urls[1]}`}>
                My favorites
            </Link>
            <Link className={classes.links} style={{ color: `${selectColor(2)}` }} to={`${urls[2]}`}>
                Public collections
            </Link>
            <Link className={classes.links} style={{ color: `${selectColor(3)}` }} to={`${urls[3]}`}>
                Start a collection
            </Link>
            <Link className={classes.links} style={{ color: `${selectColor(4)}` }} to={`${urls[4]}`}>
                Upload a recipe
            </Link>
        </Typography>
    );
};

export default TopLinks;