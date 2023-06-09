import React from 'react';
import CarouselPage from '../../components/carousel/carousel.component';
import './homepage.styles.scss';
import images from '../../components/carousel/image';
import Directory from '../../components/directory/directory.component';

const HomePage = () => (
    <div className='homepage'>
        <CarouselPage images={images}/>
        <Directory/>
    </div>
);
export default HomePage;