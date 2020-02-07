import React from 'react';
import { connect } from 'react-redux';
import {CollectionItemContainer, ImageContainer, CollectionsFooterContainer, PriceContainer, NameContainer,
AddButton} from './Collection.item.styles';
import { addItem } from '../../redux/Cart/Cart.action';

const CollectionItem = ({item, addItem}) => {
    const { price, name, imageUrl } = item;
    return (
        <CollectionItemContainer>
            <ImageContainer className='image' imageUrl={imageUrl}/>
            <CollectionsFooterContainer>
                <NameContainer>{name}</NameContainer>
                <PriceContainer>${price}</PriceContainer>
            </CollectionsFooterContainer>
            <AddButton onClick={() => addItem(item) } inverted> Add to cart </AddButton>
        </CollectionItemContainer>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);