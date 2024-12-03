
function Ingredients() {
    const ingredients = ["2-3 larg egs", "salt, to taste", "pepper, to taste", "1 tablespoon of butter or oil", "Optional fillings: chese, diced, vegetables, cooked meats, herbs"];

    return (
        <section>
            <h2>Ingredients</h2>
            <ul className="list-brown">
                {ingredients.map((ingredient, index) => (
                    <li key={index}>
                        <p>{ingredient}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default Ingredients;