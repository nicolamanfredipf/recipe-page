import "./Preparation.css"

function Preparation() {
    const preparation = {
        total: "Approx 10 minutes of all",
        working: "5 mins",
        cooking: "5 mins"
    }
    const space = " ";




    return (
        <section className="bg-rose-50 default-padding" style={{ margin: "35px 0" }}>
            <h3>Preparation time</h3>
            <ul className="list-rose">
                <li>
                    <p><span className="bold">Total:</span><span>{space}</span>{preparation.total}</p>
                </li>
                <li>
                    <p><span className="bold">Preparation:</span><span>{space}</span>{preparation.working}</p>
                </li>
                <li>
                    <p><span className="bold">Cooking:</span><span>{space}</span>{preparation.cooking}</p>
                </li>
            </ul>
        </section>
    );
}

export default Preparation;