import "./Preparation.css"

function Preparation() {
    const total = "Approx 10 minutes of all";
    const preparation = "5 mins";
    const cooking = "5 mins";
    const space = " ";


    return (
        <section className="bg-rose-50 default-padding">
            <h3>Preparation time</h3>
            <ul className="list-rose">
                <li>
                    <p><span className="bold">Total:</span><span>{space}</span>{total}</p>
                </li>
                <li>
                    <p><span className="bold">Preparation:</span><span>{space}</span>{preparation}</p>
                </li>
                <li>
                    <p><span className="bold">Cooking:</span><span>{space}</span>{cooking}</p>
                </li>
            </ul>
        </section>
    );
}

export default Preparation;