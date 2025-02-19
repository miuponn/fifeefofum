import React, { useState, useRef, useEffect } from 'react';
import { FiStar, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import StarRating from './ReviewSection/StarRating';
import reviewsData from '../../data/reviews';
import ReviewModal from './ReviewSection/ReviewModal';  
import productsData from '../../data/productsData';

const ProductReviews = ({ productId }) => {
    const [selectedReview, setSelectedReview] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [currentReviewIndex, setCurrentReviewIndex] = useState(0); 
    const reviewsPerPage = 5;
    const productReviews = reviewsData.find(
        (product) => product.productId.toString() === productId
    )?.reviews || [];

    // Get all media from reviews
    const allMedia = productReviews.flatMap(review => 
        review.media.map(media => ({ media, review }))
    );

    // Filter reviews that have media
    const reviewsWithMedia = productReviews.filter(review => review.media?.length > 0);

    const handleReviewSelect = (review) => {
        setSelectedReview(review);
        // Find index of selected review in reviewsWithMedia array
        const index = reviewsWithMedia.findIndex(r => r === review);
        setCurrentReviewIndex(index);
    };

    const ReviewText = ({ text }) => {
        const [isExpanded, setIsExpanded] = useState(false);
        const textRef = useRef();
        const [showButton, setShowButton] = useState(false);

        useEffect(() => {
            if (textRef.current) {
                setShowButton(textRef.current.scrollHeight > 72); // 3 lines * 24px line height
            }
        }, [text]);

        return (
            <div>
                <p
                    ref={textRef}
                    className={`font-poppins text-dark_pink transition-all duration-300 ${
                        !isExpanded ? 'line-clamp-3' : ''
                    }`}
                >
                    {text}
                </p>
                {showButton && (
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="text-button_pink text-sm font-poppins mt-2"
                    >
                        {isExpanded ? 'Show less' : 'Show more'}
                    </button>
                )}
            </div>
        );
    };

    const indexOfLastReview = currentPage * reviewsPerPage;
    const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
    const currentReviews = productReviews.slice(indexOfFirstReview, indexOfLastReview);

    // Find the product data
    const productData = productsData.find(p => p.id === productId);

    return (
        <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-chewie font-semibold text-dark_pink text-center mb-6">
                Customer Reviews
            </h2>
            
            {/* Photos from Reviews Grid */}
            {allMedia.length > 0 && (
                <div className="mb-8">
                    <h3 className="text-sm font-poppins font-medium text-[#E57485] mb-4">
                        Photos from Reviews
                    </h3>
                    <div className="grid grid-cols-auto-fit gap-2" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))' }}>
                        {allMedia.map(({ media, review }, index) => (
                            <button
                                key={index}
                                onClick={() => handleReviewSelect(review)}
                                className="aspect-square rounded-md overflow-hidden hover:opacity-90 transition-opacity"
                            >
                                <img
                                    src={media}
                                    alt={`Review ${index + 1}`}
                                    className="w-full h-full object-cover"
                                />
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {/* Reviews List */}
            <div className="space-y-6">
                {productReviews.length > 0 ? (
                    <>
                        {currentReviews.map((review, index) => (
                            <div key={index} className="border-b border-[#F9E1E1] pb-4">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="flex text-button_pink">
                                        {[...Array(5)].map((_, i) => (
                                            <FiStar key={i} className={`fill-current ${i < review.rating ? 'text-button_pink' : 'text-gray-300'}`} />
                                        ))}
                                    </div>
                                    <span className="text-dark_pink font-poppins text-sm">
                                        {review.username}
                                    </span>
                                    <span className="text-dark_pink text-xs ml-2">
                                        {new Date(review.date).toLocaleDateString()}
                                    </span>
                                </div>
                                
                                <ReviewText text={review.comment} />

                                {review.media.length > 0 && (
                                    <div className="grid grid-cols-auto-fit gap-2 mt-4" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))' }}>
                                        {review.media.map((media, mediaIndex) => (
                                            <button
                                                key={mediaIndex}
                                                onClick={() => handleReviewSelect(review)}
                                                className="aspect-square rounded-md overflow-hidden hover:opacity-90 transition-opacity"
                                            >
                                                <img
                                                    src={media}
                                                    alt={`${review.username}'s review media ${mediaIndex + 1}`}
                                                    className="w-full h-full object-cover"
                                                />
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}

                        {/* Pagination */}
                        <div className="flex justify-center items-center gap-2 mt-8">
                            <button
                                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                                    currentPage === 1 
                                        ? 'bg-[#F9E1E1] text-white cursor-not-allowed' 
                                        : 'bg-button_pink text-white hover:bg-white hover:text-button_pink border border-transparent hover:border-button_pink'
                                }`}
                                disabled={currentPage === 1}
                            >
                                <FiChevronLeft className="w-4 h-4" />
                            </button>

                            {[...Array(Math.ceil(productReviews.length / reviewsPerPage))].map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrentPage(i + 1)}
                                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                                        currentPage === i + 1
                                            ? 'bg-button_pink text-white'
                                            : 'text-button_pink hover:bg-[#F9E1E1] hover:text-white'
                                    }`}
                                >
                                    {i + 1}
                                </button>
                            ))}

                            <button
                                onClick={() => setCurrentPage(p => Math.min(Math.ceil(productReviews.length / reviewsPerPage), p + 1))}
                                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                                    currentPage === Math.ceil(productReviews.length / reviewsPerPage)
                                        ? 'bg-[#F9E1E1] text-white cursor-not-allowed'
                                        : 'bg-button_pink text-white hover:bg-white hover:text-button_pink border border-transparent hover:border-button_pink'
                                }`}
                                disabled={currentPage === Math.ceil(productReviews.length / reviewsPerPage)}
                            >
                                <FiChevronRight className="w-4 h-4" />
                            </button>
                        </div>
                    </>
                ) : (
                    <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between gap-4 md:gap-8">
                        <div className="flex flex-col items-center md:items-start gap-2">
                            <StarRating productId={productId} />
                            <p className="text-dark_pink_secondary font-poppins text-sm">
                                Be the first to write a review
                            </p>
                        </div>
                        <button className="px-6 py-2 bg-button_pink text-white font-poppins rounded-md hover:bg-white hover:text-button_pink border border-transparent hover:border-button_pink transition-all duration-300">
                            Write a review
                        </button>
                    </div>
                )}
            </div>

            <ReviewModal
                review={selectedReview}
                isOpen={!!selectedReview}
                onClose={() => setSelectedReview(null)}
                product={productData}
                allMediaReviews={reviewsWithMedia}
                currentReviewIndex={currentReviewIndex}
                onNavigateReview={(newIndex) => {
                    setCurrentReviewIndex(newIndex);
                    setSelectedReview(reviewsWithMedia[newIndex]);
                }}
            />
        </div>
    );
};

export default ProductReviews;