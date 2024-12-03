
function Nutrition() {
    const info = "The table below shows nutritional values per serving without the additional fillings.";
    const nutrition = {
        calories: 277,
        carbs: 0,
        protein: 20,
        fat: 22,
    }

    return (
        <section>
            <h2>Nutrition</h2>
            <p>{info}</p>
            <table style={{width: "100%", textAlign: "center"}}>
                <tbody>
                    <tr>
                        <th style={{width: "50%"}}>Calories</th>
                        <td style={{width: "50%"}}>{nutrition.calories}kcal</td>
                    </tr>
                    <tr>
                        <th style={{width: "50%"}}>Carbs</th>
                        <td style={{width: "50%"}}>{nutrition.carbs}g</td>
                    </tr>
                    <tr>
                        <th style={{width: "50%"}}>Protein</th>
                        <td style={{width: "50%"}}>{nutrition.protein}g</td>
                    </tr>
                    <tr>
                        <th style={{width: "50%"}}>Fat</th>
                        <td style={{width: "50%"}}>{nutrition.fat}g</td>
                    </tr>
                </tbody>
            </table>
        </section>
    );
}

export default Nutrition;