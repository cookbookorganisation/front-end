import { POST_RECIPE_SUCCESS } from '../actions/recipes/PostRecipe';
import { GRAB_RECIPE_SUCCESS } from '../actions/recipes/GrabRecipe';

export const initialState = {
    isLoading: false,
    error: null,
    allRecipes: [],
    allCollections: [],
    myCollections: {
        myRecipes: [],
        myFavorites: [],
        memberCollections: []
    },
    publicCollections: [],
    selectedCollection: null,
    selectedRecipe: {},
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case POST_RECIPE_SUCCESS:
            return {
                ...state,
                allRecipes: [...state.allRecipes, action.payload],
                myCollections: {
                    ...state.myCollections,
                    myRecipes: [...state.myCollections.myRecipes, action.payload]
                    // NOTE : This doesn't currently have logic that puts the recipe in the any collection beside MY RECIPES
                },
                selectedRecipe: action.payload
            };
        case GRAB_RECIPE_SUCCESS:
            let newArray = state.allRecipes.filter(recipe => recipe !== action.payload)
            return {
                ...state,
                selectedRecipe: newArray.find(ob => ob),
            };
        default: 
            return state;
    };
};