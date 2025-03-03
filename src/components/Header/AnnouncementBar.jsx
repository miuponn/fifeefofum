const AnnouncementBar = () => {
    return (
        <div className="bg-accent_pink w-full text-center text-white py-1">
            <p className="text-xs sm:text-xs md:text-sm lg:text-base xl:text-lg flex items-center justify-center gap-2">
                <span className="text-base">✿</span>
                Fun message or important notification goes here!
                <span className="text-base">✿</span>
            </p>
        </div>
    );
};

export default AnnouncementBar;