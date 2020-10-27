import React, { useEffect } from 'react';
import { Container, Grid, makeStyles } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import HeroNavBar from './navbars/HeroNavBar';
import RecipeHeader from './RecipeHeader';
import { connect } from 'react-redux';
import { grabRecipe } from './actions/recipes/GrabRecipe';
import TopLinks from './navbars/TopLinks';

const useStyles = makeStyles((theme) => ({
    description: {
        display: "flex",
        alignContent: "center",
        fontStyle: "italic",
     
    },
}));

const dummyData = {
    description: "This recipe is so good! I learned it from my mom when I was little and it’s been a staple in our household ever since!",  // optional

}

const RecipePage = ({ selectedRecipe }) => {
    const { id } = useParams();
    const classes = useStyles();
    
    useEffect(() => {
        grabRecipe(id)
    }, []);

    return (
        <div>
            <HeroNavBar/>
            <TopLinks/>
            <Container maxWidth="lg" style={{border: "1px solid black"}}>
                <Grid container>
                    <RecipeHeader/>

                    <Grid item className={classes.description}>
                        <p>{dummyData.description}</p>
                    </Grid>
                </Grid>

            </Container>
        </div>
    );
};

function mapStateToProps(state) {
    return {
        selectedRecipe: state.reducer.selectedRecipe,
    };
};

export default connect(mapStateToProps, { grabRecipe })(RecipePage);