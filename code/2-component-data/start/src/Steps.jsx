import React from "react";

function Steps (props) {

    const stepsRecipe= props.steps.map(( step, index )=>{
        return (
            <li key={index}>
                {step.name}
            </li>
        );
    });

    return (
        <ol>
           {stepsRecipe} 
        </ol>
    )
}

export default Steps;