import React from 'react';
import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component';

import imagex1 from '../../assets/pexels-bag.jpg'
import imagex2 from '../../assets/pexels-hat.jpg'
import imagex3 from '../../assets/pexels-jewelry.jpg'
import imagex4 from '../../assets/pexels-jacket.jpg'
import imagex5 from '../../assets/pexels-shoe.jpg'

class Directory extends React.Component{
    constructor() {
        super();

        this.state = {
            sections: [
                {
                  title: 'bags',
                  imageUrl: imagex1,
                  id: 1,
                  linkUrl: ''
                },
                {
                  title: 'shoes',
                  imageUrl: imagex5,
                  id: 2,
                  linkUrl: ''
                },
                {
                  title: 'jewelries',
                  imageUrl: imagex3,
                  id: 3,
                  linkUrl: ''
                },
                {
                  title: 'caps',
                  imageUrl: imagex2,
                  size: 'large',
                  id: 4,
                  linkUrl: 'caps' /*'shop/caps'*/
                },
                {
                  title: 'jackets',
                  imageUrl: imagex4,
                  size: 'large',
                  id: 5,
                  linkUrl: ''
                } 
            ]
              
        }
    }

    render(){
        return(
            <div className='directory-menu'>
              {
                this.state.sections.map(({id, ...otherSectionProps}) => (
                <MenuItem key={id} {...otherSectionProps}/>
                ))
               }
            </div>
        );    
    }
}

export default Directory;