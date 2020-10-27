import React, { useState } from 'react';
import { useHistory, Route, Switch } from 'react-router-dom';
import UploadRecipe_name from './UploadRecipe_name';
import UploadRecipe_description from './UploadRecipe_description';
import UploadRecipe_directions from './UploadRecipe_directions';
import UploadRecipe_ingredients from './UploadRecipe_ingredients';
import UploadRecipe_pairings from './UploadRecipe_pairings';
import UploadRecipe_photo from './UploadRecipe_photo';
import UploadRecipe_servings from './UploadRecipe_servings';
import UploadRecipe_temperature from './UploadRecipe_temperature';
import UploadRecipe_tradeSecrets from './UploadRecipe_tradeSecrets';
import UploadRecipe_oven from './UploadRecipe_oven';
import UploadRecipe_collections from './UploadRecipe_collections';
import UploadRecipe_time from './UploadRecipe_time';

const UploadRecipe = () => {
    const history = useHistory();
    const [recipeData, setRecipeData] = useState({
        name: "",
        directions: "",
        prep: "",
        cookBake: "",
        photo: "",
        oven: false,
        temperature: "",
        description: "",
        tradeSecrets: "",
        pairings: "", 
        servings: "",
        ingredients: [],
        collections: []
    });

    function handleCancel(e) {
        e.preventDefault();
        setRecipeData({
            name: "",
            directions: "",
            prep: "",
            cookBake: "",
            photo: "",
            oven: false,
            temperature: "",
            description: "",
            tradeSecrets: "",
            pairings: "",
            ingredients: [],
            collections: []
        });
        history.push('/mycollections');
    };

    const routes = [
        {
            path: "/uploadrecipe/name",
            component: UploadRecipe_name,
            key: "name",
            uniqueProps: [handleCancel, recipeData, setRecipeData]
        },
        {
            path: "/uploadrecipe/description",
            component: UploadRecipe_description,
            key: "description",
            uniqueProps: [handleCancel, recipeData, setRecipeData]
        },
        {
            path: "/uploadrecipe/directions",
            component: UploadRecipe_directions,
            key: "directions",
            uniqueProps: [handleCancel, recipeData, setRecipeData]
        },
        {
            path: "/uploadrecipe/ingredients",
            component: UploadRecipe_ingredients,
            key: "ingredients",
            uniqueProps: [handleCancel, recipeData, setRecipeData]
        },
        {
            path: "/uploadrecipe/pairings",
            component: UploadRecipe_pairings,
            key: "pairings",
            uniqueProps: [handleCancel, recipeData, setRecipeData]
        },
        {
            path: "/uploadrecipe/photo",
            component: UploadRecipe_photo,
            key: "photo",
            uniqueProps: [handleCancel, recipeData, setRecipeData]
        },
        {
            path: "/uploadrecipe/oven",
            component: UploadRecipe_oven,
            key: "preheat",
            uniqueProps: [handleCancel, recipeData, setRecipeData]
        },
        {
            path: "/uploadrecipe/servings",
            component: UploadRecipe_servings,
            key: "servings",
            uniqueProps: [handleCancel, recipeData, setRecipeData]
        },
        {
            path: "/uploadrecipe/temperature",
            component: UploadRecipe_temperature,
            key: "temperature",
            uniqueProps: [handleCancel, recipeData, setRecipeData]
        },
        {
            path: "/uploadrecipe/tradesecrets",
            component: UploadRecipe_tradeSecrets,
            key: "tradeSecrets",
            uniqueProps: [handleCancel, recipeData, setRecipeData]
        },
        {
            path: "/uploadrecipe/collections",
            component: UploadRecipe_collections,
            key: "collections",
            uniqueProps: [handleCancel, recipeData, setRecipeData]
        },
        {
            path: "/uploadrecipe/time",
            component: UploadRecipe_time,
            key: "time",
            uniqueProps: [handleCancel, recipeData, setRecipeData]
        }
    ];
    
    return (
        <div className="formBackground">
            <Switch>
                {routes.map(({ path, key, component: C, ...uniqueProps }) => (
                    <Route path={path} key={key} render={(props) => 
                            <C {...props} handleCancel={handleCancel} recipeData={recipeData} setRecipeData={setRecipeData}/>}/>
                ))}
            </Switch>
        </div>
    );
};

export default UploadRecipe;