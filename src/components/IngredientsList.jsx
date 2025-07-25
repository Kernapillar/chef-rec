import React from "react";

export default function IngredientsList(props) {
    const ingredientsList = props.ingredients.map((ing, i) => 
        <li className="ingredients-list-item" key={i}>{ing}</li>
    )
    return (
        <ul className="ingredients-list">
            {props.ingredients.length > 0 && <h2>Ingredients On Hand:</h2>}
            {props.ingredients.length === 0 ? <h2>Lets Add some Ingredients!</h2> : ingredientsList }
        </ul>
    )
}