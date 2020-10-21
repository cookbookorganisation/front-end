import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import HeroNavBar from './navbars/HeroNavBar';
import RecipeCard from './RecipeCard';
import { connect } from 'react-redux';
import { grabRecipe } from './actions/recipes/GrabRecipe';

const RecipePage = ({ selectedRecipe }) => {
    const { id } = useParams();
    
    useEffect(() => {
        grabRecipe(id)
    }, []);

    return (
        <div>
            <HeroNavBar/>
            <RecipeCard selectedRecipe={selectedRecipe}/>
        </div>
    );
};

function mapStateToProps(state) {
    return {
        selectedRecipe: state.reducer.selectedRecipe,
    };
};

export default connect(mapStateToProps, { grabRecipe })(RecipePage);