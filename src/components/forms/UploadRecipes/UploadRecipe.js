import React, { useState } from 'react';
import { useHistory, Route, Switch } from 'react-router-dom';
import UploadRecipe_name from './UploadRecipe_name';
import UploadRecipe_description from './UploadRecipe_description';

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
            </Switch>
        </div>
    );
};

export default UploadRecipe;