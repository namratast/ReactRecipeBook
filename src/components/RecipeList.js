
import React from 'react';

function RecipeLists({ data }) {
  return (
    <div className='flexBox'>
      {data?.map((item, index) => (
        <div key={index} className='card'>
          <img src={item.recipe.image} alt={item.recipe.label} />
          <div className='card-body'>
            <h3 className='recipe-title'>{item.recipe.label}</h3>
            <p className='recipe-source'>{item.recipe.source}</p>
            <a href={item.recipe.url} target='_blank' rel="noreferrer">View Recipe</a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RecipeLists;