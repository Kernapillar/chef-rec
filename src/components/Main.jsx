import React from "react"

export default function Main(){

    const [ingredients, setIngredients]= React.useState([])

    const ingredientsList = ingredients.map(
        (ing, i) => <li className="ingredients-list-item" key={i}>{ing}</li>
    )

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        if (newIngredient.trim() != "") {
            setIngredients(prevIngredient => [...prevIngredient, newIngredient])
        }
    }


    return (
        <main>
            <form className="input-container" action={addIngredient}>
                <input type="text" placeholder="e.g garlic" aria-label="Add ingredient" name="ingredient"/>
                <button type="submit">+ Add ingredient</button>
            </form>
            
            <ul className="ingredients-list">
                {ingredients.length > 0 && <h2>Ingredients On Hand:</h2>}
                {ingredients.length === 0 ? <h2>Lets Add some Ingredients!</h2> : ingredientsList }
            </ul>
            { ingredients.length >= 4 && <div className="get-recipe-container">
                    <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button>Get a recipe</button>
                </div> }
        </main>
    )
}