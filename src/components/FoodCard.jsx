import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const FoodCard = ({ food }) => {
    const { id, dish_name, image_link, category, price } = food;
    return (
        <div>
            <div className="card bg-base-100 shadow-sm">
                <figure>
                    <Image
                        src={image_link}
                        alt={dish_name}
                        height={200} width={200} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {dish_name}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p><small>Category: {category}</small></p>
                    <p>Price: BDT {price}</p>
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Add to Cart</button>
                        <Link href={`/foods/${id}`}>
                            <button className="btn btn-ghost">Show Details</button>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default FoodCard;