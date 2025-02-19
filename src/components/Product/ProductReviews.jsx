import React from 'react';
import { FiStar } from 'react-icons/fi';
import reviewsData from '../../data/reviews';

const ProductReviews = ({ productId }) => {
    const productReviews = reviewsData.find((product) => product.productId === productId)?.reviews || [];

    return (
        <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-chewie text-dark_pink text-center mb-6">
                Customer Reviews
            </h2>
            
            {/* Reviews List */}
            <div className="space-y-6">
                {productReviews.length > 0 ? (
                    productReviews.map((review, index) => (
                        <div key={index} className="border-b border-pink pb-4">
                            <div className="flex items-center gap-2 mb-2">
                                <div className="flex text-button_pink">
                                    {[...Array(5)].map((_, i) => (
                                        <FiStar key={i} className={`fill-current ${i < review.rating ? 'text-button_pink' : 'text-gray-300'}`} />
                                    ))}
                                </div>
                                <span className="text-dark_pink_secondary font-poppins text-sm">
                                    {review.username}
                                </span>
                                <span className="text-gray-500 text-xs ml-2">
                                    {new Date(review.date).toLocaleDateString()}
                                </span>
                            </div>
                            <p className="text-dark_pink_secondary font-poppins mb-2">
                                {review.comment}
                            </p>
                            {review.media.length > 0 && (
                                <div className="grid grid-cols-2 gap-2">
                                    {review.media.map((media, mediaIndex) => (
                                        <img
                                            key={mediaIndex}
                                            src={media}
                                            alt={`${review.username}'s review media ${mediaIndex + 1}`}
                                            className="w-full h-auto rounded-md"
                                        />
                                    ))}
                                </div>
                            )}
                        </div>
                    ))
                ) : (
                    <p className="text-dark_pink_secondary font-poppins text-center">
                        No reviews yet.
                    </p>
                )}
            </div>
        </div>
    );
};

export default ProductReviews;