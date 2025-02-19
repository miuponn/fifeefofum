import { FiStar } from 'react-icons/fi';
import reviewsData from '../../../data/reviews';

const StarRating = ({ productId }) => {
    // Get reviews for this product
    const productReviews = reviewsData.find(
        (product) => product.productId === productId
    )?.reviews || [];

    // Calculate average rating
    const averageRating = productReviews.length 
        ? Math.round(productReviews.reduce((acc, review) => acc + review.rating, 0) / productReviews.length * 2) / 2
        : 0;

    return (
        <div className="flex items-center gap-2">
            <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                    <FiStar
                        key={star}
                        className={`w-4 h-4 ${
                            star <= averageRating 
                                ? 'text-button_pink fill-button_pink' 
                                : 'text-button_pink'
                        }`}
                    />
                ))}
            </div>
            {productReviews.length > 0 && (
                <span className="text-xs font-poppins text-button_pink">
                    ({productReviews.length})
                </span>
            )}
        </div>
    );
};

export default StarRating;