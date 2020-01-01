import React from 'react';
import './Collection.item.Styles.scss';

const CollectionItem = ({id, name, imageUrl, price}) => {

    return (
        <div className='collection-item'>
            <div className='image' style= {{
                    backgroundImage : `URL(${imageUrl})`
            }}
            />
            <div className='collection-footer' >
                <span className='name' >{name}</span>
                <span className='price'>{price}</span>
            </div>
        </div>
    )
}

export default CollectionItem;