import Image from "next/image";
import Link from "next/link";

const FoodDetailPage = async ({ params }) => {
    const { foodId } = await params;
    const res = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/foods/${foodId}`);
    const data = await res.json();
    const food = data.data;

    const { id, dish_name, image_link, main_ingredients, approximate_nutrition_per_serving: nutritions } = food;
    console.log(food)

    return (
        <div>
            <h2>Show Details of Food: {foodId}</h2>
            <h3 className="text-3xl">{dish_name}</h3>
            <Image src={image_link} alt={dish_name} height={200} width={200}></Image>

            <h2 className="text-2xl">Ingredients: </h2>
            <ul className="list-disc">
                {
                    main_ingredients.map((ingredient, ind) => <li key={ind}>{ingredient}</li>)
                }
            </ul>

            <h2 className="text-2xl mt-5">Nutrition and Calories</h2>
            <ul className="list-decimal">
                {
                    Object.keys(nutritions).map(key => <div key={key}>
                        <li>{key} : {nutritions[key]}</li>
                    </div>)
                }

            </ul>

            <Link href={'/foods'}><button className="btn btn-primary">Go Back</button></Link>

        </div>
    );
};

export default FoodDetailPage;