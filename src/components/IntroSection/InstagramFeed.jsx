import React from 'react';
import useImagePreloader from '../../hooks/useImagePreloader';
// Import images from src/assets
import instagram1 from '../../assets/instagram1.png';
import instagram2 from '../../assets/instagram2.png';
import instagram3 from '../../assets/instagram3.png';
import instagram4 from '../../assets/instagram4.png';
import instagram5 from '../../assets/instagram5.png';
import instagram6 from '../../assets/instagram6.png';

const instagramPosts = [
    {
        id: "post1",
        image: instagram1,
        link: "https://www.instagram.com/p/DC_4kumxyF4/",
        type: "video",
    },
    {
        id: "post2",
        image: instagram2,
        link: "https://www.instagram.com/p/C4KBpKhuI3d/",
        type: "video",
    },
    {
        id: "post3",
        image: instagram3,
        link: "https://www.instagram.com/p/C3b0s30ug-m/?img_index=1",
        type: "image",
    },
    {
        id: "post4",
        image: instagram4,
        link: "https://www.instagram.com/p/C3EMDccMZTI/?img_index=1",
        type: "image",
    },
    {
        id: "post5",
        image: instagram5,
        link: "https://www.instagram.com/p/C2VoobfOz2Y/",
        type: "video",
    },
    {
        id: "post6",
        image: instagram6,
        link: "https://www.instagram.com/p/C0m_dL9uapH/",
        type: "video",
    },
];

const InstagramEmbedGrid = () => {
    const imageUrls = instagramPosts.map(post => post.image);
    const imagesLoaded = useImagePreloader(imageUrls);

    return (
        <section className="relative py-12 px-4 md:px-12">
            {/* Header */}
            <h2 className="text-dark_pink text-2xl md:text-3xl font-urbanist font-semibold mb-6">
                Instagram
            </h2>
    
            {/* Grid Layout (No Background) */}
            <div className="grid grid-cols-2 md:grid-cols-3 md:gap-4">
                {instagramPosts.map((post) => (
                    <a
                        key={post.id}
                        href={post.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative group overflow-hidden w-full aspect-square"
                    >
                        {/* Post Image */}
                        {imagesLoaded ? (
                            <img
                                src={post.image}
                                alt="Instagram Post"
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                        ) : (
                            <div className="w-full h-full bg-gray-200 animate-pulse"></div>
                        )}
    
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            {post.type === "video" ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-10 w-10 text-white"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M14.752 11.168l-6.704 3.84A1 1 0 017 14.144V9.856a1 1 0 011.048-.992l6.704 3.84a1 1 0 010 1.664z"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-10 w-10 text-white"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4a2 2 0 110 4 2 2 0 010-4zm1 8H11v-1h2v1zm0 2H11v-1h2v1z"
                                    />
                                </svg>
                            )}
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default InstagramEmbedGrid;

