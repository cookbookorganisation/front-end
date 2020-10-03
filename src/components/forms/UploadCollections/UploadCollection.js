import React, { useState } from 'react';
import { useHistory, Switch, Route } from 'react-router-dom';
import UploadCollection_name from './UploadCollection_name';

const UploadCollection = () => {
    const history = useHistory();
    const [collectionData, setCollectionData] = useState({
        name: "",
    });

    function handleCancel(e) {
        setCollectionData({
            name: "",
        })
        history.push('/mycollections')
    };
    
    return (
        <div className="formBackground">
            <Switch>
                <Route 
                    path="/uploadcollection/name"
                    component={UploadCollection_name}/>
            </Switch>
        </div>
    );
};

export default UploadCollection;