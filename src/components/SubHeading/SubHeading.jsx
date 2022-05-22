import React from 'react';
import { images } from '../../constants';

const SubHeading = ({title , lgTitle , pTag}) => (
  <div className='p__cormorant'>
    <h3 style={{color: '#fff'}}>{title}</h3>
    <h1>{lgTitle}</h1>
    <p className="p__opensans">
      {pTag}
    </p>
    <img src={images.spoon} alt="spoon" className='spoon__img' />
  </div>
);

export default SubHeading;
