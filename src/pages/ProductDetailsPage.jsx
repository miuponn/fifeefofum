import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductGallery from '../components/Product/ProductGallery';
import ProductSelection from '../components/Product/ProductSelection';
import ProductDescription from '../components/Product/ProductDescription';
import ProductReviews from '../components/Product/ProductReviews';
import RecommendedItems from '../components/Product/RecommendedItems';
import productsData from '../data/productsData';

const ProductDetailsPage = () => {
    const { id } = useParams();
    const { state } = useLocation();
    const product = productsData.find(p => p.id.toString() === id);

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            
            <main className="flex-grow">
                {/* Product Details Section */}
                <section className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-8 md:py-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                        <ProductGallery images={product.images} />
                        <ProductSelection 
                            name={product.name}
                            price={product.price}
                            variants={product.styles}
                            fromPath={state?.from}
                        />
                    </div>
                </section>

                {/* Description Section */}
                <section className="bg-bg_pink w-full py-12">
                    <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
                        <ProductDescription description={product.description} />
                    </div>
                </section>

                {/* Reviews Section */}
                <section className="w-full py-12">
                    <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
                        <ProductReviews productId={product.id} />
                    </div>
                </section>

                {/* Recommended Products Section */}
                <section className="bg-bg_pink w-full py-12">
                    <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
                        <RecommendedItems />
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default ProductDetailsPage;