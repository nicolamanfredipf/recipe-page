
function Instructions() {
    const instructions = [
        {
            title: "Beat the eggs",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat assumenda, fugit eaque neque reiciendis, ratione magni laboriosam minus, deleniti esse consequuntur quos libero quasi! Earum quam quaerat voluptas magnam iure."
        },
        {
            title: "Heat the pan",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat assumenda, fugit eaque neque reiciendis, ratione magni laboriosam minus, deleniti esse consequuntur quos libero quasi! Earum quam quaerat voluptas magnam iure."
        }
    ];

    const space = " ";

    return (
        <section>
            <h2>Instructions</h2>
            <ul className="number-list list-brown">
                {instructions.map((instruction, index) => (
                    <li key={index}>
                        <p><span className="bold">{instruction.title}:</span><span>{space}</span>{instruction.description}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default Instructions;