import { motion } from 'framer-motion';

const ProductSummary = ({ 
    image, 
    name, 
    price, 
    containerStyle = "", 
    nameStyle = "", 
    priceStyle = "",
    hoverStyle = "" 
}) => {
    return (
        <motion.div 
            className={`flex items-center gap-4 p-2 transition-all duration-300 ${containerStyle}`}
            whileHover={hoverStyle}
        >
            {/* Product Thumbnail */}
            <div className="w-16 h-16 flex-shrink-0">
                <img 
                    src={image} 
                    alt={name} 
                    className="w-full h-full object-cover rounded-md"
                />
            </div>

            {/* Product Info */}
            <div className="flex flex-col">
                <h4 className={`${nameStyle}`}>{name}</h4>
                <p className={`${priceStyle}`}>{price}</p>
            </div>
        </motion.div>
    );
};

export default ProductSummary;