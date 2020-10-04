import React, { useState } from 'react';
import { useHistory, Route, Switch } from 'react-router-dom';
import cuid from 'cuid';
import UploadRecipe_name from './UploadRecipe_name';
import UploadRecipe_description from './UploadRecipe_description';
import UploadRecipe_directions from './UploadRecipe_directions';
import UploadRecipe_ingredients from './UploadRecipe_ingredients';
import UploadRecipe_pairings from './UploadRecipe_pairings';
import UploadRecipe_photo from './UploadRecipe_photo';
import UploadRecipe_preheat from './UploadRecipe_preheat';
import UploadRecipe_servings from './UploadRecipe_servings';
import UploadRecipe_temperature from './UploadRecipe_temperature';
import UploadRecipe_tradeSecrets from './UploadRecipe_tradeSecrets';


const UploadRecipe = () => {
    const history = useHistory();
    const [recipeData, setRecipeData] = useState({
        name: "",
        directions: "",
        photo: "",
        oven: false,
        temperature: "",
        description: "",
        tradeSecrets: "",
        pairings: ""
    });

    function handleCancel(e) {
        setRecipeData({
            name: "",
            directions: "",
            photo: "",
            oven: false,
            temperature: "",
            description: "",
            tradeSecrets: "",
            pairings: ""
        })
        history.push('/mycollections')
    };

    const routes = [
        {
            path: "/uploadrecipe/name",
            component: UploadRecipe_name,
            uniqueProps: [handleCancel, recipeData, setRecipeData]
        },
        {
            path: "/uploadrecipe/description",
            component: UploadRecipe_description,
            uniqueProps: [handleCancel, recipeData, setRecipeData]
        },
        {
            path: "/uploadrecipe/directions",
            component: UploadRecipe_directions,
            uniqueProps: [handleCancel, recipeData, setRecipeData]
        },
        {
            path: "/uploadrecipe/ingredients",
            component: UploadRecipe_ingredients,
            uniqueProps: [handleCancel, recipeData, setRecipeData]
        },
        {
            path: "/uploadrecipe/pairings",
            component: UploadRecipe_pairings,
            uniqueProps: [handleCancel, recipeData, setRecipeData]
        },
        {
            path: "/uploadrecipe/photo",
            component: UploadRecipe_photo,
            uniqueProps: [handleCancel, recipeData, setRecipeData]
        },
        {
            path: "/uploadrecipe/preheat",
            component: UploadRecipe_preheat,
            uniqueProps: [handleCancel, recipeData, setRecipeData]
        },
        {
            path: "/uploadrecipe/servings",
            component: UploadRecipe_servings,
            uniqueProps: [handleCancel, recipeData, setRecipeData]
        },
        {
            path: "/uploadrecipe/temperature",
            component: UploadRecipe_temperature,
            uniqueProps: [handleCancel, recipeData, setRecipeData]
        },
        {
            path: "/uploadrecipe/tradesecrets",
            component: UploadRecipe_tradeSecrets,
            uniqueProps: [handleCancel, recipeData, setRecipeData]
        },

    ]
    
    return (
        <div className="formBackground">
            <Switch>
                {routes.map(({ path, component: C, ...uniqueProps }) => (
                    <Route 
                        path={path}
                        key={cuid()}
                        render={(props) => 
                            <C 
                                {...props} 
                                handleCancel={handleCancel} 
                                recipeData={recipeData} 
                                setRecipeData={setRecipeData}/>}/>
                ))}
            </Switch>
        </div>
    );
};

export default UploadRecipe;