

export default function Main(){

    const data = ["chicken", "onion", "bell pepper", "garlic", "Steamed Rice" ]

    const ingredientsList = data.map(
        (ing, i) => <li className="ingredients-list-item" key={i}>{ing}</li>
    )

    const logging = ()=>{
        console.log("Ive been clicked")
    }

    return (
        <main>
            <form className="input-container" >
                <input type="text" placeholder="e.g garlic" aria-label="Add ingredient" />
                <button onClick={logging}>+ Add ingredient</button>
            </form>
            
            <ul className="ingredients-list">
                {ingredientsList}
            </ul>
        </main>
    )
}