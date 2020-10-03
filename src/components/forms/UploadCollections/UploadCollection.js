import React, { useState } from 'react';
import { useHistory, Switch, Route } from 'react-router-dom';
import UploadCollection_name from './UploadCollection_name';
import UploadCollection_description from './UploadCollection_description';
import UploadCollection_photo from './UploadCollection_photo';

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
                    component={UploadCollection_name}
                    collectionData={collectionData}
                    setCollectionData={setCollectionData}
                    handleCancel={handleCancel}/>
                <Route 
                    path="/uploadcollection/description"
                    component={UploadCollection_description}
                    collectionData={collectionData}
                    setCollectionData={setCollectionData}
                    handleCancel={handleCancel}/>
                <Route 
                    path="/uploadcollection/photo"
                    component={UploadCollection_photo}
                    collectionData={collectionData}
                    setCollectionData={setCollectionData}
                    handleCancel={handleCancel}/>
            </Switch>
        </div>
    );
};

export default UploadCollection;