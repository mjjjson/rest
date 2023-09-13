import React from 'react';

import { images } from '../../constants'; 
import './Header.css';
import { SubHeading } from '../../components';

const Header = () => (
  <div className='app__header app_wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
      <SubHeading title='Chas the new flaour' />
      <h1 className='app__header-h1'>The Key To Fine Dining</h1>
      <p className='p__opensans' style={{ margin: '2rem 0' }}> Line 3:41:  'Gallery' is defined but never used      no-unused-vars Line 3:58:  'Intro' is defined but never used        no-unused-vars Line 3:65:  'Laurels' is defined but never used      no-unused-vars Line 3:74:  'SpecialMenu' is defined but never used  no-unused-vars</p>
      <button type='button' className='custom__button'>Explore Menu</button>
    </div>

      <div className='app__wrapper_img'>
      <img src={images.welcome} alt='header img'/>
      </div>
    </div>
);

export default Header;
