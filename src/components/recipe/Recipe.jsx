import Ingredients from "../ingredients/Ingredients";
import Instructions from "../instructions/Instructions";
import Nutrition from "../nutrition/Nutrition";
import Preparation from "../preparation/Preparation";

function Recipe() {
    const title = "Simple Omelette Recipe";
    const description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat dolorem numquam dicta officia dignissimos debitis vitae a totam aliquid porro quaerat voluptatem error voluptas iure quo soluta, itaque in aspernatur!";

    return (
        <article>
            <h1>{title}</h1>
            <p>{description}</p>
            <Preparation />
            <Ingredients />
            <hr />
            <Instructions />
            <hr />
            <Nutrition />
        </article>
    );
}

export default Recipe;