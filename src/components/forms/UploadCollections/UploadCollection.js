import React, { useState } from 'react';
import { useHistory, Switch, Route } from 'react-router-dom';
import UploadCollection_name from './UploadCollection_name';
import UploadCollection_description from './UploadCollection_description';
import UploadCollection_photo from './UploadCollection_photo';

const UploadCollection = () => {
    const history = useHistory();
    const [collectionData, setCollectionData] = useState({
        name: "",
        photo: "",
        description: ""
    });

    function handleCancel(e) {
        e.preventDefault();
        setCollectionData({
            name: "",
            photo: "",
            description: ""
        });
        history.push('/mycollections');
    };
    
    const routes = [
        {
            path: "/uploadcollection/name", 
            component: UploadCollection_name,
            key: "name",
            uniqueProps: [handleCancel, collectionData, setCollectionData]
        },
        {
            path: "/uploadcollection/photo", 
            component: UploadCollection_photo,
            key: "name",
            uniqueProps: [handleCancel, collectionData, setCollectionData]
        },
        {
            path: "/uploadcollection/description", 
            component: UploadCollection_description,
            key: "name",
            uniqueProps: [handleCancel, collectionData, setCollectionData]
        },
    ];

    return (
        <div className="formBackground">
            <Switch>
                {routes.map(({ path, key, component: C, ...uniqueProps }) => (
                    <Route 
                        path={path}
                        key={key}
                        render={(props) => 
                            <C 
                                {...props} 
                                handleCancel={handleCancel} 
                                collectionData={collectionData} 
                                setCollectionData={setCollectionData}/>}/>
                ))}
            </Switch>
        </div>
    );
};

export default UploadCollection;