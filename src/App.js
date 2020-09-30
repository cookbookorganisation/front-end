import React from "react";
import "./App.css";
import { Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import About from './components/About';
import MyCollections from './components/MyCollections';
import MyFavorites from './components/MyFavorites';
import PublicCollections from './components/PublicCollections';
import UploadCollection from './components/forms/UploadCollection';
import UploadRecipe from './components/forms/UploadRecipe';
import RecipePage from './components/RecipePage';
import CollectionPage from './components/RecipePage';
import SignUp from './components/forms/SignUp';
import LogIn from './components/forms/LogIn';


function App() {
    return (
        <div className="App">
            <Switch>
                <Route exact path="/"><LandingPage/></Route>
                <Route path="/about"><About/></Route>
                <Route path="/mycollections"><MyCollections/></Route>
                <Route path="/myfavorites"><MyFavorites/></Route>
                <Route path="/publiccollections"><PublicCollections/></Route>
                <Route path="/uploadcollection"><UploadCollection/></Route>
                <Route path="/uploadrecipe"><UploadRecipe/></Route>
                <Route path="/recipe/:id"><RecipePage/></Route>
                <Route path="/collection/:id"><CollectionPage/></Route>
                <Route path="/signup"><SignUp/></Route>
                <Route path="/login"><LogIn/></Route>
            </Switch>
        </div>
    );
}

export default App;
