import React from 'react';
import './RecipeTitle.css';

// TODO: Create RecipeTitle component
// RecipeTitle acepta un parámetro denominado Props. ESto contendrá automáticamente todos los atributos o propiedades que se pasen al componente cuando se utilice

function RecipeTitle(props) {
    return (
        <section>
            <h2>{props.title}</h2>
            <h3 className={props.feedback.rating <= 3.5 ? 'red' : 'green'}>
                {props.feedback.rating} from {props.feedback.reviews} reviews
            </h3>
        </section>
    )
}

export default RecipeTitle;