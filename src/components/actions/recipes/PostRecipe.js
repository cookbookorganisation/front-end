export const POST_RECIPE_START = "POST_RECIPE_START";
export const POST_RECIPE_SUCCESS = "POST_RECIPE_SUCCESS";
export const POST_RECIPE_ERROR = "POST_RECIPE_ERROR";

export const postRecipe = (obj) => (dispatch) => {
    dispatch({ type: POST_RECIPE_SUCCESS, payload: obj});
};

