import React from 'react';
import { FaHeart } from 'react-icons/fa';

const RemoveFavourite = () => {
  return (
    <>
        <span className='fav-text'>Remove from Favourites</span>
        <FaHeart color='red' />
    </>
  )
}

export default RemoveFavourite;