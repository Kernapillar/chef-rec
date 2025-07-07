import React from "react"

export default function Main(){

    const [ingredients, setIngredients]= React.useState([])

    const ingredientsList = ingredients.map(
        (ing, i) => <li className="ingredients-list-item" key={i}>{ing}</li>
    )

    function handleSubmit(event) {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("ingredient")
        if (newIngredient.trim() != "") {
            setIngredients(prevIngredient => [...prevIngredient, newIngredient])
        } 
        event.target.reset()
    }

    return (
        <main>
            <form className="input-container" onSubmit={handleSubmit}>
                <input type="text" placeholder="e.g garlic" aria-label="Add ingredient" name="ingredient"/>
                <button type="submit">+ Add ingredient</button>
            </form>
            
            <ul className="ingredients-list">
                {ingredientsList}
            </ul>
        </main>
    )
}