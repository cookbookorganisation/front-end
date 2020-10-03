import React, { useState } from 'react';
import { useHistory, Route, Switch } from 'react-router-dom';
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
    
    return (
        <div className="formBackground">
            <Switch>
                <Route 
                    component={UploadRecipe_name} 
                    path="/uploadrecipe/name"
                    recipeData={recipeData} 
                    setRecipeData={setRecipeData} 
                    handleCancel={handleCancel}/>
                <Route 
                    component={UploadRecipe_description} 
                    path="/uploadrecipe/description"
                    recipeData={recipeData} 
                    setRecipeData={setRecipeData} 
                    handleCancel={handleCancel}/>
                <Route 
                    component={UploadRecipe_directions} 
                    path="/uploadrecipe/directions"
                    recipeData={recipeData} 
                    setRecipeData={setRecipeData} 
                    handleCancel={handleCancel}/>
                <Route 
                    component={UploadRecipe_ingredients} 
                    path="/uploadrecipe/ingredients"
                    recipeData={recipeData} 
                    setRecipeData={setRecipeData} 
                    handleCancel={handleCancel}/>
                <Route 
                    component={UploadRecipe_pairings} 
                    path="/uploadrecipe/pairings"
                    recipeData={recipeData} 
                    setRecipeData={setRecipeData} 
                    handleCancel={handleCancel}/>
                <Route 
                    component={UploadRecipe_photo} 
                    path="/uploadrecipe/photo"
                    recipeData={recipeData} 
                    setRecipeData={setRecipeData} 
                    handleCancel={handleCancel}/>
                <Route 
                    component={UploadRecipe_preheat} 
                    path="/uploadrecipe/preheat"
                    recipeData={recipeData} 
                    setRecipeData={setRecipeData} 
                    handleCancel={handleCancel}/>
                <Route 
                    component={UploadRecipe_servings} 
                    path="/uploadrecipe/servings"
                    recipeData={recipeData} 
                    setRecipeData={setRecipeData} 
                    handleCancel={handleCancel}/>
                <Route 
                    component={UploadRecipe_temperature} 
                    path="/uploadrecipe/temperature"
                    recipeData={recipeData} 
                    setRecipeData={setRecipeData} 
                    handleCancel={handleCancel}/>
                <Route 
                    component={UploadRecipe_tradeSecrets} 
                    path="/uploadrecipe/tradesecrets"
                    recipeData={recipeData} 
                    setRecipeData={setRecipeData} 
                    handleCancel={handleCancel}/>
            </Switch>
        </div>
    );
};

export default UploadRecipe;