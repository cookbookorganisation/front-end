import React from 'react';
import HeroNavBar from './navbars/HeroNavBar';
import TopLinks from './navbars/TopLinks';
import CollectionCard from './CollectionCard';

const PublicCollections = () => {
    return (
        <div>
            <HeroNavBar/>
            <TopLinks/>
        </div>
    );
};

export default PublicCollections;