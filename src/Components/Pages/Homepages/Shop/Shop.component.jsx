import React from 'react';
import { Route } from 'react-router-dom';
import CollectionPreview from '../../../Collections-overview/collections-overview.component';
import CollectionPage from '../../Collection/collection.component';

const ShopPage = ({match}) => {
    console.log(match);
    return (
    <div className='shop-page'>
       <Route exact path={`${match.path}`} component={CollectionPreview}/>
       <Route path={`${match.path}/:collectionId`} component={CollectionPage}/> 
    </div>
)};

export default ShopPage;