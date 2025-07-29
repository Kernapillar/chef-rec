import React from "react"
import Recipe from "./Recipe";
import IngredientsList from "./IngredientsList";

export default function Main(){

    const [ingredients, setIngredients]= React.useState([]);
    const [recipeShown, setRecipeShown] = React.useState(false);

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        if (newIngredient.trim() != "") {
            setIngredients(prevIngredient => [...prevIngredient, newIngredient])
        }
    }

    function showRecipe() {
        setRecipeShown(prevState => !prevState)
    }

    const testRecipe = <Recipe ingredients={ingredients} />

    return (
        <main>
            <form className="input-container" action={addIngredient}>
                <input type="text" placeholder="e.g garlic" aria-label="Add ingredient" name="ingredient"/>
                <button type="submit">+ Add ingredient</button>
            </form>

            <IngredientsList ingredients={ingredients} />

            { ingredients.length >= 4 && <div className="get-recipe-container">
                    <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button onClick={showRecipe}>Get a recipe</button>
                </div> }
            {recipeShown && testRecipe }
        </main>
    )
}


