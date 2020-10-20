import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles, Button, Modal, Fade, Backdrop } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    button: {
        borderRadius: "2px",
        padding: "1% 15%",
        marginLeft: theme.spacing(2)
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalPaper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    modalButtons: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
}));

const RecipeModal = ({ open, id, grabRecipe }) => {
    const history = useHistory();
    const classes = useStyles();

    return (
        <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 500 }}>
            <Fade in={open}>
                <div className={classes.modalPaper}>
                    <h2 id="transition-modal-title">Success! Where do you want to go now?</h2>
                    <div className={classes.modalButtons}>
                        <Button variant="outlined" color="primary" className={classes.button} onClick={()=>history.push("/mycollections")}>
                            Go home
                        </Button>
                        <Button variant="contained" color="primary" className={classes.button} onClick={()=>history.push(`/recipe/${id}`)}>
                            See recipe
                        </Button>
                    </div>
                </div>
            </Fade>
        </Modal>
    );
};

export default RecipeModal;