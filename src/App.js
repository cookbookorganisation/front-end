import React from "react";
import "./App.css";
import { Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import About from './components/About';
import MyCollections from './components/MyCollections';
import MyFavorites from './components/MyFavorites';
import PublicCollections from './components/PublicCollections';
import UploadCollection from './components/forms/UploadCollections/UploadCollection';
import UploadRecipe from './components/forms/UploadRecipes/UploadRecipe';
import RecipePage from './components/RecipePage';
import CollectionPage from './components/RecipePage';
import SignUp from './components/forms/SignUp';
import LogIn from './components/forms/LogIn';

function App() {
    return (
        <div className="App">
            <Switch>
                <Route exact path="/" component={LandingPage}/>
                <Route path="/about" component={About}/>
                <Route path="/mycollections" component={MyCollections}/>
                <Route path="/myfavorites" component={MyFavorites}/>
                <Route path="/publiccollections" component={PublicCollections}/>
                <Route path="/uploadcollection/" component={UploadCollection}/>
                <Route path="/uploadrecipe/" component={UploadRecipe}/>
                <Route path="/recipe/:id" component={RecipePage}/>
                <Route path="/collection/:id" component={CollectionPage}/>
                <Route path="/signup" component={SignUp}/>
                <Route path="/login" component={LogIn}/>
            </Switch>
        </div>
    );
}

export default App;
