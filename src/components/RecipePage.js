import React, { useEffect }  from 'react';
import { useParams } from 'react-router-dom';
import HeroNavBar from './navbars/HeroNavBar';
import RecipeCard from './RecipeCard';
import { connect } from 'react-redux';
import { grabRecipe } from './actions/recipes/GrabRecipe';

const RecipePage = ({ grabRecipe, selectedRecipe, allRecipes }) => {
    const { id } = useParams();

    useEffect(() => {
        grabRecipe(id)
    }, []);

    console.log("selRec in PAGE: ", selectedRecipe)
    console.log("allRecipes in PAGE: ", allRecipes)
    
    return (
        <div>
            <HeroNavBar/>
            <RecipeCard selectedRecipe={selectedRecipe}/>
        </div>
    );
};

function mapStateToProps(state) {
    console.log("state: ", state.reducer)
    return {
        selectedRecipe: state.reducer.selectedRecipe,
        allRecipes: state.reducer.allRecipes
    };
};

export default connect(mapStateToProps, { grabRecipe })(RecipePage);