import React from 'react';
import { FaHeart } from 'react-icons/fa';

const AddFavourite = () => {
  return (
    <>
        <div className="fav-text">
            <span>Add to favourites</span>
            <FaHeart color='white'/>
        </div>
    </>
  )
}

export default AddFavourite;