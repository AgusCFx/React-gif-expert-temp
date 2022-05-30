import React from 'react';

export const GifGridItem = ({ id, title, url }) => {
    console.log(id, title, url)
  return (
    <li className='card animate__animated animate__fadeIn' key={id}>
        <p>{title}</p>
        <img src={ url } alt={ title } />
    </li>
  )
}
