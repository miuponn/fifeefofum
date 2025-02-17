const AnnouncementBar = () => {
    return (
        <div className="bg-accent_pink w-full text-center text-white py-2">
            <p className="text-[0.875rem] md:text-[1rem] lg:text-[1.125rem] xl:text-[1.25rem] flex items-center justify-center gap-2">
                <span className="text-lg">✿</span>
                Fun message or important notification goes here!
                <span className="text-lg">✿</span>
            </p>
        </div>
    );
};

export default AnnouncementBar;