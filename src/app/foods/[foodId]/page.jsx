
const FoodDetailPage = async({params}) => {
    const {foodId} = await params;
    
    return (
        <div>
            <h2>Show Details of Food: {foodId}</h2>
            
        </div>
    );
};

export default FoodDetailPage;