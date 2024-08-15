import React from 'react'
import Heading from './Heading';
import useMovie from '../hooks/useMovie';
import BrowerMainContainer from './BrowerMainContainer';
import BrowerSecondary from './BrowerSecondary';

const Browers = () => {
  useMovie();
  return (
    <div>
      <Heading/>
      <BrowerMainContainer/>
      <BrowerSecondary/>
    </div>
  )
}

export default Browers;