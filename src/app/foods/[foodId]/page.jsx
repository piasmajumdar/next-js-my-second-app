import Image from "next/image";
import Link from "next/link";

const FoodDetailPage = async({params}) => {
    const {foodId} = await params;
    const res = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/foods/${foodId}`);
    const data = await res.json();
    const food = data.data;

    const {id, dish_name, image_link} = food;
    // console.log(food)
    
    return (
        <div>
            <h2>Show Details of Food: {foodId}</h2>
            <h3 className="text-3xl">{dish_name}</h3>
            <Image src={image_link} alt={dish_name} height={200} width={200}></Image>

            <Link href={'/foods'}><button className="btn btn-primary">Go Back</button></Link>
            
        </div>
    );
};

export default FoodDetailPage;