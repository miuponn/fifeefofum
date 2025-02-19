const ProductDescription = () => {
    return (
        <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-chewie text-dark_pink text-center mb-6">
                Description
            </h2>
            <div className="prose prose-pink mx-auto text-dark_pink_secondary font-poppins">
                <p className="mb-4">
                    Product description goes here with detailed information about the item.
                </p>
                <ul className="list-disc pl-5 space-y-2">
                    <li>Feature point 1</li>
                    <li>Feature point 2</li>
                    <li>Feature point 3</li>
                </ul>
            </div>
        </div>
    );
};

export default ProductDescription;