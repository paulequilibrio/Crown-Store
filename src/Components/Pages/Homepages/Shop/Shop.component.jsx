import React, {Component} from 'react';
import SHOP_DATA from './Shop.data';
import CollectionPreview from '../../../CollectionPreview/CollectionPreview';

class ShopPage extends Component {
    constructor() {
        super();
        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        return (
            <div>
                {this.state.collections.map(({ id, ...otherCollectionProps}) => (

                    <CollectionPreview key={id} {...otherCollectionProps}/>
                        ))
                }
            </div>
        )
    }
}

export default ShopPage;