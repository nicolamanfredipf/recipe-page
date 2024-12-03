import Recipe from "../components/recipe/Recipe";

function Page({imgUrl, imgAlt}) {

    return (
        <main>
            <img src={imgUrl} alt={imgAlt} style={{borderRadius: "15px"}}/>
            <Recipe />
        </main>
    );
}

export default Page;