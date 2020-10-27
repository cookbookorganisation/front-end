import React, { useEffect } from 'react';
import { Container, Grid } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { grabRecipe } from '../actions/recipes/GrabRecipe';
import HeroNavBar from '../navbars/HeroNavBar';
import TopLinks from '../navbars/TopLinks';
import RecipeHeader from './RecipeHeader';
import RecipeDescription from './RecipeDescription';
import RecipeImage from './RecipeImage';
import RecipeInfo from './RecipeInfo';
import RecipeDirections from './RecipeDirections';

const RecipePageContainer = ({ selectedRecipe }) => {
    const { id } = useParams();
    
    useEffect(() => {
        grabRecipe(id)
    }, []);

    return (
        <div>
            <HeroNavBar/>
            <TopLinks/>
            <Container maxWidth="lg" style={{border: "1px solid black"}}>
                <Grid container direction="column">
                    <RecipeHeader/>
                    {/* put ternary operator here for description */}
                    <RecipeDescription/>
                    <RecipeImage/>
                    <RecipeInfo/>
                    <RecipeDirections/>
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

export default connect(mapStateToProps, { grabRecipe })(RecipePageContainer);