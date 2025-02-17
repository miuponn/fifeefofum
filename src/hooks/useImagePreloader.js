import { useEffect, useState } from "react";

const useImagePreloader = (imageUrls) => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        if (!imageUrls || imageUrls.length === 0) {
            setLoaded(true); // No images to load, consider as "loaded"
            return;
        }

        let isMounted = true;
        const controller = new AbortController();

        const preloadImages = async () => {
            const promises = imageUrls.map((url) => {
                return new Promise((resolve, reject) => {
                    const img = new Image();
                    img.src = url;
                    img.onload = resolve;
                    img.onerror = (err) => {
                        console.error(`Failed to preload image: ${url}`, err);
                        reject(err);
                    };
                });
            });

            try {
                await Promise.all(promises);
                if (isMounted) {
                    setLoaded(true);
                }
            } catch (error) {
                if (isMounted) setLoaded(true); // Proceed even if some images fail
            }
        };

        preloadImages();

        return () => {
            isMounted = false;
            controller.abort(); // Clean up on unmount
        };
    }, [imageUrls]); // Runs only when imageUrls changes

    return loaded;
};

export default useImagePreloader;