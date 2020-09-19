import React from "react";
import "./App.css";
import { Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import MyCollections from './components/MyCollections';
import MyFavorites from './components/MyFavorites';
import PublicCollections from './components/PublicCollections';
import UploadCollection from './components/forms/UploadCollection';
import UploadRecipe from './components/forms/UploadRecipe';
import RecipePage from './components/RecipePage';
import CollectionPage from './components/RecipePage';

function App() {
  return (
    <div className="App">
      <Switch>
          <Route exact path="/"><LandingPage/></Route>
          <Route path="/mycollections"><MyCollections/></Route>
          <Route path="/myfavorites"><MyFavorites/></Route>
          <Route path="/publiccollections"><PublicCollections/></Route>
          <Route path="/uploadollection"><UploadCollection/></Route>
          <Route path="/uploadrecipe"><UploadRecipe/></Route>
          <Route path="/recipe/:id"><RecipePage/></Route>
          <Route path="/collection/:id"><CollectionPage/></Route>
      </Switch>
    </div>
  );
}

export default App;
