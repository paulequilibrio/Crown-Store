import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/Directory/directory.selector';
import './Directory.Styles.scss';
import MenuItem from '../Pages/Homepages/Menu-item/Menu-item.component';


const Directory = ({sections}) => (
     <div className='directory-menu'>
        {sections.map(({id, ...otherSectionProps}) => (
            <MenuItem key={id} {...otherSectionProps} />
            ))}
     </div>
)


const mapStateToProps = createStructuredSelector({
 sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);