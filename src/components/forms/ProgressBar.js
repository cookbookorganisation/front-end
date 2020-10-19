import React from 'react';
import { LinearProgress, withStyles, makeStyles, Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    bar: {
        display: "flex", 
        alignItems: "center",
        flexGrow: 1,
        margin: theme.spacing(3, 0)
    },
    fullWidth: {
        width: "100%"
    },
}));

const BorderLinearProgress = withStyles((theme) => ({
    root: {
        height: 15,
        borderRadius: 5,
        border: "1px solid lightgrey",
        boxShadow: "1px 1px 8px #888888",
    },
    colorPrimary: {
        backgroundColor: "#f8f8ff"
    },
    bar: {
        borderRadius: 5,
        backgroundColor: '#D96704',
    },
}))(LinearProgress);


export default function ProgressBar ({ num }) {
    const classes = useStyles();

    return (
        <Box className={classes.bar}>
            <Box className={classes.fullWidth} mr={1}>
                <BorderLinearProgress variant="determinate" value={num} />
            </Box>
        </Box>
    );
};

// export default ProgressBar;