import './index.css'
import React, { useEffect, useState } from 'react';
import RecipeTitle from './RecipeTitle'
import IngredientList from './IngredientList'

function App() {
    const initialRecipe = {
        title: 'Mashed potatoes',
        feedback: {
            rating: 4.8,
            reviews: 20
        },
        ingredients: [
            { name: '3 potatoes, cut into 1/2" pieces', prepared: false },
            { name: '4 Tbsp butter', prepared: false },
            { name: '1/8 cup heavy cream', prepared: false },
            { name: 'Salt', prepared: true },
            { name: 'Pepper', prepared: true },
        ]
    };

    // TODO: Create recipe state
    // recipe es: el objeto con estado
    // La función setRecipe se utilizará para reemplazar recipe por cualquier versión nueva

    const [ recipe, setRecipe ] = useState(initialRecipe);

    // TODO: Add new state property

   const [ prepared, setPrepared ]= useState(false);

    // TODO: Create ingredientClick event listener
    // La lógica se inicia mediante la creación de una copia de recipe con el uso del operador spread. Después, recuperamos el elemento ingredient actualizado mediante el uso del elemento index. Invertimos el valor de prepared. Por último, reemplazamos el objeto recipe en el estado mediante el uso de setRecipe.

    function ingredientClick(index) {
        const updatedRecipe = { ... recipe };
        updatedRecipe.ingredients[index].prepared = !updatedRecipe.ingredients[index].prepared;
        setRecipe(updatedRecipe);
    }

    // TODO: Add the effect hook
    // El código usa setPrepared para actualizar prepared. Usa el método every, que devuelve un valor booleano basado en cada elemento que coincida con los criterios especificados. En nuestro caso, vamos a comprobar si todos los elementos están preparados. En caso contrario, el método devuelve false. El segundo parámetro en useEffect está establecido en [recipe]. Esta configuración proporciona la dependencia para asegurarse de que nuestro código se ejecuta solo cuando el objeto recipe cambia.

   
useEffect(() => {
    setPrepared(recipe.ingredients.every(i => i.prepared));
}, [recipe]);

  

    return (
        <article>
            <h1>Recipe Manager</h1>

            {/* TODO: Pass recipe metadata to RecipeTitle */}

            <RecipeTitle title={recipe.title} feedback={recipe.feedback} />

            {/* TODO: Pass ingredients and event listener to IngredientList */}

            <IngredientList ingredients={recipe.ingredients} onClick = {ingredientClick} />

            {/* TODO: Add the prep work display */}
            { prepared ? <h2>Trabajo de preparación terminado!</h2> : <h2>Siga picando</h2>}
        </article>
    )
}

export default App;
