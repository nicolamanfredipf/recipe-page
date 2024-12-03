import Recipe from "../components/recipe/Recipe";

function Page() {
    const omelette = 'src/assets/image-omelette.jpeg';

    return (
        <main>
            <img src={omelette} alt="image-omelette.jpeg" />
            <Recipe />
        </main>
    );
}

export default Page;