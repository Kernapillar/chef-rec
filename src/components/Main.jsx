import React from "react"

export default function Main(){

    const ingredients = ["chicken", "onion", "bell pepper", "garlic", "Steamed Rice" ]
    const result = React.useState(ingredients)

    const ingredientsList = ingredients.map(
        (ing, i) => <li className="ingredients-list-item" key={i}>{ing}</li>
    )

    const logging = ()=>{
        console.log("Ive been clicked")
    }

    function handleSubmit(event) {
        event.preventDefault()
        console.log("Form Submitted")
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("ingredient")
        ingredients.push(newIngredient)
        console.log(ingredients)
    }

    return (
        <main>
            <form className="input-container" onSubmit={handleSubmit}>
                <input type="text" placeholder="e.g garlic" aria-label="Add ingredient" name="ingredient"/>
                <button onClick={logging}>+ Add ingredient</button>
            </form>
            
            <ul className="ingredients-list">
                {ingredientsList}
            </ul>
        </main>
    )
}