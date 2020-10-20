export const GRAB_RECIPE_START = "GRAB_RECIPE_START";
export const GRAB_RECIPE_SUCCESS = "GRAB_RECIPE_SUCCESS";
export const GRAB_RECIPE_ERROR = "GRAB_RECIPE_ERROR";

export const grabRecipe = (id) => (dispatch) => {
    dispatch({ type: GRAB_RECIPE_SUCCESS, payload: id});
};

