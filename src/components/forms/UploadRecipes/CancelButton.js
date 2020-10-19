import React from 'react';
import { makeStyles, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
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
}));

const CancelButton = ({handleCancel}) => {
    const classes = useStyles();

    return (
        <div className={classes.cancelDiv}>
            <Button variant="outlined" color="secondary" className={classes.cancel} onClick={handleCancel}>
                Cancel
            </Button>
        </div>
    );
};

export default CancelButton;