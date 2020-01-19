import React from 'react';
import { connect } from 'react-redux';
import './Collection.item.Styles.scss';
import CustomButton from '../Custom-button/Custom-button.component';
import { addItem } from '../../redux/Cart/Cart.action';

const CollectionItem = ({item, addItem}) => {
    const { price, name, imageUrl } = item;
    return (
        <div className='collection-item'>
            <div className='image' style= {{
                    backgroundImage : `URL(${imageUrl})`
            }}
            />
            <div className='collection-footer' >
                <span className='name' >{name}</span>
                <span className='price'>${price}</span>
            </div>
            <CustomButton onClick={() => addItem(item) } inverted> Add to cart </CustomButton>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);