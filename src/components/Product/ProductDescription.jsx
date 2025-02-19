const ProductDescription = ({ description }) => {
    return (
        <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-chewie text-dark_pink text-center mb-6">
                Description
            </h2>
            <div className="prose prose-pink mx-auto text-dark_pink_secondary font-poppins">
                {description}
            </div>
        </div>
    );
};

export default ProductDescription;