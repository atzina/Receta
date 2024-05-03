import './IngredientList.css'
import React from 'react';

function IngredientList (props) {
    //Create the list items using map
    const IngredientListItems = props.ingredients.map((ingredient, index)=>{
        return (
            //return the desired HTML para cada ingrediente
            <li key={index} className={ ingredient.prepared ? 'prepared' : ''}>
                {ingredient.name}
            </li>
        );
    });

    //return the HTML for the component
    // ingredientListItems will be rendered as li elements

    return (
        <ul>
            {IngredientListItems}
        </ul>
    );
}

export default IngredientList;